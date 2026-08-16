interface PaginationProps {
  total: number;
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const MAX_DOTS = 9;

export default function Pagination({
  total,
  index,
  onPrev,
  onNext,
  onSelect,
}: PaginationProps) {
  const windowSize = Math.min(MAX_DOTS, total);
  const start = Math.min(
    Math.max(index - Math.floor(windowSize / 2), 0),
    Math.max(total - windowSize, 0)
  );
  const visible = Array.from({ length: windowSize }, (_, i) => start + i);

  return (
    <div className="mx-auto mt-4 flex max-w-full items-center justify-between gap-4">
      <button
        onClick={onPrev}
        className="text-xs font-semibold text-smoke transition-colors hover:text-bone"
      >
        ← Prev
      </button>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {visible.map((i) => (
            <button
              key={i}
              onClick={() => onSelect(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-mint" : "w-1.5 bg-hair"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-smoke">
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
