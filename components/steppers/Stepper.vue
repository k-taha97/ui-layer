<script setup lang="ts">
import type { Component } from 'vue'
import Step from 'primevue/step'
import StepList from 'primevue/steplist'
import StepPanel from 'primevue/steppanel'
import StepPanels from 'primevue/steppanels'
import Stepper from 'primevue/stepper'
import { computed, ref } from 'vue'

import { PrimeButton } from '../buttons'

const props = defineProps({
  stepsList: {
    type: Array<{ label: string, content: Component, icon: string }>,
    required: true,
  },
  defaultInitValue: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['stepCompleted'])

const { value: { defaultInitValue } } = toRef(props)

const activeStep = ref(0)

function handleNextStep(data: unknown) {
  if (activeStep.value < props.stepsList.length - 1) {
    activeStep.value++
  }
  else {
    emit('stepCompleted', data)
  }
}

watchEffect(() => {
  if (defaultInitValue && defaultInitValue > 0) {
    activeStep.value = defaultInitValue
  }
})

const stepContent = computed(() => {
  return props.stepsList[activeStep.value]?.content
})
</script>

<template>
  <Stepper v-model:value="activeStep" v-bind="$attrs" class="basis-[40rem]">
    <StepList>
      <Step
        v-for="(step, index) in props.stepsList" :key="index" v-slot="{ value }" :value="index"
        :pt="{ number: 'hidden ', title: 'text-primary' }"
      >
        <PrimeButton
          class="bg-primary mr-2 inline-flex flex-col gap-2 border-0 rounded-full text-white"
        >
          <span
            class="h-12 w-12 inline-flex items-center justify-center rounded-full border-none" :class="[
              { 'bg-primary text-primary border-primary': +value <= +activeStep },
            ]"
          >
            <i :class="props.stepsList[index]?.icon" />
          </span>
        </PrimeButton>
        {{ step.label }}
      </Step>
    </StepList>

    <StepPanels>
      <StepPanel v-for="(_, index) in props.stepsList" :key="index" :value="index" class="bg-transparent">
        <component :is="stepContent" @next-step="handleNextStep" />
      </StepPanel>
    </StepPanels>
  </Stepper>
</template>
