import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

// Placeholders keep the app running when no Supabase project is configured at build time.
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "https://placeholder-project.supabase.co";
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "placeholder-anon-key";

// Singleton — prevents Vite HMR from creating a second GoTrue client
// which causes the "lock not released" error when files are hot-reloaded.
const GLOBAL_KEY = "__reva_supabase_client__";
const g = globalThis as typeof globalThis & { [GLOBAL_KEY]?: SupabaseClient<Database> };

if (!g[GLOBAL_KEY]) {
  g[GLOBAL_KEY] = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      detectSessionInUrl: true,
    },
  });
}

export const supabase = g[GLOBAL_KEY] as SupabaseClient<Database>;
