import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        soft: "#F7F7F5",
        primary: "#1A1A1A",
        accent: "#C9A84C",
        border: "#E5E5E5",
        secondary: "#6B6B6B"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 12px 32px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
