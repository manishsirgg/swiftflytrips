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
        brand: {
          blue: "#0B3D91",
          accent: "#FF5A1F",
          light: "#F5F7FA"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 34, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
