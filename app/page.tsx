"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilters from "@/components/CategoryFilters";
import HitCard from "@/components/HitCard";
import Pagination from "@/components/Pagination";
import EmptyState from "@/components/EmptyState";
import Toast from "@/components/Toast";
import Footer from "@/components/Footer";
import { getHits } from "@/lib/hits";
import { categoryColor } from "@/lib/categoryColors";
import { fetchAllVotes, incrementVote, type VoteMap } from "@/lib/votes";
import type { CategoryFilter } from "@/types/hit";

const ALL_HITS = getHits();

export default function Home() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [voteMap, setVoteMap] = useState<VoteMap>({});
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchAllVotes().then(setVoteMap);
  }, []);

  const filteredHits = useMemo(
    () =>
      category === "All"
        ? ALL_HITS
        : ALL_HITS.filter((hit) => hit.category === category),
    [category]
  );

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const handleCategoryChange = useCallback((next: CategoryFilter) => {
    setCategory(next);
    setIndex(0);
  }, []);

  const resetHome = useCallback(() => {
    setCategory("All");
    setIndex(0);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const nextHit = useCallback(() => {
    setIndex((i) => (filteredHits.length ? (i + 1) % filteredHits.length : 0));
  }, [filteredHits.length]);

  const prevHit = useCallback(() => {
    setIndex((i) =>
      filteredHits.length ? (i - 1 + filteredHits.length) % filteredHits.length : 0
    );
  }, [filteredHits.length]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      const active = document.activeElement;
      const tag = active?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") {
        if (e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          (active as HTMLElement).blur();
          nextHit();
        }
        return;
      }
      if (["ArrowRight", "ArrowDown", " ", "Spacebar"].includes(e.key)) {
        e.preventDefault();
        nextHit();
      }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        prevHit();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [nextHit, prevHit]);

  // Deep linking via hash
  useEffect(() => {
    function jumpToHash() {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const hitIndex = ALL_HITS.findIndex((hit) => hit.id === id);
      if (hitIndex === -1) return;
      setCategory("All");
      setIndex(hitIndex);
    }
    jumpToHash();
    window.addEventListener("hashchange", jumpToHash);
    return () => window.removeEventListener("hashchange", jumpToHash);
  }, []);

  const safeIndex = filteredHits.length
    ? Math.min(index, filteredHits.length - 1)
    : 0;
  const currentHit = filteredHits[safeIndex];

  async function handleShare(hitId: string) {
    const url = `https://stupidhit.com/#${hitId}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ url });
        return;
      } catch {
        // user cancelled or share failed, fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast("Link copied.");
    } catch {
      showToast("Couldn't copy link.");
    }
  }

  async function handleVote(hitId: string, kind: "stupid" | "genius") {
    const result = await incrementVote(hitId, kind);
    if (!result) {
      showToast("Vote didn't go through — try again.");
      return;
    }
    setVoteMap((prev) => ({ ...prev, [hitId]: result }));
    showToast(kind === "stupid" ? "🤡 Vote counted." : "🧠 Vote counted.");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-5">
      <Header count={filteredHits.length} onLogoClick={resetHome} />
      <Hero />
      <CategoryFilters active={category} onChange={handleCategoryChange} />

      {currentHit ? (
        <>
          <HitCard
            key={currentHit.id}
            hit={currentHit}
            votes={voteMap[currentHit.id] ?? currentHit.votes}
            onNext={nextHit}
            onShare={(hit) => handleShare(hit.id)}
            onVote={(kind) => handleVote(currentHit.id, kind)}
          />
          <Pagination
            total={filteredHits.length}
            index={safeIndex}
            accent={categoryColor(currentHit.category)}
            onPrev={prevHit}
            onNext={nextHit}
          />
        </>
      ) : (
        <EmptyState />
      )}

      <Footer />
      <Toast message={toast} />
    </div>
  );
}
