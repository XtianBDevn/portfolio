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
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'bold': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'bold-hover': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'bold-accent': '4px 4px 0px 0px #2563eb',
      },
    },
  },
  plugins: [],
};

export default config;
