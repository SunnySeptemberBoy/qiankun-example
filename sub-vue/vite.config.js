import { fileURLToPath, URL } from 'node:url'

import qiankun from 'vite-plugin-qiankun'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// useDevMode 开启时与热更新插件冲突
const useDevMode = true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

// https://vitejs.dev/config/
export default defineConfig({
  base: 'sub-vue',
  plugins: [vue(), qiankun('sub-vue', { useDevMode })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 7777,
    cors: true
  }
})
