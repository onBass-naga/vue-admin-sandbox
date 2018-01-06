import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Customers from '@/components/customers/Customers'
import CustomerList from '@/components/customers/CustomerList'
import CustomerDetail from '@/components/customers/CustomerDetail'
import NotFound from '@/components/error/NotFound'
import * as auth from '@/utils/auth'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (!auth.isLoggedIn()) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/customers',
      component: Customers,
      children: [
        {
          path: ':id',
          name: 'CustomerDetail',
          beforeEnter: requireAuth,
          component: CustomerDetail
        },
        {
          path: '',
          name: 'Customers',
          beforeEnter: requireAuth,
          component: CustomerList
        }
      ]
    },
    {
      path: '/',
      name: 'Top',
      beforeEnter: requireAuth,
      redirect: { name: 'Customers' }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
