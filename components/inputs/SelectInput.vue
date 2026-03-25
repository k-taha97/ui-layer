<script setup lang="ts">
import type { InputProps } from './IProps'

import { useField } from 'vee-validate'

import PrimeDropdown from '../PrimeDropdown.vue'
import ErrorMessage from './ErrorMessage.vue'
import { getRequiredPath } from './helpers'
import IconField from './IconField.vue'
import InputIcon from './InputIcon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<InputProps>()

const { value: { name, label, icon, containerProps, validation, placeholder, defaultValue, required } } = toRef(props)
const { t } = useI18n()

const { value, errorMessage } = useField(name, required ? validation?.required(getRequiredPath(t(`layers.primevue.components.inputs.${label}`))) : validation, {
  initialValue: defaultValue,
})

watch(() => defaultValue, () => {
  if (defaultValue) {
    value.value = defaultValue
  }
})
</script>

<template>
  <div v-bind="containerProps">
    <IconField class="w-full" :label="label" :name="name" :placeholder="placeholder" :required="required">
      <InputIcon :icon="icon" class="pi pt-1" />
      <PrimeDropdown
        v-bind="{ ...$attrs }" :id="name" v-model="value" :default-value="defaultValue" :name="name"
        class="outline-primary p-2 outline-1 outline rounded-l-none rounded-r-lg h-full w-full transition-300" :pt="{
          option: 'p-3 my-1 w-full',
        }"
      />
    </IconField>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
