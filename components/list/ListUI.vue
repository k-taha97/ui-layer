<script setup lang="ts">
import Image from 'primevue/image'

import { Loader } from '../icons'
import { Paragraph } from '../paragraph'

import noData from '/images/no-data.png'

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  noDataURL: {
    type: String,
  },
})
const slots = useSlots()

function hasSlot(name = 'default') {
  return !!slots[name]
}
</script>

<template>
  <div v-if="isLoading" class="h-full min-h-[65dvh] w-full" v-bind="$attrs">
    <Loader />
  </div>

  <slot v-if="!isLoading && hasSlot()" />

  <div v-if="!isLoading && !hasSlot()" class="flex flex-col gap-4 h-full min-h-[60dvh] items-center justify-center">
    <Image :src="noDataURL || noData" alt="No Data" class="rounded-md drop-shadow-md" />
    <Paragraph class="text-2xl text-gray-700">
      No data found.
    </Paragraph>
  </div>
</template>
