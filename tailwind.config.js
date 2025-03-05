/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender-blue': '#b6b7fd', 
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'], // Ajoutez DM Sans comme police principale
      },
      imgpetit: {
        width: '3%',
      }
    },
  },
  plugins: [],
}

