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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
