/** @type {import('tailwindcss').Config} */
const plugin = require('relationship-selector-plugin');
module.exports = {
  content: ['./public/*.html','./public/assets/html/*.html'],
  theme: {
    extend: {},
    colors:{
      toreador:{
        1:'#dd2c68',
        2:'#f3afb6',
        3:'#9f5d77',
        4:'#9c0321',
        5:'#4a001f',
      },
      gray:{
        300:'#d1d5db'
      }
      
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
