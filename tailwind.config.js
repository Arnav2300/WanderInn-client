/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/lodge.png')",
        "hero-image1": "url('/src/images/lodge1.jpg')",
      },
      fontFamily: {
        Libre: ["Libre Baskerville", "serif"],
        Fuggles: ["Fuggles", "cursive"],
        Montesrrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Great: ["Great Vibes", "cursive"],
      },
      colors: {
        primary: "#ff5a5f",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
