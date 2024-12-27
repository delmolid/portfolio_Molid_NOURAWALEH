/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.html"  
  ],
  theme: {
    extend: {
      colors: {
        'lavender-blue': '#b6b7fd', 
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'], // Ajoutez DM Sans comme police principale
      },
    },
    },
  plugins: [],
};

