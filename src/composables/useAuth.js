import { ref } from 'vue'
import axios from 'axios'

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

export async function exchangeDiscordCode(code) {
  const { data } = await axios.post('/api/auth/discord/callback', { code });
  return data.token;
}

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
      const jwt = await exchangeDiscordCode(code)
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
