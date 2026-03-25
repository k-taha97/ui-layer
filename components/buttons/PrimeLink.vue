<script setup lang="ts">
import Button from 'primevue/button'

interface Props {
  to?: string
  href?: string
  isExternal?: boolean
}

const { to, isExternal, href } = defineProps<Props>()
</script>

<template>
  <Button :as="isExternal ? 'a' : 'router-link'" v-bind="$attrs" :to="to" :href="to || href" class="whitespace-nowrap">
    <slot />
  </Button>
</template>
