import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Compass,
  Trophy,
  Users,
  BookOpen,
  Sparkles,
  LogIn,
  LogOut,
  User,
  ShieldCheck,
  Github,
  Menu,
  X,
  FolderGit2,
  Layers,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export const Header: React.FC = () => {
  const { user, signInWithGoogle, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Cascading Theory", href: "/cascading-theory", icon: Layers, internal: true },
    { label: "T.R.A.C.K.", href: "/#track", icon: Sparkles, highlight: true },
    { label: "Projects", href: "/#projects", icon: FolderGit2 },
    { label: "Brain GYM", href: "/#brain-gym", icon: Dumbbell },
    { label: "Srujana Pathway", href: "/#pathway", icon: Compass },
    { label: "Solutions & IP", href: "/#solutions", icon: Sparkles },
    { label: "Leaderboard", href: "/#leaderboard", icon: Trophy },
    { label: "Wiki", href: "https://github.com/sanchitnis/bossofai/blob/main/wiki/index.md", icon: BookOpen, external: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <span className="font-heading font-black text-white text-base">B</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-bold tracking-tight text-white">Boss of</span>
            <span className="font-heading text-xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-400/50 decoration-2 underline-offset-4">
              AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const className = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              item.highlight
                ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20"
                : item.internal && !item.highlight
                ? "text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`;
            if (item.internal) {
              return (
                <Link key={item.label} to={item.href} className={className}>
                  <Icon className={`h-4 w-4 ${item.highlight ? "text-cyan-400" : "text-indigo-400"}`} />
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={className}
              >
                <Icon className={`h-4 w-4 ${item.highlight ? "text-cyan-400" : "text-slate-400"}`} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/sanchitnis/bossofai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {/* User Auth state */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-indigo-500/40 p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar || undefined} alt={user.name || "User"} />
                    <AvatarFallback>{(user.name || "U").charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold leading-none text-white">{user.name}</p>
                    <p className="text-xs leading-none text-slate-400 truncate">{user.email}</p>
                    <div className="flex items-center gap-1.5 pt-1.5">
                      <Badge variant="stage1" className="text-[10px] py-0">{user.stage}</Badge>
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold">{user.points} pts</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/portal" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4 text-indigo-400" />
                    <span>Member Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert("Role: " + user.role)}>
                  <ShieldCheck className="mr-2 h-4 w-4 text-cyan-400" />
                  <span>Role: {user.role}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="cursor-pointer text-rose-400 focus:text-rose-300">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => signInWithGoogle()}
              size="sm"
              variant="gym"
              className="gap-2 text-xs font-semibold"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Google Sign In</span>
            </Button>
          )}

          <a href="#contact">
            <Button size="sm" variant="default" className="text-xs">
              Connect / Join
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          {user ? (
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar || undefined} alt={user.name || "User"} />
              <AvatarFallback>{(user.name || "U").charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          ) : (
            <Button onClick={() => signInWithGoogle()} size="sm" variant="gym" className="h-8 px-2 text-xs">
              Sign In
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-slate-950/95 px-4 py-4 space-y-2 backdrop-blur-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
            >
              <item.icon className="h-4 w-4 text-cyan-400" />
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a
              href="https://github.com/sanchitnis/bossofai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-white/5 rounded-lg text-xs text-slate-300 border border-white/10"
            >
              GitHub Repo
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 bg-indigo-600 rounded-lg text-xs text-white font-medium"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
