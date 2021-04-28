import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product.vue'),
  },
  {
    path: '/classic',
    name: 'classic',
    component: () => import('@/views/classic.vue'),
  },
  {
    path: '/know',
    name: 'know',
    component: () => import('@/views/know.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/views/download.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
