import Link from "next/link";

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
        className="text-xl font-extrabold tracking-tight opacity-100 transition-opacity hover:opacity-80 sm:text-2xl"
      >
        <span className="text-mint">stupid</span>
        <span className="text-mint">hit</span>
      </Link>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        {count} HIT{count === 1 ? "" : "S"} LOADED
      </div>
      <div aria-hidden className="w-[72px]" />
    </header>
  );
}
