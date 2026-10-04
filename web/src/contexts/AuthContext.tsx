import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { DBUser, UserRole } from "@/types/database";

interface AuthContextType {
  session: Session | null;
  user: DBUser | null;
  role: UserRole | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  role: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<DBUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOrCreateUser = async (sess: Session, retries = 2) => {
    if (!isSupabaseConfigured()) {
      // Mock local fallback user if Supabase env vars not configured yet
      setUser({
        id: sess.user.id,
        email: sess.user.email ?? "member@bossofai.org",
        name: sess.user.user_metadata?.full_name ?? "Boss of AI Member",
        role: "student",
        institution: "Brain GYM Academic Node",
        avatar: sess.user.user_metadata?.avatar_url ?? null,
        points: 100,
        stage: "Stage 1",
        badge: "Brain GYM Active",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      return;
    }

    for (let i = 0; i < retries; i++) {
      try {
        const { data: existing, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", sess.user.id)
          .single();

        if (existing && !error) {
          setUser(existing as DBUser);
          return;
        }

        if (i === 0) {
          await supabase.from("users").insert({
            id: sess.user.id,
            email: sess.user.email ?? "",
            name: sess.user.user_metadata?.full_name ?? sess.user.email ?? "Boss of AI Member",
            role: "student",
            avatar: sess.user.user_metadata?.avatar_url ?? null,
            points: 50,
            stage: "Stage 1",
            badge: "Brain GYM Cadet",
          });
        }
      } catch (err) {
        console.warn("User profile fetch retry:", err);
      }

      await new Promise((resolve) => setTimeout(resolve, 800));
    }
  };

  const refreshProfile = async () => {
    if (!session || !isSupabaseConfigured()) return;
    try {
      const { data } = await supabase.from("users").select("*").eq("id", session.user.id).single();
      if (data) setUser(data as DBUser);
    } catch (err) {
      console.error("Failed to refresh profile:", err);
    }
  };

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      if (sess) {
        fetchOrCreateUser(sess).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, sess) => {
      setSession(sess);
      if (sess) {
        await fetchOrCreateUser(sess);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    sessionStorage.setItem("auth_redirect", window.location.pathname);

    if (!isSupabaseConfigured()) {
      // Demo simulated login when in local preview mode
      const mockSession = {
        user: {
          id: "demo-user-123",
          email: "demo.student@bossofai.org",
          user_metadata: { full_name: "Demo Student (HEITL)", avatar_url: null },
        },
      } as unknown as Session;
      setSession(mockSession);
      fetchOrCreateUser(mockSession);
      return;
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Google sign in error:", error.message);
      throw error;
    }
  };

  const signOut = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        role: user?.role ?? null,
        loading,
        signInWithGoogle,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
