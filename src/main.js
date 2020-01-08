import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import './assets/css/global.css'
import axios from 'axios'
import locale from 'element-ui/lib/locale/lang/en'

axios.defaults.baseURL='http://127.0.0.1:8081'
//请求拦截器 添加 token
axios.interceptors.request.use(config=>{
  config.headers.Authorization= window.sessionStorage.getItem('token');
  return config;
})

Vue.config.productionTip = false
//Vue.use(ElementUI);
Vue.use(router)
Vue.prototype.$http=axios;
Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
