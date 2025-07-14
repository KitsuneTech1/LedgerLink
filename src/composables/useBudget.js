import { ref } from 'vue'
import apiClient from '../api/axios'
import { useAuthStore } from '../store/auth'

export function useBudget() {
  const paychecks = ref([])
  const expenses = ref([])
  const auth = useAuthStore()

  const fetchBudgets = async () => {
    try {
      const response = await apiClient.get('/budgets')
      paychecks.value = response.data.paychecks
      expenses.value = response.data.expenses
    } catch (error) {
      console.error('Error fetching budgets:', error)
    }
  }

  const addPaycheck = async (paycheck) => {
    try {
      const response = await apiClient.post('/paychecks', paycheck)
      paychecks.value.push(response.data)
    } catch (error) {
      console.error('Error adding paycheck:', error)
    }
  }

  const addExpense = async (expense) => {
    try {
      const response = await apiClient.post('/expenses', expense)
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
