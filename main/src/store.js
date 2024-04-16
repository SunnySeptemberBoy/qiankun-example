import { initGlobalState } from 'qiankun'
import { reactive } from 'vue'

const state = reactive({
  userinfo: {
    name: 'user',
    age: 18
  }
})

const actions = initGlobalState(state)

actions.onGlobalStateChange((value, prev) => {
  // value: 当前变更后的值
  // prev: 变更前的值
  console.log('[onGlobalStateChange - master]:', value, prev)
  // state 变更的时候就会触发
  Object.assign(state, value)
})

actions.getGlobalState = (key) => {
  return key ? state[key] : state
}

export default actions
