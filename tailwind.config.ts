import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2f9",
          100: "#dbe3f1",
          400: "#3d5a8a",
          500: "#27406b",
          600: "#1c3257",
          700: "#162646",
          900: "#0d1730",
        },
        gold: {
          50: "#fdf6e8",
          100: "#f8e8c2",
          400: "#dba938",
          500: "#c08e22",
          600: "#9c7119",
        },
        paper: "#fbf6ec",
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          300: "#cbd5e1",
          500: "#64748b",
          700: "#334155",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
