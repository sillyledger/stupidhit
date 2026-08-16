import hitsData from "@/data/hits.json";
import type { Hit } from "@/types/hit";

export function getHits(): Hit[] {
  return hitsData as Hit[];
}
