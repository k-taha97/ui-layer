<script setup lang="ts">
import Skeleton from './PrimeSkeleton.vue'

defineProps({
  itemClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ul class="mt-5 flex flex-wrap gap-4 px-4 pb-4">
    <li v-for="i in 10" :key="i" class="card" :class="itemClass">
      <Skeleton height="19.5rem" class="w-full animate-pulse rounded-lg bg-gray/20" />
      <span
        class="absolute left-1/2 top-[52%] h-[6.8rem] w-[85%] flex flex-col transform rounded-md bg-white p-3 text-black -translate-x-1/2"
      >
        <Skeleton height="1.5rem" class="w-full animate-pulse rounded-lg bg-gray/20" />
        <Skeleton height="1rem" class="mt-3 w-full animate-pulse rounded-lg bg-gray/20" />
        <Skeleton height="1rem" class="mt-3 w-full animate-pulse rounded-lg bg-gray/20" />
      </span>
      <Skeleton height="1rem" width="4rem" class="mx-4 mt-5 animate-pulse rounded-lg bg-gray/20" />
    </li>
  </ul>
</template>
