/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'templates/**/*.twig',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-blue': '#030B1F',
        'navbar-blue': '#091F5B',
        'off-white': '#EDF0F5',
        'light-blue': '#0285BB',
      },
      fontFamily: {
        headerFont: ['Hiragino Kaku Gothic Std'],
        mainFont: ["Hiragino Maru Gothic ProN"],

      },
    },
  },
  plugins: [],
}

