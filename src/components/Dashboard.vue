<template>
  <div class="p-4 md:p-8">
    <div v-if="auth.isAuthenticated">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-8">
          <PaycheckForm />
          <ExpenseForm />
        </div>
        <div class="space-y-8">
          <SpendingOverTimeChart />
          <CategoryBreakdownChart />
        </div>
      </div>
    </div>
    <div v-else class="text-center py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to LedgerLink</h1>
      <p class="text-lg text-gray-600 mb-8">Please log in to manage your budget.</p>
    </div>
  </div>
</template>

<script setup>
import PaycheckForm from './PaycheckForm.vue'
import ExpenseForm from './ExpenseForm.vue'
import SpendingOverTimeChart from './Reports/SpendingOverTimeChart.vue'
import CategoryBreakdownChart from './Reports/CategoryBreakdownChart.vue'
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()
</script>
