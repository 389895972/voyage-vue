<template>
    <el-container style="overflow-x: hidden;">
        <div class="trapezoid_border">
        <div class="trapezoid"></div>
        </div>
        <el-header height="100px">
            <div class="nav_layout">
                <img class="logo" src="../assets/images/logo.png" alt />
                <div class="nav_layout_right">
                    <div class="nav_item">
                        <a class="nav_a" href="#">
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
                            <img class="head_frame" src="../assets/images/aikit.png" alt/>
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
        <div class="product_display">
            <div class="product_cards">
            <el-row>
                <el-col>
                    <span class="block_title">产品</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :xs="{span:20,offset:2}" :lg="{span:8}">
                    <el-card :body-style="{ padding: '0px' }" class="card_left" >

                        <img
                                src="../assets/images/home/aikit_resize_2.png"
                                class="card_image" @click="go_aikit"
                        />
                        <div style="padding: 14px;" @click="go_aikit" class="card_div">
                            <span class="card_title">TurboX™AI套件</span>
                            <div class="card_content">
                                <p>具有AI视觉功能的边缘设备</p>
                            </div>
                            <div class="card_tags">
                                <el-row :gutter="13">
                                    <el-col :span="15">
                                        <span class="card_tag">Qualcomm SDA845处理器</span>
                                        <br>
                                        <span class="card_tag">Adreno 630 GPU</span>
                                    </el-col>
                                    <el-col :span="9">
                                        <span class="card_tag">六核685 DSP</span>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="card_labels">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">算法SDK</span>
                                </div>
                                <hr class="card_hr">

                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">强大的计算</span>
                                </div>
                                <hr class="card_hr">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">灵活的视觉解决方案</span>
                                </div>
                            </div>
                            <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                                <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="8" :xs="{span:20,offset:2}" :lg="{span:8}">
                    <el-card :body-style="{ padding: '0px', }" class="card_middle">

                        <img
                                src="../assets/images/home/rb3_resize.png"
                                class="card_image" @click="go_rb3"
                        />
                        <div style="padding: 14px;" @click="go_rb3" class="card_div">
                            <span class="card_title">高通®机器人RB3平台</span>
                            <div class="card_content">
                                <p>特制的机器人为重点的Dragon Board™ 845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
                            </div>
                            <div class="card_tags">
                                <el-row :gutter="13">
                                    <el-col :span="15">
                                        <span class="card_tag">Qualcomm SDA845处理器</span>
                                        <br>
                                        <span class="card_tag">Adreno 630 GPU</span>
                                    </el-col>
                                    <el-col :span="9">
                                        <span class="card_tag">六核685 DSP</span>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="card_labels">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">QUALCOMM®神经处理SDK</span>
                                </div>
                                <hr class="card_hr">

                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">综合开发套件</span>
                                </div>
                                <hr class="card_hr">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">高效节能</span>
                                </div>
                            </div>
                            <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                                <el-button type="primary" size="small" @click.stop="buy_rb3">立即购买</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8" :xs="{span:20,offset:2}" :lg="{span:8}">
                    <el-card :body-style="{ padding: '0px' }" class="card_right" >

                        <img
                                src="../assets/images/home/edge_resize.png"
                                class="card_image" @click="go_edgekit"
                        />
                        <div style="padding: 14px;" @click="go_edgekit" class="card_div">
                            <span class="card_title">TurboX Edge套件</span>
                            <div class="card_content">
                                <p>EdgeKit致力于驱动并实现强大，可靠和智能的通用边缘计算E2E解决方案。</p>
                            </div>
                            <div class="card_tags">
                                <el-row :gutter="13">
                                    <el-col :span="15">
                                        <span class="card_tag">Qualcomm SDA845处理器</span>
                                        <br>
                                        <span class="card_tag">Adreno 630 GPU</span>
                                    </el-col>
                                    <el-col :span="9">
                                        <span class="card_tag">六核685 DSP</span>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="card_labels">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">QUALCOMM®神经处理SDK</span>
                                </div>
                                <hr class="card_hr">

                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">综合开发套件</span>
                                </div>
                                <hr class="card_hr">
                                <div style="display: flex">
                                    <img src="../assets/images/home/xuanding.png" alt />
                                    <span class="card_label">高效节能</span>
                                </div>
                            </div>
                            <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                                <el-button type="primary" size="small" @click.stop="buy_edgekit">立即购买</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>

            </div>
        </div>
    </el-container>


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
        go_login(){
            // this.$router.push(
            //     { path: '/login',
            //     }
            // );
            this.isLogin=true;
        },
        go_aikit(){
            this.$router.push({path:'/aikitdetails'});
        },
        go_edgekit(){
            this.$router.push({path:'/edgekitdetails'});
        },
        go_rb3(){
            this.$router.push({path:'/rb3details'});
        },
        buy_aikit() {
            this.$router.push(
                { path: '/buy',
                    query:{
                        name:'AI KIT',
                        good_id: 1682320,
                    }
                }
            );

        },
        buy_edgekit(){

            this.$router.push(
                { path: '/buy',
                    query:{
                        name:'Edge KIT',
                        good_id: 1682320,
                    }
                }
            );
        },
        buy_rb3(){
            this.$router.push(
                { path: '/buy',
                    query:{
                        name:'RB 3',
                        good_id: 1682320,
                    }
                }
            );
        },

    }
};
</script>

<style  scoped>
    /*导航栏*/
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

    width: 62.5%;
    margin:0 auto;

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

/*产品展示区*/
.block_title{
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #16161D;
}
.product_display{

    background-color: #F0F1F3;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
}
.product_cards{

    width: 62.5%;
    margin: 0 auto;
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/

}
    .el-col {
        margin-bottom: 10px;
        margin-top: 20px;
   }
.el-card{
    margin-top: 20px;
    margin-bottom:10px ;
}
.card_image{
    height: 12vw;

    width: 100%;
    cursor: pointer;
    overflow: hidden;
    display: block;
}
.card_title{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #16161D;
    line-height: 20px;
}
.card_content{
    margin-top: 20px;
    height: 40px;
    width: 100%;
    font-family: PingFangSC-Regular;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow:ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #16161D;
    line-height: 20px;
}
.card_tags{
    /*margin-top: 20px;*/
    height: 55px;
}
.card_tag{

    background: #F0F1F3;
    border-radius: 3px;
    border-radius: 3px;

    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #606879;
}
.card_labels{
    margin-top: 20px;
}
.card_label{
    margin-left: 5px;

    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #16161D;
    line-height: 14px;
}
.card_hr{
    margin-top: 10px;
    margin-bottom: 10px;
}
    .card_div{
        cursor: pointer;
    }

    .card_left{
        width: 90%;
    }
    .card_right{
        margin-left: auto;

        width: 90%;
    }
    .card_middle{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
    .el-pagination {
        text-align: center;

    }

    .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #F0F1F3;
    }

   .trapezoid{
       border-bottom: 30px solid #3254DC;
       border-left: 30px solid #3254DC;
       border-right: 30px solid transparent;
        width: 126.72px;
   }
   .trapezoid_border {
       border-bottom: 2px solid #3254DC;
   }


    @media (max-width: 768px) {
        .nav_layout{
            width: 100%;
            padding-left: 0;
            padding-right: 0;
        }
        .product_cards{
            padding-left: 20px;
            padding-right: 20px;
            width: 100%;
        }
        .card_left{
            width: 100%;
        }
        .card_right{
            width:  100%;
        }
        .card_middle{
            width: 100%;
        }
        .card_image{
            width: 100%;
            height: auto;
        }


    }

</style>
