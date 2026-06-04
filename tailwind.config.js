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
        neon: {
          cyan: "#00f0ff",
          magenta: "#ff00e5",
          purple: "#8b5cf6",
          pink: "#ff2d78",
        },
        dark: {
          bg: "#072737",
          card: "#0a3348",
          border: "#1a4a60",
        },
      },
      backgroundImage: {
        "gradient-electric":
          "linear-gradient(135deg, #ea7c00, #ff00e5, #00f0ff)",
        "gradient-cyber":
          "linear-gradient(135deg, #00f0ff, #8b5cf6)",
        "gradient-neon":
          "linear-gradient(135deg, #ff00e5, #ea7c00)",
        "gradient-glow":
          "linear-gradient(135deg, #00f0ff, #ff00e5, #8b5cf6)",
      },
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 4s ease infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 240, 255, 0.3), 0 0 10px rgba(0, 240, 255, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
