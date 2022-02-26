const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      // Colors you want to add go here
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.cyan,
      gray: colors.gray,
      white: colors.white,
      yellow: colors.yellow,
    },
    screens: {
      xs: '479px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
