import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import axios from 'axios'

import { router } from './routes.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://192.168.0.13:80/api/';
axios.defaults.headers.common['Accept'] = 'application/json';


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')