<script setup>
import { computed } from 'vue'
import { calculateActivityCompletionPercentage } from '../activities'
import { formatSeconds, getProgressColorClass } from '../functions'
import { calculateTrackedActivitySeconds } from '../timeline-items'

const props = defineProps(['index', 'activity'])

const progress = computed(() =>
  calculateActivityCompletionPercentage(
    props.activity,
    calculateTrackedActivitySeconds(props.activity)
  )
)
</script>
<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(progress)" :style="`width: ${progress}%`" />
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ progress }}%</span>
      <span
        >{{ formatSeconds(calculateTrackedActivitySeconds(activity)) }} /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>
