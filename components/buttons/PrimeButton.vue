<script setup lang="ts">
import Button from 'primevue/button'

import { PrimeIcon } from '../icons'

interface Props {
  loading?: boolean
}

const { loading } = defineProps<Props>()
</script>

<template>
  <Button v-bind="$attrs" :loading="loading">
    <slot />
    <PrimeIcon v-if="loading" class="pi pi-spin pi-spinner text-sm mx-2" />
  </Button>
</template>
