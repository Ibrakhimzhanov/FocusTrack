import { HOUR_IN_DAY, PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) return hash

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = 0; hour < HOUR_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
