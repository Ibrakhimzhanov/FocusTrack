import { createApp } from 'vue'
import App from './App.vue'
import { findActiveTimelineItem, startTimelineItemTimer } from './timeline-items'
import { loadState, saveState } from './storage'

import './assets/main.css'

loadState()

const activeTimelineItem = findActiveTimelineItem()

if (activeTimelineItem) startTimelineItemTimer(activeTimelineItem)

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

createApp(App).mount('#app')
