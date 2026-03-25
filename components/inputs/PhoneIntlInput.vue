<script setup lang="ts">
import type { InputProps } from './IProps'
import { useField } from 'vee-validate'
import { VueTelInput } from 'vue-tel-input'
import ErrorMessage from './ErrorMessage.vue'
import 'vue-tel-input/vue-tel-input.css'

const { name, errorClass, required = true, defaultValue } = defineProps<InputProps>()

const { value, errorMessage } = useField<string>(name, undefined, {
  initialValue: defaultValue ? String(defaultValue) : '',
})
</script>

<template>
  <div v-bind="$attrs">
    <VueTelInput
      v-bind="$attrs"
      v-model="value"
      class="input"
      :required="required"
      :name="name"
      mode="international"
    />
    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
