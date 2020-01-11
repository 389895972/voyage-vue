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
                <div class="advantages">
                    <div>
                        <img src="" alt="">
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
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
                margin: 0;
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
        height: 100%;
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
    .advantages{
        width: 85%;
        display: flex;
    }
</style>