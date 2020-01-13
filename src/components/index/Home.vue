<template>
    <el-container>
    <div class="home-container">
        <div class="header">
            <img class="img" src="../../assets/images/logo.png" alt="">
        </div>
        <div class="main">
            <div>
<!--                <img src="../../assets/images/index6.png" width="100%">-->
                <div class="home_first">
                    <div class="home_first_left">
                        <div class="home_first_left_top">
                            <div class="first_font">我们追求更灵活便携的嵌入式开发工作</div>

                        </div>
                        <div>
                            <img src="../../assets/images/home1.png" width="100%" >
                        </div>
                    </div>
                    <div class="home_first_right">
                        <div>
                            <img src="../../assets/images/home2.png" width="100%" >
                        </div>

                    </div>
                </div>
                <div style="border:1px solid;margin-left: 2px">
                  <div>
                      <div class="advantages_title">硬件分时共享平台的优势</div>
                  </div>
                  <div class="advantages">
                         <div class="adv_imgs"><img src="../../assets/images/home/advantages.png" alt="" class="imgs">  </div>
                         <div class="adv_imgs"><img src="../../assets/images/home/advantages21.png" alt="" class="imgs"></div>
                         <div class="adv_imgs"><img src="../../assets/images/home/advantages3.png" alt="" class="imgs"> </div>
                         <div class="adv_imgs"><img src="../../assets/images/home/advantages4.png" alt="" class="imgs"> </div>
                  </div>
                    <div  class="adv_imgs_bottom">
                        <div class="adv_content"> 对比设备，租比买的价格更低</div>
                        <div class="adv_content"> 第一手新设备，随时更新 ，无需等待</div>
                        <div class="adv_content"> 企业级系统支持和服务</div>
                        <div class="adv_content"> 在45IOT社区讨论交流学习</div>
                    </div>
                </div>

                <div class="product_show">
                    <el-row>
                        <el-col :offset="2">
                            <span style="font-weight: 900;font-size: 20px;">产品展示</span>
                        </el-col>
                    </el-row>

                    <el-row  type="flex">
                        <el-col :span="6" :offset="2" :xs="{span:20,offset:2}" >
                            <el-card :body-style="{ padding: '0px' }" >
                                <img src="../../assets/images/home/aikit.png" class="image" style="height: 300px;width: 100%">
                                <div style="padding: 14px;">
                                    <span style="font-size: 20px;">Thundercomm TurboX™AI套件</span>
                                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                        具有AI视觉功能的边缘设备                                    </p>
                                    <el-row :gutter="13">
                                        <el-col :span="15">
                                            <span class="card_span">Qualcomm SDA845处理器</span>
                                            <span class="card_span">六核685 DSP</span>
                                        </el-col>
                                        <el-col :span="9">
                                            <span class="card_span">Adreno 630 GPU</span>
                                        </el-col>
                                    </el-row>
                                    <div style="background-color: rgba(242, 242, 242, 1)">
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                算法SDK
                                            </span>
                                        </div>

                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                强大的计算
                                            </span>
                                        </div>
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span" >
                                                灵活的视觉解决方案
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bottom clearfix" style="text-align: right;">
                                        <el-button type="text" class="button">立即购买</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" :offset="1" :xs="{span:20,offset:2}"  >
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../assets/images/home/edge.png" class="image" style="height: 300px;width: 100%">
                                <div style="padding: 14px;">
                                    <span style="font-size: 20px;">TurboX Edge套件</span>
                                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                        EdgeKit致力于驱动并实现强大，可靠和智能的通用边缘计算E2E解决方案。
                                    </p>
                                    <el-row :gutter="13">
                                        <el-col :span="15">
                                            <span class="card_span">Qualcomm SDA845处理器</span>
                                            <span class="card_span">六核685 DSP</span>
                                        </el-col>
                                        <el-col :span="9">
                                            <span class="card_span">Adreno 630 GPU</span>
                                        </el-col>
                                    </el-row>
                                    <div style="background-color: rgba(242, 242, 242, 1)">
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                QUALCOMM®神经处理SDK
                                            </span>
                                        </div>

                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                综合开发套件
                                            </span>
                                        </div>
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span" >
                                                高效节能
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bottom clearfix" style="text-align: right;">
                                        <el-button type="text" class="button">立即购买</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" :offset="1" :xs="{span:20,offset:2}"  >
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../assets/images/home/rb3.png" class="image" style="height: 300px;width: 100%">
                                <div style="padding: 14px;">
                                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
                                    <el-row :gutter="13">
                                        <el-col :span="15">
                                            <span class="card_span">Qualcomm SDA845处理器</span>
                                            <span class="card_span">六核685 DSP</span>
                                        </el-col>
                                        <el-col :span="9">
                                            <span class="card_span">Adreno 630 GPU</span>
                                            <span class="card_span">配件：ToF相机</span>
                                        </el-col>
                                    </el-row>
                                    <div style="background-color: rgba(242, 242, 242, 1)">
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                QUALCOMM®神经处理SDK
                                            </span>
                                        </div>

                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                综合开发套件
                                            </span>
                                        </div>
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span" >
                                                高效节能
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bottom clearfix" style="text-align: right;">
                                        <el-button type="text" class="button">立即购买</el-button>
                                    </div>
                                </div>

                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>

                        <el-col :span="6" :offset="2" :xs="{span:20,offset:2}"  >
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../assets/images/home/rb3.png" class="image" style="height: 300px;width: 100%">
                                <div style="padding: 14px;">
                                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
                                    <el-row :gutter="13">
                                        <el-col :span="15">
                                            <span class="card_span">Qualcomm SDA845处理器</span>
                                            <span class="card_span">六核685 DSP</span>
                                        </el-col>
                                        <el-col :span="9">
                                            <span class="card_span">Adreno 630 GPU</span>
                                            <span class="card_span">配件：ToF相机</span>
                                        </el-col>
                                    </el-row>
                                    <div style="background-color: rgba(242, 242, 242, 1)">
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                QUALCOMM®神经处理SDK
                                            </span>
                                        </div>

                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                综合开发套件
                                            </span>
                                        </div>
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span" >
                                                高效节能
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bottom clearfix" style="text-align: right;">
                                        <el-button type="text" class="button">立即购买</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>

                        <el-col :span="6" :offset="1" :xs="{span:20,offset:2}"  >
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../assets/images/home/rb3.png" class="image" style="height: 300px;width: 100%">
                                <div style="padding: 14px;">
                                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
                                    <el-row :gutter="13">
                                        <el-col :span="15">
                                            <span class="card_span">Qualcomm SDA845处理器</span>
                                            <span class="card_span">六核685 DSP</span>
                                        </el-col>
                                        <el-col :span="9">
                                            <span class="card_span">Adreno 630 GPU</span>
                                            <span class="card_span">配件：ToF相机</span>
                                        </el-col>
                                    </el-row>
                                    <div style="background-color: rgba(242, 242, 242, 1)">
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                QUALCOMM®神经处理SDK
                                            </span>
                                        </div>

                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span">
                                                综合开发套件
                                            </span>
                                        </div>
                                        <div style="display: flex">
                                            <img class="u242_img" src="../../assets/images/home/u198.png" alt="">
                                            <span class="card_span" >
                                                高效节能
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bottom clearfix" style="text-align: right;">
                                        <el-button type="text" class="button">立即购买</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>

                    </el-row>

