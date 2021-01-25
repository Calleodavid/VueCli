import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
require('./assets/css/style.css');
import './plugins/globals.js'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  Buefy,
  render: h => h(App)
}).$mount('#app')
