<script setup>
import { useRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const { proxy } = instance

const router = useRouter()

const changeRouter = () => {
  router.push('/about')
}
const changeGlobalState = () => {
  proxy.$qiankun.setGlobalState({
    userinfo: {
      name: 'sub-vue change global state'
    }
  })
}
</script>
<template>
  <button @click="changeRouter">changeRouter</button>
  <button @click="changeGlobalState">changeGlobalState</button>
</template>
