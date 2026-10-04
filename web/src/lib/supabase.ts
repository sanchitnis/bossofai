import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "https://placeholder-project.supabase.co";
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "placeholder-anon-key";

// Singleton to prevent duplicate GoTrue clients during Vite HMR
const GLOBAL_KEY = "__bossofai_supabase_client__";
const g = globalThis as typeof globalThis & { [GLOBAL_KEY]?: SupabaseClient<Database> };

if (!g[GLOBAL_KEY]) {
  g[GLOBAL_KEY] = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      detectSessionInUrl: true,
      autoRefreshToken: true,
    },
  });
}

export const supabase = g[GLOBAL_KEY] as SupabaseClient<Database>;

export const isSupabaseConfigured = (): boolean => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return Boolean(url && key && !url.includes("placeholder-project"));
};
