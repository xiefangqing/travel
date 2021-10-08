import Vue from 'vue'
import Router from 'vue-router'
// @是指src目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  // 当你访问根路径的时候，展示HelloWorld组件的内容
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // 异步组件
    // component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
