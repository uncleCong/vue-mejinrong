import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import index from '@/views/index'
import todo from '@/views/todo'
import more from '@/views/more'
import tab from '@/views/tab'
import list from '@/views/list'
import account from '@/views/account'
import detail from '@/views/detail'
import setting from '@/views/setting'
import trans from '@/views/trans'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/todo',
      name: 'todo',
      component: todo
    },{
      path: '/more',
      name: 'more',
      component: more
    },{
      path: '/tab',
      name: 'tab',
      component: tab
    },{
      path: '/list',
      name: 'list',
      component: list
    },{
      path: '/account',
      name: 'account',
      component: account
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/setting',
      name: 'setting',
      component: setting
    },{
      path: '/trans',
      name: 'trans',
      component: trans
    }
  ]
})
