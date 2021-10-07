import Vue from 'vue'
import App from './App.vue'
import XixixiUi from '../packages'
import '../packages/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.use(XixixiUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
