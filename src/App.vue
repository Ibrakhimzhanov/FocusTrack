<script setup>
import { ref } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { normalizePageHash } from './functions'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-timeline="goTo(PAGE_TIMELINE)" @go-to-progress="goTo(PAGE_ACTIVITIES)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
