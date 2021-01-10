import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入新的组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/home/Welcome.vue'
import User from '../components/home/User.vue'
import Report from '../components/home/Report'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 默认路由重定义
    { path: '/', redirect: '/login' },
    // 路由规则
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: User },
        { path: '/reports', component: Report }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  /*
    to: 将要访问哪个路径
    from: 代表哪个路径调整来（入口uri）
    next 处理函数 next()放行，next('/xxx')强制跳转
   */
  if (to.path === '/login') {
    return next()
  }
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
