import Link from "next/link";
import SealIcon from "@/components/SealIcon";

interface HeaderProps {
  count: number;
  onLogoClick: () => void;
}

export default function Header({ count, onLogoClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6">
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onLogoClick();
        }}
        className="group flex items-center gap-2.5"
      >
        <SealIcon className="h-8 w-8 shrink-0 transition-opacity group-hover:opacity-90 sm:h-9 sm:w-9" />
        <span className="text-xl font-black tracking-tight sm:text-2xl">
          stupid<span className="text-mint">hit</span>
        </span>
      </Link>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        {count} HIT{count === 1 ? "" : "S"} LOADED
      </div>
      <div aria-hidden className="w-[72px]" />
    </header>
  );
}
