import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: '/test',
      component: () => import("@/views/TestView.vue")
    },
    {
      path: '/login/login',
      component: () => import("@/views/login/LoginView.vue")
    },
    {
      path: "/login/reg",
      component: () => import("@/views/login/RegView.vue")
    },
    {
      path: "/login/find",
      component: () => import("@/views/login/FindView.vue")
    },
  ]
})

export default router
