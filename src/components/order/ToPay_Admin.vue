<template>
        <el-container>
            <div class="home-container">

                <div class="content">
                    <div>
<!--                        <el-button >&larr;返回</el-button>-->
                    </div>


                    <div class="titles">
                        <div class="title"> 订单 管理
<!--                        <el-button  style="width: 180px;background-color: #3254DC;color:white;line-height: 25px" v-if="order_status===2"> 管理设备</el-button>-->
                        </div>
                    </div>
<!--                    <div v-if="order_status===1" style="background-color: #FDEDEC;color: red;text-align:center;height: 50px;font-size: 16px">-->
<!--                        &lt;!&ndash; 这里是显示还未结束时的内容，这里只是我这得布局，你可以随意。 &ndash;&gt;-->
<!--                        <div class="time" v-show="!isShow" style="height: 50px">-->
<!--                            &lt;!&ndash;                <span class="hour">{{myDay}}</span> :&ndash;&gt;-->
<!--                           离取消订单还有 <span class="hour">{{myHours}}</span> :-->
<!--                            <span style="display: inline-block;height: 50px;line-height: 50px" class="minute">{{myMinutes}}</span> :-->
<!--                            <span style="display: inline-block;height: 50px;line-height: 50px" class="second">{{mySeconds}}</span>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; 这里是显示结束后的内容 &ndash;&gt;-->
<!--                        <span style="display: inline-block;height: 50px;line-height: 50px" class="second" v-show="isShow">{{clocker}}</span>-->
<!--                    </div>-->
                    <div class="product_name" style="margin-top: 20px">
                        <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                        <span style="font-size: 16px;"> 基本信息</span>
                    </div>
                    <div class="table_product">
                        <table v-if="user===1" style="width: 100%;height:50px;background-color: #E4E7EB;">
                            <tr style="font-weight:bold">
                                <td style="width: 17%">订单编号</td>
                                <td style="width: 15%">订单类型</td>
                                <td>创建时间</td>
                                <td>支付时间</td>
                                <td>支付状态</td>

                            </tr>
                            <tr>
                                <td style="width: 15%;height: 80px;background-color: white" valign="top">
                                    {{orderId}}
                                </td>
                                <td style="padding-top: 0;background-color: white" valign="top">{{pay_status[0].costs}}</td>
                                <td valign="top" style="background-color: white;width: 20%;">{{create_time}}</td>
                                <td valign="top" style="background-color: white;width: 30%;">{{payment_time}}</td>
<!--                                <td valign="top" style="background-color: white">{{hire_time}}</td>-->
                                <td v-if="order_status===1" valign="top" style="background-color: white;color:red" > 未支付￥{{price}}</td>
                                <td v-else-if="order_status===2" valign="top" style="background-color: white;color:green" > 已付款￥{{price}}</td>
                                <td v-else-if="order_status===3" valign="top" style="background-color: white;color:red" > 已取消￥{{price}}</td>
                                <td v-else valign="top" style="background-color: white;color:red" > </td>
                            </tr>
                        </table>
                        <table v-else-if="user===2" style="width: 100%;height:50px;background-color: #E4E7EB;">
                            <tr>
                                <td style="width: 15%">订单编号</td>
                                <td style="width: 13%">购买类型</td>
                                <td>用户名</td>
                                <td>手机号</td>
                                <td>创建时间</td>
                                <td>支付时间</td>
                                <td>支付状态</td>

                            </tr>
                            <tr>
                                <td style="width: 15%;height: 80px;background-color: white" valign="top">
                                    {{orderId}}
                                </td>
                                <td style="padding-top: 0;background-color: white" valign="top">{{pay_status[0].costs}}</td>
                                <td valign="top" style="background-color: white;width: 10%;"> {{infoForm1[0].name}}</td>
                                <td  valign="top" style="background-color: white;width: 10%;">{{infoForm1[0].phone_num}}</td>
                                <td valign="top" style="background-color: white;width: 20%;">{{create_time}}</td>
                                <td valign="top" style="background-color: white;width: 20%;">{{payment_time}}</td>
