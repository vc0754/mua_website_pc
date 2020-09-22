import Vue from 'vue'
import App from './App.vue'

// import $ from 'jquery'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/bootstrap/dist/js/bootstrap.min.js';

// import 'swiper/dist/js/swiper.min.js';
import 'swiper/swiper-bundle.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
