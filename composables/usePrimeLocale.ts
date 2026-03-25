import type { PrimeVueLocaleOptions } from 'primevue/config'
import { defaultOptions } from 'primevue/config'

function _usePrimeVue() {
  const nuxtApp = useNuxtApp()
  const getPrimeVue: typeof usePrimeVue = () => nuxtApp.vueApp.config.globalProperties.$primevue
  return getPrimeVue()
}

export async function usePrimeLocale(locale: string) {
  if (!locale)
    return

  const primevue = _usePrimeVue()

  const date = ref(new Date(2023, 10, 28))

  // Relative path NEEDED
  const primeVueLocaleFiles = import.meta.glob('../../../../node_modules/primelocale/*.json')
  const localeRe = new RegExp(`\\b${locale}.json$`, 'i')
  const langRe = new RegExp(`\\b${locale.split('-')[0]}.json$`, 'i')
  let localeFileName = Object.keys(primeVueLocaleFiles).find(locale =>
    localeRe.test(locale),
  )
  localeFileName ??= Object.keys(primeVueLocaleFiles).find(locale =>
    langRe.test(locale),
  )

  let localeFile = defaultOptions.locale
  if (localeFileName) {
    let data = (await primeVueLocaleFiles[localeFileName]?.() as Record<string, PrimeVueLocaleOptions>)?.default
    data ??= defaultOptions.locale
    localeFile = data
  }

  primevue.config.locale = {
    ...primevue.config.locale,
    ...localeFile,
  } as PrimeVueLocaleOptions

  // This is a hack to force PrimeVue to re-render the calendar
  date.value = new Date(2023, 10, 28)
}
