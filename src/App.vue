<script setup>
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import {currentPage, timelineRef} from "./router"
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
</script>
<template>
  <TheHeader/>
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :current-page="currentPage" ref="timelineRef" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
  </main>
  <TheNav/>
</template>
