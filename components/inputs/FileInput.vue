<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import FileUpload from 'primevue/fileupload'
import { useField } from 'vee-validate'

import { PrimeButton } from '../buttons'
import { PrimeIcon } from '../icons'
import { Paragraph } from '../paragraph'
import ErrorMessage from './ErrorMessage.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  validations: {
    type: Object,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  onSelect: {
    type: Function,
    default: () => { },
  },
  onRemoveFile: {
    type: Function,
    default: () => { },
  },
  onClear: {
    type: Function,
    default: () => { },
  },
  errorClass: {
    type: String,
    default: '',
  },
})

const { value: { name, validations, multiple, onSelect, errorClass, onRemoveFile, onClear } } = toRef(props)

const { value, errorMessage } = useField(name, validations)
const primevue = usePrimeVue()

function onSelectFile({ files }: { files: File[] }) {
  value.value = files

  if (!multiple && files.length === 2) {
    return
  }

  if (onSelect) {
    onSelect(files[0])
  }
}

function formatSize(bytes: number) {
  const k = 1024
  const dm = 3
  const sizes = primevue?.config?.locale?.fileSizeTypes

  if (bytes === 0) {
    return `0 ${sizes?.[0]}`
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedSize = Number.parseFloat((bytes / k ** i).toFixed(dm))

  return `${formattedSize} ${sizes?.[i]}`
}

function removeValue(index: number) {
  const files = value.value as Array<File>
  if (files.length > 1) {
    (value.value as Array<File>).splice(index, 1)
  }

  if (files.length === 1) {
    value.value = null
  }
}

function onRemoveTemplatingFile(removeFileCallback: (index: number) => void, index: number) {
  removeFileCallback(index)

  removeValue(index)
}
</script>

<template>
  <div>
    <FileUpload
      v-model="value" :name="name" :max-file-size="1000000" :pt="{
        root: 'border border-primary bg-background',
        fileInfo: 'text-primary text-sm',
        fileName: 'text-secondary',
        pcProgressbar: 'hidden',
        fileActions: 'text-primary',
        pcFileRemoveButton: 'hidden',
        fileThumbnail: 'w-24 h-14 rounded-md object-contain',
      }" v-bind="$attrs" :multiple="multiple" @select="onSelectFile" @clear="onClear?.()" @remove="onRemoveFile?.()"
    >
      <template #header="{ chooseCallback, clearCallback, files }">
        <div class="flex gap-2">
          <PrimeButton class="base-btn px-2 h-9" @click="chooseCallback()">
            Select
          </PrimeButton>
          <PrimeButton
            class="outline-btn px-6 h-9" :disabled="!files || files.length === 0" @click="() => {
              clearCallback();
              removeValue(files.length);
            }"
          >
            Cancel
          </PrimeButton>
        </div>
      </template>
      <template #content="{ files, removeFileCallback }">
        <div class="pt-4 flex flex-col gap-8">
          <div v-if="files.length > 0">
            <div class="flex flex-wrap gap-4">
              <div
                v-for="(file, index) of (!multiple ? files.slice(0, 1) : files)"
                :key="file.name + file.type + file.size"
                class="border-primary px-5 py-7 border rounded-md flex h-24 w-full items-center justify-between"
              >
                <span class="flex gap-4 items-center">
                  <div v-if="file.type.startsWith('image/')">
                    <img
                      role="presentation" :alt="file.name" :src="(file as any).objectURL" width="90" height="55"
                      class="rounded-md h-20"
                    >
                  </div>
                  <div v-else-if="file.type === 'application/pdf'">
                    <PrimeIcon class="pi text-primary pi-file-pdf pdf-icon text-3xl" />
                  </div>
                  <Paragraph class="font-semibold max-w-60 whitespace-nowrap text-ellipsis overflow-hidden">
                    {{ file.name }}
                  </Paragraph>
                  <Paragraph class="!text-primary">
                    {{ formatSize(file.size) }}
                  </Paragraph>
                </span>
                <PrimeIcon
                  class="pi pi-times text-primary cursor-pointer"
                  @click="onRemoveTemplatingFile(removeFileCallback, index)"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #empty>
        <span class="text-secondary mt-5 flex flex-col items-center">
          <PrimeIcon class="pi pi-upload text-3xl mb-5" />
          Drag and drop files to here to upload.
        </span>
      </template>
    </FileUpload>

    <ErrorMessage :message="errorMessage" :class="errorClass" />
  </div>
</template>
