import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Reddit Sans / Reddit Mono aren't in next/font/google's bundled catalog on
// Next 14 yet, so they're self-hosted as variable fonts via next/font/local
// (still zero CDN <link> tags, still font-optimized at build time).
const redditSans = localFont({
  src: "./fonts/RedditSans-Variable.ttf",
  weight: "400 900",
  variable: "--font-reddit-sans",
  display: "swap",
});

const redditMono = localFont({
  src: "./fonts/RedditMono-Variable.ttf",
  weight: "400 600",
  variable: "--font-reddit-mono",
  display: "swap",
});

const title = "stupidhit.com — terrible ideas that won anyway";
const description =
  "A curated database of absurd ideas, viral products, and pop-culture phenomena that sounded idiotic on paper but made millions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stupidhit.com"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://stupidhit.com/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${redditSans.variable} ${redditMono.variable}`}>
      <body className="font-sans bg-void text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
