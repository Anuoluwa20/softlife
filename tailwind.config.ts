import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        archival: {
          950: "#08080A",
          900: "#0D0D10",
          850: "#131317",
          800: "#1A1A20",
          700: "#26262F",
          600: "#3D3D48",
          500: "#6B6B78",
          400: "#9C9CA8",
          300: "#CBCBD4",
          200: "#E4E4EB",
          100: "#F4F1EA",
          50: "#FAF8F4",
          paper: "#F8F5EE",
        },
        terracotta: {
          DEFAULT: "#BC3A18",
          dark: "#8F270D",
          light: "#D9532F",
          glow: "rgba(217, 83, 47, 0.28)",
        },
        bronze: {
          DEFAULT: "#C5A059",
          metallic: "#D4AF37",
          dark: "#8C6A28",
          light: "#E5C378",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        ochre: {
          DEFAULT: "#E09F3E",
          dark: "#B87A24",
          light: "#F4B65B",
        },
        adire: {
          DEFAULT: "#1B2A4A",
          deep: "#111B30",
          light: "#2B3E60",
          sky: "#5A82B8",
        },
        softlife: {
          canvas: "#090D16",
          surface: "#121927",
          elevated: "#1B2436",
          border: "#26334D",
          emerald: "#10B981",
          mint: "#34D399",
          amber: "#F59E0B",
          gold: "#FBBF24",
          coral: "#EF4444",
          coralLight: "#F87171",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Syne", "Cabinet Grotesk", "sans-serif"],
        editorial: ["var(--font-editorial)", "Newsreader", "Playfair Display", "serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        monumental: "-0.05em",
        archival: "0.14em",
      },
      boxShadow: {
        glowTerracotta: "0 0 35px -5px rgba(217, 83, 47, 0.3)",
        glowBronze: "0 0 35px -5px rgba(212, 175, 55, 0.25)",
        cardArchival: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        glowBreathe: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
      },
      animation: {
        pulseSubtle: "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glowBreathe: "glowBreathe 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
