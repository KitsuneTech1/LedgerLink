<template>
  <form @submit.prevent="addPaycheck" class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Add Paycheck</h2>
    <div class="mb-4">
      <label for="paycheck-amount" class="block text-gray-700">Amount</label>
      <input type="number" id="paycheck-amount" v-model.number="amount" class="w-full p-2 border rounded" required>
    </div>
    <div class="mb-4">
      <label for="paycheck-source" class="block text-gray-700">Source</label>
      <input type="text" id="paycheck-source" v-model="source" class="w-full p-2 border rounded" required>
    </div>
    <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Add Paycheck
    </button>
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
