<script setup lang="ts">
import type { GenericObject } from 'vee-validate'
import type { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { Form } from 'vee-validate'

interface Props {
  onSubmit?: (values: Record<string, any>, resetForm?: () => void) => void
  validationSchema?: z.ZodObject<any>
}

const { onSubmit, validationSchema } = defineProps<Props>()

function _onSubmit(values: GenericObject, { resetForm }: { resetForm: () => void }) {
  onSubmit?.(values, resetForm)
}
</script>

<template>
  <Form
    v-slot="{ values: formValues, resetForm }" v-bind="$attrs" :validation-schema="validationSchema ? toTypedSchema(validationSchema) : undefined"
    @submit="_onSubmit"
  >
    <slot :form-values="formValues" :reset-form="resetForm" />
  </Form>
</template>
