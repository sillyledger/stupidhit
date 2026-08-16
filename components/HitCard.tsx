"use client";

import { useState } from "react";
import type { Hit } from "@/types/hit";

interface HitCardProps {
  hit: Hit;
  onNext: () => void;
  onShare: (hit: Hit) => void;
  onVote: (kind: "stupid" | "genius") => void;
}

export default function HitCard({ hit, onNext, onShare, onVote }: HitCardProps) {
  const [votes, setVotes] = useState(hit.votes);
  const [voted, setVoted] = useState<"stupid" | "genius" | null>(null);

  function vote(kind: "stupid" | "genius") {
    if (voted) return;
    setVotes((v) => ({ ...v, [kind]: v[kind] + 1 }));
    setVoted(kind);
    onVote(kind);
  }

  return (
    <article
      key={hit.id}
      id={hit.id}
      className="card-in flex flex-col overflow-hidden rounded-2xl border border-hair bg-panel md:flex-row"
    >
      <div className="flex min-w-0 flex-1 flex-col p-7 sm:p-10">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
          <span>
            {hit.category} · {hit.year}
          </span>
          <span className="h-1 w-1 rounded-full bg-hair" />
          <span className="font-mono font-semibold text-mint">
            Stupid Score: {hit.score} / 10
          </span>
        </div>

        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          {hit.emoji} {hit.title}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
          {hit.hook}
        </p>

        <div className="mt-6 border-t border-hair pt-4">
          <p className="text-[15px] text-smoke">
            <span className="mr-1.5 text-mint">⚡</span>
            {hit.spark}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <button
            onClick={() => vote("stupid")}
            className={`rounded-full border border-hair px-3 py-1.5 text-xs transition-colors ${
              voted === "stupid"
                ? "border-mint bg-mint/10 text-mint"
                : "text-smoke hover:text-bone"
            }`}
          >
            🤡 {votes.stupid.toLocaleString()}
          </button>
          <button
            onClick={() => vote("genius")}
            className={`rounded-full border border-hair px-3 py-1.5 text-xs transition-colors ${
              voted === "genius"
                ? "border-mint bg-mint/10 text-mint"
                : "text-smoke hover:text-bone"
            }`}
          >
            🧠 {votes.genius.toLocaleString()}
          </button>
          <button
            onClick={() => onShare(hit)}
            aria-label="Share"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-hair text-smoke transition-colors hover:text-bone"
          >
            ↗
          </button>
        </div>
      </div>

      <div className="perf-responsive shrink-0 relative">
        <div className="notch absolute -left-2 -top-2 hidden md:block" />
        <div className="notch absolute -bottom-2 -left-2 hidden md:block" />
      </div>

      <div className="flex w-full shrink-0 flex-row items-center justify-between gap-4 border-t border-hair p-6 md:w-[208px] md:flex-col md:justify-center md:border-t-0 md:py-8">
        <div className="text-left md:text-center">
          <div className="font-mono text-[9px] uppercase tracking-widest text-smoke">
            {hit.metricSub}
          </div>
          <div className="mt-1 text-3xl font-black leading-none text-mint sm:text-4xl md:mt-2 md:text-5xl">
            {hit.metric}
          </div>
        </div>
        <button
          onClick={onNext}
          className="btn-primary w-auto rounded-lg bg-mint px-6 py-3 text-xs font-bold uppercase tracking-wide text-void transition-colors hover:bg-mint2 md:w-full md:px-3 md:py-3.5"
        >
          Next →
        </button>
      </div>
    </article>
  );
}
