<script setup lang="ts">
import type { InputProps } from './IProps'

import Checkbox from 'primevue/checkbox'
import { useField } from 'vee-validate'

import { Label } from '../paragraph'
import ErrorMessage from './ErrorMessage.vue'

defineOptions({
  inheritAttrs: false,
})

const { name, options, containerProps, errorClass } = defineProps<Props>()

interface Props extends InputProps {
  options: Array<{ value: string, label: string | Component }>
}

const { value, errorMessage } = useField(name)
</script>

<template>
  <div class="flex flex-col space-y-1">
    <ul class="flex flex-wrap gap-4 justify-center" v-bind="{ ...containerProps }">
      <li v-for="option in options" :key="option.value" class="flex items-center">
        <Checkbox
          v-model="value" :input-id="option.value" :name="name" :value="option.value" :pt="{
            box: 'bg-primary',
          }" v-bind="$attrs"
        />
        <Label :for="option.value" class="ml-2">
          <component :is="option.label" v-if="typeof option.label !== 'string'" />
          <template v-else>{{ option.label }}</template>
        </Label>
      </li>
    </ul>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
