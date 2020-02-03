<template>
    <el-header height="100px">
        <div class="nav_layout">
            <img class="logo" src="../assets/images/logo.png" alt />
            <div class="nav_layout_right">
                <div class="nav_item">
                    <a style="color:white;" href="#">
                        <span class="nav_font">控制台</span>
                    </a>
                </div>

                <div class="nav_item">
                    <a style="color:white;" @click="go_orderList" href="#">
                        <span class="nav_font">我的订单</span>
                    </a>
                </div>
                <div class="nav_item">
                    <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="head_frame" src="../assets/images/aikit.png" alt />
                </span>
                        <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                            <el-dropdown-item icon="el-icon-user-solid">
                                <a href="#">
                                    <span>个人中心</span>
                                </a>
                            </el-dropdown-item>
                            <hr style="opacity: 0.15;background: #FFFFFF;margin-left: 5px">
                            <el-dropdown-item icon="el-icon-switch-button">
                                <a href="#">
                                    <span>退出登陆</span>
                                </a>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
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

        }
    };
</script>

<style  scoped>
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
    }
    .nav_font{
        opacity: 0.8;
        font-family: PingFangSC-Medium;
        /*font-weight: 600;*/
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
        border-radius: 22px;
    }

    @media (min-width: 768px) {
        .nav_layout{
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*line-height: 6;*/
            padding-left: 100px;
            padding-right: 150px;

        }
    }
</style>
