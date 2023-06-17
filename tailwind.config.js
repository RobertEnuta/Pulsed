/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bgc: '#D5D1BD',
      red: '#CD5B6E',
      orange: '#F1B025',
      accent: '#71B4D9',
      pulsed: '#0000ff'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['20px', '26px'],
      lg: ['40px', '48px'],
      xl: ['50px', '60px'],
      huge: ['55px', '59px'],
      giant: ['60px', '55px']
    },
    extend: {}
  },
  plugins: []
}
