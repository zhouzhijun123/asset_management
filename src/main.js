import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

const {Message}=Element;
Vue.prototype.$Message=Message;
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
