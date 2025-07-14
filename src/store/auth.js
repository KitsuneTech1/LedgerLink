import { defineStore } from 'pinia'
import { useAuth } from '../composables/useAuth'

export const useAuthStore = defineStore('auth', () => {
  const {
    isAuthenticated,
    token,
    login,
    logout,
    handleCallback,
  } = useAuth()

  return {
    isAuthenticated,
    token,
    login,
    logout,
    handleCallback,
  }
})
