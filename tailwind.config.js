/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    daisyui: {
      themes: ["light", "dark"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      animation: {
        pulse: "pulse 3s infinite ease-in-out", 
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
