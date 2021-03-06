import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import './assets/css/global.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/bootstrap.css'
//import './asse  ts/js/jquery-3.4.1.min'
import axios from 'axios'

// import routes from "./rout";



Vue.use(Vuex);

// import Vuex from 'vuex'
import Clipboard from 'clipboard';
Vue.prototype.Clipboard=Clipboard;

Vue.prototype.$http=axios;
// Vue.prototype.$http.defaults.withCredentials=true;

axios.defaults.baseURL=process.env.NODE_ENV === "production" ?"http://47.96.165.193:10010/api":"/api"

//axios.defaults.baseURL='/api'
//process.env.NODE_ENV === "production" ? "axios.defaults.baseURL='http://10.0.20.114:9001'" : "axios.defaults.baseURL='/api'",
//axios.defaults.baseURL='http://10.0.20.114:9001'
//axios.defaults.baseURL='http://127.0.0.1:8081'
//axios.defaults.baseURL='http://localhost:10010/api'
//请求拦截器 添加 token
// axios.interceptors.request.use(config=>{
//   config.headers.Authorization= window.sessionStorage.getItem('token');
//   return config;
// })

// router.beforeEach((to, from, next) => {
//     // window.console.log(to.name,from.name)
//     if(to.name==='Confirm'&& from.name==='Buy'){
//         // window.console.log(from.meta.keepAlive,to.meta.keepAlive)
//         from.meta.keepAlive = true;
//         // window.console.log(from.meta.keepAlive,to.meta.keepAlive)
//     }else if(to.name==='Buy' && from.name==='Confirm'){
//         // window.console.log(from.meta.keepAlive,to.meta.keepAlive)
//         to.meta.keepAlive=true;
//         // window.console.log(from.meta.keepAlive,to.meta.keepAlive)
//     } else{
//
//         to.fullPath
//         // from.meta.keepAlive=false;
//         // this.$destroy()
//     }
//     next();
// });
router.afterEach(() => {

    window.scrollTo(0,0)

})
// axios.create({
//     baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
//     timeout: 5000 // 请求超时时间
// })
// Vue.config.productionTip = false
// Vue.use(ElementUI);
// Vue.use(router)
//
// Vue.prototype.$http.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error && error.response) {
//         switch (error.response.status) {
//             case 403:
//                 router.push({name:'Page403'});
//                 break;
//             case 500:
//                 router.push({ name:'Page500'});
//                 //  error.message = '服务器错误(500)';
//                 break;
//
//             default: error.message = `连接出错(${error.response.status})!`;
//         }
//     }
//     return Promise.reject(error);
// });

Vue.use(ElementUI)
//  Vue.use(ElementUI, {
//   i18n: (key, value) => i18n.t(key, value)
//  })
// Vue.use(VueI18n)

// const  i18n = new VueI18n({
//   locale: 'en',          //默认语言
//   messages: {
//     'zh': require('./lang/zh'),
//     'en': require('./lang/en'),
//   }
// })

// axios.interceptors.response.use(response => {
//     window.console.log(response+'123465')
//     // window.console.log('123465')
//     if (response.status== 2000) {
//         localStorage.clear();
//         // alert(response.data.resMsg)
//       // alert(1234765)
//       //
//       //   router.push({
//       //       name:'login'
//       //   })
//     }
//     return response;
// }, error => {
//     if (error && error.response) {
//         switch (error.response.status) {
//             case 404:
//                 window.console.log("main-404错误")
//                 router.push({path:'/test'});
//                 // error.message = '请求出错(404)'
//                 break;
//
//             case 500:
//                 window.console.log("main--500错误")
//                 router.push({ path:'/test'});
//                 //  error.message = '服务器错误(500)';
//                 break;
//
//
//             default: error.message = `连接出错(${error.response.status})!`;
//         }
//     }
//     return Promise.reject(error);
// });


new Vue({
    router,

    // routes,
    render: h => h(App),
}).$mount('#app')