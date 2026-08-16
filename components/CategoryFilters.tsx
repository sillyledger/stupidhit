import type { CategoryFilter } from "@/types/hit";
import { CATEGORIES } from "@/types/hit";
import { categoryColor } from "@/lib/categoryColors";

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
            className={`flex items-center gap-1.5 rounded-full border border-hair px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-bone text-void"
                : "bg-transparent text-smoke hover:text-bone"
            }`}
          >
            {isActive && option !== "All" && (
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: categoryColor(option) }}
              />
            )}
            {option}
          </button>
        );
      })}
    </div>
  );
}
