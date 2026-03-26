/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E2F',
        secondary: '#00D1FF',
      },
    },
  },
  plugins: [],
}
