<script setup>
import { ref } from 'vue'
import { isTimelineItemValid } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Traning' }
]
const selectedActivityId = ref(1)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <BaseSelect
      placeholder="Rest"
      :options="options"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
    <TimelineHour :hour="timelineItem.hour" />
  </li>
</template>
