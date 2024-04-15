<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const fn = () => {
  router.push('/')
}
</script>
<template>
  <span @click="fn">about-vue</span>
</template>
