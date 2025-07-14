import { defineStore } from 'pinia'
import { useBudget } from '../composables/useBudget'

export const useBudgetStore = defineStore('budget', () => {
  const {
    paychecks,
    expenses,
    fetchBudgets,
    addPaycheck,
    addExpense,
  } = useBudget()

  return {
    paychecks,
    expenses,
    fetchBudgets,
    addPaycheck,
    addExpense,
  }
})
