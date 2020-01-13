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
                                <img src="../../assets/images/home1.png" width="100%">
                            </div>
                        </div>
                        <div class="home_first_right">
                            <div>
                                <img src="../../assets/images/home2.png" width="100%">
                            </div>

                        </div>
                    </div>
                    <div style="border:1px solid;margin-left: 2px">
                        <div>
                            <div class="advantages_title">硬件分时共享平台的优势</div>
                        </div>
                        <div class="advantages">
                            <div class="adv_imgs"><img src="../../assets/images/home/advantages.png" alt=""
                                                       class="imgs"></div>
                            <div class="adv_imgs"><img src="../../assets/images/home/advantages21.png" alt=""
                                                       class="imgs"></div>
                            <div class="adv_imgs"><img src="../../assets/images/home/advantages3.png" alt=""
                                                       class="imgs"></div>
                            <div class="adv_imgs"><img src="../../assets/images/home/advantages4.png" alt=""
                                                       class="imgs"></div>
                        </div>
                        <div class="adv_imgs_bottom">
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

                        <el-row>
                            <el-col :span="6" :offset="2" :xs="{span:20,offset:2}">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/images/home/aikit.png" class="image"
                                         style="height: 300px;width: 100%">
                                    <div style="padding: 14px;">
                                        <span style="font-size: 20px;">Thundercomm TurboX™AI套件</span>
                                        <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                            具有AI视觉功能的边缘设备 </p>
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
                                                <span class="card_span">
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
                            <el-col :span="6" :offset="1" :xs="{span:20,offset:2}">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/images/home/edge.png" class="image"
                                         style="height: 300px;width: 100%">
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
                                                <span class="card_span">
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
                            <el-col :span="6" :offset="1" :xs="{span:20,offset:2}">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/images/home/rb3.png" class="image"
                                         style="height: 300px;width: 100%">
                                    <div style="padding: 14px;">
                                        <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                        <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                            特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
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
                                                <span class="card_span">
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

                            <el-col :span="6" :offset="2" :xs="{span:20,offset:2}">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/images/home/rb3.png" class="image"
                                         style="height: 300px;width: 100%">
                                    <div style="padding: 14px;">
                                        <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                        <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                            特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
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
                                                <span class="card_span">
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

                            <el-col :span="6" :offset="1" :xs="{span:20,offset:2}">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/images/home/rb3.png" class="image"
                                         style="height: 300px;width: 100%">
                                    <div style="padding: 14px;">
                                        <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>
                                        <p style="line-height:25px;margin-left: 20px;margin-right:10px">
                                            特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>
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
                                                <span class="card_span">
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
                        <div class="iblock">多种产品形式，灵活适用各类业务场景</div>
                        <div class="blocks">
                            <div class="block">
                                <span class="block_title">按需分配  减少初期投入</span>
                                <div class="block_inners">
                                    <p class="block_inner">嵌入式设备更新和淘汰的频率远远高于个人电脑。
                                        根据项目进度，随时可以增加和减少对于设备的使用量。</p>
                                </div>
                            </div>
                            <div class="block">
                                <span class="block_title">支持多种操作系统</span>
                                <div class="block_inners">
                                    <p class="block_inner">随时保存设备镜像，工作进度可保存在云端。主动管理和生命周期服务</p>

                                </div>
                            </div>
                            <div class="block">
                                <span class="block_title">值得依赖</span>
                                <div class="block_inners">
                                    <p class="block_inner">我们帮助你解决系统、驱动层面的问题。专注于AI算法的问题处理。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="home_reg">
                <span class="home_reg_title">现在注册，免费体验Devices on Cloud 平台所有开放设备</span>
                <div class="home_reg_img">
                    <img src="../../assets/images/home/home_reg.png" alt="">
                </div>
                <div>
                    <el-button class="home_reg_btn"> 立即注册并试用</el-button>
                </div>
            </div>
            <div style="background-color:#D7D7DB;padding-bottom:10px">

                <div class="service">
                    <span class="service_title">常见问题</span>
                    <div class="service_index">注册与登录 注册与收费 其他常见问题</div>
                    <hr style="margin-bottom:1px">
                </div>
                <div class="service_contents">
                    <table>
                        <tr>
                            <td><span class="service_querstion">注册账号都需要那些条件？</span>
                                <div style="width:80%"><p>
                                    注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向index邮箱或者手机号发送验证码，只有验证通过才能使用我们的设备。</p></div>
                            </td>
                            <td><span class="service_querstion">什么是使用服务？</span>
                                <p>适用服务是我们为使用者提供的免费使用本平台指定设备的服务。</p></td>
                        </tr>
                        <tr>
                            <td><span class="service_querstion">收不到邮箱验证码怎么办？</span>
                                <div style="width:80%"><p>可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。<br>
                                    如果任然无法收到验证码，您可尝试切换手机号进行验证。</p></div>
                            </td>
                            <td><span class="service_querstion">试用过后如何计费？</span>
                                <p>30天以下：按日计费<br>
                                    30天以上：按月计费<br>
                                    可选择：1~29日或者1~12月<br>
                                    订单页面选择日期后，费用自动生成</p></td>
                        </tr>
                        <tr>
                            <td><span class="service_querstion">收不到短信验证码怎么办？</span>
                                <div style="width:80%"><p>
                                    可能会由于手机停机、存储信息已满、网络延迟等原因没有及时收到验证码，这时请检查您的手机，保证手机可正常接收短信后，尝试重新获取验证码。<br>
                                    如果仍然无法收到验证码您可尝试邮箱进行验证。</p></div>
                            </td>
                            <td></td>
                        </tr>
                    </table>

                </div>
            </div>
            <el-footer height="300px">
                <el-col :span="3" :offset="1">
                    <div class="footer_block">
                        <span style="margin-left:30%">产品</span>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="footer_block">
                        <span style="margin-left:30%">社区</span>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="footer_block">
                        <span style="margin-left:30%">教程</span>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="footer_block">
                        <span style="margin-left:30%"></span>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="footer_block">
                        <span style="margin-left:30%"></span>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="footer_block_final">
                        <span style="margin-left:10%;padding-top:10px">联系我们</span>
                        <p style="margin:10% 0 0 10%;font-size:16px"> Email</p>
                        <p style="margin-left:10%;font-size:16px"> service@45iot.com</p>
                    </div>
                </el-col>
            </el-footer>

        </div>
    </el-container>
