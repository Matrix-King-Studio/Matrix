// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/css/init.css'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
