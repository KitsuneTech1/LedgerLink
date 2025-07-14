<template>
  <form @submit.prevent="addPaycheck" class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Add Paycheck</h2>
    <div class="space-y-4">
      <div>
        <label for="paycheck-amount" class="block text-sm font-medium text-gray-700">Amount</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="number" id="paycheck-amount" v-model.number="amount" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" required>
        </div>
      </div>
      <div>
        <label for="paycheck-source" class="block text-sm font-medium text-gray-700">Source</label>
        <input type="text" id="paycheck-source" v-model="source" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="e.g. Monthly Salary" required>
      </div>
    </div>
    <div class="mt-6">
      <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Add Paycheck
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useBudgetStore } from '../store/budget'

const amount = ref(0)
const source = ref('')
const budget = useBudgetStore()

const addPaycheck = () => {
  if (amount.value > 0 && source.value) {
    budget.addPaycheck({
      amount: amount.value,
      source: source.value,
    })
    amount.value = 0
    source.value = ''
  }
}
</script>
