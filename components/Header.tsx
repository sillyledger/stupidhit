interface HeaderProps {
  count: number;
}

export default function Header({ count }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="text-lg font-extrabold tracking-tight">
        <span className="text-mint">stupid</span>
        <span className="text-mint">hit</span>
      </div>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        {count} HIT{count === 1 ? "" : "S"} LOADED
      </div>
      <div aria-hidden className="w-[72px]" />
    </header>
  );
}
