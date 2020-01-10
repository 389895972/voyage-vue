import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import AikitDetails from './components/index/AikitDetails'
import RB3Details from './components/index/RB3Details'
import test from './components/test'
//import First from "./components/index/First";
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
    ]
})


export default router