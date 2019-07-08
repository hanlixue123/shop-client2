
/*  路由器模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({// 配置对相关
    mode:'history',
// 配置路由
    routes
})
