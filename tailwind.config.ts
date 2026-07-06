import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0B0B0C",
          gold: "#E8A33D",
          "gold-dark": "#C6832A",
          teal: "#7EC8C8",
          "teal-dark": "#4FA3A3",
          cream: "#F7F5F0",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
