/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        black: "#191917",
        white: "#f8f8f4",
      }),
      color: {
        black: "#191917",
        white: "#f8f8f4",
      },
      fontFamily: {
        teko: ["teko", "sans-serif"],
        didot: ["linotype-didot", "serif"],
      },
    },
  },
  plugins: [],
};
