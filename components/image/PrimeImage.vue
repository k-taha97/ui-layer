<script setup lang="ts">
import PrimeVueImage from 'primevue/image'

type ImageType = 'PrimeVue' | 'Nuxt'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<ImageType>,
    default: 'PrimeVue',
  },
})

const { value } = toRef(props)

const isLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = value.src
  img.onload = () => {
    isLoaded.value = true
  }
})
</script>

<template>
  <div class="h-fit relative">
    <div
      v-if="!isLoaded" v-bind="$attrs"
      class="bg-gray/40 h-full w-full transform left-1/2 top-1/2 absolute z-50 animate-pulse -translate-x-1/2 -translate-y-1/2"
    />
    <PrimeVueImage
      v-if="type === 'PrimeVue' && isLoaded" loading="lazy" :src="src" :alt="alt || 'Not found'"
      v-bind="$attrs"
    />
    <NuxtImg v-if="type === 'Nuxt' && isLoaded" loading="lazy" :src="src" :alt="alt || 'Not found'" v-bind="$attrs" />
  </div>
</template>
