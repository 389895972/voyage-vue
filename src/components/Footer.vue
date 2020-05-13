<template>
    <div style="background-color: #101C3D;">
    <el-footer  class="footer_el" height="600px">
        <el-row  :offset="3"><img  class="footer_img" src="../../public/logo1.png" width="60px" alt=""></el-row>
        <el-row>
            <el-col :span="4" >
                <div class="footer_block">
                    <span class="footer_block_title" >机票</span>
                    <span class="footer_block_content"> <a href=""> 中国航空 </a> </span>
                    <span class="footer_block_content"><a href="">南方航空 </a></span>
                    <span class="footer_block_content"><a href="">海南航空</a></span>
                    <span class="footer_block_content"><a href="">春秋航空</a></span>
                </div>
            </el-col>
            <el-col :span="4">

                <div class="footer_block">
                    <span class="footer_block_title">社区</span>
                    <span class="footer_block_content"> <a href="">送货上门</a> </span>
                    <span class="footer_block_content"><a href="">会员办理</a></span>
                    <span class="footer_block_content"><a href="">贵宾服务</a></span>
                    <span class="footer_block_content"><a href="">行程安排</a></span>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="footer_block">
                    <span class="footer_block_title">教程</span>
                    <span class="footer_block_content"> <a href="">订票方案</a> </span>
                    <span class="footer_block_content"><a href="">服务指南</a></span>
                    <span class="footer_block_content"><a href="">操作指南</a></span>
                    <span class="footer_block_content"><a href="">工具</a></span>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="footer_block">
                    <span class="footer_block_title">关于我们 </span>
                    <span class="footer_block_content"> <a href="" > 关于我们</a> </span>
                    <span class="footer_block_content"><a href="">关于我们</a></span>
                    <span class="footer_block_content"><a href="">关于我们</a></span>
                    <span class="footer_block_content"><a href="">关于我们</a></span>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="footer_block">
                    <span class="footer_block_title">其他</span>
                    <span class="footer_block_content"> <a href=""> 解决方案</a> </span>
                    <span class="footer_block_content"><a href="">客户服务</a></span>
                    <span class="footer_block_content"><a href="">自助服务</a></span>
                    <span class="footer_block_content"><a href="">投诉</a></span>
                </div>
            </el-col>
        </el-row>
        <el-row ><span class="footer_title_ours">联系我们</span></el-row>


        <span class="footer_title_email">邮箱联系</span>
        <span class="footer_title_email2">其他联系</span>


        <div class="item">
            <el-input  v-model="email" class="footer_input" size="mini"></el-input>
            <!--          <span class="footer_input"> {{email}}</span>-->
            <el-button
                    type="primary"
                    class="btn"
                    size="mini"
                    :data-clipboard-text="email"
                    @click="copy"
                    style="margin-left:0"
            >复制</el-button>
            <span style="margin-left: 11%">
          <img src="../assets/images/home/Twitter.png" alt="">
          <img src="../assets/images/home/Facebook.png" alt="">
          <img src="../assets/images/home/weixin.png" alt="">
            </span>

        </div>

        <!--        <el-col :span="3">-->
        <!--          <div class="footer_block_final">-->
        <!--            <span style="margin-left:10%;padding-top:10px">联系我们</span>-->
        <!--            <p style="margin:10% 0 0 10%;font-size:16px">Email</p>-->
        <!--            <p style="margin-left:10%;font-size:16px">service@45iot.com</p>-->
        <!--          </div>-->
        <!--        </el-col>-->

    </el-footer>
        <span style="background-color: #0B152E;">
    <span class="footer_footer"> Copyright &copy; 2018~2020.Rescord license ICP备案号：181470003号 All rights reserved. </span>
 </span>
   </div>
</template>

<script>
export default {
   data(){
       return{
           email:"E-mail:aiyouhangkong@163.com",

       }
   },
    methods:{
        copy() {
            // var _this = this;
            // var clipboard = new Clipboard(".btn"); //单页面引用
            var clipboard = new this.Clipboard(".btn"); //在main.js中引用
            clipboard.on("success", e => {
                // 释放内存
                clipboard.destroy();
                window.console.log(e)
            });
            clipboard.on("error", e => {
                // 不支持复制
                window.console.log(e)
                this.Message({
                    message: "该浏览器不支持自动复制",
                    type: "warning"
                });
                // 释放内存
                clipboard.destroy();
            });
        },
    }
}
</script>
<style scoped>

    .footer_block {
        margin-top: 60px;
        height: 60%;
        width: 100%;
        color: white;
        /*border-left: 2px solid grey;*/
        font-size: 21px;
        text-align: left;
    }
    .footer_block_title{
        /*margin-left:16%;*/
        font-size: 16px;
    }
    .footer_block_content{
        /*margin-left:16%;*/
        font-size:14px;
        color:white;
        margin-top: 8%;
        text-align: left;
    }
    .footer_img{
        margin-top: 50px;
        /*margin-left: 18.8%;*/
    }
    .el-footer {
        /*background-color: rgb(58, 58, 58);*/
        background-color: #101C3D;
        padding: 0;
        width: 1280px;
        margin:0 auto;

    }
    span {
        display: block;
    }
    .footer_title_email{
        color: #7785AC;
        display: inline;
        font-size: 12px;
        /*margin-left: 18.8%;*/
        margin-right: 0;
        margin-top: 10px;
        width: 40%;
    }
    .footer_title_email2{
        color: #7785AC;
        display: inline-block;
        font-size: 12px;
        margin-left: 32%;
        margin-right: 0;
        margin-top: 10px;
        width: 40%;
    }
    .footer_footer{
        color: white;
        font-size: 10px;
        background-color: #0B152E;
        height: 90px;
        line-height: 90px;
        /*padding-left: 19.2%;*/
        width: 1280px;
        margin: 0 auto;
    }
    .item{
        /*width: 62.5%;*/
        margin: 0 auto;
        text-align: left;
    }
    .footer_input{
        width: 20%;
        /*margin-left: 16%;*/
        margin-top: 5px;
        background-color: #0aa0e8;
    }
    .footer_title_ours{
        color: white;
        /*margin-left: 18.8%;*/
        margin-top: 60px;
    }
    .footer_input >>> .el-input__inner{
        background-color: #0B152E;
        border: none;
        border-radius: 0px;
        color: white;
    }
    .item >>> span{
        display: inline-block;
        /*margin-left: 12%;*/
    }
    .item >>> img{
        width: 25px;
        margin-left: 8px;
    }

</style>