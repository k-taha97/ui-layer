<script setup lang="ts">
import type { Component, RendererElement, RendererNode } from 'vue'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import PrimeVueTabs from 'primevue/tabs'

const { tabsList, panelClass } = defineProps({
  tabsList: {
    type: Array<{ label: string | VNode<RendererNode, RendererElement, { [key: string]: unknown }>, icon?: string, content: Component, props?: object }>,
    required: true,
  },
  panelClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ClientOnly>
    <PrimeVueTabs value="0" scrollable>
      <TabList
        :pt="{
          activeBar: 'bg-primary/70 h-0.5 rounded-t-md',
          content: 'text-primary',
          root: 'text-primary bg-white border rounded-t-md',
          nextButton: 'shadow-none',
          prevButton: 'shadow-none',
        }"
      >
        <Tab v-for="(item, i) in tabsList" :key="i" class="text-primary m-1.5 p-1.5 rounded-none flex shadow-none items-center !text-sm" :value="i.toString()">
          <i v-if="item.icon" :class="item.icon" class="pi text-sm mx-1" />
          {{ item.label }}
        </Tab>
      </TabList>

      <TabPanels class="border border-t-0 border-gray-200 rounded-b-md bg-white h-full" :class="panelClass">
        <TabPanel v-for="(item, i) in tabsList" :key="i" :value="i.toString()" class="h-fit">
          <component :is="item.content" v-bind="item.props" />
        </TabPanel>
      </TabPanels>
    </PrimeVueTabs>
  </ClientOnly>
</template>
