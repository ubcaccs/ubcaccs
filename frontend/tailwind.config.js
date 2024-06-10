/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-blue': '#030B1F',
        'navbar-blue': '#091F5B',
        'off-white': '#EDF0F5',
        'light-blue': '#0285BB',
        'event-blue': '#06163A'
      },
      fontFamily: {
        headerFont: ['Hiragino Kaku Gothic Std'],
        mainFont: ["Hiragino Maru Gothic ProN"],

      },
    },
  },
  plugins: [],
}
