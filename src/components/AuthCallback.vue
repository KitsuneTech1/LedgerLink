<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-2xl">Authenticating...</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { exchangeDiscordCode } from '../composables/useAuth'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code
  if (code) {
    try {
      const token = await exchangeDiscordCode(code)
      localStorage.setItem('jwt', token)
      // Redirect to the dashboard or a protected route
      router.push('/')
    } catch (error) {
      console.error('Error exchanging Discord code:', error)
      // Handle error, e.g., redirect to a login failed page
      router.push('/')
    }
  } else {
    // Handle missing code
    router.push('/')
  }
})
</script>
