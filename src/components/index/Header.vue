<template>
    <el-header  class="header_head" height="100px">
        <div class="nav_layout">
            <img class="logo" src="../../assets/images/logo.png" alt />
            <div class="nav_layout_right">
                <div class="nav_item">
                    <a class="nav_a" @click="go_tutorial" href="#">
                        <span class="nav_font">我的教程</span>
                    </a>
                </div>

                <div class="nav_item">
                    <a class="nav_a"  @click="go_instance" href="#">
                        <span class="nav_font">控制台</span>
                    </a>
                </div>

                <div class="nav_item">
                    <a class="nav_a" @click="go_orderList" href="#">
                        <span class="nav_font">我的订单</span>
                    </a>
                </div>
                <div v-if="isLogin" class="nav_item">
                    <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="head_frame" src="../../assets/images/aikit.png" alt />
                </span>
                        <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                            <el-dropdown-item icon="el-icon-user-solid">
                                <a class="nav_a" href="#">
                                    <span class="nav_dropdown_font">个人中心</span>
                                </a>
                            </el-dropdown-item>
                            <hr style="opacity: 0.15;background: #FFFFFF;margin-left: 5px">
                            <el-dropdown-item icon="el-icon-switch-button">
                                <a href="#">
                                    <span class="nav_dropdown_font">退出登陆</span>
                                </a>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-else class="nav_item">
                    <el-button size="small"
                               type="primary"
                               @click="go_login">
                    <span class="button_font">
                        立即登陆
                    </span></el-button>
                </div>
            </div>
        </div>
    </el-header>
</template>

<script>
    export default {
        data() {
            return {
                isLogin:false,

            };
        },
        methods:{
            //进入订单列表
            go_orderList() {
                this.$router.push(
                    { path: '/order/orderList',
                        query:{
                            user_id: 1,
                        }
                    }
                );

            },
            go_tutorial() {
                this.$router.push(
                    { path: '/tutorial',

                    }
                );

            },
            go_instance() {
                this.$router.push(
                    { path: '/instance',

                    }
                );

            },
            //进入实例列表
            go_instanceList(){
                this.$router.push(
                    { path: '/',
                        query:{
                            user_id: 1,
                        }
                    }
                );
            },
            go_login(){
                // this.$router.push(
                //     { path: '/login',
                //     }
                // );
                this.isLogin=true;
            }

        }
    };
</script>

<style  scoped>
    .header_head{
       border-bottom: 1px solid grey;
        border-color: rgba(151, 151, 151, 0.3);
        padding: 0;
    }
    .el-header {
        background-color: #101c3d;
        color: white;
        line-height: 60px;

    }
    .logo{
        width: 64px;
        height:64px;
        margin-top: 15px;
        /*margin: auto auto auto 0;*/
    }
    .nav_layout{
        display: flex;
        justify-content: space-between;
        line-height: 6;
        /*padding-left: 100px;*/
        /*padding-right: 150px;*/

    }
    .nav_layout_right{
        display: flex;
        align-items: center;
    }
    .nav_font{
        opacity: 0.8;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
    }
    .nav_font:hover{
        opacity: 1;

    }
    .nav_dropdown_font{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        opacity: 0.8;
        color: #FFFFFF;
    }
    .nav_dropdown_font:hover{
        opacity: 1;
    }
    .nav_a{
        text-decoration:none;
        color:white;
    }
    .button_font{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
    }

    .nav_item{
        margin-left:20px ;

    }
    .head_frame {
        border: 1px solid rgba(228, 231, 235, 0.2);
        height: 44px;
        width: 44px;
        border-radius: 22px;
    }
    .el-button--primary{
        background-color: #3254DC;
    }
    .el-button--primary:focus, .el-button--primary:hover {
        background-color: #5171F0;
    }
    .el-dropdown-menu__item{
        line-height: 0;
    }
    .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
        /* background-color: #ecf5ff; */
        color: #66b1ff;
    }
    @media (min-width: 768px) {
        .nav_layout{
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*line-height: 6;*/
            /*padding-left: 18.1%;*/
            /*padding-right: 18.1%;*/
            margin: 0 auto;
            width: 1280px;
        }
    }
</style>
