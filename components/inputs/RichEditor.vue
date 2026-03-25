<script setup lang="ts">
import Editor from 'primevue/editor'
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    required: false,
  },
})

const { value: { name, defaultValue, readonly } } = toRef(props)

const { value } = useField(name, undefined, {
  initialValue: defaultValue,
})

const editorModules = {
  toolbar: [
    ['image'],
    [{ align: [] }],
  ],
}
</script>

<template>
  <Editor
    v-model="value" :class="{
      'hide-toolbar': readonly,
    }" v-bind="$attrs" :readonly="readonly" :modules="editorModules"
  />
</template>
