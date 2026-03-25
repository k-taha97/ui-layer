<script setup lang="ts">
import Badge from 'primevue/badge'

const { value, severity } = defineProps({
  value: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    default: 'info',
  },
})
</script>

<template>
  <Badge :value="value" :severity="severity" class="text-white px-3 py-1 rounded-full" v-bind="$attrs" />
</template>
