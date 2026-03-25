<script setup lang="ts">
import type { InputProps } from './IProps'

import ToggleSwitch from 'primevue/toggleswitch'
import { useField } from 'vee-validate'
import { Label } from '../paragraph'
import ErrorMessage from './ErrorMessage.vue'

defineOptions({ inheritAttrs: false })

const { name, label, containerProps, defaultValue } = defineProps<InputProps>()

// const { value } = useField<boolean>(name)
const { value, errorMessage } = useField<boolean>(name, {
  initialValue: defaultValue ? Boolean(defaultValue) : false,
})
</script>

<template>
  <div class="flex gap-3 items-center" v-bind="{ ...containerProps }">
    <ToggleSwitch
      :id="name" v-model="value" :name="name" :pt="{
        box: 'bg-white border-primary/30 focus:border-secondary',
      }" v-bind="$attrs"
    />

    <Label :for="name" class="!text-primary text-sm">
      {{ label }}
    </Label>
  </div>
  <ErrorMessage :message="errorMessage" :class="errorClass" />
</template>
