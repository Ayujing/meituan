import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Test1 from '../views/Test1.vue'
import Error from '../views/Error.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: Home,
        // 子路由
        children: [{
            path: 'test1',
            component: Test1
        }]
    },
    {
        path: '/mine',

        // // 通过路由传参时 路径这么写
        // path: '/mine/:name/:age',
        component: Mine
    },
    {
        // 配置404页面
        path: '/*',
        component: Error
    }

    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

// mode 两种 history hash(地址栏多一个#)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router