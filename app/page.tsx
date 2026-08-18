import Home from "@/components/Home";
import { getHits } from "@/lib/hits";

// The starting hit is picked randomly per request below, so this route
// must actually re-run on each request instead of being served as a
// prerendered static page with one baked-in random pick.
export const dynamic = "force-dynamic";

export default function Page() {
  const hits = getHits();
  const initialIndex = Math.floor(Math.random() * hits.length);
  return <Home initialIndex={initialIndex} />;
}
