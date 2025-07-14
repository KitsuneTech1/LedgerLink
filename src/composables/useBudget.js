import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../store/auth'

const API_BASE_URL = import.meta.env.VUE_APP_API_BASE_URL

export function useBudget() {
  const paychecks = ref([])
  const expenses = ref([])
  const auth = useAuthStore()

  const fetchBudgets = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/budgets`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      paychecks.value = response.data.paychecks
      expenses.value = response.data.expenses
    } catch (error) {
      console.error('Error fetching budgets:', error)
    }
  }

  const addPaycheck = async (paycheck) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/paychecks`, paycheck, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      paychecks.value.push(response.data)
    } catch (error) {
      console.error('Error adding paycheck:', error)
    }
  }

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/expenses`, expense, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      expenses.value.push(response.data)
    } catch (error) {
      console.error('Error adding expense:', error)
    }
  }

  return {
    paychecks,
    expenses,
    fetchBudgets,
    addPaycheck,
    addExpense,
  }
}
