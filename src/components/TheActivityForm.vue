<script setup>
import { isActivityValid } from '@/validators'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { nextTick, ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import { id } from '../functions'

const emit = defineEmits({
  submit: isActivityValid
})

const name = ref('')

async function submit() {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      class="w-full rounded border px-4 text-xl"
      type="text"
      placeholder="Activity name"
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
