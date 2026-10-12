<script setup lang="ts">
import { ref } from 'vue'
const label = ref('Copy')
async function copy() {
  const el = document.querySelector('.vp-doc') as HTMLElement | null
  const text = el ? el.innerText : ''
  try { await navigator.clipboard.writeText(text) } catch { /* ignore */ }
  label.value = 'Đã chép!'
  setTimeout(() => (label.value = 'Copy'), 1500)
}
</script>
<template>
  <div class="copy-row"><button class="copy-btn" type="button" @click="copy">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
    {{ label }}</button></div>
</template>
