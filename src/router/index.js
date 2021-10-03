import Vue from 'vue'
import Router from 'vue-router'
// @是指src目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  // 当你访问根路径的时候，展示HelloWorld组件的内容
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }]
})