<!--                                <td valign="top" style="background-color: white">{{hire_time}}</td>-->
                                <td v-if="order_status===1" valign="top" style="background-color: white;color:red" > 未支付￥{{price}}</td>
                                <td v-else-if="order_status===2" valign="top" style="background-color: white;color:green" > 已付款￥{{price}}</td>
                                <td v-else-if="order_status===3" valign="top" style="background-color: white;color:red" > 已取消￥{{price}}</td>
                                <td v-else valign="top" style="background-color: white;color:red" ></td>
                            </tr>
                        </table>
                        <div v-if="order_status===2">
                        <div  class="product_name" style="margin-top：15px">
                            <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                            <span style="font-size: 16px;"> 支付信息</span>
                        </div>
                        <div class="table_product" >
                            <table  style="width: 100%;height:50px;margin-bottom: 55px">
                                <tr style="border-bottom:1px solid #E7EAED;border-top:1px solid #E7EAED;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                    <td style="width: 15%">支付渠道</td>
                                    <td>扣款费用</td>
                                    <td>扣款时间</td>
                                    <td>支付账户</td>

                                </tr>
                                <tr  style="border-bottom:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                    <td style="width: 15%;background-color: white" valign="top">
                                   --
                                    </td>
                                    <td style="padding-top: 0;background-color: white;width: 15%" valign="top">--</td>
                                    <td valign="top" style="background-color: white;width: 35%">--</td>
                                    <td valign="top" style="background-color: white;text-align: center"></td>
                                </tr>
                            </table>


                        </div>
                        </div>


                        <div class="product_name">
                            <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                            <span style="font-size: 16px;"> 订单详情</span>
                        </div>
                        <div class="table_product" style="margin-bottom: 25px">
                            <table  style="width: 100%;height:50px;">
                                <tr style="border-bottom:1px solid #E7EAED;border-top:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                    <td style="width: 23%">产品</td>
                                    <td>数量</td>
                                    <td>具体配置</td>
                                    <td>付款方式</td>
                                    <td>开通/到期时间</td>
                                    <td>价格</td>
                                </tr>
                                <tr  style="border-bottom:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                    <td style="width: 23%;height: 180px;background-color: white">
                                        <table>

                                            <tr>
                                                <td>
                                                    <img  v-if="product_name==='AI KIT'" src="../../assets/images/aikit.png" style="width:160px;height:98.7px " alt="">
                                                    <img  v-else-if="product_name==='RB 3'" src="../../assets/images/rb3.png" style="width:160px;height:98.7px " alt="">
                                                    <img  v-else-if="product_name==='Edge KIT'" src="../../assets/images/edgekit.png" style="width:160px;height:98.7px " alt="">
                                                </td>

                                            </tr>
                                            <tr > <span style="text-align: center;width: 100%;display: inline-block"> {{product_name}} </span></tr>


                                        </table>


                                    </td>
                                    <td style="padding-top: 0;background-color: white" >{{buy_nums}}</td>
                                    <td  style="background-color: white">
                                        <table>
                                            <tr>标准版</tr>
                                            <tr>{{os}}</tr>
<!--                                            <tr>镜像:</tr>-->
<!--                                            <tr>网络类型:</tr>-->
<!--                                            <tr>分配公网IPV4地址：</tr>-->
<!--                                            <tr>带宽计费方式：</tr>-->
<!--                                            <tr>自动续费：</tr>-->
                                        </table>
                                    </td>
                                    <td  style="background-color: white">{{pay_method}}</td>
                                    <td  style="background-color: white">
                                        <table>
                                            <tr>{{start_time}}</tr>
                                            <tr>{{due_time}}</tr>
                                        </table>
                                    </td>
                                    <td  style="background-color: white" > ￥{{price}}</td>
                                </tr>
                            </table>



                            <div class="order_btn" v-if="order_status===1">
                                <div>
                                    <span style="color: #606879;font-size: 12px">原价：</span>
                                    <span style="text-decoration: line-through;margin-left: 10px;font-size:24px ">￥{{price}}</span>
                                </div>
                                <div style="margin-top: 10px;margin-bottom: 10px">
                                    <span style="color: #606879;font-size: 12px">应付金额：</span>
                                    <span style="color: red;font-size: 24px">￥0.00</span>
                                </div>

