import Vue from 'vue'
import App from './App.vue'
import XixixiUi from '../packages'
import '../public/theme/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(XixixiUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
