import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [{
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },{
    path: "/detail",
    name: "detail",
    component: () => import("../views/Detail.vue")
  },{
    path: "/archives",
    name: "archives",
    component: () => import("../views/Archives.vue")
  }]
})

export default router