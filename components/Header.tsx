import Link from "next/link";
import SealIcon from "@/components/SealIcon";

interface HeaderProps {
  count: number;
  onLogoClick: () => void;
}

export default function Header({ count, onLogoClick }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-8 sm:py-10">
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onLogoClick();
        }}
        className="group flex shrink-0 items-center gap-3"
      >
        <SealIcon className="h-14 w-14 shrink-0 transition-opacity group-hover:opacity-90 sm:h-16 sm:w-16" />
        <span className="text-4xl font-black tracking-tight sm:text-5xl">
          stupid <span className="text-mint">hit</span>
        </span>
      </Link>
      <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        {count} HIT{count === 1 ? "" : "S"} LOADED
      </div>
    </header>
  );
}
