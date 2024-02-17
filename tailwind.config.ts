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
        "primary-50": "#F4E8FC",
        "primary-100": "#E3C9FA",
        "primary-200": "#D4AAF6",
        "primary-300": "#C58BF2",
        "primary-400": "#B66CEE",
        primary: "#A74DEA",
        "primary-600": "#8A3FBF",
        "primary-700": "#6B3095",
        "primary-800": "#4C216B",
        "primary-900": "#2D1241",
        "primary-950": "#0E0317",
        light: "#F1F5F9",
        dark: "#1A1A1A",
      },
      screens: {
        xs: "425px",
        // => @media (min-width: 425px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
