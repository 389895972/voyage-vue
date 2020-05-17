import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import Header from './components/index/Header'
import Personal from './components/index/Personal'

import test from './components/test'






import adminLogin from './components/admin/Login'
import Page500 from './components/error/Page500'

import Page404 from './components/error/Page404'


import Vuex from "vuex";


import Flights from './components/flight/Flights'
import BuyTicket from './components/flight/BuyTicket'
import Orders from './components/flight/Orders'
import OrderDetails from './components/flight/OrderDetails'
import AdminAdmin from './components/admin/Admin'
import adminOrderList from './components/admin/orderList'
import adminFlightList from './components/admin/FlightList'
import adminNotice from './components/admin/Notice'
import User from './components/admin/user'
import AdminOrderDetails from './components/admin/OrderDetails'
import axios from 'axios'



Vue.use(Router)

Vue.prototype.$http = axios;
// Vue.prototype.$http.defaults.withCredentials=true;
Vue.use(Router)
Vue.use(Vuex);
const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},

        {path:'/home', component: Home,meta:{keepAlive:false}},
        {path:'/flights', component: Flights,meta:{keepAlive:false}},
        {path:'/buyticket', component:BuyTicket,meta:{keepAlive:false}},
        {path:'/orders', component:Orders,meta:{keepAlive:false}},
        {path:'/orderDetails', component:OrderDetails,meta:{keepAlive:false}},
        {path:'/admin/orderDetails', component:AdminOrderDetails,meta:{keepAlive:false}},
        {path:'/admin/admin',name:'adminAdmin',component:AdminAdmin,meta:{keepAlive:false}},
        {path:'/admin/orderList',name:'adminOrderList',component:adminOrderList,meta:{keepAlive:false}},
        {path:'/admin/flightList',name:'adminFlightList',component:adminFlightList,meta:{keepAlive:false}},
        {path:'/admin/notice',name:'adminNotice',component:adminNotice,meta:{keepAlive:false}},
        {path:'/admin/user',name:'user',component:User,meta:{keepAlive:false}},


        {path:'/test', name:'Test',component: test,meta:{keepAlive:false}},

        {path:'/personal',name:'Personal',component:Personal,meta:{keepAlive:false}},

        {path:'/Header',name:'Header',component:Header,meta:{keepAlive:false}},


        {path:'/admin/login',name:'adminLogin',component:adminLogin,meta:{keepAlive:false}},

        {path:'/page404',name:'Page404',component:Page404,meta:{keepAlive:false}},
        {path:'/page500',name:'Page500',component:Page500,meta:{keepAlive:false}},
        {path:'*',redirect: '/Page404'},



    ],

})
router.beforeEach((to, from, next)=>{
    //to 将要访问的路径
    //from从哪个路径跳转而来
    //next 函数    表示放行 next（'/login'）
    if(to.path==='/order/orderList'||to.path==='/instance'||to.path==='/tutorial'||to.path==='/instancedetails'||to.path==='instancedetails'||to.path==='/personal'||to.path==='/topay'){
    //获取token
    const tokenStr=window.sessionStorage.getItem('token');
    // const islogin = this.$http.post('/loginConfirm',tokenStr1);
     window.console.log(tokenStr)
    if(!tokenStr){  return  next('/home');}else {next()}
    }else{ next()}

})

// axios.interceptors.response.use(response => {
//     window.console.log("888888888888")
//     window.console.log(response+"888888888888")
//     if (response.status===500) {
//        // localStorage.clear();
//        // alert(response.data.resMsg)
//
//         router.push({
//            path:'/page500'
//         })
//     }
//     return response;
// }, error => {
//     if (error && error.response) {
//         switch (error.response.status) {
//             case 404:
//                 window.console.log("router--404错误")
//                 router.push({ path:'/page404'});
//                 // error.message = '请求出错(404)'
//                 break;
//
//             case 500:
//                 window.console.log("router--500错误")
//                 router.push({ path:'/page500'});
//                 //  error.message = '服务器错误(500)';
//                 break;
//
//             default: error.message = `连接出错(${error.response.status})!`;
//         }
//     }
//     return Promise.reject(error);
// });
export default router
