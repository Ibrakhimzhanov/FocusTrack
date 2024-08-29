import { computed, ref } from 'vue'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from './constants'
import { id } from './functions'
import { getTotalActivitySeconds } from './timeline-items'

export const activities = ref(generateActivities())

export const trackedActivities = computed(() => 
activities.value.filter(({secondsToComplete}) => secondsToComplete)
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function getActivityProgress(activity) {
  const activitySeconds = getTotalActivitySeconds(activity)
  
  return Math.floor((activitySeconds * HUNDRED_PERCENT) / activity.secondsToComplete)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function createActivity(activity) {
  activities.value.push(activity)
}

function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: 15 * 60 //hours * SECONDS_IN_HOUR
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name
  }))
}
