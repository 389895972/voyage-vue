<template>
    <el-container>
        <div class="home-container">

            <div class="content">
                <div class="titles">
                    <div class="title"> 确认订单</div>
                </div>
                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                    <span style="font-size: 16px;"> 参数配置</span>
                </div>
                <div class="table_product">
                    <table  style="width: 100%;height:50px;background-color: #E4E7EB;margin-top: 5px">
                        <tr style="font-weight: bold">
                            <td style="width: 40%">商品</td>
                            <td>数量</td>
                            <td>规格配置</td>
                            <td>操作系统</td>
                            <td>时长</td>
                            <td>价格</td>
                        </tr>
                        <tr>
                            <td style="width: 40%;height: 180px;background-color: white" valign="top">
                               <table>
                                   <tr>
                                       <td>
                                           <img  v-if="product_name==='AI KIT'" src="../../assets/images/aikit.png" style="width:160px;height:98.7px " alt="">
                                           <img  v-else-if="product_name==='RB 3'" src="../../assets/images/rb3.png" style="width:160px;height:98.7px " alt="">
                                           <img  v-else-if="product_name==='Edge KIT'" src="../../assets/images/edgekit.png" style="width:160px;height:98.7px " alt="">
                                       </td>
                                       <td valign="top">
                                          <span v-if="product_name==='AI KIT'">Thundercomm TurboX™ AI KIT </span>
                                          <span v-else-if="product_name==='RB 3'">Qualcomm® Robotics RB3 Platform(SDA845)</span>
                                          <span v-else-if="product_name==='Edge KIT'">TurboX Edge</span></td>

                                   </tr>
                               </table>


                            </td>
                            <td style="padding-top: 0;background-color: white" valign="top">{{buy_nums}}</td>
                            <td valign="top" style="background-color: white">标准版</td>
                            <td valign="top" style="background-color: white">{{os}}</td>
                            <td valign="top" style="background-color: white">{{hire_time}}</td>
                            <td valign="top" style="background-color: white" > ￥{{pay}}</td>
                        </tr>
                    </table>


                    <div class="product_name">
                        <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                        <span style="font-size: 16px;"> 个人信息</span>
                    </div>

                    <el-table
                            :data="infoForm1"
                            :span-method="objectSpanMethod"
                            border
                            style="width: 100%; margin: 20px auto 30px auto;">
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="360">
                        </el-table-column>
                        <el-table-column
                                prop="dept"
                                label="部门">
                        </el-table-column>
                        <el-table-column
                                prop="sex"
                                label="性别">
                        </el-table-column>
                        <el-table-column
                                prop="tel"
                                label="电话">
                        </el-table-column>
                        <el-table-column
                                prop="purpose"
                                label="用途">
                        </el-table-column>
                    </el-table>
                </div>





<!--                <div class="configure">-->
<!--                    <div style="margin: 20px auto 5px 30px;font-size: 18px"> 参数配置</div>-->
<!--                    <div>-->
<!--                        <el-table-->
<!--                                :data="orderData"-->
<!--                                :span-method="objectSpanMethod"-->
<!--                                border-->
<!--                                style="width: 90%; margin: 20px auto 30px auto;border: 1px solid">-->
<!--                            <el-table-column-->
<!--                                    prop="product_name"-->
<!--                                    label="配置详情"-->
<!--                                    width="360">-->
<!--                            </el-table-column>-->
<!--                            <el-table-column-->
<!--                                    prop="buy_nums"-->
<!--                                    label="数量">-->
<!--                            </el-table-column>-->
<!--                            <el-table-column-->
<!--                                    prop="hire_time"-->
<!--                                    label="时长">-->
<!--                            </el-table-column>-->
<!--                            <el-table-column-->
<!--                                    prop="pay"-->
<!--                                    label="价格">-->
<!--                            </el-table-column>-->

