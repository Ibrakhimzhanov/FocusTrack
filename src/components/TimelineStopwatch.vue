<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_SUCCESS } from '../constants'
import { BUTTON_TYPE_WARNING } from '../constants'
import { BUTTON_TYPE_DANGER } from '../constants'
import { formatSeconds } from '../functions'
import { isNumber } from '../validators'

defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})
</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER"><ArrowPathIcon class="h-6" /></BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton :type="BUTTON_TYPE_WARNING"><PauseIcon class="h-6" /></BaseButton>
    <BaseButton :type="BUTTON_TYPE_SUCCESS"><PlayIcon class="h-6" /></BaseButton>
  </div>
</template>
