<script setup lang="ts">
import Button from 'primevue/button'

import { PrimeIcon } from '../icons'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  onClick: {
    type: Function,
    required: false,
    default: null,
  },
})

const { back } = useRouter()
const { t } = useI18n()
</script>

<template>
  <Button class="text-primary px-3.5 py-1.5 border border-gray-200 rounded-full bg-white flex shadow-sm transition-300 items-center relative focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-md hover:-translate-y-0.5" v-bind="$attrs" @click="onClick ? onClick() : back()">
    <span
      class="flex h-6 w-5 items-center justify-center"
      aria-hidden="true"
    >
      <PrimeIcon class="pi pi-arrow-left text-primary text-xs" />
    </span>

    <span class="leading-none font-semibold">
      {{ t('layers.primevue.components.buttons.back') }}
    </span>
  </Button>
</template>
