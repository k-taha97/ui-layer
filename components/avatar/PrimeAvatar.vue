<script setup lang="ts">
import Avatar from 'primevue/avatar'

interface GenericAvatarProps {
  label?: string // Text inside avatar
  icon?: string // Prime icon class
  image?: string // Image src
  size?: 'normal' | 'large' | 'xlarge' | 'small' | 'medium'
  shape?: 'circle' | 'square'
  bgColor?: string // Tailwind or custom class
  textColor?: string // Tailwind or custom class
  class?: string[] // Extra classes
}

const props = withDefaults(defineProps<GenericAvatarProps>(), {
  size: 'medium',
  shape: 'circle',
  bgColor: 'bg-gray-300',
  textColor: 'text-black',
})
</script>

<template>
  <Avatar
    :label="label"
    :image="image"
    :icon="icon"
    :size="size"
    :shape="shape"
    :class="[bgColor, textColor, props.class]"
  >
    <slot />
  </Avatar>
</template>
