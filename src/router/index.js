import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login'
import WelcomePage from '../components/WelcomePage'

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      component: WelcomePage,
      name: 'welcome',
      path: '/welcome'
    }
  ];

export default new VueRouter({routes});