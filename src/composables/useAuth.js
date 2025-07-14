import axios from 'axios'

// Always target the API subdomain
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export async function exchangeDiscordCode(code) {
  const { data } = await api.post('/auth/discord/callback', { code })
  return data.token
}
