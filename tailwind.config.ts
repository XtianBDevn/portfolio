import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",     // slate-900
        accent: "#2563eb",      // blue-600
        muted: "#64748b",       // slate-500
        surface: "#f8fafc",     // slate-50
      },
    },
  },
  plugins: [],
};

export default config;
