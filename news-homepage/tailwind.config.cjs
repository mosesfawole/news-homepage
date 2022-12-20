/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-text": "#5d5f79",
        btn: "hsl(5, 85%, 63%)",
        btnText: "hsl(36, 100%, 99%)",
        title: "hsl(35, 77%, 62%)",
        sideCard: "hsl(240, 100%, 5%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
