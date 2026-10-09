import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "reva_resource_votes";

type VoteState = Record<string, "up" | "down" | null>;

function loadLocalVotes(): VoteState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocalVotes(votes: VoteState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
  } catch {}
}

export function useResourceVotes() {
  const [localVotes, setLocalVotes] = useState<VoteState>(loadLocalVotes);
  const [dbVotes, setDbVotes] = useState<VoteState>({});
  const [userId, setUserId] = useState<string | null>(null);

  // Load session and DB votes on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      setUserId(session.user.id);
      supabase
        .from("resource_votes")
        .select("resource_id, vote")
        .eq("user_id", session.user.id)
        .then(({ data }) => {
          if (!data) return;
          const map: VoteState = {};
          data.forEach((r) => { map[r.resource_id] = r.vote as "up" | "down"; });
          setDbVotes(map);
        });
    });
  }, []);

  const vote = useCallback(async (id: string, direction: "up" | "down") => {
    if (userId) {
      // DB path
      const current = dbVotes[id];
      const next = current === direction ? null : direction;
      setDbVotes((prev) => {
        const updated = { ...prev, [id]: next };
        if (next === null) delete updated[id];
        return updated;
      });

      if (next === null) {
        await supabase.from("resource_votes").delete().eq("user_id", userId).eq("resource_id", id);
      } else {
        await supabase.from("resource_votes").upsert({ user_id: userId, resource_id: id, vote: next });
      }
    } else {
      // localStorage path
      setLocalVotes((prev) => {
        const current = prev[id];
        const next = current === direction ? null : direction;
        const updated = { ...prev, [id]: next };
        if (next === null) delete updated[id];
        saveLocalVotes(updated);
        return updated;
      });
    }
  }, [userId, dbVotes]);

  const getDelta = useCallback((id: string): number => {
    const votes = userId ? dbVotes : localVotes;
    const v = votes[id];
    if (v === "up") return 1;
    if (v === "down") return -1;
    return 0;
  }, [userId, dbVotes, localVotes]);

  const getUserVote = useCallback((id: string): "up" | "down" | null => {
    const votes = userId ? dbVotes : localVotes;
    return votes[id] ?? null;
  }, [userId, dbVotes, localVotes]);

  return { vote, getDelta, getUserVote };
}
