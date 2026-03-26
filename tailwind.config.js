import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const layerDir = dirname(fileURLToPath(import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(layerDir, 'components/**/*.{js,vue,ts}'),
    join(layerDir, 'layouts/**/*.vue'),
    join(layerDir, 'pages/**/*.vue'),
    join(layerDir, 'app.{js,vue,ts}'),
    join(layerDir, 'App.{js,vue,ts}'),
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
