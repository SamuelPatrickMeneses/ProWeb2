/** @type {import('tailwindcss').Config} */
const plugin = require('relationship-selector-plugin');
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {},
    colors:{
      toreador1:'#dd2c68',
      toreador2:'#f3afb6',
      toreador3:'#9f5d77',
      toreador4:'#9c0321',
      toreador5:'#4a001f',
    },
    minWidth: {
      '1/2': '50%',
    },
  },
  plugins: [plugin({
    nex:['*'],
    son:['*']
  })],
};
