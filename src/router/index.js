import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

/**
 * _import 指向视图views的页面
 * 注意,如果vue-loader@13.0.0以上,require组件后,需要加.default
 */
const _import = require('./_import_' + process.env.NODE_ENV);
import Layout from "@/views/layout/Layout"

Vue.use(Router);
const routesMap = [
  {
    path: '/',
    name: '首页',
    redirect:"management",
    component: Layout
  },
  {
    path:"/management",
    name:"资料管理",
    component: Layout,
    redirect:"management/unit",
    children:[
      {
        path:"unit",
        component: _import('management/unit'),
        name:"计量单位"
      },
      {
        path:"goodsCategory",
        component: _import('management/goodsCategory'),
        name:"商品分类"
      }
    ]
  }
]

export default new Router({
  routes: routesMap
})
