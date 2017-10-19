// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

//i18n
// import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// Vue.use(VueI18n)
//
// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)



//ajax
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import './mock/index.js';  // 该项目所有请求使用mockjs模拟数据

// 注册组件
import headerTop from './components/headerTop.vue'
Vue.component('headerTop',headerTop)

//vuex

import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
