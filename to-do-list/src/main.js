import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/scss/main.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export const eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')