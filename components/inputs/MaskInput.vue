<script setup lang="ts">
import InputMask from 'primevue/inputmask'
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label?: string
  mask: string
  prefix?: string
  required?: boolean
  validation?: any
  errorClass?: string
  defaultValue?: string | null
  pt?: any
}>()

const emit = defineEmits(['update:error-message'])

const { name, label, mask, validation, defaultValue, pt } = props

const { value, errorMessage } = useField(name, validation, {
  initialValue: defaultValue || '',
})
watch(errorMessage, (newValue) => {
  emit('update:error-message', newValue)
})
</script>

<template>
  <InputMask
    v-bind="pt"
    :id="name"
    v-model="value"
    :mask="mask"
    :placeholder="`Enter ${label}`"
    :name="name"
    class="input h-full"
  />
</template>
