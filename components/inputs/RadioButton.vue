<script setup>
import RadioButton from 'primevue/radiobutton'

import { Label } from '../paragraph'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  containerClass: {
    type: String,
    required: false,
    default: '',
  },
  labelClass: {
    type: String,
    required: false,
    default: '',
  },
  defaultChecked: {
    type: String,
    required: false,
    default: '',
  },
})

const { name, options, containerClass, defaultChecked } = toRefs(props)

const { value } = useField(name, {}, {
  initialValue: defaultChecked,
})
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-4" :class="containerClass">
    <li v-for="option in options" :key="option.value" class="flex items-center">
      <RadioButton
        v-model="value" :input-id="option.value" :name="name" :value="option.value" :pt="{
          box: 'bg-primary',
        }" v-bind="$attrs"
      />
      <Label :for="option.value" class="ml-2 cursor-pointer" :class="labelClass"> {{ option.label }} </Label>
    </li>
  </ul>
</template>
