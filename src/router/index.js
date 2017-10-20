import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

/**
 * _import 指向视图views的页面
 * 注意,如果vue-loader@13.0.0以上,require组件后,需要加.default
 */
// const _import = require('./_import_' + process.env.NODE_ENV);
// const _import = require('./_import_development').default;
const _import = require('./_import_development');
import Layout from "@/views/layout/Layout"

Vue.use(Router);
export const routesMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '/',
    name: '',
    redirect:"index",
    component: Layout,
    noDropdown:true,
    meta: { requiresAuth: true },
    children:[
      {
        path:"/index",
        name:"首页",
        component: _import("layout/index"),
        meta: { requiresAuth: true },
      }
    ]
  },
  {
    path:"/management",
    name:"资料管理",
    component: Layout,
    redirect:"management/unit",
    meta: { requiresAuth: true },
    children:[
      {
        path:"unit",
        component: _import('management/unit'),
        name:"计量单位",
        meta: { requiresAuth: true },
      },
      {
        path:"goodsCategory",
        component: _import('management/goodsCategory'),
        name:"商品分类",
        meta: { requiresAuth: true },
      },
      {
        path:"goodsInfo",
        component: _import('management/goodsInfo'),
        name:"商品信息",
        meta: { requiresAuth: true },
      },
      {
        path:"warehouse",
        component: _import('management/warehouse'),
        name:"仓库管理",
        meta: { requiresAuth: true },
      },
      {
        path:"client",
        component: _import('management/client'),
        name:"客户管理",
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path:"/procurement",
    name:"采购管理",
    component: Layout,
    redirect:"procurement/procOrder",
    meta: { requiresAuth: true },
    children:[
      {
        path:"procOrder",
        component: _import('procurement/procOrder'),
        name:"采购订单",
        meta: { requiresAuth: true },
      },
      {
        path:"purOrderstorage",
        component: _import('procurement/purOrderstorage'),
        name:"采购订单入库",
        meta: { requiresAuth: true },
      },
      {
        path:"outStorage",
        component: _import('procurement/outStorage'),
        name:"委外入库",
        meta: { requiresAuth: true },
      },
      {
        path:"purpayOrder",
        component: _import('procurement/purpayOrder'),
        name:"采购付款单",
        meta: { requiresAuth: true },
      },
      {
        path:"purReturn",
        component: _import('procurement/purReturn'),
        name:"采购退货",
        meta: { requiresAuth: true },
      },
      {
        path:"purStatement",
        component: _import('procurement/purStatement'),
        name:"采购对账单",
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path:"/stockcontrol",
    name:"入库管理",
    component: Layout,
    redirect:"stockcontrol/storage",
    meta: { requiresAuth: true },
    children:[
      {
        path:"storage",
        component: _import('stockcontrol/storage'),
        name:"入库",
        meta: { requiresAuth: true },
      },
      {
        path:"stockTransfer",
        component: _import('stockcontrol/stockTransfer'),
        name:"库存调拨",
        meta: { requiresAuth: true },
      },
      {
        path:"stockRemoval",
        component: _import('stockcontrol/stockRemoval'),
        name:"出库",
        meta: { requiresAuth: true },
      },
    ]
  },
]

export default new Router({
  mode:"history",
  routes: routesMap
})
