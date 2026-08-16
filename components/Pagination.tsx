interface PaginationProps {
  total: number;
  index: number;
  accent: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({
  total,
  index,
  accent,
  onPrev,
  onNext,
}: PaginationProps) {
  const percent = total ? ((index + 1) / total) * 100 : 0;

  return (
    <div className="mx-auto mt-4 flex max-w-full items-center gap-4">
      <button
        onClick={onPrev}
        className="text-xs font-semibold text-smoke transition-colors hover:text-bone"
      >
        ← Prev
      </button>

      <div className="flex flex-1 items-center gap-3">
        <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-hair">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${percent}%`, backgroundColor: accent }}
          />
        </div>
        <span className="shrink-0 font-mono text-[10px] text-smoke">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <button
        onClick={onNext}
        className="text-xs font-semibold text-smoke transition-colors hover:text-bone"
      >
        Next →
      </button>
    </div>
  );
}
