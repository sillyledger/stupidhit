import Link from "next/link";
import SealIcon from "@/components/SealIcon";

interface HeaderProps {
  count: number;
  onLogoClick: () => void;
}

export default function Header({ count, onLogoClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4 py-6">
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onLogoClick();
        }}
        className="group flex shrink-0 items-center gap-3"
      >
        <SealIcon className="h-11 w-11 shrink-0 transition-opacity group-hover:opacity-90 sm:h-12 sm:w-12" />
        <span className="text-2xl font-black tracking-tight sm:text-3xl">
          Stupid <span className="text-mint">Hit</span>
        </span>
      </Link>
      <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        {count} HIT{count === 1 ? "" : "S"} LOADED
      </div>
    </header>
  );
}