<!--                                <el-button   @click="handleCancel" style="width: 180px;">取消订单</el-button>-->
<!--                                <el-button  type="primary" @click="buy_pay" style="width: 180px;font-size: 16px;background-color: #3254DC">立即支付</el-button>-->
                            </div>

                            <div v-if="user!==1" style="margin-top: 50px">
                            <div  class="product_name">
                                <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                                <span style="font-size: 16px;"> 个人信息</span>
                            </div>


<!--                            <el-table-->
<!--                                    :data="infoForm1"-->
<!--                                    :span-method="objectSpanMethod"-->
<!--                                    border-->
<!--                                    style="width: 100%; margin: 20px auto 30px auto;">-->
<!--                                <el-table-column-->
<!--                                        prop="name"-->
<!--                                        label="姓名"-->
<!--                                        width="360">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="department"-->
<!--                                        label="部门">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="sex"-->
<!--                                        label="性别">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="phone_num"-->
<!--                                        label="电话">-->
<!--                                </el-table-column>-->
<!--                                <el-table-column-->
<!--                                        prop="purpose"-->
<!--                                        label="用途">-->
<!--                                </el-table-column>-->
<!--                            </el-table>-->
                                <table  style="width: 100%;height:50px;">
                                    <tr style="border-bottom:1px solid #E7EAED;border-top:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                        <td style="width: 15%">姓名</td>
                                        <td>部门</td>
                                        <td>性别</td>
                                        <td>电话</td>
                                        <td style="width: 20%;">用途</td>

                                    </tr>
                                    <tr  style="border-bottom:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                        <td style="width: 15%;background-color: white">
                                            {{infoForm1[0].name}}
                                        </td>
                                        <td style="padding-top: 0;background-color: white" > {{infoForm1[0].department}}</td>
                                        <td valign="top" style="background-color: white"> {{infoForm1[0].sex}}</td>
                                        <td  style="background-color: white"> {{infoForm1[0].phone_num}}</td>
                                        <td  style="width: 20%;background-color: white"> {{infoForm1[0].purpose}}</td>

                                    </tr>
                                </table>
                            </div>
                            <div v-if="user!==1" style="margin-top: 50px">
                            <div class="product_name">
                                <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                                <span style="font-size: 16px;"> 操作信息</span>
                            </div>
                            <div class="table_product" style="margin-bottom: 25px">
                                <table  style="width: 100%;height:50px;">
                                    <tr style="border-bottom:1px solid #E7EAED;border-top:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                        <td style="width: 23%">操作者</td>
                                        <td>操作时间</td>
                                        <td>订单状态</td>
                                        <td>备注</td>

                                    </tr>
                                    <tr  style="border-bottom:1px solid #E7EAED;;border-left:0.3px solid #E7EAED;border-right:0.3px solid #E7EAED;">
                                        <td style="width: 23%;background-color: white">

                                        </td>
                                        <td style="padding-top: 0;background-color: white" ></td>
                                        <td valign="top" style="background-color: white"></td>
                                        <td  style="background-color: white">{{marks}}</td>

                                    </tr>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </el-container>
