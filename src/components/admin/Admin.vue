<template>
    <el-container style="display: block" >
        <el-header  class="header_head" height="100px">
            <div class="nav_layout">
                <img class="logo" src="../../assets/images/header/logo1.png"  width="60px" height="60px" @click="go_home"  style="cursor: pointer" alt />
                <div class="nav_layout_right">
                    <div  class="nav_item">
                        <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="head_frame" src="../../assets/images/header/admin.png"  />
                </span>
                            <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                                <el-dropdown-item icon="el-icon-switch-button">
                                    <a href="#">
                                        <span class="nav_dropdown_font" >退出登陆</span>
                                    </a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>

        </el-header>
        <div class="home-container" style="background-color: #D7D7DB">
            <div class="main">
                <div class="voyage_display" >

                    <div class="voyage_cards" >

                        <el-button type="success" @click="go_order" style="height: 50px">查看订单</el-button>
                        <el-button type="success" @click="go_flight" style="height: 50px">航班管理</el-button>
                        <el-button type="success" @click="go_user" style="height: 50px">用户管理</el-button>
                        <el-button type="success" style="height: 50px">公告管理</el-button>
                    </div>
                </div>
            </div>
        </div>
    </el-container>
</template>
<script>

    export default {
        data(){
            return{
                tableData:[],
            }
        },
        methods:{
            admin(){
                this.$emit('header', false);
                // this.$emit('footer', false);
            },
            go_order(){

                this.$router.push({
                    path:'/admin/orderList',

                })
            },
            go_flight(){
                this.$router.push({
                    path:'/admin/flightList',

                })
            },
            go_user(){
                this.$router.push({
                    path:'/admin/user',

                })
            },
            go_home(){
                this.$router.push({
                    path:'/admin/admin'
                })
            },
        },
        created(){
             this.admin()
        }
    }
</script>
<style scoped>
    .voyage_cards{
        width:1280px;
        margin: 0 auto;
        display: flex;
        background: url("../../assets/images/admin/timg.jpg");
        background-repeat: no-repeat;
       background-size: 100% 100%;
       height: 600px;
        padding-top: 80px;
        padding-left: 80px;
    }
    .voyage_display{

        background-color: #F0F1F3;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
    }
    .nav_layout {
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
    .header_head{
        border-bottom: 1px solid grey;
        border-color: rgba(151, 151, 151, 0.3);
        padding: 0;
    }
    .nav_item{
        margin-left:20px ;

    }
    .el-header {
        background-color: #101c3d;
        color: white;
        line-height: 60px;

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
    .head_frame {
        border: 1px solid rgba(228, 231, 235, 0.2);
        height: 44px;
        width: 44px;
        border-radius: 22px;
    }
    .logo{
        width: 64px;
        height:64px;
        margin-top: 15px;
        /*margin: auto auto auto 0;*/
    }
</style>