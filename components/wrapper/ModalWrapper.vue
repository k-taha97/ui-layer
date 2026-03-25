<script setup lang="ts">
import Panel from 'primevue/panel'
</script>

<template>
  <Panel v-bind="$attrs">
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </Panel>
</template>
