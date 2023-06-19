/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bgc: '#4D68CA',
      red: '#DF884E',
      orange: '#9CC4E8',
      accent: '#F7F1F5',
      pulsed: '#D25890',
      words: '#FF9FCB',
      dark: '#000000',
      hwite: '#FFFFFF',
      blue: '#0000FF'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['20px', '20px'],
      base: ['25px', '40px'],
      lg: ['40px', '48px'],
      xl: ['50px', '60px'],
      huge: ['55px', '59px'],
      giant: ['60px', '55px']
    },
    extend: {}
  },
  plugins: []
}
