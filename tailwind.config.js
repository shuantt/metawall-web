/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      }
    },
    extend: {
      colors: {
        'primary': '#03438D',
        'secondary': "#EEC32A",
        'accent': {
          DEFAULT: '#FFA500',
          secondary: '#FFD700',
          tertiary: ''
        },
        'gray': {
          DEFAULT: '#9B9893',
          disabled:'#A8B0B9',
          secondary: '#E5E5E5',
          tertiary: '#D5D5D5'
        }
      }
    },
    plugins: []
  }
}