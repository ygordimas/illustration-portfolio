/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdfffe",
          100: "#e0feef",
          200: "#bafdd8",
          300: "#7dfcb3",
          400: "#38f886",
          500: "#0ee968",
          600: "#02c759",
          700: "#03a14b",
          800: "#078540",
          900: "#0c6e3a",
          950: "#084928",
        },
        secondary: {
          50: "#fff6ed",
          100: "#ffebd5",
          200: "#fdd3ab",
          300: "#fcbc84",
          400: "#f98a3e",
          500: "#f76918",
          600: "#e84f0e",
          700: "#c03a0e",
          800: "#992f13",
          900: "#7b2913",
          950: "#421108",
        },
        accent: {
          50: "#e8f1ff",
          100: "#d6e4ff",
          200: "#b5cdff",
          300: "#88aaff",
          400: "#5978ff",
          500: "#3347ff",
          600: "#1114ff",
          700: "#0404fb",
          800: "#090cca",
          900: "#12179d",
          950: "#0b0c5b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(550px, 1fr))",
      },
    },
    fontFamily: {
      mainfont: ["var(--font-mainfont)"],
      secondaryfont: ["var(--font-secondaryfont)"],
    },
  },
  plugins: [],
};
