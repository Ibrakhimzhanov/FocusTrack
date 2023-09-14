<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import {
  isActivityValid,
  isNull,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions
} from '../validators'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '../constants'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  selectActivity(activity) {
    return isNull(activity) || isActivityValid(activity)
  }
})

function selectActivity(id) {
  emit('selectActivity', props.activities.find((activity) => activity.id === id) || null)
}
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10 capitalize">
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="selectActivity"
    />
    <div class="flex w-full gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER"><ArrowPathIcon class="h-6" /></BaseButton>
      <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
        00:00:00
      </div>
      <BaseButton :type="BUTTON_TYPE_WARNING"><PauseIcon class="h-6" /></BaseButton>
      <BaseButton :type="BUTTON_TYPE_SUCCESS"><PlayIcon class="h-6" /></BaseButton>
    </div>
    <TimelineHour :hour="timelineItem.hour" />
  </li>
</template>
