import App from './App'
import uView from '@/uni_modules/uview-ui'
// import axios from 'axios'
import 'mock/index.js'

Vue.use(uView)
// Vue.prototype.$axios =axios
uni.$u.config.unit = 'rpx'//uview2 默认单位是px  此行代码是为了改为rpx
uni.$showMsg=function (title,icon,duration){
	uni.showToast({
		title:title,
		icon:icon,
		duration:duration
	})
}
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif