import type { CategoryFilter } from "@/types/hit";
import { CATEGORIES } from "@/types/hit";

interface CategoryFiltersProps {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const OPTIONS: CategoryFilter[] = ["All", ...CATEGORIES];

export default function CategoryFilters({
  active,
  onChange,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 pb-6">
      {OPTIONS.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-full border border-hair px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-bone text-void"
                : "bg-transparent text-smoke hover:text-bone"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
