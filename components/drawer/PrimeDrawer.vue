<script setup lang="ts">
// import { useLockScroll } from '@layers/libs'

import Drawer from 'primevue/drawer'

const props = defineProps({
  buttonProps: {
    type: Object,
    default: () => ({}),
  },
  onToggle: {
    type: Function,
    default: () => { },
  },
})

const isOpen = ref(false)

// useLockScroll(document.body, isOpen)

function toggleDrawer() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <slot name="button" :on-click="toggleDrawer" />

  <Drawer v-model:visible="isOpen" class="w-[100%] lg:w-[700px]" v-bind="$attrs" @hide="props?.onToggle()">
    <slot :on-toggle="toggleDrawer" />
  </Drawer>
</template>
