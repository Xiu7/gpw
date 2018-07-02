// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store/store'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
import http from './common/http.js'

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$http = http
var $ = window.$ = window.jQuery =  require('jquery')
Vue.use(iView)
window.Bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
