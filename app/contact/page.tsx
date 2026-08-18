import type { Metadata } from "next";
import Link from "next/link";
import SealIcon from "@/components/SealIcon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — stupidhit.com",
  description: "Get in touch with the team behind stupidhit.com.",
};

export default function ContactPage() {
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

      <main className="card-in flex flex-1 flex-col items-start justify-center gap-6 rounded-2xl border border-hair bg-panel px-7 py-16 sm:px-10">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Contact</h1>
        <p className="max-w-md text-base leading-relaxed text-bone/90 sm:text-lg">
          Tips, corrections, or a stupid idea of your own that made money — send it over.
        </p>
        <a
          href="mailto:jm@onpointvc.com"
          className="rounded-lg bg-mint px-6 py-3 text-xs font-bold uppercase tracking-wide text-void transition-opacity hover:opacity-90"
        >
          jm@onpointvc.com
        </a>
      </main>

      <Footer />
    </div>
  );
}
