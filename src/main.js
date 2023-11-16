import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/fonts/Noto_Sans/NotoSans.css'
import '@/assets/fonts/FZHTJW/FZHTJW.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
