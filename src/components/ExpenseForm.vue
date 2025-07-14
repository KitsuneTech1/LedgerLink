<template>
  <form @submit.prevent="addExpense" class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Add Expense</h2>
    <div class="mb-4">
      <label for="expense-amount" class="block text-gray-700">Amount</label>
      <input type="number" id="expense-amount" v-model.number="amount" class="w-full p-2 border rounded" required>
    </div>
    <div class="mb-4">
      <label for="expense-category" class="block text-gray-700">Category</label>
      <input type="text" id="expense-category" v-model="category" class="w-full p-2 border rounded" required>
    </div>
    <div class="mb-4">
      <label for="expense-description" class="block text-gray-700">Description</label>
      <input type="text" id="expense-description" v-model="description" class="w-full p-2 border rounded">
    </div>
    <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Add Expense
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useBudgetStore } from '../store/budget'

const amount = ref(0)
const category = ref('')
const description = ref('')
const budget = useBudgetStore()

const addExpense = () => {
  if (amount.value > 0 && category.value) {
    budget.addExpense({
      amount: amount.value,
      category: category.value,
      description: description.value,
    })
    amount.value = 0
    category.value = ''
    description.value = ''
  }
}
</script>
