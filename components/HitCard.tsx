"use client";

import { useState } from "react";
import type { Hit } from "@/types/hit";
import { categoryColor } from "@/lib/categoryColors";

interface HitCardProps {
  hit: Hit;
  onNext: () => void;
  onShare: (hit: Hit) => void;
  onVote: (kind: "stupid" | "genius") => void;
}

function metricFontSize(metric: string) {
  const len = metric.length;
  if (len <= 5) return "text-4xl sm:text-5xl";
  if (len <= 8) return "text-3xl sm:text-4xl";
  return "text-2xl sm:text-3xl";
}

export default function HitCard({ hit, onNext, onShare, onVote }: HitCardProps) {
  const [votes, setVotes] = useState(hit.votes);
  const [voted, setVoted] = useState<"stupid" | "genius" | null>(null);
  const accent = categoryColor(hit.category);

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
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
          <span style={{ color: accent }}>
            {hit.category} · {hit.year}
          </span>
          <span className="h-1 w-1 rounded-full bg-hair" />
          <span className="font-mono font-semibold" style={{ color: accent }}>
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

      <div className="flex w-full min-w-0 shrink-0 flex-row items-center justify-between gap-4 border-t border-hair p-6 md:w-[208px] md:flex-col md:justify-center md:border-t-0 md:py-8">
        <div className="min-w-0 text-left md:text-center">
          <div className="font-mono text-[9px] uppercase tracking-widest text-smoke">
            {hit.metricSub}
          </div>
          <div
            className={`mt-1 break-words text-center font-black leading-none md:mt-2 ${metricFontSize(hit.metric)}`}
            style={{ color: accent }}
          >
            {hit.metric}
          </div>
        </div>
        <button
          onClick={onNext}
          className="btn-primary w-auto rounded-lg px-6 py-3 text-xs font-bold uppercase tracking-wide text-void transition-opacity hover:opacity-90 md:w-full md:px-3 md:py-3.5"
          style={{ backgroundColor: accent }}
        >
          Next →
        </button>
      </div>
    </article>
  );
}
