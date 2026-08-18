"use client";

import { useMemo } from "react";
import type { Hit } from "@/types/hit";
import type { VoteMap } from "@/lib/votes";
import { categoryColor } from "@/lib/categoryColors";

interface StupidHitAwardsProps {
  hits: Hit[];
  voteMap: VoteMap;
}

export default function StupidHitAwards({ hits, voteMap }: StupidHitAwardsProps) {
  const ranked = useMemo(() => {
    return hits
      .map((hit) => {
        const votes = voteMap[hit.id] ?? hit.votes;
        return { hit, total: votes.stupid + votes.genius };
      })
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);
  }, [hits, voteMap]);

  if (ranked.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mint">
          <span aria-hidden>🏆</span>
          <span>Stupid Hit Awards</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-smoke">
          Top 10 by total votes · Live
        </div>
      </div>

      <ol className="mt-4 divide-y divide-hair overflow-hidden rounded-2xl border border-hair">
        {ranked.map(({ hit, total }, i) => {
          const rank = i + 1;
          const isTop = rank === 1;
          return (
            <li key={hit.id} className={isTop ? "bg-mint/10" : "bg-panel"}>
              <a
                href={`#${hit.id}`}
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-hair/30 sm:px-6"
              >
                <span
                  className={`w-6 shrink-0 font-mono text-sm ${
                    isTop ? "text-mint" : "text-smoke"
                  }`}
                >
                  {String(rank).padStart(2, "0")}
                </span>
                <span className="shrink-0 text-xl" aria-hidden>
                  {hit.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-sans text-sm font-semibold text-bone sm:text-base">
                    {hit.title}
                  </span>
                  <span
                    className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: categoryColor(hit.category) }}
                  >
                    {hit.category}
                  </span>
                </span>
                <span
                  className={`shrink-0 font-mono text-sm font-bold ${
                    isTop ? "text-mint" : "text-bone"
                  }`}
                >
                  {total.toLocaleString()}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