<!--                        </el-table>-->
<!--                    </div>-->
<!--                    <hr style="border-top:1px solid black;width: 100%">-->
<!--                    <div style="margin: 20px auto 5px 30px;font-size: 18px"> 个人信息</div>-->
<!--                    <div class="info_form">-->
<!--                    <el-form   label-width="100px" class="login_form">-->
<!--                        <el-form-item label="姓名" prop="name">-->
<!--                            <el-input readonly="readonly"  v-model="infoForm.name"></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="部门" prop="dept">-->
<!--                            <el-input  disabled v-model="infoForm.dept"></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="性别" prop="sex">-->
<!--                            <el-radio-group class="sex"  v-model="infoForm.sex" readonly="readonly">-->
<!--                                <el-radio label="男" readonly="readonly" disabled></el-radio>-->
<!--                                <el-radio label="女" readonly="readonly" disabled></el-radio>-->
<!--                            </el-radio-group>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="手机号" prop="tel">-->
<!--                            <el-input  readonly="readonly" disabled  v-model="infoForm.tel"></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="用途" prop="purpose">-->
<!--                            <el-input type="textarea" disabled  readonly="readonly" v-model="infoForm.purpose"></el-input>-->
<!--                        </el-form-item>-->
<!--                    </el-form>-->
<!--                    </div>-->

<!--                </div>-->

            </div>
            <div class="order_btn">
                <div>
                <span style="color: #606879;">原价：</span>
                <span style="text-decoration: line-through;margin-left: 10px">￥{{pay}}</span>
                </div>
                <div style="margin-top: 10px;margin-bottom: 10px">
                <span style="color: #606879;">应付金额：</span>
                <span style="color: red">￥{{topay}}</span>
                </div>

                    <el-button   @click="back">上一步：配置选择</el-button>
                    <el-button  type="primary" @click="buy" style="width: 180px;font-size: 16px;background-color: #3254DC">确认下单</el-button>
            </div>
        </div>
        <el-dialog
                title="支付提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>确认支付吗?</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="daiPay">取 消</el-button>
    <el-button type="primary" @click="buy_pay">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible1"
                width="30%"
                >
            <span>订单已失效！</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="tohome">取 消</el-button>
    <el-button type="primary" @click="tohome">确 定</el-button>
  </span>
        </el-dialog>
    </el-container>
