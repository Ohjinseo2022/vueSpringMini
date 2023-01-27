import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/Web/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Web/sign',
    name: 'Sign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/SignView.vue')
  },
  {
    path: '/Web/detail',
    name: 'Detail',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/DetailView.vue'),
    props: true
  },
  {
    path: '/Web/Create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/CreatecontentsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
