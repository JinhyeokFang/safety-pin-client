// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueSession from 'vue-session'
import router from './router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
//import VueSocketIO from 'vue-socket.io'
Vue.prototype.$http = axios
Vue.use(Vuesax)

//Vue.use(VueSocketIO, 'http://localhost:8080')
Vue.use(VueSession)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
