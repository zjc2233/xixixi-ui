import Vue from 'vue'
import App from './App.vue'
import xixixiui from '../packages/index.js'
import './assets/fonts/iconfont.js'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.use(xixixiui)

new Vue({
  render: h => h(App)
}).$mount('#app')
