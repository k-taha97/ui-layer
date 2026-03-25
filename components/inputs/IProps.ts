import type { InputTextProps, InputTextSlots } from 'primevue/inputtext'

import type { z } from 'zod'

export interface InputProps extends /* @vue-ignore */ Omit<InputTextProps, 'variant' | 'class' | 'defaultValue'>, InputTextSlots {
  name: string
  label?: string
  defaultValue?: string | number | boolean
  placeholder?: string
  icon?: string
  required?: boolean
  errorClass?: string
  containerProps?: object
  variant?: 'normal' | 'icon'
  feedback?: boolean // Added feedback prop for password input to toggle feedback visibility
  validation?: z.ZodTypeAny
}

export interface CheckboxesProps {
  name: string
}
