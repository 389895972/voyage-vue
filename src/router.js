import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import AikitDetails from './components/index/AikitDetails'
//import First from "./components/index/First";
import de from './ChangLang'

Vue.use(Router)

const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},
        {path:'/home', component: Home,},
        {path:'/aikitdetails', component: AikitDetails,},
        {path:'/de', component: de,},
    ]
})


export default router