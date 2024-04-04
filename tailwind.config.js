/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'templates/**/*.twig',
    '/src/css/input.css'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#030B1F',
      },
    },
  },
  plugins: [],
}

