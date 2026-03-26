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
        primary: '',
        secondary: '',
      },
    },
  },
  plugins: [],
}
