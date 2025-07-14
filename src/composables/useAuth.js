import { ref } from 'vue'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VUE_APP_API_BASE_URL
const DISCORD_CLIENT_ID = import.meta.env.VUE_APP_DISCORD_CLIENT_ID
const REDIRECT_URI = import.meta.env.VUE_APP_REDIRECT_URI

export function useAuth() {
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

  const handleCallback = async (code) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/discord/callback`, { code })
      const jwt = response.data.token
      localStorage.setItem('jwt', jwt)
      isAuthenticated.value = true
      token.value = jwt
    } catch (error) {
      console.error('Error handling Discord callback:', error)
      logout()
    }
  }

  return {
    isAuthenticated,
    token,
    login,
    logout,
    handleCallback,
  }
}
