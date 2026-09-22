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
          DEFAULT: "#050b1a",
          deep: "#02060f",
          header: "#10112d",
          panel: "#0d1530",
          row: "#0f1d4a",
        },
        blue: {
          DEFAULT: "#3d94ff",
          bright: "#7ee2ff",
          deep: "#132a63",
        },
        red: {
          DEFAULT: "#ff4757",
          bright: "#ff8a8a",
          deep: "#e0263a",
        },
        champagne: {
          DEFAULT: "#ffe066",
          deep: "#ffc93c",
        },
        ink: "#010f08",
        danger: "#ff4757",
        success: "#3ddc84",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
      backgroundImage: {
        "pitch-grid":
          "linear-gradient(rgba(126,226,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,71,87,0.07) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(65% 65% at 30% 20%, rgba(126,226,255,0.3) 0%, rgba(5,11,26,0) 70%), radial-gradient(55% 55% at 75% 30%, rgba(255,71,87,0.25) 0%, rgba(5,11,26,0) 70%)",
        "table-head": "linear-gradient(90deg, #3d94ff 0%, #ff4757 100%)",
        "champagne-btn": "linear-gradient(180deg, #fff0b3 0%, #ffc93c 100%)",
        "blue-btn": "linear-gradient(180deg, #7ee2ff 0%, #3d94ff 100%)",
        "red-btn": "linear-gradient(180deg, #ff8a8a 0%, #ff4757 100%)",
      },
      boxShadow: {
        blue: "0 0 24px rgba(126,226,255,0.5)",
        red: "0 0 24px rgba(255,71,87,0.5)",
        champagne: "0 0 16px rgba(255,224,102,0.55)",
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
