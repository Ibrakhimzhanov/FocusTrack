<script setup>
import BaseIcon from './BaseIcon.vue'
import { computed } from 'vue'
import { currentPage, navigate } from '../router'
import { isNavItemValid } from '../validators'
import { PAGE_TIMELINE } from '../constants'
import { scrollToCurrentHour } from '../timeline-items'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(PAGE_TIMELINE)
}

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200': props.navItem.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon :name="navItem.icon" class="h-6 w-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
