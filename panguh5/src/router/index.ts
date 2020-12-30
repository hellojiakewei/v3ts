import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: "豆神大语文提分班-迎新", arrow: true, keepAlive: true },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/order',
    name: 'Order',
    meta: { title: "订单页面", arrow: true, keepAlive: false },
    component: () => import('@/views/Order.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/pangu'),
  routes
})

export default router
