import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import Aura from '@primeuix/themes/aura'
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
    '@ui': currentDir,
  },

  colorMode: {
    classSuffix: '',
  },

  css: [
    'primeicons/primeicons.css',
    join(currentDir, 'assets/index.scss'),
  ],

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    strategy: 'no_prefix',
  },

  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: 'outlined',
      inputVariant: 'outlined',
      theme: {
        preset: Aura,
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
    components: {
      prefix: 'Prime',
      include: '*',
    },
  },

  tailwindcss: {
    exposeConfig: true,
    configPath: join(currentDir, 'tailwind.config.ts'),
  },

  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/.nuxt/**'],
      },
    },
  },
})
