<script setup lang="ts">
import type { InputProps } from './IProps'
import InputIcon from 'primevue/inputicon'

import InputText from 'primevue/inputtext'
import { useField } from 'vee-validate'
import ErrorMessage from './ErrorMessage.vue'
// import { getRequiredPath } from './helpers';
import IconField from './IconField.vue'

const { name, errorClass, label, required = true, defaultValue, containerProps } = defineProps<InputProps>()
// const { t } = useI18n();

// const { value, errorMessage } = useField<string>(name, { validate: validation }, {
//   initialValue: defaultValue ? String(defaultValue) : '',
// })
const { value, errorMessage } = useField<string>(name, undefined, {
  initialValue: defaultValue ? String(defaultValue) : undefined,
})
</script>

<template>
  <div v-bind="containerProps">
    <IconField :icon="icon" :label="label" :name="name" :required="required" :value="value">
      <InputIcon class="pi" :class="icon" />
      <InputText
        v-bind="$attrs" v-model="value" type="number" class="input" :class="icon ? 'pl-10' : 'pl-2'"
        :required="required" :name="name" autocomplete="off"
      />
    </IconField>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>

<style lang="css">
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
