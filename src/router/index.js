import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import layout from '@/views/layout/layout'
import list from '@/views/layout/list'
import setting from '@/views/layout/setting'
import home from '@/views/list/home'
import coll from '@/views/list/coll'
import chart from '@/views/charts/chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children:[
        {
          path:'home',
          name:'home',
          component:home
        },
        {
          path:'list',
          name:'list',
          component:list
        },
        {
          path:'coll',
          name:'coll',
          component:coll
        },
        {
          path:'setting',
          name:'setting',
          component:setting,
          children:[
            {
              path:'coll',
              name:'coll',
              component:coll
            },
            {
              path:'list',
              name:'list',
              component:list
            },
            {
              path:'chart',
              name:'chart', 
              component:chart,
              meta:{ title:'chart', noCache:true }
            }
          ]
        }
      ]
    }
  ]
})
