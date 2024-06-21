/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Single Day"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      width: {
        42: '42em',
      },
    },
    colors: {
      'dnd-active': '#339999',
    },
  },
  plugins: [],
}
