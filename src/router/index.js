import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'pageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (!store.state.idLogin && to.name !== 'login') {
    return { name: 'login' }; 
  }
  if (store.state.idLogin && to.name === 'login') {
    return { name: from.name };
  }
});

export default router
