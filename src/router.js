import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from './views/UserInfo.vue'
import About from './views/About.vue'
import SignUp from './views/SignUp.vue'
import Home from './views/Home.vue'
import store from './store'


Vue.use(Router)
const router= new Router({
  mode: 'history',
  routes: [
    //默认
    {
      path: '/',
      redirect: '/signup'
    },
    //主页
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Home,
      children: [{
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
        },
        
      ]
    },
    //about
    {
      path: 'about',
      component: About
    },
    //登陆
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.isLog) { 
      next();
    } else {
      next({name:'signup'})
    }
  } else {
    next();
  }
})


export default router;