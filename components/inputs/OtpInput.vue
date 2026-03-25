<script setup lang="ts">
import type { InputProps } from './IProps'
import InputOtp from 'primevue/inputotp'
import { useField } from 'vee-validate'
import ErrorMessage from './ErrorMessage.vue'

defineOptions({
  inheritAttrs: false,
})

const { name, validation, ...props } = defineProps<InputProps>()

const { value, errorMessage } = useField<string>(name, validation, {
  initialValue: props.defaultValue as string || '',
})
</script>

<template>
  <div>
    <InputOtp
      v-bind="{ ...$attrs, class: '' }"
      v-model="value"
      :name="name"
      class=""
    />

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
