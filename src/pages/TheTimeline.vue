<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems } from '../validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validators: validateTimelineItems
  }
})
</script>
<template>
  <div class="mt-7">
    <ul v-for="timelineItem in timelineItems" :key="timelineItem.hour">
      <TimelineItem :timeline-item="timelineItem" />
    </ul>
  </div>
</template>
