import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--bg-ink-rgb) / <alpha-value>)",
        hero: "rgb(var(--bg-hero-rgb) / <alpha-value>)",
        surface: "rgb(var(--bg-surface-rgb) / <alpha-value>)",
        card: "rgb(var(--bg-card-rgb) / <alpha-value>)",
        wash: "rgb(var(--bg-wash-rgb) / <alpha-value>)",
        chalk: "rgb(var(--text-chalk-rgb) / <alpha-value>)",
        muted: "rgb(var(--text-muted-rgb) / <alpha-value>)",
        dim: "rgb(var(--text-dim-rgb) / <alpha-value>)",
        "icon-muted": "rgb(var(--text-icon-muted-rgb) / <alpha-value>)",
        hairline: "var(--border-hairline)",
        "hairline-strong": "var(--border-hairline-strong)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft-rgb) / <alpha-value>)",
        "accent-deep": "rgb(var(--accent-deep-rgb) / <alpha-value>)",
        "accent-glow": "rgb(var(--accent-glow-rgb) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2-rgb) / <alpha-value>)",
        "accent-2-soft": "rgb(var(--accent-2-soft-rgb) / <alpha-value>)",
        positive: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      keyframes: {
        "survey-breathe": {
          "0%, 100%": { opacity: "0.35", transform: "translate(-50%, -50%) scale(0.9)" },
          "50%": { opacity: "0.9", transform: "translate(-50%, -50%) scale(1.1)" },
        },
        "enter-rise": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "survey-breathe": "survey-breathe 8s ease-in-out infinite",
        "enter-rise": "enter-rise 0.7s ease-out forwards",
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
