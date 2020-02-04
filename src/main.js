import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import './assets/css/global.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/bootstrap.css'
//import './asse  ts/js/jquery-3.4.1.min'
import axios from 'axios'
import locale from 'element-ui/lib/locale/lang/en'
import routes from "./rout";
import  VueI18n from 'vue-i18n'
import Clipboard from 'clipboard';
Vue.prototype.Clipboard=Clipboard;
Vue.prototype.$http=axios;

axios.defaults.baseURL=process.env.NODE_ENV === "production" ?"http://10.0.20.114:9001":"/api"
//axios.defaults.baseURL='/api'
//process.env.NODE_ENV === "production" ? "axios.defaults.baseURL='http://10.0.20.114:9001'" : "axios.defaults.baseURL='/api'",
//axios.defaults.baseURL='http://10.0.20.114:9001'
//axios.defaults.baseURL='http://127.0.0.1:8081'
//axios.defaults.baseURL='http://10.0.20.114:9001'
//请求拦截器 添加 token
// axios.interceptors.request.use(config=>{
//   config.headers.Authorization= window.sessionStorage.getItem('token');
//   return config;
// })
router.afterEach(() => {

    window.scrollTo(0,0)

})
axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    timeout: 5000 // 请求超时时间
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(router)

Vue.use(ElementUI, { locale })
 Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
 })
Vue.use(VueI18n)

const  i18n = new VueI18n({
  locale: 'en',          //默认语言
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en'),
  }
})
new Vue({
  router,
  i18n,
  routes,
  render: h => h(App),
}).$mount('#app')

