<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-2xl">Authenticating...</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

onMounted(async () => {
  const code = route.query.code
  if (code) {
    await auth.handleCallback(code)
    router.push('/')
  } else {
    // Handle error
    router.push('/')
  }
})
</script>
