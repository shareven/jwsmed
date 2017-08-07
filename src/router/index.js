import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Show from '@/components/Show'
import Error from '@/components/Error'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/product/list',
      name: 'List',
      component: List
    },
    {
      path: '/',
      redirect: '/product/list'
    },
    {
      path: '/product/show/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
