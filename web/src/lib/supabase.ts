import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const rawUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "";
const rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "";

export const isSupabaseConfigured = (): boolean => {
  if (!rawUrl || !rawKey) return false;
  const isPlaceholder =
    rawUrl.includes("placeholder-project") ||
    rawUrl.includes("your-project-ref") ||
    rawKey.includes("placeholder-anon-key") ||
    rawKey.includes("your-anon-public-key");
  return !isPlaceholder;
};

// Singleton to prevent duplicate GoTrue clients during Vite HMR
const GLOBAL_KEY = "__bossofai_supabase_client__";
const g = globalThis as typeof globalThis & { [GLOBAL_KEY]?: SupabaseClient<Database> };

const configured = isSupabaseConfigured();
const supabaseUrl = configured ? rawUrl : "https://placeholder-project.supabase.co";
const supabaseAnonKey = configured ? rawKey : "placeholder-anon-key";

if (!g[GLOBAL_KEY]) {
  g[GLOBAL_KEY] = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: configured,
      detectSessionInUrl: configured,
      autoRefreshToken: configured,
    },
  });
}

export const supabase = g[GLOBAL_KEY] as SupabaseClient<Database>;

