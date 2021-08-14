import Vue from 'vue'
import App from './App.vue'
import XixixiUi from '../packages'

Vue.config.productionTip = false
Vue.use(XixixiUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
