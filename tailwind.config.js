/** @type {import('tailwindcss').Config} */
const plugin = require('relationship-selector-plugin');
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {},
  },
  plugins: [plugin({
    nex:['*']
  })],
};
