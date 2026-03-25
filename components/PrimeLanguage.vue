<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import type { MenuItem } from 'primevue/menuitem'

const { locales, setLocale, locale, t } = useI18n()

const menu = ref()
const items = computed(() =>
  locales.value
    .map(l => l as LocaleObject)
    .map(l => ({
      label: l.name,
      command: async () => {
        await setLocale(l.code)
        await usePrimeLocale(l.code)
      },
      class: locale.value === l.code ? 'p-focus' : '',
    }) as MenuItem),
)

function toggle(event: Event) {
  menu.value.toggle(event)
}
</script>

<template>
  <ClientOnly>
    <p-button
      :aria-label="t('layers.primevue.components.language.button.title')"
      :title="t('layers.primevue.components.language.button.title')" aria-controls="overlay_menu" aria-haspopup="true"
      icon="i-tabler-language" plain text class="text-primary" rounded type="button" @click="toggle"
    />
    <p-menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </ClientOnly>
</template>
