<template>
  <button @click="login" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.283 3.001H3.717C3.321 3.001 3 3.322 3 3.718v13.564c0 .396.321.717.717.717h13.564c.396 0 .717-.321.717-.717V3.718c0-.396-.321-.717-.717-.717zM8.667 15.167H6.833v-4.5h1.834v4.5zm3.5-4.5H10.5v4.5h1.667v-4.5zm3.5 0h-1.667v4.5H15.5v-4.5z"/>
    </svg>
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
