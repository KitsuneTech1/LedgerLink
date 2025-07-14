<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-gray-800">LedgerLink</a>
        <div>
          <LoginButton v-if="!auth.isAuthenticated" />
          <button v-else @click="auth.logout()" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Logout
          </button>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-6 py-8">
      <slot />
    </main>
    <footer class="bg-white mt-8 py-6">
      <div class="container mx-auto px-6 text-center text-gray-600">
        <p>&copy; 2025 LedgerLink. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import LoginButton from '../components/LoginButton.vue'
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()
</script>
