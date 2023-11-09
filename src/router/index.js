import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newMission from '../views/newMission.vue'
 const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newMission',
    name: 'newMission',
    component: newMission
  },
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
