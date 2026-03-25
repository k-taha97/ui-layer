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

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      'autoprefixer': {},
    },
  },

  primevue: {
    options: {
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

  components: [
    { path: join(currentDir, 'components'), pathPrefix: false },
  ],
})
