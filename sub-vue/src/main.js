import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import routes from './router'

let app = null
let router = null
let history = null
function initRouter() {
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/sub-vue' : '/'
  )
  router = createRouter({
    history,
    routes
  })
}
function render(props = {}) {
  const { container } = props
  initRouter()
  app = createApp(App)
  app.config.globalProperties.$qiankun = props
  app.use(router)
  app.use(createPinia())
  app.mount(container ? container.querySelector('#app') : '#app')
  // if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  //   console.log('正在作为子应用运行')
  // }
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {
    // console.log('bootstrap')
  },
  unmount(props) {
    console.log('🚀 ~ unmount ~ unmount:')
    app.unmount()
    app._container.innerHTML = ''
    history.destroy() // 不卸载  router 会导致其他应用路由失败
    router = null
    app = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
