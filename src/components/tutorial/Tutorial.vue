<template>
    <div class="middle_size">
        <div class="configure" style="height: 130px;width:100%">
            <span class="configure_title"> 相关教程</span>
            <div class="configure_content" >
                <el-radio-group v-model="product_name">
                    <el-radio-button label="AIKIT" value="AIKIT"></el-radio-button>
                    <el-radio-button label="RB3"></el-radio-button>
                    <el-radio-button label="Edge KIT"></el-radio-button>
                </el-radio-group>
            </div>
        </div>

        <div style="font-size: 18px;margin-top:20px">
            <span style="width: 4px;height:16px;background-color:#5171F0 ;display: inline-block"></span>
            <span style="margin-left: 5px">{{product_name}}</span>
        </div>
        <div v-if="product_name=='AIKIT'">
            <el-row>
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row v-if="isMoreVedio">
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>1
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/aikit/aikit_tutorial.jpg')})`}">
                            <span class="vedio_title">Edge Kit开发套件</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
                <div style="width: 100%;text-align:center;margin-top: 20px">
                    <el-button class="more_button" @click="showLessVedio">收起 &lt; &lt;</el-button>
                </div>

            </el-row>
            <el-row v-else>
                <div style="width: 100%;text-align: center">
                    <el-button class="more_button" @click="showMoreVedio">更多 &gt; &gt;</el-button>
                </div>
            </el-row>
        </div>
        <div v-else-if="product_name=='RB3'">
            <el-row>
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">A高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row v-if="isMoreVedio">
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/rb3/rb3_tutorial.jpg')})`}">
                            <span class="vedio_title">高通RB3平台机器人开发人员手册</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
                <div style="width: 100%;text-align:center;margin-top: 20px">
                    <el-button class="more_button" @click="showLessVedio">收起 &lt; &lt;</el-button>
                </div>

            </el-row>
            <el-row v-else>
                <div style="width: 100%;text-align: center">
                    <el-button class="more_button" @click="showMoreVedio">更多 &gt; &gt;</el-button>
                </div>
            </el-row>
        </div>
        <div v-else-if="product_name=='Edge KIT'">
            <el-row>
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row v-if="isMoreVedio">
                <el-col span="8">
                    <div class="vedio_block_left">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
                        <div class="vedio_image" :style="{backgroundImage:`url(${require('../../assets/images/tutorial/edgekit/edgekit_tutorial.jpg')})`}">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
                <div style="width: 100%;text-align:center;margin-top: 20px">
                    <el-button class="more_button" @click="showLessVedio">收起 &lt; &lt;</el-button>
                </div>

            </el-row>
            <el-row v-else>
                <div style="width: 100%;text-align: center">
                    <el-button class="more_button" @click="showMoreVedio">更多 &gt; &gt;</el-button>
                </div>
            </el-row>
        </div>



    </div>

</template>

<script>
    export default {
        name: "Tutorial",
        data(){
            return{
                isMoreVedio:false,
                product_name:'AIKIT'
            }

        },
        methods:{
            showMoreVedio(){
                this.isMoreVedio=true;
            },
            showLessVedio(){
                this.isMoreVedio=false;
            }
        },
        // watch: {
        //     product_name() {
        //     }
        //
        // },
    }
</script>

<style scoped>
    .less{
        text-align: center;
        width: 100%;
        height: 25px;
    }
    .more{
        text-align: center;
        width: 100%;
    }
    .product_vedios{
        width: 100%;
        height: 200px;
    }
    .el-row{
        /*height: 200px;*/
        margin-top:20px;
    }
    .vedio_block_left{

        margin-left: 0;
        width: 360px;
        /*height: 12vw;*/
        height:200px

    }

    .vedio_block_middle{


        margin-left: auto;
        margin-right: auto;;
        width: 360px;
        /*height: 12vw;*/
        height:200px
    }
    .vedio_block_right{

        margin-left: auto;
        width: 360px;
        /*height: 12vw;*/
        height:200px
    }

    .vedio_image{
        /*background-image: linear-gradient(181deg, rgba(0,0,0,0.00) 71%, #000000 100%);*/
        border-radius: 5px;
        /*background-image: url("../../assets/images/tutorial/aikit/edgekit_tutorial.jpg");*/
        background-repeat: no-repeat;
        background-position: right;
        background-size: 360px 200px;
        width: 360px;
        height: 200px;
        position:relative;
    }
    .vedio_title{
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 16px;
        z-index: 1;
        display: flow;
        margin-bottom: 10px;
        /*background-image: linear-gradient(181deg, rgba(0,0,0,0.00) 71%, #000000 100%);*/

        position:absolute;
        left :20px;
        bottom:20px;
    }
    .vedio_desc{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 20px;
        z-index: 1;


    }



    .more_button{


        width: 360px;
        background: #E4E7EB;
        border-radius: 3px;
        margin-top: 20px;
        margin-bottom: 100px;

        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #16161D;
    }

    .configure{
        width: 100%;
        height: 200px;
        /*margin: 20px auto 0 80px;*/
        padding-top: 20px;
        padding-left: 30px;
        /*border: 1px solid ;*/
        background-color: #F0F1F3;
        margin-top: 30px;
    }
    .configure_title{
        margin-right: 20px;
        font-size: 18px;
        font-weight: bold;
        display: block;

    }

    .configure_content{
        margin-top: 20px;
    }
    .configure_content >>>.el-radio-button__inner{
        margin-right: 10px;
        /*background-color: #3FB560;*/
        width: 140px;
        color: black;
    }
    .configure_content >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        margin-right: 10px;
        background-color: #3254DC;
        color: white;
        border-color: #3254DC;
        width: 140px;
    }
    .el-radio-button is-active{
        background-color: #3254DC;
    }


</style>

<style scoped>
    .middle_size{
        width:1280px;
        margin:0 auto;

    }
</style>
