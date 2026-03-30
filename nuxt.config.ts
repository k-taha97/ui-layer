import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-viewport',
  ],

  alias: {
    '@ui': join(currentDir, './'),
  },

  css: [
    'primeicons/primeicons.css',
    join(currentDir, 'assets/index.scss'),
  ],

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  primevue: {
    options: {
      theme: {
        preset: 'Aura',
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
    },
  },

  tailwindcss: {
    exposeConfig: true,
  },

  components: [
    { path: join(currentDir, 'components'), pathPrefix: false },
  ],

  build: {
    transpile: ['primevue'],
  },
})
