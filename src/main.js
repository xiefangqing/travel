// main.js是整个项目的入口文件
import Vue from 'vue'
// 虽然没有写后缀，但webpack会有先后的根据一些后缀去找，先找./App.vue，没有再找./App.js，还没有再找./App.json...
import App from './App'
import router from './router'
// 引入reset.css，重置样式，在不同的手机浏览器上，默认的样式是不统一的，需要把它们的初始化样式统一起来。
import 'styles/reset.css'
// 引入border.css，解决移动端1px边框的问题：有的手机屏幕分辨率比较高，是2倍屏或是3倍屏，在页面上写 border:1px solid green; 1px其实指的是css像素，在2倍屏会对应显示2个物理像素。说白了就是在多倍屏中1px边框会被显示成多像素。通过css3的scale实现真正1px物理像素
import 'styles/border.css'
// 因为很多页面都需要用到iconfont，所以直接在这引入
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

// 下面的注释不能删
/* eslint-disable no-new */
// 项目的根Vue实例
// 挂载点要到index.html中找
new Vue({
  el: '#app',
  // 路由就是根据网址的不同，返回不同的内容给用户
  router,
  store,
  // 注册的局部组件
  components: {App},
  template: '<App/>'
})
