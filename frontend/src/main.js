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
import blackList from './utils/blackList'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (localStorage.getItem('userId')) {
        next()
    } else {
        for (let i = 0; i < blackList.blacklist.length; i++)
        if (to.path.includes(blackList.blacklist[i])) {
            next('/')
        }
        next()
    }


})

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
