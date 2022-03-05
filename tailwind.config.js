// Official Documentation: https://tailwindcss.com/docs/configuration
const colors = require('tailwindcss/colors')

// Remove warnings about deprecated colors in `tailwindcss/colors`:
// delete colors['lightBlue']
// delete colors['warmGray']
// delete colors['trueGray']
// delete colors['coolGray']
// delete colors['blueGray']

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...colors
      },
      // fontFamily: {
      //   mono:  [],
      //   sans:  [],
      //   serif: [],
      // }
    }
  },
  variants: {},
  plugins: []
}