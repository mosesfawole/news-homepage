/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-text": "#c5c6ce",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [],
};