</template>
<script>
  //  import {formatDate} from "element-ui";
  //import {formatDate} from '../../../date.js'
    export default {
        data(){
           return{
              // time: 1516703495241,
               product_name_details:'',
               dialogVisible: false,
               dialogVisible1: false,
               due_order_time:0,
               orderID: 0,
               status:1,
               good_id:'',
               user_id:"1",
               pay:this.$route.params.pay,
               topay:'0.00',
               os:this.$route.params.os+' '+this.$route.params.version,
               buy_nums:this.$route.params.buy_nums,
               product_name:this.$route.params.product_name,
               hire_time:'',
               infoForm1:[
                   {
                   }
               ],
               orderData: [
               //     {
               //     product_name: '商品名称：',
               //     buy_nums: '',
               //     hire_time: '',
               //     pay: '0.0',
               // }, {
               //     product_name: '版本：',
               //     buy_nums: '',
               //     hire_time: '',
               //     pay: '0.0',
               // }, {
               //     product_name: '操作系统：',
               //     buy_nums: '',
               //     hire_time: '',
               //     pay: '',
               // }
               ],
               infoForm: {
                   name: '',
                   dept: '',
                   sex: '',
                   tel: '',
                   purpose:'',
               },
           }
        },
        created(){
            this.getInfo()
        },
        methods: {
            getInfo(){
                this.orderData=[]
                this.orderData[0]={}
                this.orderData[1]={}
                this.orderData[2]={}
                this.orderData[0].product_name='商品名称:'+this.$route.params.product_name;
                this.orderData[1].product_name='版本:'+this.$route.params.configure;
                this.orderData[2].product_name='操作系统:'+this.$route.params.os+" " +this.$route.params.version;
                this.orderData[0].buy_nums=this.$route.params.buy_nums+'台';
                 if(this.$route.params.hire_time>=1&this.$route.params.hire_time<=29){
                       this.orderData[0].hire_time=this.$route.params.hire_time+'天'
                     this.hire_time=this.orderData[0].hire_time
                   }else if(this.$route.params.hire_time>=30&this.$route.params.hire_time<=40){
                       this.orderData[0].hire_time=(this.$route.params.hire_time-29)+'月'
                     this.hire_time=this.orderData[0].hire_time
                   }else {
                       this.orderData[0].hire_time='1年'
                     this.hire_time=this.orderData[0].hire_time
                 }
                //this.orderData[0].hire_time=this.$route.params.hire_time;
                this.orderData[0].pay=this.$route.params.pay;
                this.infoForm1[0]=this.$route.params.info;
                this.infoForm=this.$route.params.info;
                if(this.$route.params.os===undefined){
                    this.dialogVisible1 = true
                }

            },
            objectSpanMethod({  rowIndex, columnIndex }) {
                if (columnIndex !== 0) {
                    if (rowIndex % 3 === 0) {
                        return {
                            rowspan: 3,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            back(){
                this.$router.go(-1);//返回上一层
            },

           async buy(){
               this.due_order_time=new  Date().getTime()+86400000

                const {data:res}=await this.$http.post('/order/insert',{
                    product_name:this.product_name,
                    userId:this.user_id,
                    goodsId:this.good_id,
                    num:this.buy_nums,
                    hire_time:this.hire_time,
                    OS:this.os,
                    // status:this.status,
                    status:2,
                    price:this.pay,
                    infoForm:this.infoForm,
                    order_status:2,
                    due_time:this.due_time,
                    due_order_time:this.due_order_time
                }) ;

               if(res.code===20000){

               //   var date=new Date()
               //   var year=date.getFullYear();
               // /* 在日期格式中，月份是从0开始的，因此要加0
               //  * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
               //  * */
               // var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
               // var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
               // var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
               // var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
               // var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
               // var nowDate=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds

                   this.orderId=res.orderId
                   this.dialogVisible = true
                   // this.$router.push(
                   //     {
                   //         name:'ToPay',
                   //         params:{
                   //             orderId:res.orderId,
                   //             product_name:this.product_name,
                   //             userId:this.user_id,
                   //             goodsId:this.good_id,
                   //             num:this.buy_nums,
                   //             hire_time:this.hire_time,
                   //             OS:'镜像：'+this.os,
                   //             // status:this.status,
                   //             status:2,
                   //             infoForm:this.infoForm,
                   //             configure:this.configure,
                   //             pay:this.pay,
                   //             //date:nowDate,
                   //             order_status:2,
                   //            // order_id:res.order_id,
                   //            // order_time:res.order_time,
                   //         }
                   //     });
                   // this.dialogVisible=false
               }

           },
             daiPay(){
                    this.$router.push(
                        {
                            name:'ToPay',
                            params:{
                                orderId:this.orderId,

                            }
                        });

             },
            async buy_pay(){
                const {data:res}=await this.$http.get('/order/changeStatus',{params:{ orderId:this.orderId}})
                // window.console.log(res)
                if(res.code==20000) {
                    this.$router.push(
                        {
                            name:'ToPay',
                            params:{
                                orderId:this.orderId,

                            }
                        });
                }

                },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                        window.console.log(_)
                    })
                    .catch(_ => {
                        window.console.log(_)
                    });

            },
            pay_confi(){
                this.dialogVisible = true
            },
            tohome(){
                this.$router.push(
                    {
                        path:'home',
                        params:{
                            orderId:this.orderId,

                        }
                    });
            }

        },

        computed:{
            due_time(){
                let pay=0
                let time = this.hire_time;
                let buy_nums=this.buy_nums
                if(time>=0 && time<=29){
                    pay=10*time*buy_nums
                }else if(time>=30 && time<=40){
                    pay=40*(time-29)*buy_nums
                }else{
                    pay=10*365*buy_nums
                }
                return pay;
            },
            hire_time_pa(){
                return this.toolmsg[this.hire_time_pay]
            }
        },
        // watch:{
        //     product_name(){
        //         if(this.product_name==='AI KIT'){
        //             this.product_name_details='Thundercomm TurboX™ AI KIT'
        //         }
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
    }
    .titles{
        font-weight: bold;
        font-size: 36px;

    }
    .title{
       margin: 20px auto 50px 0;

    }
    .configure{
        border: 1px solid;

    }
    .info_form{
        width: 90%;

        margin: 20px auto 0 80px;
        padding-top: 20px;
        padding-left: 30px;

    }
    .table_product td{
       /*width: 40%;*/
        padding-left: 10px;
        line-height: 50px
    }
    .login_form{
        width: 40%;
    }
    .order_btn{
        width: 1281px;
        text-align: right;
        margin: 0 auto 15px auto;


    }
    .product_name{
          line-height: 20px;
        /*height: ;*/
        margin: 50px auto 0 auto;

        font-weight: bold;
    }
</style>