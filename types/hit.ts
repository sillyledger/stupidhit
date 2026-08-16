export type Category =
  | "Startups"
  | "Tech"
  | "Music"
  | "Pop Culture"
  | "Internet Lore"
  | "Toys";

export interface HitVotes {
  stupid: number;
  genius: number;
}

export interface Hit {
  id: string;
  category: Category;
  year: string;
  title: string;
  metric: string;
  metricSub: string;
  emoji: string;
  score: string;
  hook: string;
  spark: string;
  votes: HitVotes;
}

export const CATEGORIES: Category[] = [
  "Startups",
  "Tech",
  "Music",
  "Pop Culture",
  "Internet Lore",
  "Toys",
];

export type CategoryFilter = "All" | Category;
