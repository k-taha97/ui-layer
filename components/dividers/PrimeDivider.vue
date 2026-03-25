<script setup lang="ts">
import Divider from 'primevue/divider'
</script>

<template>
  <Divider v-bind="$attrs">
    <slot />
  </Divider>
</template>
