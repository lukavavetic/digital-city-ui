import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import axios from 'axios'
import vuetify from "./plugins/vuetify";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { router } from './routes'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://192.168.1.2:80/api/';
axios.defaults.headers.common['Header'] = 'application/json';


new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')