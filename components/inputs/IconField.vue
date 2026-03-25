<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel'

import IconField from 'primevue/iconfield'
import Label from '../paragraph/Label.vue'

interface Props {
  label?: string
  name: string
  required?: boolean
  icon?: string
}

defineOptions({ inheritAttrs: false })

const { label, name } = defineProps<Props>()
// const { t } = useI18n()
</script>

<template>
  <FloatLabel variant="on">
    <IconField>
      <slot />
    </IconField>
    <Label :for="name" class="bg-white">{{ label }}</Label>
  </FloatLabel>
</template>
