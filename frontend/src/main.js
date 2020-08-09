// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/css/init.css'

Vue.config.productionTip = false

import Vuex from 'vuex'

Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
