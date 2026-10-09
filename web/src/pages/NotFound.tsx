import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Orbit } from "@/components/site/Orbit";

export const NotFound: React.FC = () => (
  <Layout>
    <div className="container mx-auto px-4 py-20 text-center sm:px-6">
      <Orbit className="mx-auto w-full max-w-[220px] text-foreground" center="404" />
      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight">Lost in orbit.</h1>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">That page doesn't exist. Let's get you back.</p>
      <Button asChild variant="accent" className="mt-6">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  </Layout>
);
