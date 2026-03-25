<script setup lang="ts">
import type { AccordionHeaderProps } from 'primevue/accordionheader'
import type { Component } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'

interface Props {
  items: {
    header: string
    content: Component
  }[]
  headerProps?: AccordionHeaderProps
}

const { items, headerProps } = defineProps<Props>()
</script>

<template>
  <Accordion :value="[0]" multiple>
    <AccordionPanel v-for="(item, index) in items" :key="index.toString()" :value="index">
      <AccordionHeader v-bind="headerProps">
        {{ item.header }}
      </AccordionHeader>
      <AccordionContent
        :pt="{
          content: '!bg-transparent mx-0 px-0',
        }"
      >
        <component :is="item.content" />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
