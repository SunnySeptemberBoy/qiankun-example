import './public-path'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let root = null

const createRoot = (props = {}) => {
  const { container } = props
  root = ReactDOM.createRoot(
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  )
}

// 独立运行，直接调用 createRoot函数 render
if (!window.__POWERED_BY_QIANKUN__) {
  createRoot({})
  // @ts-ignore
  root.render(<App />)
}

// lifecycle => 初始化
export async function bootstrap(props) {
  console.log('🚀 ~ bootstrap ~ props:', props)
}

// lifecycle => 挂载
export async function mount(props) {
  props.setGlobalState({
    userinfo: {
      name: 'react'
    }
  })
  // console.log('🚀 ~ mount ~ props:', props)
  createRoot(props)
  //qiankun环境中渲染
  root.render(<App />)
}

// lifecycle => 卸载
export async function unmount(_props) {
  root.unmount()
}
reportWebVitals()
