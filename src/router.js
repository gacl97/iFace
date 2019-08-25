import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/amigos',
      name: 'amigos',
      component: Friends
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Profile
    },
  ]
})
