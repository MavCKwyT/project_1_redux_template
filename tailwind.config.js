/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{jsx,tsx}", // not works if there are spaces between extensions e.g {jsx, tsx}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
