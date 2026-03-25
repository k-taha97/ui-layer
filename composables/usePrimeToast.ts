function _useToastService() {
  const nuxtApp = useNuxtApp()
  const getToast: typeof useToast = () => nuxtApp.vueApp.config.globalProperties.$toast
  return getToast()
}


export function usePrimeToastError(title?: string | undefined, message?: string | undefined) {
  const { $i18n } = useNuxtApp()
  const toast = _useToastService()
  const activeMessages = ref(new Set())
  const messageKey = `${title}-${message}`

  if (!activeMessages.value.has(messageKey)) {
    activeMessages.value.add(messageKey)

    toast.add({
      closable: true,
      life: 3000,
      severity: 'error',
      summary: title ?? $i18n.t('layers.primevue.composables.toast.error.title'),
      contentStyleClass: 'flex items-center bg-red-200 w-full',
      styleClass: 'flex items-center w-full',
    })
  }
}

export function usePrimeToastSuccess(title?: string | undefined, message?: string | undefined) {
  const { $i18n } = useNuxtApp()
  const toast = _useToastService()

  toast.add({
    closable: true,
    life: 3000,
    severity: 'success',
    summary: title ?? $i18n.t('layers.primevue.composables.toast.success.title'),
    detail: message ?? $i18n.t('layers.primevue.composables.toast.success.message'),
    contentStyleClass: 'flex items-center text-green-500 bg-green-100 w-full',
    styleClass: 'flex items-center w-full',
  })
}

export function usePrimeToastInfo(title?: string | undefined, message?: string | undefined) {
  const { $i18n } = useNuxtApp()
  const toast = _useToastService()

  toast.add({
    closable: true,
    life: 3000,
    severity: 'info',
    summary: title ?? $i18n.t('layers.primevue.composables.toast.success.title'),
    detail: message ?? $i18n.t('layers.primevue.composables.toast.success.message'),
    contentStyleClass: 'flex items-center bg-blue-200 w-full',
    styleClass: 'flex items-center w-full',
  })
}
