<template>
        <el-container>
            <div class="home-container">
                <div class="header">
                    <img class="img" src="../../assets/images/logo.png" alt />
                </div>
                <div><a href="">返回</a>|订单管理
                </div>
                <hr>
                {{orderId}}
                <el-table
                        :data="orderInfo"
                        style="width: 100%">
                    <el-table-column
                            prop="order_id"
                            label="订单基本信息"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="order_type"
                            label=""
                            width="300">
                    </el-table-column>
                </el-table>
                <div v-if="this.order_status===1">  <el-button type="primary" size="mini">立即支付</el-button> <el-button type="info" size="mini" plain @click="handleCancel">取消订单</el-button> </div>
                <div v-else-if="order_status===2">
                    <el-table
                            :data="pay_status"
                            style="width: 100%">
                        <el-table-column
                                prop="pay_channel"
                                label="支付渠道"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="costs"
                                label="扣缴费用"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="cost_time"
                                label="扣款时间"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="pay_account"
                                label="支付账号"
                                width="300">
                        </el-table-column>
                    </el-table>
                </div>
                <div v-else>   </div>

                <el-table
                        :data="orderInfoDetails"

                        style="width: 100%">
                    <el-table-column
                            prop="product_name"
                            label="产品"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="product_num"
                            label="数量"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="configure"
                            label="具体配置"
                            width="200">
                        <template scope="scope">
                            <span v-if="scope.row.configure.os"> <span>配置：</span> {{scope.row.configure.os}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="pay_methods"
                            label="付款方法"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="start_end_time"
                            label="起止时间"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="pay"
                            label="金额"
                            width="200">
                    </el-table-column>


                </el-table>
                <div style="text-align: right;margin-right: 100px">原价：{{orderInfoDetails[0].pay}}</div>
                <div style="text-align: right;margin-right: 100px">应付金额：￥0.00</div>
            </div>

        </el-container>
</template>
<script>
    export default {
        data() {
            return {
               orderId:this.$route.params.orderId,
               // orderId:"200119193113462975",
                order_status:'',
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
                    costs: '订单类型：新购',
                    cost_time:'',
                    pay_account:'',
                },
                ],

            }
        },
        mounted(){
            this.getOrder();
        },
        methods:{
            async getOrder(){
                 const {data:res}=await this.$http.get('/order/findNoPayOrders',{params:{orderId:this.orderId}})
                 if(res.code===20000){
                     window.console.log(res.data)

                    this.orderInfo[0].order_id ="订单编号："+res.data.order_id
                    this.orderInfo[1].order_id ="创建时间："+this.tranDate(res.data.create_time)
                     this.orderInfoDetails = []
                     this.orderInfoDetails[0]={}
                     this.orderInfoDetails[0].product_name=res.data.goods_name
                     this.orderInfoDetails[0].product_num=res.data.num
                      this.orderInfoDetails[0].configure={}
                      this.orderInfoDetails[0].configure.os=res.data.o__s
                   //  this.orderInfoDetails[0].configure=res.data.o__s
                     this.orderInfoDetails[0].pay_methods='默认'
                     this.orderInfoDetails[0].start_end_time='默认'
                     this.orderInfoDetails[0].pay='￥'+res.data.price

                     if(res.data.payment_type==="1"){
                         this.orderInfo[0].order_type= '订单类型：新购'

                     }else if(res.data.payment_type==="2"){
                         this.orderInfo[0].order_type= '订单类型：续费'
                     }
                     if(res.data.status==="1"){
                         this.orderInfo[3].order_id= '支付状态：未支付 ￥'+res.data.price
                         this.order_status=1
                     }else if(res.data.status==="2"){
                         this.orderInfo[3].order_id= '支付状态：已支付 ￥'+res.data.price
                         this.order_status=2
                     }else if(res.data.status==="3"){
                         this.orderInfo[3].order_id= '支付状态：已取消 ￥'+res.data.price
                         this.order_status=3
                     }
                }else{
                     this.$message.error("查询失败！")
                 }
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
            async handleCancel(){
                const {data:res}=await this.$http.get("/order/cancelOrder", {params: {orderId: this.orderId}})
                window.console.log(res.code)
                if(res.code===20000){
                    this.$message.success("取消订单成功！")
                    this.getOrder();
                }

            }

        },
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
<style>

</style>
