import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#001514",
          deep: "#000a09",
          panel: "#04211f",
        },
        mint: {
          DEFAULT: "#66e28e",
          soft: "#a9f2c1",
        },
        gold: {
          DEFAULT: "#ffdd1b",
          soft: "#f3b65d",
        },
        cyan: {
          DEFAULT: "#00fcff",
        },
        danger: "#fc4a4d",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "pitch-grid":
          "linear-gradient(rgba(102,226,142,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(102,226,142,0.08) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 20%, rgba(102,226,142,0.25) 0%, rgba(0,21,20,0) 70%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(102,226,142,0.35)",
        gold: "0 0 20px rgba(255,221,27,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
