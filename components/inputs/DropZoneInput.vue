<script lang="ts" setup>
import { useField } from 'vee-validate'
import { useDropzone } from 'vue3-dropzone'

import { PrimeButton } from '../buttons'
import { PrimeIcon } from '../icons'
import { Label } from '../paragraph'
import ErrorMessage from './ErrorMessage.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  validations: {
    type: Object,
    default: {} as object,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  onSelect: {
    type: Function,
    default: () => { },
  },
  errorClass: {
    type: String,
    default: '',
  },
  defaultValue: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
  },
  fileType: {
    type: String,
    default: 'image/',
  },
  itemClass: {
    type: Object || String,
    default: '',
  },
})

const { value: { name, validations, errorClass, multiple, defaultValue, disabled, fileType } } = toRef(props)

const { value: files, errorMessage } = useField<string[] | File[]>(name, validations, {
  initialValue: [defaultValue],
})

const previews = ref<{ url: string, isImage: boolean, name: string }[]>([])

const isImage = (type: string): boolean => type.startsWith('image/') || type.endsWith('image/')

watchEffect(() => {
  if (defaultValue) {
    previews.value = [{
      isImage: isImage(fileType),
      name,
      url: defaultValue,
    }]
  }
})

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  multiple,
  disabled,
})

function onDrop(acceptedFiles: File[]) {
  files.value = acceptedFiles

  const result = acceptedFiles.map(url => ({
    url: URL.createObjectURL(url),
    isImage: isImage(url.type),
    name: url.name,
  }))
  previews.value = result
}

function onRemoveFile(e: MouseEvent, index: number) {
  e.stopPropagation();

  (files.value as (Array<unknown>)).splice(index, 1);
  (previews.value as Array<unknown>).splice(index, 1)
}
</script>

<template>
  <div>
    <div
      v-bind="getRootProps()" class="border-primary border rounded-lg p-4 shadow transition-colors" :class="[
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white',
      ]"
    >
      <span v-if="previews.length === 0" class="text-secondary mt-5 flex flex-col items-center">
        <PrimeIcon class="pi pi-upload mb-5 text-3xl" />
        Drag and drop files to here to upload.
      </span>
      <span class="flex justify-center">
        <PrimeButton v-if="previews.length > 0 && !disabled" class="btn text-secondary">
          <PrimeIcon class="pi pi-upload text-3xl" />
        </PrimeButton>
      </span>
      <input v-bind="getInputProps()">
      <ul class="mt-8 flex flex-wrap justify-center gap-5">
        <li
          v-for="(file, i) in previews" :key="file.url"
          class="border-primary relative flex flex-col items-center border rounded-lg p-1 shadow-md"
          :class="itemClass"
          @click="(e) => e.stopPropagation()"
        >
          <div class="h-48 w-48 overflow-hidden rounded-md">
            <img
              v-if="file.isImage" :src="typeof file === 'string' ? file : file.url" alt="Uploaded Image"
              class="h-full w-full object-contain"
            >

            <div class="h-full flex flex-col items-center justify-center gap-4">
              <PrimeIcon class="pi pi-file text-primary text-6xl" />
              <Label>
                {{ file.name }}
              </Label>
            </div>
          </div>

          <PrimeButton
            v-if="!disabled"
            class="bg-primary/40 cursor-pointer rounded-full px-1.5 text-lg text-red-500 !absolute -right-3 -top-4"
            @click="(e: MouseEvent) => onRemoveFile(e, i)"
          >
            <PrimeIcon class="pi pi-times text-sm" />
          </PrimeButton>
        </li>
      </ul>
    </div>
  </div>
  <ErrorMessage :message="errorMessage" :class="errorClass" />
</template>
