import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",     // indigo-500
        'primary-dark': "#4f46e5", // indigo-600
        accent: "#8b5cf6",      // violet-500
        muted: "#64748b",       // slate-500
        surface: "#f8fafc",     // slate-50
        light: "#ffffff",       // white
        text: "#1e293b",        // slate-800
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
