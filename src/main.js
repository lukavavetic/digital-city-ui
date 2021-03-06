import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import axios from 'axios'

import { router } from './routes.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')