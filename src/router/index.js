import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Start },
    { path: '/projects', name: 'projects', component: Start }
  ]
})

export default router