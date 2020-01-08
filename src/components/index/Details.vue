<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt="">
            </div>
            <div class="main">
                <div class="first">
                    <div class="index_pic" >
                        <img src="../../assets/images/ailit_bg.png" alt="" width="100%"  >
                        <div class="index_btn">
                            <el-button type="primary">立即购买</el-button>
                            <el-button type="primary">管理设备</el-button>
                        </div>
                    </div>

                </div>
                <div class="product">
                    <span class="product_det">商品详情</span>
                    <div class="product_index" >
                        <a href="#1"><el-button class="product_btn">产品展示</el-button></a>
                        <a href="#2"><el-button class="product_btn">产品接口图</el-button></a>
                        <a href="#3"><el-button class="product_btn">关键优势</el-button></a>
                        <a href="#4"><el-button class="product_btn">产品硬件</el-button></a>
                        <a href="#5"><el-button class="product_btn">产品软件</el-button></a>
                        <a href="#6"><el-button class="product_btn">文档</el-button></a>
                    </div>
                    <div class="product_show">
                         <div class="product_show_div" id="1">产品展示</div>
                        <img class="imgs" src="../../assets/images/aikit_show8.png" alt=""  width="100%" height="100%">
                    </div>
                    <hr>
                    <div class="product_show" id="2">
                        <div class="product_show_div">产品接口图</div>
                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="product_show" id="3">
                        <div class="product_show_div">关键优势</div>
                        <div>算法SDK</div>
                        <div> 算法SDK包括一些优化算法和演示应用程序的源代码，如人脸识别和目标检测。开发人员可以使用算法SDK开发自己的人工智能应用程序。此外，开发人员还可以集成自己的AI算法，方便地演示应用程序。</div>
                        <hr>
                        <div>强大计算</div>
                        <div>AI工具包集成了最新的高通六角685 DSP、新的矢量引擎和异构计算(CPU、DSP和GPU)，提供了超过450 GLOP的计算能力来完成4k视频的人工智能可视化处理。</div>
                        <hr>
                        <div>柔性视觉解</div>
                        <div>支持多种摄像头解决方案，包括内置超高清相机、USB3.0摄像头和IP摄像头。</div>
                        <hr>
                    </div>
                    <div class="product_show" id="4">
                        <div class="product_show_div">产品硬件</div>
                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="product_show" id="5">
                        <div class="product_show_div">产品软件</div>
                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="product_show" id="6">
                        <div class="product_show_div">文档</div>
                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">
                    </div>
                </div>

            </div>
            <!--            <div class="footer">-->
            <!--                <div  class="footer_inners">-->
            <!--                    <div class="footer_inner">-->
            <!--                        <span class="footer_span1">CONTACT INFO联系方式</span>-->
            <!--                        <span class="footer_span11">中科创达股份有限公司是智能操作系统产品和技术提供商。自2008年成立依赖，公司致力于提供智能化操作系统系列产品、技术及解决方案。</span>-->
            <!--                    </div>-->
            <!--                    <div class="footer_inner">-->
            <!--                        <span class="footer_span2">(86)10-62662686</span>-->
            <!--                        <span class="footer_span21">biz@thundersoft.com</span>-->
            <!--                        <span class="footer_span22">北京市海淀区清华东路9号院3号楼创达大厦 邮编：100083</span>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
    </el-container>


</template>
<script>

</script>
<style scoped>


    .first{
        display: flex;
    }
    .index_pic{
        /*background-image: url("../../assets/images/ailit_bg.png");*/
        /*  background-size: cover;*/
          width: 100%;
        /*  height: 445px;*/
        position:relative;

    }


    .main{
        background-color: #cccccc;
        padding: 20px 25px;
    }

    .index_btn{
        display: inline-block;
        position: absolute;
        right: 10px;
        bottom: 100px;
        width: 300px;
        margin-right: 50px;
        margin-left: 1300px;
        justify-content: space-between;
    }
    .el-button{
        margin-left: 20px;
    }
    a{
        text-decoration: none;
        margin: 0 55px;
        width: 110px;
    }
    hr{
        width: 90%;
        align-items:center;
    }
    .product_index{
        display: flex;
        border: 1px solid;
        background-color: white;
        color: #4A4A4D;
        margin-top: 30px;
        font-size: 21px;
        height: 50px;
        align-items: center;
        width: 100%;
    }
    .product_show{
        /*display: flex;*/
        /*justify-content:space-around;*/
        text-align: center;
        background-color: white;
        width: 100%;

    }
    .product_show_span{
         margin-top: 50px;
        margin-right: 300px;
        margin-left: 118px;
        font-size: 21px;

        /*margin-top: 50px;*/
        /*margin-right: 130px;*/
        /*margin-left:120px;*/
        /*font-size: 21px;*/
    }
    .product_btn{
        border: 0;
        background-color: white;
        font-size: 21px;
    }
    .product{
        margin-top: 40px;
    }
    .product_det{
      font-weight: bold;
        font-size: 21px;

    }
   /*.imgs{*/
   /*   margin: 0 40px;*/
   /*}*/
    .product_show_div{
        width: 200px;
       margin: 0 0 10px 30px;
        padding: 10px;
        font-size: 21px;
    }







    .index_span1{
        display: block;
        margin-top: 40px;
        font-weight: bold;
    }
    .index_span2{
        display: block;
        margin-top: 40px;
        margin-right: 65px;
    }
    .index_pic_details{
        background-color: white;
        width: 40%;

    }
</style>