import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FAF8F5",
          100: "#F5F1EB",
          200: "#E8DFD1",
          300: "#DBCDB7",
          400: "#C8B494", // Tan
          500: "#B69968", // Main tan
          600: "#9A7D4D",
          700: "#7D6439",
          800: "#604B2B",
          900: "#43351E",
        },
        secondary: {
          500: "#000000", // Black
          600: "#1A1A1A",
          700: "#2D2D2D",
        },
        accent: {
          500: "#8B4513", // Saddle brown for CTAs
          600: "#A0522D",
        },
        // Add commonly used semantic tokens so utilities like
        // `bg-background`, `text-foreground`, and `border-border`
        // resolve correctly in global CSS.
        background: "#ffffff",
        foreground: "#0f172a", // slate-900
        border: "#e5e7eb", // gray-200
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
