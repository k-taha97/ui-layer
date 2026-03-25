<script setup lang="ts">
import InputText from 'primevue/inputtext'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  iconClass: {
    type: String,
    default: '',
  },
  containerClass: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()
</script>

<template>
  <!-- added `group` so we can change child styles when the input is focused -->
  <div class="group relative" :class="containerClass">
    <!-- icon now transitions color on focus of the input via `group-focus-within:` -->
    <i class="pi pi-search text-primary group-focus-within:text-secondary transition-300 transition-colors duration-150 left-3 top-2/4 absolute -mt-[4px]" :class="iconClass" />
    <InputText
      :placeholder="t('layers.primevue.components.inputs.search')"
      class="input mt-2 p-2 pl-10 !rounded-full" v-bind="$attrs"
    />
  </div>
</template>
