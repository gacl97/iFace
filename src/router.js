import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'
import Communities from './views/Communities.vue'
import NewCommunity from './views/NewCommunity.vue'

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
    {
      path: '/comunidades/criar',
      name: 'criar-comunidade',
      component: NewCommunity
    },
    {
      path: '/comunidades/:id/editar',
      name: 'editar-comunidade',
      component: NewCommunity
    },
    {
      path: '/comunidades',
      name: 'comunidades',
      component: Communities
    }
  ]
})
