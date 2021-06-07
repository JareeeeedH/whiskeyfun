import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css'; 

import VueLazyLoad from 'vue-lazyload'    
Vue.use(VueLazyLoad,{      loading:require('./assets/loading.png') })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
