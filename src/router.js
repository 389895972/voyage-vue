import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import AikitDetails from './components/index/AikitDetails'
import RB3Details from './components/index/RB3Details'
import test from './components/test'
import EdgekitDetails from './components/index/EdgekitDetails'
import Buy from './components/order/Buy'
import orderList from './components/order/orderList'

import Confirm from './components/order/Confirm'
import InstanceDetails from './components/order/InstanceDetails'
import ToPay from './components/order/ToPay'
import Tutorial from './components/tutorial/Tutorial'
//import First from "./components/index/First";
import Instance from './components/order/Instance'
import de from './ChangLang'

Vue.use(Router)

const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},

        {path:'/home', component: Home,meta:{keepAlive:false}},
        {path:'/aikitdetails', component: AikitDetails,meta:{keepAlive:false}},
        {path:'/rb3details', component: RB3Details,meta:{keepAlive:false}},
        {path:'/de', component: de,meta:{keepAlive:false}},
        {path:'/test', component: test,meta:{keepAlive:false}},
        {path:'/edgekitdetails',component: EdgekitDetails,meta:{keepAlive:false}},
        {path:'/buy',component: Buy,meta:{keepAlive:true}},
        {path:'/confirm',name:'Confirm',component: Confirm,meta:{keepAlive:false}},
        {path:'/instanceDetails',component:InstanceDetails,name:'InstanceDetails',meta:{keepAlive:false}},
        {path:'/instance',component:Instance,meta:{keepAlive:false}},
        {path:"/order/orderList",component:orderList,meta:{keepAlive:false}},
        {path:'/toPay',name:'ToPay',component:ToPay,meta:{keepAlive:false}},
        {path:'/tutorial',name:'Tutorial',component:Tutorial,meta:{keepAlive:false}}

    ],

})


export default router
