import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ChevronDown, LogIn, LogOut, Menu, Moon, Sun, User, X } from "lucide-react";
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
import { DepthToggle } from "@/components/site/Depth";

const roleLinks = [
  { label: "Students", to: "/students" },
  { label: "Faculty", to: "/faculty" },
  { label: "Institutions", to: "/institutions" },
  { label: "Practitioners", to: "/practitioners" },
  { label: "Teachers", to: "/teachers" },
  { label: "AI agents", to: "/agents" },
];

const moreLinks = [
  { label: "Quests", to: "/quests" },
  { label: "Toolkit", to: "/toolkit" },
  { label: "AI Hub", to: "/aihub/" },
  { label: "Study guide", to: "/learn" },
  { label: "Open ideas", to: "/ideas" },
  { label: "T.R.A.C.K. framework", to: "/framework" },
  { label: "How we teach", to: "/pedagogy" },
  { label: "Safety", to: "/safety" },
  { label: "Evidence", to: "/evidence" },
  { label: "Leaderboard", to: "/leaderboard" },
];

const Logo: React.FC = () => (
  <Link to="/" className="group flex items-center gap-2" aria-label="Boss of AI home">
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
      <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" />
      <circle cx="20" cy="20" r="8" fill="hsl(var(--accent))" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="14" r="3.5" fill="currentColor" className="origin-center transition-transform group-hover:translate-x-0.5" />
    </svg>
    <span className="whitespace-nowrap font-heading text-xl font-extrabold tracking-tight">
      Boss of <span className="mark-lime">AI</span>
    </span>
  </Link>
);

export const Header: React.FC = () => {
  const { user, signInWithGoogle, signOut } = useAuth();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [location.pathname]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors ${
      isActive ? "bg-foreground text-background" : "hover:bg-accent hover:text-accent-foreground"
    }`;

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-3">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {roleLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              {moreLinks.map((l) => (
                <DropdownMenuItem key={l.to} asChild>
                  <Link to={l.to}>{l.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <DepthToggle className="hidden sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden rounded-full sm:block" aria-label="Account menu">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar || undefined} alt={user.name || "Member"} />
                    <AvatarFallback>{(user.name || "U").charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-semibold leading-none">{user.name}</p>
                  <p className="mt-1 truncate text-xs text-muted-foreground">{user.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/portal">
                    <User className="mr-2 h-4 w-4" /> My portal
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => signInWithGoogle()}>
              <LogIn className="h-3.5 w-3.5" /> Sign in
            </Button>
          )}

          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link to="/join">Join free</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 border-foreground bg-background xl:hidden">
          <div className="container mx-auto space-y-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {[...roleLinks, ...moreLinks].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="brut-sm rounded-lg px-3 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3">
              <DepthToggle />
              <div className="flex gap-2">
                {!user && (
                  <Button variant="outline" size="sm" onClick={() => signInWithGoogle()}>
                    Sign in
                  </Button>
                )}
                <Button asChild variant="accent" size="sm">
                  <Link to="/join">Join free</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
