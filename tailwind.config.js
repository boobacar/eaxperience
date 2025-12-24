/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff9c2b",
          dark: "#07090f",
          carbon: "#0d111a",
          slate: "#141a24",
          light: "#f6f7fb",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Inter", "system-ui", "sans-serif"],
        sans: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 156, 43, 0.35)",
        card: "0 24px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-sheen":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