<!--                    <div style="width:20%">-->
<!--                        <div >-->
<!--                            <img src="../../assets/images/home/aikit.png" alt=""  >-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <div>Thundercomm TurboX™AI套件</div>-->
<!--                            <div>具有AI视觉功能的边缘设备</div>-->
<!--                            <div>Qualcomm SDA845处理器 Adreno 630 GPU</div>-->
<!--                            <div>六核685 DSP</div>-->
<!--                        </div>-->

<!--                    </div>-->



                </div>

                <div class="mid">
                    <div class="iblock">选择  Devices  on  Cloud</div>
                    <div class="blocks">
                        <div class="block">
                            <span class="block_title">有技术</span>
                            <div class="block_inners">
                                <span class="block_inner">领先市场</span>
                                <span class="block_inner">优异性能</span>
                                <span class="block_inner">多元化服务</span>
                            </div>
                        </div>
                        <div class="block">
                            <span class="block_title">灵活省心</span>
                            <div class="block_inners">
                                <span class="block_inner">随到随用</span>
                                <span class="block_inner">一步到位</span>
                                <span class="block_inner">减少成本</span>
                            </div>
                        </div>
                        <div class="block">
                            <span class="block_title">值得依赖</span>
                            <div class="block_inners">
                                <span class="block_inner">无忧保障</span>
                                <span class="block_inner">安全防护</span>
                                <span class="block_inner">为您服务</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer">
            <div  class="footer_inners">
                 <div class="footer_inner">
                     <span class="footer_span1">CONTACT INFO联系方式</span>
                     <span class="footer_span11">中科创达股份有限公司是智能操作系统产品和技术提供商。自2008年成立依赖，公司致力于提供智能化操作系统系列产品、技术及解决方案。</span>
                 </div>
                 <div class="footer_inner">
                     <span class="footer_span2">(86)10-62662686</span>
                     <span class="footer_span21">biz@thundersoft.com</span>
                     <span class="footer_span22">北京市海淀区清华东路9号院3号楼创达大厦 邮编：100083</span>
                 </div>
            </div>
        </div>
    </div>
    </el-container>
