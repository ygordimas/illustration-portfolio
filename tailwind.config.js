/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 10px 20px rgba(0, 0, 0, .2)",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      // backgroundImage: {
      //   lines: "url('/public/SVG/GCxktUdXYAAoJ63.jpg')",
      // },
      colors: {
        primary: {
          DEFAULT: "#C1DC40",
          50: "#F3F8DB",
          100: "#EEF5CA",
          200: "#E3EFA7",
          300: "#D7E985",
          400: "#CCE262",
          500: "#C1DC40",
          600: "#A5C123",
          700: "#7D911B",
          800: "#546212",
          900: "#2B3209",
          950: "#171B05",
        },

        accent: {
          DEFAULT: "#C1DC40",
          50: "#F3F8DB",
          100: "#EEF5CA",
          200: "#E3EFA7",
          300: "#D7E985",
          400: "#CCE262",
          500: "#C1DC40",
          600: "#A5C123",
          700: "#7D911B",
          800: "#546212",
          900: "#2B3209",
          950: "#171B05",
        },
        myblue: {
          DEFAULT: "#0698D6",
          50: "#98DEFC",
          100: "#84D8FC",
          200: "#5CCBFA",
          300: "#34BFF9",
          400: "#0DB2F8",
          500: "#0698D6",
          600: "#057CAE",
          700: "#046087",
          800: "#03435F",
          900: "#022737",
          950: "#022737",
          // 950: "#011923",
        },
        mygreen: {
          DEFAULT: "#CBE15B",
          50: "#FCFDF6",
          100: "#F7FAE5",
          200: "#ECF4C2",
          300: "#E1EEA0",
          400: "#D6E77D",
          500: "#CBE15B",
          600: "#BCD82C",
          700: "#95AC20",
          800: "#6C7D17",
          900: "#434D0E",
          950: "#2F360A",
        },
        mypink: {
          DEFAULT: "#F56B7C",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FDDEE1",
          300: "#FAB7C0",
          400: "#F8919E",
          500: "#F56B7C",
          600: "#F1364D",
          700: "#E10F29",
          800: "#AC0C1F",
          900: "#780816",
          950: "#5D0611",
        },
        myyellow: {
          DEFAULT: "#F5BB13",
          50: "#FCEEC3",
          100: "#FCE8B0",
          200: "#FADD88",
          300: "#F8D261",
          400: "#F7C63A",
          500: "#F5BB13",
          600: "#C79608",
          700: "#926E06",
          800: "#5C4504",
          900: "#261D02",
          950: "#0B0800",
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
      singoOutline: ["var(--font-singoOutline)"],
      singoShadow: ["var(--font-singoShadow)"],
      singoRound: ["var(--font-singoRound)"],
      singo: ["var(--font-singo)"],
    },
  },
  plugins: [],
};
