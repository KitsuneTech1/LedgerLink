<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const redirect = sessionStorage.redirect
  if (redirect) {
    delete sessionStorage.redirect
    const url = new URL(redirect)
    router.push(url.pathname + url.search)
  }
})
</script>
