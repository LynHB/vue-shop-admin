import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入新的组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 默认路由重定义
    { path: '/', redirect: '/login' },
    // 路由规则
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

export default router
