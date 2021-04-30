import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import API from './api'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/page.css'

import router from './router'
// axios.defaults.baseURL = 'http://172.22.105.5:3000/'
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false
Vue.prototype.$api = API
// Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
