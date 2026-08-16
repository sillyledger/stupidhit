import { supabase } from "@/lib/supabaseClient";

export interface VoteCounts {
  stupid: number;
  genius: number;
}

export type VoteMap = Record<string, VoteCounts>;

export async function fetchAllVotes(): Promise<VoteMap> {
  const { data, error } = await supabase
    .from("votes")
    .select("hit_id, stupid_count, genius_count");

  if (error || !data) {
    console.error(error);
    return {};
  }

  const map: VoteMap = {};
  for (const row of data) {
    map[row.hit_id] = { stupid: row.stupid_count, genius: row.genius_count };
  }
  return map;
}

export async function incrementVote(
  hitId: string,
  type: "stupid" | "genius"
): Promise<VoteCounts | null> {
  const { data, error } = await supabase.rpc("increment_vote", {
    p_hit_id: hitId,
    p_vote_type: type,
  });

  if (error) {
    console.error(error);
    return null;
  }

  const row = data?.[0];
  if (!row) return null;

  return { stupid: row.stupid_count, genius: row.genius_count };
}
