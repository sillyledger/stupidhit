import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-y-2 border-t border-hair py-5 font-mono text-[10px] text-smoke/70">
      <span>© 2026 STUPIDHIT.COM</span>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/contact" className="transition hover:text-smoke">
          Contact
        </Link>
        <span className="h-1 w-1 rounded-full bg-hair" />
        <Link href="/buy" className="transition hover:text-smoke">
          Buy this site
        </Link>
        <span className="h-1 w-1 rounded-full bg-hair" />
        <a
          href="https://www.onpointvc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-wide transition hover:text-smoke"
        >
          An Absurdity Index project by OnPoint VC ↗
        </a>
      </div>
    </footer>
  );
}
