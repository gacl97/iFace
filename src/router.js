import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'
import Communities from './views/Communities.vue'
import NewCommunity from './views/NewCommunity.vue'
import FriendRequests from './views/FriendRequests.vue'
import NewProfile from './views/NewProfile.vue'
import Messages from './views/Messages.vue'

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
    },
    {
      path: '/amigos/pedidos',
      name: 'pedidos',
      component: FriendRequests
    },
    {
      path: '/perfil/criar',
      name: 'criar-perfil',
      component: NewProfile
    },
    {
      path: '/amigos/:id',
      name: 'mensagens',
      component: Messages
    }
  ]
})
