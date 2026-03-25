<script setup lang="ts">
import Card from 'primevue/card'

const emit = defineEmits(['click'])
</script>

<template>
  <Card class="p-2 bg-white" v-bind="$attrs" @click="emit('click', $event)">
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>

    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>

    <template v-if="$slots.content" #content>
      <slot name="content" />
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </Card>
</template>
