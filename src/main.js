import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use (Vuetify)

Vue.use(VueResource)

const global = new Vue({
  data: {
    userId: null
  }
})
Vue.prototype.$globals = global

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
