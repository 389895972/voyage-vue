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
//import First from "./components/index/First";
import Instance from './components/order/Instance'
import de from './ChangLang'

Vue.use(Router)

const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},
        {path:'/home', component: Home,},
        {path:'/aikitdetails', component: AikitDetails,},
        {path:'/rb3details', component: RB3Details,},
        {path:'/de', component: de,},
        {path:'/test', component: test,},
        {path:'/edgekitdetails',component: EdgekitDetails,},
        {path:'/buy',component: Buy,},
        {path:"/order/orderList",component:orderList,},
 

        {path:'/confirm',name:'Confirm',component: Confirm,},
        {path:'/instanceDetails',component:InstanceDetails,},
        {path:'/instance',component:Instance,},
        {path:'/toPay',name:'ToPay',component:ToPay,},
    ],
   
})


export default router