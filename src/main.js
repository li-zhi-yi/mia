import Vue from 'vue'
import App from './App.vue'
import './icons/iconfont.css'
import { Tag } from 'vant'
Vue.use(Tag)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
