<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <keep-alive>
      <router-view v-on:header="header" v-on:footer="footer" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-on:header="header" v-on:footer="footer" v-if="!$route.meta.keepAlive"></router-view>
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>

import  BackToTop from './components/Scroll-top'
//import Buy from './components/order/Buy'
import Header from './components/index/Header'
import Footer from './components/Footer'
export default {

  name: 'app',
  components: {
    BackToTop,
    'app-header':Header,
    'app-footer':Footer,
  },
  data() {
    return {
      header_show:true,
      footer_show:true,
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  },
  methods:{
    //是否显示头部
    header:function (bool) {
      this.header_show = bool;
    },
    //是否显示底部
    footer:function (bool) {
      this.footer_show = bool;
    },
    go_login(){
       alert(111)
    }
  }
}
</script>

<style>

</style>
