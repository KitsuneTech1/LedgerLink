import axios from 'axios'

export async function exchangeDiscordCode(code) {
  const { data } = await axios.post('/api/auth/discord/callback', { code })
  return data.token
}
