import {ref } from "vue"
import { normalizePageHash } from './functions'
import { PAGE_TIMELINE } from "./constants"

export const currentPage = ref(normalizePageHash())

export function navigate(page) {
    document.body.scrollIntoView()
    currentPage.value = page
  }
