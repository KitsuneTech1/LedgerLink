<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-gray-800 mb-6">Category Breakdown</h3>
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { useBudgetStore } from '../../store/budget'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const budgetStore = useBudgetStore()

const chartData = computed(() => {
  const expensesByCategory = budgetStore.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        backgroundColor: [
          '#4c51bf',
          '#6b46c1',
          '#9f7aea',
          '#d53f8c',
          '#ed64a6',
          '#f56565',
          '#ed8936',
          '#ecc94b',
          '#48bb78',
          '#38b2ac',
        ],
        data: Object.values(expensesByCategory),
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>
