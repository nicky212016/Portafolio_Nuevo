/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef1e6",
          100: "#fde3cc",
          200: "#fac799",
          300: "#f8ab66",
          400: "#f58f33",
          500: "#ea7c00",
          600: "#c76a00",
          700: "#a45800",
          800: "#814600",
          900: "#5e3400",
          950: "#3b2200",
        },
        dark: {
          bg: "#072737",
          card: "#0a3348",
          border: "#1a4a60",
        },
      },
    },
  },
  plugins: [],
};
