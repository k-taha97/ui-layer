<script setup lang="ts">
import Galleria from 'primevue/galleria'

import PrimeImage from '../image/PrimeImage.vue'

interface Props {
  images: Array<{
    imageSrc: string
    thumbnailImageSrc?: string
    alt?: string
  }>
}

defineProps<Props>()
</script>

<template>
  <Galleria :value="images" v-bind="$attrs">
    <template #item="slotProps">
      <PrimeImage
        :src="slotProps.item.imageSrc" :alt="slotProps.item.alt || slotProps.item.thumbnailImageSrc"
        style="width: 100%" class="h-[29rem] object-contain"
      />
    </template>
    <template #thumbnail="slotProps">
      <PrimeImage
        :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt || slotProps.item.thumbnailImageSrc"
        class="h-20 w-28 object-contain"
      />
    </template>
  </Galleria>
</template>
