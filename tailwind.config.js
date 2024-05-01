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
      },
    },
  },
  plugins: [],
}

