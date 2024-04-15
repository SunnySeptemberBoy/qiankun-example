import { createApp } from 'vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

import apps from './micro-app'
import App from './App.vue'

const app = createApp(App).mount('#app')

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('🚀 ~ beforeLoad', app.name)
  },
  beforeMount: [
    (app) => {
      console.log('🚀 ~ beforeMount', app.name)
    }
  ],
  afterMount: [
    (app) => {
      console.log('🚀 ~ afterMount', app.name)
    }
  ],
  afterUnmount: [
    (app) => {
      console.log('🚀 ~ afterUnmount', app.name)
    }
  ]
})
setDefaultMountApp('/sub-vue')
start()
