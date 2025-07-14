<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Budget App</h1>
      <LoginButton v-if="!auth.isAuthenticated" />
      <button v-else @click="auth.logout()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </header>
    <main>
      <slot />
    </main>
    <footer class="text-center p-4 text-gray-600">
      &copy; 2025 Budget App
    </footer>
  </div>
</template>

<script setup>
import LoginButton from '../components/LoginButton.vue'
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()
</script>
