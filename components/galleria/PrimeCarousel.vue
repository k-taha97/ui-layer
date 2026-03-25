<script setup>
import Carousel from 'primevue/carousel'

import './styles.scss'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})

const { value: { items } } = toRef(props)
</script>

<template>
  <Carousel
    :value="items" :show-thumbnails="false" :show-indicators="false" circular :pt="{
      root: 'relative',
      items: 'flex items-center',
      indicatorList: 'absolute left-1/2 transform -translate-x-1/2 bottom-2',
    }" v-bind="$attrs"
  >
    <template #item="slotProps">
      <slot name="carousel-item" :item="slotProps.data" />
    </template>
  </Carousel>
</template>

<style>
.p-carousel-prev-button,
.p-carousel-next-button {
  background-color: white;
  opacity: 0.5;
  margin: 0 10px;
  transition: 0.3s all ease-in-out;
}

.p-carousel-prev-button:hover,
.p-carousel-next-button:hover {
  opacity: 1;
}

.p-carousel-prev-button.p-disabled,
.p-carousel-next-button.p-disabled {
  display: none;
}
</style>
