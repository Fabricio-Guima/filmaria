import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Filme from '@/views/Filme'
import MeusFilmes from '@/views/MeusFilmes'
import Erro from '@/views/Erro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filme/:id',
    name: 'Filme',
    component: Filme,
    props: true
  },
  {
    path: '/salvos',
    name: 'MeusFilmes',
    component: MeusFilmes
  },
  {
    path: '/*',
    name: 'Erro',
    component: Erro
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
