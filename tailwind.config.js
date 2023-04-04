/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#282828',
        'secondary': "#32302F",
        'darkOrange': '#D65D0E'
        
      },
      textColor: {
        'primaryText': '#E7D7AD',
        'warningText': '#CC241D'
      },
      fontFamily: {
       primaryFont: ['"Press Start 2P", cursive'] 
      }
      
    },
  },
  plugins: [],
}