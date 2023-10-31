import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newMission from '../views/newMission.vue'
import outForm from '../views/outForm.vue'
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
  {
    path: '/outform',
    name: 'outForm',
    component: outForm
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