</template>

<script>
    export default {}

</script>
<style scoped>

    div {
        /*margin: 0;*/
        padding: 0;
    }

    .mid {
        margin-left: 2px;
        margin-right: 2px;
        border: 1px solid;
        text-align: center;
        background-color: #f5f5f5;
    }

    .block {
        display: inline-block;
        justify-content: space-between;
        width: 27%;
        margin-top: 15px;
    }

    .iblock {
        text-align: center;
        margin-top: 15px;
        font-size: 25px;
    }

    .blocks {
        text-align: center;
        display: inline-flex;
        justify-content: space-around;

    }

    .block_title {
        margin-top: 10px;
        display: block;
        font-size: 20px;
    }

    .block_inner {
        display: block;
        margin: 0 auto 10px auto;
        width: 50%;
        text-align: left;

    }

    .block_inners {
        margin-top: 15px;
        margin-bottom: 45px;
    }

    span {
        display: block;
    }


    img {
        /*height: 100%;*/
    }

    .home_first {
        display: flex;
        background-color: #E9F1F2;

    }

    .home_first_left {
        width: 50%;

    }

    .home_first_left_top {
        height: 10%;
        display:inline;

    }

    .home_first_right {
        width: 50%;
    }

    .first_font {
        font-size: 35px;
        color: #6173C4;
        margin: 10px auto;
        width: 75%;
    }

    .advantages_title {
        width: 50%;
        margin: 40px auto 0 auto;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }

    .advantages {
        width: 85%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }

    .adv_imgs_bottom {
        align-items: center;


        width: 85%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }

    .adv_imgs {
        /*align-items: center;*/
        /*width: 20%;*/
        /*position: relative;*/
        text-align: center;
        vertical-align: middle;
    }

    .imgs {
        margin: 20px;
        height: 65px;
        /*position: absolute;*/
        /*left:25%;*/
        vertical-align: middle

    }

    .adv_content {
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

    .card_span {
        margin-left: 10px;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
        font-weight: 700;
        font-style: normal;
        color: rgba(102, 102, 102, 0.874509803921569);

    }

    .el-footer {
        background-color: #666666
    }

    .el-col {
        height: 100%;
    }

    .footer_block {
        margin-top: 60px;
        height: 60%;
        width: 100%;
        color: white;
        border-left: 2px solid grey;
        font-size: 21px
    }

    .footer_block_final {
        margin-top: 60px;
        margin-bottom: 60px;
        height: 60%;
        width: 100%;
        color: white;
        border-left: 2px solid grey;
        border-right: 2px solid grey;
        font-size: 21px;

    }

    .service {
        background-color: #D7D7DB;
        text-align: center;
        padding-bottom: 1%;
        padding-top: 2%
    }

    .service_title {
        font-size: 21px;

        width: 100%;
    }

    .service_index {
        text-align: left;
        font-size: 21px;
        padding-left: 6%;
        margin-top: 3%;
        margin-bottom: 1%
    }

    .service_contents {
        width: 85%;
        margin: 0 auto;
        background-color: #D7D7DB

    }

    .service_querstion {
        font-weight: bold;
    }

    .home_reg {
        text-align: center;
        background-color: #000143;
        font-size: 18px;
        padding-top: 2%;
        padding-bottom: 2%

    }

    .home_reg_img {
        align-content: center;
        margin: 0 auto;
        width: 85%;
        text-align: center;
        background-color: #000143
    }

    .home_reg_title {
        color: white;
    }

    .home_reg_btn {
        background-color: #000143;
        border: 1px solid white;
        color: white;
        cursor: pointer;
    }


</style>