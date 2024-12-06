/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": '#5C0C0D',
        "secondary": "#D9CACA",
        "text-color": "#000000",
        "footer-color": "#A9848C"
      },
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryBold: ["Bold"],
        primaryBlack: ["Black"]
      }
    },
  },
  plugins: [],
}