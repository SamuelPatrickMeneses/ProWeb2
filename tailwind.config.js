/** @type {import('tailwindcss').Config} */
const plugin = require('relationship-selector-plugin');
module.exports = {
  content: ['./public/*.html','./public/assets/html/*.html','./public/app/components/*.js'],
  theme: {
    extend: {},
    colors:{
      paleta:{
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
      '1/3': '33.33%',
      '1/4': '25%'
    },
  },
  plugins: [plugin({
    nex:['*'],
    son:['*']
  })],
};
