import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export const AuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      navigate("/", { replace: true });
      return;
    }

    let handled = false;
    const handleRedirect = () => {
      if (handled) return;
      handled = true;
      const redirect = sessionStorage.getItem("auth_redirect") || "/portal";
      sessionStorage.removeItem("auth_redirect");
      navigate(redirect, { replace: true });
    };

    // Check immediate session if already resolved
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        handleRedirect();
      }
    });

    // Listen for auth state change in case code exchange completes asynchronously
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        handleRedirect();
      }
    });

    // Fallback timer if authentication fails or is cancelled
    const timeout = setTimeout(() => {
      if (!handled) {
        navigate("/", { replace: true });
      }
    }, 5000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center text-slate-100 space-y-4">
      <Loader2 className="h-8 w-8 text-cyan-400 animate-spin" />
      <p className="text-sm font-medium text-slate-300">
        Authenticating with Google OAuth...
      </p>
    </div>
  );
};
