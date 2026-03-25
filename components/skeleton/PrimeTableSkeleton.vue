<script setup lang="ts">
import Column from 'primevue/column'
import Skeleton from 'primevue/skeleton'

import { PrimeTable } from '../tables'

const props = defineProps<{
  rows?: number
  cols?: number
}>()

const rows = props.rows ?? 7
const cols = props.cols ?? 5
</script>

<template>
  <PrimeTable
    storage-key="skeleton" :total-records="rows" :paginator="false" :pt="{
      root: 'rounded-xl overflow-hidden shadow border border-solid border-primary/40 w-[99.5%] min-w-[30rem] my-3',
      bodyRow: 'bg-white text-black',
    }" :value="new Array(rows)" v-bind="$attrs"
  >
    <Column
      v-for="(col, i) in cols" :key="col" field="skeleton"
      :pt="{ headerCell: 'bg-white text-lg text-white !py-4 px-3', pcColumnFilterButton: 'hidden' }"
    >
      <template #body>
        <div class="flex gap-2 items-center">
          <Skeleton
            v-if="i === 0" border-radius="100%" shape="circle" height="40px" width="45px"
            class="bg-gray/20 animate-pulse"
          />

          <Skeleton width="100%" border-radius="5" height="0.8rem" class="bg-gray/20 animate-pulse" />
        </div>
      </template>
      <template #header>
        <Skeleton width="100%" border-radius="5" height="0.9rem" class="bg-gray/40 animate-pulse" />
      </template>
    </Column>

    <template #empty>
      <div />
    </template>
  </PrimeTable>
</template>

<style scoped>
.animate-pulse {
  animation-duration: 1.5s;
}
</style>
