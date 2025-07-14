<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-gray-800 mb-6">Spending Over Time</h3>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useBudgetStore } from '../../store/budget'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const budgetStore = useBudgetStore()

const chartData = computed(() => {
  const sortedExpenses = [...budgetStore.expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
  return {
    labels: sortedExpenses.map(e => new Date(e.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Expenses',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: 'rgba(239, 68, 68, 1)',
        data: sortedExpenses.map(e => e.amount),
        tension: 0.1,
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>
