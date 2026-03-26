/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.{js,vue,ts}',
    './App.{js,vue,ts}',
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