</template>

<script>
    export default {

    }

</script>
<style  scoped>

            div{
                /*margin: 0;*/
                padding: 0;
            }
    .mid{
        margin-left: 2px;
        margin-right: 2px;
        border: 1px solid;
        background-color: #f5f5f5;
    }
    .block{
        display: inline-block;
        justify-content:space-between;
        width: 27%;
        margin-top: 15px;
    }
    .iblock{
        text-align: center;
        margin-top: 15px;
        font-size: 25px;
    }
    .blocks{
        text-align: center;
    }
    .block_title{
        margin-top: 10px;
        display: block;
        font-size: 20px;
    }
    .block_inner{
        display: block;

    }
    .block_inners{
        margin-top: 15px;
        margin-bottom: 45px;
    }
    span{
        display: block;
    }


    img{
        /*height: 100%;*/
    }
    .home_first{
        display: flex;
        background-color: #E9F1F2;

    }
    .home_first_left{
       width: 50%;

    }
    .home_first_left_top{
        height: 10%;


    }
    .home_first_right{
        width: 50%;
    }
    .first_font{
        font-size: 35px;
        color: #6173C4;
        margin: 10px auto;
        width: 75%;
    }
    .advantages_title{
        width: 50%;
        margin: 40px  auto 0 auto;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }
    .advantages{
        width: 85%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }

    .adv_imgs_bottom{
        align-items: center;


        width: 85%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        }
    .adv_imgs{
        /*align-items: center;*/
        /*width: 20%;*/
        /*position: relative;*/
        text-align: center;
        vertical-align:middle;
     }
    .imgs{
        margin: 20px ;
        height: 65px;
        /*position: absolute;*/
        /*left:25%;*/
        vertical-align: middle

    }
    .adv_content{
        font-size: 25px;
        margin: 10px 50px 60px 50px;
    }

    .product_show {
        background-color: #D0E2F2;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .el-col {
        margin-bottom: 20px;
    }
    .u242_img {
        border-width: 0px;
        left: 0px;
        top: 0px;
        width: 26px;
        height: 26px;
    }
    .card_span{
        margin-left: 10px;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
        font-weight: 700;
        font-style: normal;
        color: rgba(102, 102, 102, 0.874509803921569);

    }

</style>