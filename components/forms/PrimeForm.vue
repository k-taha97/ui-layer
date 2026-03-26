<script setup lang="ts">
import type { GenericObject } from 'vee-validate'
import { Form } from 'vee-validate'

interface Props {
  onSubmit?: (values: Record<string, any>, resetForm?: () => void) => void
  validationSchema?: Record<string, any>
}

const { onSubmit, validationSchema } = defineProps<Props>()

function _onSubmit(values: GenericObject, { resetForm }: { resetForm: () => void }) {
  onSubmit?.(values, resetForm)
}
</script>

<template>
  <Form
    v-slot="{ values: formValues, resetForm }" v-bind="$attrs" :validation-schema="validationSchema ?? undefined"
    @submit="_onSubmit"
  >
    <slot :form-values="formValues" :reset-form="resetForm" />
  </Form>
</template>
