import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

/**
 * The AI Hub is a separate app served at /aihub/ by the host (see vercel.json).
 * Links inside this SPA reach this route, so hand over to the server with a full page load.
 * In dev the hub isn't served, so don't redirect (it would loop).
 */
export const AiHubRedirect: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (import.meta.env.PROD) window.location.replace(pathname + search + hash);
  }, [pathname, search, hash]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="font-heading text-2xl font-bold">
          {import.meta.env.PROD ? "Opening the AI Hub…" : "The AI Hub is only served in the deployed build."}
        </p>
        <p className="mt-2 text-muted-foreground">
          If nothing happens, <a className="font-semibold underline" href="/aihub/">open it directly</a>.
        </p>
      </div>
    </Layout>
  );
};
