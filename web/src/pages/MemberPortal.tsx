import React from "react";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const MemberPortal: React.FC = () => {
  const { user, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <Layout>
        <p className="container mx-auto px-4 py-24 text-center text-muted-foreground">Loading your profile…</p>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto max-w-md px-4 py-20 text-center">
          <div className="brut rounded-2xl p-8">
            <h1 className="font-heading text-3xl font-extrabold">Sign in</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in with Google to see your member profile.</p>
            <Button onClick={() => signInWithGoogle()} variant="accent" className="mt-6 w-full">
              <LogIn className="h-4 w-4" /> Sign in with Google
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="brut flex flex-col items-center gap-5 rounded-2xl p-6 sm:flex-row sm:items-start sm:p-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar || undefined} alt={user.name || "Member"} />
            <AvatarFallback className="text-2xl font-bold">{(user.name || "U").charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h1 className="font-heading text-3xl font-extrabold">{user.name}</h1>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{user.email}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Badge variant="accent">{user.role}</Badge>
              <Badge variant="outline">{user.stage}</Badge>
            </div>
          </div>
        </div>
        <div className="brut-sm mt-8 rounded-xl border-dashed p-6">
          <h2 className="font-heading text-xl font-bold">Your portfolio is coming</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Public portfolios, contribution records and the leaderboard are being built. Meanwhile, browse{" "}
            <Link to="/ideas" className="font-semibold underline">open ideas</Link> and pick one to take on.
          </p>
        </div>
      </div>
    </Layout>
  );
};
