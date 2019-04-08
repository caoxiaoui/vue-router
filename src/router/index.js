import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// test组件传值
import test1 from '@/components/test1'
import test2 from '@/components/test2'
// test组件传值
import login from '@/views/login'
import layout from '@/views/layout/layout'
import list from '@/views/layout/list'
import setting from '@/views/layout/setting'
import home from '@/views/list/home'
import coll from '@/views/list/coll'
import input from '@/views/list/input'
import InlineEditTable from '@/views/list/inLineEdit'
import pagination from '@/views/list/pagination'
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
          path:'input',
          name:'input',
          component:input
        },
        {
          path:'InlineEditTable',
          name:'InlineEditTable',
          component:InlineEditTable
        },
        {
          path:'pagination',
          name:'pagination',
          component:pagination
        },
        {
          path:'test1',
          name:'test1',
          component:test1
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
