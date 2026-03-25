<script setup lang="ts">
import type { InputProps } from './IProps'

import InputIcon from 'primevue/inputicon'
import Password from 'primevue/password'

import { useField } from 'vee-validate'
import ErrorMessage from './ErrorMessage.vue'
import IconField from './IconField.vue'

const { name, defaultValue, feedback = false } = defineProps<InputProps>()

// Normalize initial value to avoid boolean values
function normalizeInitialValue(val: any) {
  if (val === true || val === false)
    return ''
  return val ?? ''
}

const { value, errorMessage } = useField(
  name,
  {
    initialValue: normalizeInitialValue(defaultValue),
  },
)
</script>

<template>
  <div class="w-auto" v-bind="$attrs">
    <IconField :icon="icon" :label="label" :name="name" v-bind="$attrs" :required="required" :value="value">
      <InputIcon class="pi" :class="icon" />
      <Password
        v-bind="{
          ...$attrs,
          class: 'h-full w-full',
        }" :id="name" v-model="(value as string)" class="input" :placeholder="placeholder" :required="required" toggle-mask
        :feedback="feedback" :class="icon ? 'pl-10' : 'pl-2'"
      />
    </IconField>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
