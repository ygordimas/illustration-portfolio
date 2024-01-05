/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        primary: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#dadadd",
          300: "#b9b9c0",
          400: "#93949d",
          500: "#767781",
          600: "#5f5f6a",
          700: "#52525b",
          800: "#434349",
          900: "#3a3a40",
          950: "#27272a",
        },

        accent: {
          50: "#fdf8ef",
          100: "#fcf1df",
          200: "#f7d9b1",
          300: "#f1c080",
          400: "#eb9c4c",
          500: "#e68029",
          600: "#d7671f",
          700: "#b24f1c",
          800: "#8e401e",
          900: "#73351b",
          950: "#3e190c",
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
      display: ["var(--font-display)"],
      youngserif: ["var(--font-youngserif)"],
    },
  },
  plugins: [],
};
