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
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#AC1F23", // Main red
          600: "#991B1F",
          700: "#7F171A",
          800: "#661215",
          900: "#4C0E10",
        },
        secondary: {
          500: "#000000", // Black
          600: "#1A1A1A",
          700: "#2D2D2D",
        },
        accent: {
          500: "#AC1F23", // Red for CTAs
          600: "#991B1F",
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
