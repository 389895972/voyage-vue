import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import Header from './components/index/Header'
import Personal from './components/index/Personal'
import AikitDetails from './components/index/AikitDetails'
import RB3Details from './components/index/RB3Details'
import test from './components/test'
import EdgekitDetails from './components/index/EdgekitDetails'
import Buy from './components/order/Buy'
import Buy_Rb3 from './components/order/Buy_Rb3'
import Buy_Edgekit from './components/order/Buy_Edgekit'
import orderList from './components/order/orderList'

import Confirm from './components/order/Confirm'
import InstanceDetails from './components/order/InstanceDetails'
import ToPay from './components/order/ToPay'
import ToPay_Admin from './components/order/ToPay_Admin'
import Tutorial from './components/tutorial/Tutorial'
//import First from "./components/index/First";
import Instance from './components/order/Instance'
import adminOrderList from './components/admin/orderList'
import adminLogin from './components/admin/Login'

import de from './ChangLang'
import Vuex from "vuex";


import axios from 'axios'


Vue.prototype.$http = axios;
// Vue.prototype.$http.defaults.withCredentials=true;
Vue.use(Router)
Vue.use(Vuex);
const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},

        {path:'/home', component: Home,meta:{keepAlive:false}},
        {path:'/aikitdetails', component: AikitDetails,meta:{keepAlive:false}},
        {path:'/rb3details', component: RB3Details,meta:{keepAlive:false}},
        {path:'/de', component: de,meta:{keepAlive:false}},
        {path:'/test', name:'Test',component: test,meta:{keepAlive:false}},
        {path:'/edgekitdetails',component: EdgekitDetails,meta:{keepAlive:false}},
        {path:'/buy',component: Buy,meta:{keepAlive:true}},
        {path:'/buy_rb3',component: Buy_Rb3,meta:{keepAlive:true}},
        {path:'/buy_edgekit',component: Buy_Edgekit,meta:{keepAlive:true}},
        {path:'/confirm',name:'Confirm',component: Confirm,meta:{keepAlive:false}},
        {path:'/instanceDetails',component:InstanceDetails,name:'InstanceDetails',meta:{keepAlive:false}},
        {path:'/instance',component:Instance,meta:{keepAlive:false}},
        {path:"/order/orderList",component:orderList,meta:{keepAlive:false}},
        {path:'/toPay',name:'ToPay',component:ToPay,meta:{keepAlive:false}},
        {path:'/toPay_admin',name:'ToPay_Admin',component:ToPay_Admin,meta:{keepAlive:false}},
        {path:'/tutorial',name:'Tutorial',component:Tutorial,meta:{keepAlive:false}},
        {path:'/personal',name:'Personal',component:Personal,meta:{keepAlive:false}},

        {path:'/Header',name:'Header',component:Header,meta:{keepAlive:false}},

        {path:'/admin/orderList',name:'adminOrderList',component:adminOrderList,meta:{keepAlive:false}},
        {path:'/admin/login',name:'adminLogin',component:adminLogin,meta:{keepAlive:false}}



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

axios.interceptors.response.use(response => {
    window.console.log("888888888888")
    window.console.log(response+"888888888888")
    if (response.status===500) {
       // localStorage.clear();
       // alert(response.data.resMsg)

        router.push({
           path:'test'
        })
    }
    return response;
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 404:
                window.console.log("404错误")
                router.push({ path:'test'});
                // error.message = '请求出错(404)'
                break;

            case 500:
                window.console.log("500错误")
                router.push({ path:'test'});
                //  error.message = '服务器错误(500)';
                break;

            default: error.message = `连接出错(${error.response.status})!`;
        }
    }
    return Promise.reject(error);
});
export default router
