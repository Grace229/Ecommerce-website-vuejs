import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import EasySlider from 'vue-easy-slider'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(EasySlider)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
