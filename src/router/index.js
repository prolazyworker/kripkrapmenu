import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
