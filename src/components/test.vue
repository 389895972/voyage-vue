<template>
    <el-container >

<!--        <span>{{hours}}</span>:-->
<!--        <span>{{minutes}}</span>:-->
<!--        <span>{{seconds}}</span>-->

        <div >
            <!-- 这里是显示还未结束时的内容，这里只是我这得布局，你可以随意。 -->
            <div class="time" v-show="!isShow">
<!--                <span class="hour">{{myDay}}</span> :-->
                <span class="hour">{{myHours}}</span> :
                <span class="minute">{{myMinutes}}</span> :
                <span class="second">{{mySeconds}}</span>
            </div>
            <!-- 这里是显示结束后的内容 -->
            <span class="second" v-show="isShow">{{clocker}}</span>
        </div>
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



        this.$http
        .get('/order/findNoPayOrders', {
        params: {
        orderId:this.orderId
        }
        })
        .then(function(res) {
        window.console.log(res);
        if (res.status == 200) {
        window.console.log("8888")
        this.orderInfo[0].order_id ="订单编号："+res.data.data.order_id
        this.create_time=this.tranDate(res.data.data.create_time)
        this.orderInfoDetails = []
        this.orderInfoDetails[0]={}
        this.orderInfoDetails[0].product_name=res.data.data.goods_name
        this.orderInfoDetails[0].product_num=res.data.data.num
        this.buy_nums=res.data.data.num
        this.product_name=res.data.data.goods_name
        this.orderInfoDetails[0].configure={}
        this.orderInfoDetails[0].configure.os=res.data.data.o__s
        //  this.orderInfoDetails[0].configure=res.data.o__s
        this.orderInfoDetails[0].pay_methods='默认'
        this.orderInfoDetails[0].start_end_time='默认'
        this.orderInfoDetails[0].pay='￥'+res.data.data.price

        if(res.data.data.payment_type==="1"){
        this.orderInfo[0].order_type= '订单类型：新购'

        }else if(res.data.data.payment_type==="2"){
        this.orderInfo[0].order_type= '订单类型：续费'
        }
        if(res.data.data.status=="1"){
        this.orderInfo[3].order_id= '支付状态：未支付 ￥'+res.data.data.price
        this.order_status=1
        window.console.log("getOrder"+this.order_status)
        this.price=res.data.data.price
        }else if(res.data.data.status==="2"){
        this.orderInfo[3].order_id= '支付状态：已支付 ￥'+res.data.data.price
        this.order_status=2
        this.price=res.data.data.price
        }else if(res.data.data.status==="3"){
        this.orderInfo[3].order_id= '支付状态：已取消 ￥'+res.data.data.price
        this.order_status=3
        this.price=res.data.data.price
        }

        }
        })
        .catch(function(error) {
        window.console.log(error);
        this.$message.error("查询失败！")
        });



    </el-container>


</template>
<script>

export default {
  data() {
    return {
        isMoreVedio:false,
        hours: '',
        minutes: '',
        seconds: '',
        isShow: false, // 控制显示结束或还未结束显示的内容
        clocker: '', // 结束后显示的内容
        timeObj: null, // 时间对象,下方会用到
        myDay: '', // 我定义来接收计算出来的 天 的
        myHours: '', // 我定义来接收计算出来的 小时 的
        myMinutes: '', // 我定义来接收计算出来的 分钟 的
        mySeconds: ''// 我定义来接收计算出来的 秒钟 的
    };
  },
    methods:{
        showMoreVedio(){
            this.isMoreVedio=true;
        },
        showLessVedio(){
            this.isMoreVedio=false;
        },
        tranDate(standard_time){
            let d=new Date(standard_time.replace(/-/g,'/').replace('T',' ').replace('.000+0000',''));
            let month=d.getMonth()+1;
            let day=d.getDate();
            let hour=d.getHours();
            let minutes=d.getMinutes();
            let seconds=d.getSeconds();
            if(month<10){
                month="0"+month;
            }

            if(day<10){
                day="0"+day;
            }
            if(hour<10){
                hour="0"+hour;
            }

            if(minutes<10){
                minutes="0"+minutes;
            }

            if(seconds<10){
                seconds="0"+seconds;
            }
            let time=" "+hour+":"+minutes+":"+seconds;
            let t=d.getFullYear()+"-"+month+"-"+day+time;
            return t;
        },


    },
    created() {
        let target = new Date("2019-6-6").getTime(); //获取目标时间戳
        window.console.log(target)
        setInterval(() => {
            let date = new Date();

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }, 1000)
    },
    mounted () {

    },
    watch(){
      if(this.myHours===0&&this.myMinutes===0&&this.mySeconds===0){
           alert("11")
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
