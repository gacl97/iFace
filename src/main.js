import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify,{VButton,VAutocomplete} from 'vuetify'
import VueResource from 'vue-resource'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.config.productionTip = false

Vue.use(Autocomplete)
Vue.use (Vuetify)
Vue.use(VueResource)

Vue.use(Vuetify, {
  components: {
    VButton,
    VAutocomplete
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
