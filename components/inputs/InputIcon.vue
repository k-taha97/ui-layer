<script setup lang="ts">
import InputIcon from 'primevue/inputicon'

const { icon } = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="outline-primary bg-primary outline-1 outline rounded-l-lg flex h-full w-16 items-center justify-center">
    <InputIcon :class="icon" class="text-white pl-1.5 !w-fit" />
  </div>
</template>
