import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#14161A",
        panel: "#1B1E24",
        hair: "#2A2E37",
        bone: "#F3F1EA",
        smoke: "#8D8F97",
        mint: "#7EE8B8",
        mint2: "#5FD6A0",
      },
      fontFamily: {
        sans: ["var(--font-reddit-sans)", "sans-serif"],
        mono: ["var(--font-reddit-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
