import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import share from './views/share.vue'
import zmkm from './views/zmkm.vue'
import join from './views/join.vue'
import custom from './views/custom.vue'
import Login from './views/Login.vue'
import Logup from './views/Logup.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:{name:"home"}
    },
    {
      path: '/home',   //主页
      name: 'home',
      component: Home,
    },
    {
      path: '/detail/:id',  //详情页
      name: 'detail',
      component:Detail
    },
    {
      path:'/share',
      name:'share',
      component:share
    },
    {
      path:'/zmkm',
      name:'zmkm',
      component:zmkm
    },
    {
      path:'/join',
      name:'join',
      component:join
    },
    {
      path:'/custom',
      name:'custom',
      component:custom
    },
    {
      path:'/login',
      name:'login',
      component:Login   //登录
    },
    {
      path:'/logup',
      name:'logup',
      component:Logup  //注册
    }
  ]
})
