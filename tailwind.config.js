/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sedan : "'Sedan SC', serif",
        lob : "'Lobster', sans-serif"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

