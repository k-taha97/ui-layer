<script setup lang="ts">
interface Props {
  message?: string
}
const { message } = defineProps<Props>()

/**
 * Optional localization handler:
 * If your Zod schemas return translated messages directly (recommended),
 * you don’t need to touch the message here.
 * But if you want to map certain keys to translations, do it here.
 */
// function localizeMessage(msg?: string) {
//   if (!msg)
//     return ''
//   console.log('ErrorMessage msg:', msg)
//   // Optional: map known messages to i18n keys
//   switch (msg) {
//     case 'Invalid email':
//       return t('validation.invalid_email')
//     default:
//       return msg
//   }
// }
</script>

<template>
  <small v-if="message" class="text-sm text-red-400" v-bind="$attrs">
    * {{ message }}</small>
</template>
