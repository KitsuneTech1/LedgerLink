<template>
  <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Login with Discord
  </button>
</template>

<script setup>
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()

const login = () => {
  auth.login()
}
</script>