</template>
<script>
    export default {
        data() {
            return {
                marks:'----',
                payment_time:'------',
                infoForm1:[{
                    name:'',
                    department:''
                }],
                start_time:'---- ----',
                due_time:'---- ----',
                pay_method:'--------',
                user:2,
                os:'',
                kong:'',
                price:0,
                buy_nums:0,
                isShow: false, // 控制显示结束或还未结束显示的内容
                clocker: '', // 结束后显示的内容
                timeObj: null, // 时间对象,下方会用到
                myDay: '', // 我定义来接收计算出来的 天 的
                myHours: '', // 我定义来接收计算出来的 小时 的
                myMinutes: '', // 我定义来接收计算出来的 分钟 的
                mySeconds: '',// 我定义来接收计算出来的 秒钟 的
                product_name:'',
                orderId:this.$route.params.orderId,
               // orderId:"200119193113462975",
                order_status:0,
                due_order_time:0,
                create_time:'',
                orderInfo: [{
                    order_id: '订单编号：',
                    order_type: '订单类型：',
                }, {
                    order_id: '创建时间：',
                    order_type: '支付时间：',
                }, {
                    order_id: '',
                    order_type: '',
                },{
                    order_id: '',
                    order_type: '',
                },
                ],
                orderInfoDetails: [],
                    // {
                    //     product_name:'',
                    //     product_num: '',
                    //     configure:'',
                    //     pay_methods:'默认',
                    //     start_end_time:'',
                    //     pay:'',
                    // }, {
                    //     product_name: '',
                    //     product_num: '',
                    //     configure:'',
                    //     pay_methods:'',
                    //     start_end_time:'',
                    //     pay:'',
                    // }, {
                    //     product_name: '',
                    //     product_num: '',
                    //     configure:'',
                    //     pay_methods:'',
                    //     start_end_time:'',
                    //     pay:'',
                    // },{
                    //     product_name: '',
                    //     product_num: '',
                    //     configure:'',
                    //     pay_methods:'',
                    //     start_end_time:'',
                    //     pay:'',
                    // },

                pay_status: [{
                    pay_channel: '-',
                    costs: '新购',
                    cost_time:'',
                    pay_account:'',
                },
                ],

            }
        },
        created(){
            this.getOrder();
          //  this.getOrderTime();
        },
        mounted(){



        },
        methods:{
           async getOrder(){
                const {data:res}=await this.$http.get('/order/findNoPayOrders',{params:{orderId:this.orderId}})
                 if(res.code===20000){
                     window.console.log(res.data)


                     this.create_time=this.tranDate(res.data.create_time)


                     this.orderInfoDetails = []
                     this.orderInfoDetails[0]={}
                     this.orderInfoDetails[0].product_name=res.data.goods_name
                     this.orderInfoDetails[0].product_num=res.data.num
                     this.buy_nums=res.data.num
                     window.console.log(2222)
                     this.product_name=res.data.goods_name

                      this.orderInfoDetails[0].configure={}
                      this.orderInfoDetails[0].configure.os=res.data.o__s
                   //  this.orderInfoDetails[0].configure=res.data.o__s

                     this.orderInfoDetails[0].pay_methods='默认'
                     this.orderInfoDetails[0].start_end_time='默认'
                     if(res.data.price!=null){
                     this.orderInfoDetails[0].pay='￥'+res.data.price.toFixed(2)}
                     this.due_order_time=res.data.due_order_time
                     window.console.log(333)

                     this.os=res.data.o__s

                     this.infoForm1[0].name=res.data.name
                     this.infoForm1[0].department=res.data.department
                     this.infoForm1[0].sex=res.data.sex
                     this.infoForm1[0].phone_num=res.data.phone_num
                     this.infoForm1[0].purpose=res.data.purpose
                     if(res.data.payment_type==="1"){
                         this.orderInfo[0].order_type= '订单类型：新购'

                     }else if(res.data.payment_type==="2"){
                         this.orderInfo[0].order_type= '订单类型：续费'
                     }
                     if(res.data.status==="1"){
                         //this.orderInfo[3].order_id= '支付状态：未支付 ￥'+res.data.price
                         this.order_status=1
                         this.marks='用户已下单未支付'

                         window.console.log("getOrder"+this.order_status)
                         this.price=res.data.price.toFixed(2)

                         this.getOrderTime()

                     }else if(res.data.status==="2"){
                         this.orderInfo[3].order_id= '支付状态：已支付 ￥'+res.data.price
                         this.order_status=2
                         this.marks='用户已支付'
                         this.price=res.data.price.toFixed(2)
                         this.payment_time=this.tranDate(res.data.payment_time)
                         this.start_time=this.tranDate(res.data.createtime)
                         this.due_time=this.tranDate(res.data.finishtime)
                     }else if(res.data.status==="3"){
                         this.orderInfo[3].order_id= '支付状态：已取消 ￥'+res.data.price
                         this.order_status=3
                         this.marks='用户已取消支付'
                         this.price=res.data.price.toFixed(2)
                     }
                }else{
                     this.$message.error("查询失败！")
                 }
            },
            tranDate(standard_time){
                if(standard_time==null){

                    return  null
                }
                let d=new Date(standard_time.replace(/-/g,'/').replace('T',' ').replace('.000+0800',''));
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
            async handleCancel(){
                const {data:res}=await this.$http.get("/order/cancelOrder", {params: {orderId: this.orderId}})
                window.console.log(res.code)
                if(res.code===20000){
                    this.$message.success("取消订单成功！")
                    this.getOrder();
                }

            },
            async buy_pay(){
                const {data:res}=await this.$http.get('/order/changeStatus',{params:{ orderId:this.orderId}})
                // window.console.log(res)
                if(res.code==20000) {
                   this.$message.success("支付成功！")
                    this.getOrder();
                }

            },
            getOrderTime(){
                // let time1=this.order_status
                window.console.log("getOrderTime"+this.order_status)
                if(this.order_status===1){
                    window.console.log("4---"+this.order_status)

                // 计算时间差
                // let timeLag = (this.endTime - this.startTime) / 1000
                //let timeLag = 43200000 / 1000
                let nowdate=new  Date().getTime()
                //let timeLag = (this.due_order_time - nowdate) / 1000
                window.console.log(nowdate)
                let timeLag = 200000/ 1000
                // 判断当前是否时分秒的值是否大于10
                let add = num => {
                    return num < 10 ? '0' + num : num
                }
                // 时间倒计时运算的方法
                let timeFunction = () => {
                    let time = timeLag--
                    this.timeObj = { // 时间对象
                        seconds: Math.floor(time % 60),
                        minutes: Math.floor(time / 60) % 60,
                        hours: Math.floor(time / 60 / 60) % 24,
                        days: Math.floor(time / 60 / 60 / 24)
                    }
                    // 计算出时分秒
                    this.myDay = `${add(this.timeObj.days)}`
                    this.myHours = `${add(this.timeObj.hours)}`
                    this.myMinutes = `${add(this.timeObj.minutes)}`
                    this.mySeconds = `${add(this.timeObj.seconds)}`
                    // 当时间差小于等于0时,停止倒计时
                    if (time <= 0) {
                        this.isShow = true
                        this.clocker = this.endMsg || '订单结束'
                        clearInterval(go)
                        // this.handleCancel()
                        this.getOrder()
                    }
                }
                // 开始执行倒计时
                timeFunction()
                // 每一秒执行一次
                let go = setInterval(() => {
                    timeFunction()
                }, 1000)
               }
            }

        },
        // watch:{
        //     order_status(){
        //         if(this.order_status==1){
        //             this.getOrderTime();
        //         }
        //     }
        // }
        // computed:{
        //     tableData(){
        //         const t = this.orderInfoDetails;
        //
        //         return t;
        //
        //     }
        // }

    }
</script>
<style scoped>
    .home-container{
        background-color: white;
        border: 1px solid;
    }
    .content{
        width: 1280px;
        background-color: white;
        margin: 40px auto 0 auto;
        padding-bottom: 200px;
    }
    .titles{
        font-weight: bold;
        font-size: 36px;

    }
    .title{
        margin: 20px auto 20px 0;
         display: flex;
        justify-content: space-between;
    }
    .table_product td{
        /*width: 40%;*/
        padding-left: 20px;
        line-height: 50px
    }
    .order_btn{
        width: 1281px;
        text-align: right;
        margin: 15px auto 15px auto;



    }
</style>
