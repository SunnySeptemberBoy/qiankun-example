const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7777/sub-vue',
    activeRule: '/sub-vue'
  }
]

const apps = microApps.map((item) => {
  return {
    ...item,
    container: '#sub-viewport' // 子应用挂载的div
    // props: {
    //   routerBase: item.activeRule, // 下发基础路由
    //   getGlobalState: store.getGlobalState // 下发getGlobalState方法
    // }
  }
})

export default apps
