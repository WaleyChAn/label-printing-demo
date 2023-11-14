import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}

const routes = [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/demo',
    name: 'DemoPage',
    component: () => import('@/views/demo.vue')
  }
]

const router = new Router({ routes })

export default router
