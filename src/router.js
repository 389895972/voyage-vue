import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/index/Home'
import Details from './components/index/Details'
//import First from "./components/index/First";
Vue.use(Router)

const router =new Router({
    routes:[
        {path:'/',redirect: '/home'},
        {path:'/home', component: Home,},
        {path:'/details', component: Details,},
    ]
})


export default router