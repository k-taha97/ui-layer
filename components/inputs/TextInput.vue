<script setup lang="ts">
import type { InputProps } from './IProps'

import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import { useField } from 'vee-validate'
import ErrorMessage from './ErrorMessage.vue'
// import { getRequiredPath } from './helpers';
import IconField from './IconField.vue'

const { name, errorClass, label, required = true, defaultValue } = defineProps<InputProps>()
// const { t } = useI18n();

const { value, errorMessage } = useField<string>(name, {
  initialValue: defaultValue ? String(defaultValue) : undefined,
})
</script>

<template>
  <div v-bind="$attrs">
    <IconField :icon="icon" :label="label" :name="name" v-bind="$attrs" :required="required" :value="value" class="text-xs">
      <InputIcon class="pi" :class="icon" />
      <InputText
        v-bind="$attrs" v-model="value" class="input" :class="icon ? 'pl-10' : 'pl-2'" :required="required"
        :name="name" autocomplete="off"
        :default-value="defaultValue ? String(defaultValue) : undefined"
      />
    </IconField>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
