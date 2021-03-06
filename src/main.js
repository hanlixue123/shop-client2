import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'

//import ajax from './api/ajax'

//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render: h => h(App),
  router,// 配置路由器
  store, //配置vuex
})
