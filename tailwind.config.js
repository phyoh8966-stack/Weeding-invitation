/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f3",
        champagne: "#eee6d8",
        gold: "#b28a52",
        charcoal: "#37352f",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
