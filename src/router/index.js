import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

/**
 * _import 指向视图views的页面
 */
const _import = require('./_import_' + process.env.NODE_ENV);
const Layout =_import("layout/Layout")
// import Layout from "@/views/layout/Layout"

console.log(Hello)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Layout
    }
  ]
})
