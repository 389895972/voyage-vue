<template>
    <el-container >
        <span class="adv_span1" style="margin-left: 25px">相关教程</span>
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
        height: 14vw;
    }
    .vedio_block_middle{

        margin-left: auto;
        margin-right: auto;;
        width: 90%;
        height: 14vw;
    }
    .vedio_block_right{

        margin-left: auto;
        width: 90%;
        height: 14vw;
    }
   .vedio_image{
       background-image: linear-gradient(181deg, rgba(0,0,0,0.00) 71%, #000000 100%);
       border-radius: 5px;
       border-radius: 5px;


       width: 100%;
       height: 11vw;
   }
   .vedio_title{
       font-family: PingFangSC-Semibold;
       font-size: 20px;
       color: #FFFFFF;
       line-height: 16px;
   }
   .vedion_desc{
       font-family: PingFangSC-Regular;
       font-size: 14px;
       color: #FFFFFF;
       line-height: 20px;

   }


    /*手机样式*/
    @media (max-width: 768px) {

    }

</style>
