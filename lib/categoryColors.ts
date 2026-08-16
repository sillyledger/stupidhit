export const CATEGORY_COLORS: Record<string, string> = {
  "Toys": "#FB923C", // coral
  "Music": "#C084FC", // violet
  "Startups": "#60A5FA", // sky blue
  "Pop Culture": "#FBBF24", // amber
  "Internet Lore": "#F472B6", // pink
  "Tech": "#BEF264", // lime
};

export function categoryColor(category: string): string {
  return CATEGORY_COLORS[category] ?? "#7EE8B8"; // fallback to mint
}
