/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '156': '40rem'
      },
      width: {
        '256': '64rem'
      }
    },
  },
  plugins: [],
}
