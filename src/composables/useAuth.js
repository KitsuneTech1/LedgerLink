import axios from 'axios'

// talk to your API subdomain directly
const api = axios.create({
  baseURL: 'https://api.0xb.lol/api'
})

export async function exchangeDiscordCode(code) {
  const { data } = await api.post('/auth/discord/callback', { code })
  return data.token
}
