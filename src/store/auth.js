import { defineStore } from 'pinia'
import { ref } from 'vue'
import { exchangeDiscordCode } from '../composables/useAuth'

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(!!localStorage.getItem('jwt'))
  const token = ref(localStorage.getItem('jwt'))

  const login = () => {
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email`
    window.location.href = discordAuthUrl
  }

  const logout = () => {
    localStorage.removeItem('jwt')
    isAuthenticated.value = false
    token.value = null
  }

  return {
    isAuthenticated,
    token,
    login,
    logout,
  }
})
