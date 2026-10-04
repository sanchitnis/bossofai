import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-32 px-4 text-center">
        <Dumbbell className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
        <h1 className="font-heading text-4xl font-extrabold text-white mb-2">404 — Page Not Found</h1>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">
          The requested page does not exist in the Boss of AI studio directory.
        </p>
        <Link to="/">
          <Button variant="gym">Return to Boss of AI Home</Button>
        </Link>
      </div>
    </Layout>
  );
};
