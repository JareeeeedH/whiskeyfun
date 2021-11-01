import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueLazyLoad from 'vue-lazyload'    
Vue.use(VueLazyLoad,{      loading:require('./assets/loading.png') })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
