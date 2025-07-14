<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div v-if="!auth.isAuthenticated" class="flex justify-center">
      <LoginButton />
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <PaycheckForm />
        </div>
        <div>
          <ExpenseForm />
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-xl font-bold mb-4">Reports</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SpendingOverTimeChart />
          <CategoryBreakdownChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginButton from './LoginButton.vue'
import PaycheckForm from './PaycheckForm.vue'
import ExpenseForm from './ExpenseForm.vue'
import SpendingOverTimeChart from './Reports/SpendingOverTimeChart.vue'
import CategoryBreakdownChart from './Reports/CategoryBreakdownChart.vue'
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()
</script>
