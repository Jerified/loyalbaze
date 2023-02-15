/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'satochi': ['Satoshi', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss')
  ],
  darkMoode:"class"
}
