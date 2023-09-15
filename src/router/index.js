import { createRouter, createWebHistory  } from 'vue-router'

//admin routes
import DashboardAdmin from '../views/admin/dashboard.vue'
import IndexAdmin from '../views/admin/index.vue'


const routes = [

  {
    path: '/',
    name: 'admin-dashboard',
    component: DashboardAdmin
  }, 
  {
    path: '/admin/index',
    name: 'admin-index',
    component: IndexAdmin
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router