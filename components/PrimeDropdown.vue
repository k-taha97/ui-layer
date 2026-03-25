<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p-dropdown>
    <template #empty>
      {{ t('layers.primevue.components.dropdown.empty') }}
    </template>
    <template #emptyfilter>
      {{ t('layers.primevue.components.dropdown.empty') }}
    </template>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </p-dropdown>
</template>
