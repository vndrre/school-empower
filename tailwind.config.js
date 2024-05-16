/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "land-image": "url(/hero-shapes.png)",
    },

    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}

