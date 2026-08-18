import type { Metadata } from "next";
import Link from "next/link";
import SealIcon from "@/components/SealIcon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Buy This Site — stupidhit.com",
  description: "stupidhit.com, domain and all, is for sale for 2 BTC.",
};

export default function BuyPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-5">
      <header className="flex items-center py-8 sm:py-10">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <SealIcon className="h-14 w-14 shrink-0 transition-opacity group-hover:opacity-90 sm:h-16 sm:w-16" />
          <span className="text-4xl font-black tracking-tight sm:text-5xl">
            stupid <span className="text-mint">hit</span>
          </span>
        </Link>
      </header>

      <article className="card-in flex flex-1 flex-col overflow-hidden rounded-2xl border border-hair bg-panel md:flex-row">
        <div className="flex min-w-0 flex-1 flex-col p-7 sm:p-10">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mint">
            19-Year-Old Domain · Full Site Included
          </div>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            🏷️ This site is for sale.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
            stupidhit.com is a 19-year-old domain attached to a fully functioning museum of
            terrible ideas that made money anyway. The whole thing — code, content, domain,
            seal of approval — is for sale for 2 BTC, a number chosen because it&apos;s itself a
            stupid hit: absurd on paper, and yet here it is, the actual asking price.
          </p>

          <div className="mt-auto flex items-center gap-2 pt-6">
            <Link
              href="/contact"
              className="rounded-lg bg-mint px-6 py-3 text-xs font-bold uppercase tracking-wide text-void transition-opacity hover:opacity-90"
            >
              Make an offer →
            </Link>
          </div>
        </div>

        <div className="perf-responsive shrink-0 relative">
          <div className="notch absolute -left-2 -top-2 hidden md:block" />
          <div className="notch absolute -bottom-2 -left-2 hidden md:block" />
        </div>

        <div className="flex w-full min-w-0 shrink-0 flex-row items-center justify-between gap-4 border-t border-hair p-6 md:w-[208px] md:flex-col md:justify-center md:border-t-0 md:py-8">
          <div className="min-w-0 text-left md:text-center">
            <div className="font-mono text-[9px] uppercase tracking-widest text-smoke">
              Asking price
            </div>
            <div className="mt-1 break-words text-center text-4xl font-black leading-none text-mint sm:mt-2 sm:text-5xl">
              2 BTC
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
