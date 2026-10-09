import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { DepthProvider } from "@/components/site/Depth";
import { Index } from "@/pages/Index";
import { Students, Faculty, Institutions, Practitioners, Teachers } from "@/pages/Roles";
import { Ideas, Framework, Pedagogy, Safety, Evidence, Leaderboard } from "@/pages/Info";
import { Join } from "@/pages/Join";
import { AuthCallback } from "@/pages/AuthCallback";
import { MemberPortal } from "@/pages/MemberPortal";
import { NotFound } from "@/pages/NotFound";

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <DepthProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/students" element={<Students />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/institutions" element={<Institutions />} />
              <Route path="/practitioners" element={<Practitioners />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/cascading-theory" element={<Navigate to="/framework" replace />} />
              <Route path="/pedagogy" element={<Pedagogy />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/evidence" element={<Evidence />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/join" element={<Join />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/portal" element={<MemberPortal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster richColors position="top-right" />
          </BrowserRouter>
        </AuthProvider>
      </DepthProvider>
    </ThemeProvider>
  );
}

export default App;
