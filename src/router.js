import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
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
      children:[
        {
            path: '/detail',  //详情页
            name: 'detail',
            component:Detail
        }
      ]
    },
  ]
})
