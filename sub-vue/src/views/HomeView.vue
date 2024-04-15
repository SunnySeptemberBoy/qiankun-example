<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const fn = () => {
  router.push('/about')
}
</script>
<template>
  <span @click="fn">home-vue</span>
</template>
