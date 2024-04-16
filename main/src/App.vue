<script setup>
import { computed } from 'vue'
import store from './store'
import microApps from './micro-app'

const userInfo = computed(() => {
  return store.getGlobalState('userinfo')
})
const push = (subApp) => {
  history.pushState(null, subApp, subApp)
}
</script>

<template>
  <div class="header">
    <div>全局内容: {{ userInfo.name }}</div>

    <div>
      <button
        v-for="item in microApps"
        :key="item.name"
        @click="push(item.activeRule)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
  <div id="sub-viewport"></div>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
#sub-viewport {
  margin-top: 200px;
  text-align: center;
}
</style>
