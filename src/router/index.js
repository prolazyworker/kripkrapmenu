import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/',
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
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
