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
        cream: "#FAF7F2",
        sage: "#6B8F71",
        "sage-dark": "#5A7A60",
        sand: "#C9A87C",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(44, 44, 44, 0.08)",
        card: "0 8px 32px rgba(44, 44, 44, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
