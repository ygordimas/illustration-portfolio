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
          50: "#fef7ee",
          100: "#fcedda",
          200: "#f8d6b0",
          300: "#f3b97e",
          400: "#ed914a",
          500: "#e87427",
          600: "#d95b1d",
          700: "#b4451a",
          800: "#90381c",
          900: "#74301a",
          950: "#3f160b",
        },

        accent: {
          50: "#fef4f2",
          100: "#fee6e2",
          200: "#fed1ca",
          300: "#fcb1a5",
          400: "#f88471",
          500: "#ee4e34",
          600: "#dc3f26",
          700: "#b9321c",
          800: "#992d1b",
          900: "#7f2b1d",
          950: "#45120a",
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
    },
  },
  plugins: [],
};
