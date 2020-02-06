<template>
    <el-container >

        <el-row>
            <el-col span="8">
                <div class="vedio_block_left">
                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">
                </div>
            </el-col>

            <el-col span="8">
                <div class="vedio_block_middle">
                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">
                </div>
            </el-col>

            <el-col span="8">
                <div class="vedio_block_right">
                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">
                </div>
            </el-col>
        </el-row>

<!--        <el-row v-if="isMoreVedio">-->
<!--            <el-col span="8">-->
<!--                <div class="vedio_block_left">-->
<!--                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">-->
<!--                </div>-->
<!--            </el-col>-->

<!--            <el-col span="8">-->
<!--                <div class="vedio_block_middle">-->
<!--                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">-->
<!--                </div>-->
<!--            </el-col>-->

<!--            <el-col span="8">-->
<!--                <div class="vedio_block_right">-->
<!--                    <img class="vedio_image" src="../assets/images/AiKit/aikit_vedio.png">-->
<!--                </div>-->
<!--            </el-col>-->
<!--            <div style="width: 100%;text-align: center">-->
<!--                <el-button class="more_button" @click="showLessVedio">收起 &lt; &lt;</el-button>-->
<!--            </div>-->

<!--        </el-row>-->

<!--        <el-row v-else>-->
<!--            <div style="width: 100%;text-align: center">-->
<!--                <el-button class="more_button" @click="showMoreVedio">更多 &lt; &lt;</el-button>-->
<!--            </div>-->
<!--        </el-row>-->





    </el-container>


</template>
<script>

export default {
  data() {
    return {
        isMoreVedio:false
    };
  },
    methods:{
        showMoreVedio(){
            this.isMoreVedio=true;
        },
        showLessVedio(){
            this.isMoreVedio=false;
        }


    }
};
</script>

<style  scoped>
    /*相关教程*/
    .adv_span1{
        display: block;
        /*margin:10px 0 0 115px;*/
        /*s*/
        font-weight: bold;
        font-size: 18px;
        width: 400px;
        text-align: left;
        /*margin-left: 13px;*/
        margin-top: 10px;
        margin-bottom: 10px;

    }
   .product_vedios{
        width: 100%;
   }
    .el-row{
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .vedio_block_left{

        margin-left: 0;
        width: 90%;
        height: 12vw;
    }

    .vedio_block_middle{


        margin-left: auto;
        margin-right: auto;;
        width: 90%;
        height: 12vw;
    }
    .vedio_block_right{

        margin-left: auto;
        width: 90%;
        height: 12vw;
    }

   .vedio_image{
       background-image: linear-gradient(181deg, rgba(0,0,0,0.00) 71%, #000000 100%);
       border-radius: 5px;
       border-radius: 5px;


       width: 100%;
       height: 12vw;
   }
   .vedio_title{
       font-family: PingFangSC-Semibold;
       font-size: 20px;
       color: #FFFFFF;
       line-height: 16px;
       z-index: 1;
       display: flow;

   }
   .vedion_desc{
       font-family: PingFangSC-Regular;
       font-size: 14px;
       color: #FFFFFF;
       line-height: 20px;
       z-index: 1;


   }

    .more_button{

        height:22px;
        width: 360px;
        background: #E4E7EB;
        border-radius: 3px;
        border-radius: 3px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #16161D;
    }


    /*手机样式*/
    @media (max-width: 768px) {

    }

</style>
