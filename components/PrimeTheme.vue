<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'

const { t } = useI18n()
const colorMode = useColorMode()

const menu = ref()
const items = computed(() => [
  {
    label: t('layers.primevue.components.theme.system'),
    icon: 'i-tabler-device-laptop',
    class: { 'p-focus': colorMode.preference === 'system' },
    command: () => {
      colorMode.preference = 'system'
    },
  },
  {
    label: t('layers.primevue.components.theme.light'),
    icon: 'i-tabler-sun',
    class: { 'p-focus': colorMode.preference === 'light' },
    command: () => {
      colorMode.preference = 'light'
    },
  },
  {
    label: t('layers.primevue.components.theme.dark'),
    icon: 'i-tabler-moon',
    class: { 'p-focus': colorMode.preference === 'dark' },
    command: () => {
      colorMode.preference = 'dark'
    },
  },
] as MenuItem[])

const icon = computed(() =>
  colorMode.preference === 'system'
    ? 'i-tabler-device-laptop'
    : colorMode.preference === 'light'
      ? 'i-tabler-sun'
      : 'i-tabler-moon',
)

function toggle(event: Event) {
  menu.value.toggle(event)
}
</script>

<template>
  <ClientOnly>
    <p-button
      :aria-label="t('layers.primevue.components.theme.button.title')"
      :icon="icon"
      :title="t('layers.primevue.components.theme.button.title')"
      aria-controls="overlay_menu"
      aria-haspopup="true"
      plain
      text
      rounded
      type="button"
      @click="toggle"
    />
    <p-menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true"
    />
  </ClientOnly>
</template>
