import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(__dirname, 'components/**/*.{js,vue,ts}'),
    join(__dirname, 'layouts/**/*.vue'),
    join(__dirname, 'pages/**/*.vue'),
    join(__dirname, 'app.{js,vue,ts}'),
    join(__dirname, 'App.{js,vue,ts}'),
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
