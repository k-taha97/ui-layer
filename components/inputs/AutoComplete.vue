<script setup lang="ts">
import type { PropType } from 'vue'

import PDropdown from 'primevue/dropdown'

import { useField } from 'vee-validate'

import ErrorMessage from './ErrorMessage.vue'

interface IQuery {
  query: string
}

defineOptions({
  inheritAttrs: false,
})

const _props = defineProps({
  name: {
    type: String,
    required: true,
  },
  validation: {
    type: Object,
  },
  isLoading: {
    type: Boolean,
  },
  defaultValue: {
    type: String,
    default: '',
  },
  onComplete: {
    type: Function as PropType<(query: IQuery) => void>,
    default: () => { },
  },
  errorClass: {
    type: String,
  },
  optionLabel: {
    type: String,
    required: true,
  },
  containerProps: {
    type: Object,
  },
  icon: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const { containerProps, name, ...props } = toRefs(_props)

const { value, errorMessage } = useField(name, props.validation, {
  initialValue: props.defaultValue,
})
</script>

<template>
  <div v-bind="containerProps">
    <PDropdown
      v-bind="$attrs" v-model="value" :name="name" :option-label="props.optionLabel.value"
      class="input text-primary !p-1" :class="icon ? 'pl-10' : 'pl-2'" :required="required"
    />

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>

<style lang="css">
.p-select-label {
  color: var(--text-primary) !important;
}

.p-select-overlay {
  background: #fff !important;
}

.p-select-option {
  color: #000 !important;
}

.p-select-option:hover,
.p-select-option.p-focus {
  color: inherit !important;
}

.p-select-label.p-placeholder {
  color: #797979 !important;
}

.p-select-option-selected {
  background-color: theme('colors.secondary');
}
</style>
