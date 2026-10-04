import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  Dumbbell,
  Compass,
  Trophy,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  LogIn,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const MemberPortal: React.FC = () => {
  const { user, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-24 px-4 text-center">
          <p className="text-slate-400">Loading Member Profile...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto py-24 px-4 text-center max-w-md">
          <Card className="border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <User className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Member Sign In Required
            </h2>
            <p className="text-xs text-slate-300 mb-6">
              Sign in with your Google account to access your Boss of AI Brain GYM stats, Srujana stage progress, and submitted probes.
            </p>
            <Button onClick={() => signInWithGoogle()} variant="gym" className="w-full gap-2">
              <LogIn className="h-4 w-4" />
              <span>Sign In with Google</span>
            </Button>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 max-w-5xl">
        {/* Profile Header */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar className="h-20 w-20 ring-4 ring-cyan-500/30">
            <AvatarImage src={user.avatar || undefined} alt={user.name || "Member"} />
            <AvatarFallback className="text-2xl font-bold">
              {(user.name || "U").charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {user.name}
              </h1>
              <Badge variant="gym" className="text-xs uppercase font-mono">
                {user.role}
              </Badge>
              <Badge variant="stage2" className="text-xs">
                {user.stage}
              </Badge>
            </div>
            <p className="text-xs text-slate-400 font-mono">{user.email}</p>
            <p className="text-xs text-slate-300">
              Institution / Hub: <strong className="text-white">{user.institution || "Brain GYM Academic Node"}</strong>
            </p>
          </div>

          <div className="bg-slate-950/80 rounded-xl border border-white/10 p-4 text-center min-w-[140px]">
            <div className="text-xs text-slate-400 font-semibold mb-1">Brain GYM Score</div>
            <div className="font-heading text-2xl font-black text-cyan-400">{user.points} pts</div>
            <div className="text-[10px] text-emerald-400 font-mono mt-1">Level: {user.badge}</div>
          </div>
        </div>

        {/* 3 Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="border border-white/10 bg-slate-900/50 p-6">
            <Dumbbell className="h-6 w-6 text-cyan-400 mb-3" />
            <h3 className="font-heading font-bold text-white text-base mb-1">4 C Workout Vault</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Complete daily critical thinking audits and AI multi-agent orchestration challenges.
            </p>
            <Link to="/#brain-gym">
              <Button size="sm" variant="outline" className="text-xs w-full">
                View GYM Workouts →
              </Button>
            </Link>
          </Card>

          <Card className="border border-white/10 bg-slate-900/50 p-6">
            <Sparkles className="h-6 w-6 text-indigo-400 mb-3" />
            <h3 className="font-heading font-bold text-white text-base mb-1">Submit R&D Probe</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Submit your software deliverable, capstone paper, or patentable IP for SMI review.
            </p>
            <Link to="/#solutions">
              <Button size="sm" variant="gym" className="text-xs w-full">
                Submit Probe →
              </Button>
            </Link>
          </Card>

          <Card className="border border-white/10 bg-slate-900/50 p-6">
            <Trophy className="h-6 w-6 text-amber-400 mb-3" />
            <h3 className="font-heading font-bold text-white text-base mb-1">Leaderboard Rank</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Check individual student velocity and academic hub rankings across the studio.
            </p>
            <Link to="/#leaderboard">
              <Button size="sm" variant="secondary" className="text-xs w-full">
                View Leaderboard →
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
