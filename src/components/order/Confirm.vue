<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>
            {{infoForm}}
{{os}}
            {{ orderData[0].product_name}}
            <div class="content">
                <div class="titles">
                    <div class="title"> 确认订单</div>
                </div>
                <div class="configure">
                    <div style="margin: 20px auto 5px 30px;font-size: 18px"> 参数配置</div>
                    <div>
                        <el-table
                                :data="orderData"
                                :span-method="objectSpanMethod"
                                border
                                style="width: 90%; margin: 20px auto 30px auto;border: 1px solid">
                            <el-table-column
                                    prop="product_name"
                                    label="配置详情"
                                    width="360">
                            </el-table-column>
                            <el-table-column
                                    prop="buy_nums"
                                    label="数量">
                            </el-table-column>
                            <el-table-column
                                    prop="buy_times"
                                    label="时长">
                            </el-table-column>
                            <el-table-column
                                    prop="pay"
                                    label="价格">
                            </el-table-column>

                        </el-table>
                    </div>
                    <hr style="border-top:1px solid black;width: 100%">
                    <div style="margin: 20px auto 5px 30px;font-size: 18px"> 个人信息</div>
                    <div class="info_form">
                    <el-form   label-width="100px" class="login_form">
                        <el-form-item label="姓名" prop="name">
                            <el-input readonly="readonly"  v-model="infoForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部门" prop="dept">
                            <el-input  disabled v-model="infoForm.dept"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group class="sex"  v-model="infoForm.sex" readonly="readonly">
                                <el-radio label="男" readonly="readonly" disabled></el-radio>
                                <el-radio label="女" readonly="readonly" disabled></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="手机号" prop="tel">
                            <el-input  readonly="readonly" disabled  v-model="infoForm.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="用途" prop="purpose">
                            <el-input type="textarea" disabled  readonly="readonly" v-model="infoForm.purpose"></el-input>
                        </el-form-item>
                    </el-form>
                    </div>

                </div>

            </div>
            <div class="order_btn">
                <span>费用合计：</span><span style="color: red">￥{{pay}}</span> <el-button   @click="back">上一步：配置选择</el-button> <el-button  type="primary" @click="buy">确认订单</el-button>
            </div>
        </div>
    </el-container>
</template>
<script>
    export default {
        data(){
           return{
               status:1,
               good_id:1682320,
               user_id:"1",
               pay:0.0,
               os:'1',
               product_name:this.$route.params.product_name,
               orderData: [{
                   product_name: '商品名称：',
                   buy_nums: '',
                   buy_times: '',
                   pay: '0.0',
               }, {
                   product_name: '版本：',
                   buy_nums: '',
                   buy_times: '',
                   pay: '0.0',
               }, {
                   product_name: '操作系统：',
                   buy_nums: '',
                   buy_times: '',
                   pay: '',
               }],
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
                this.orderData[0].product_name='商品名称:'+this.$route.params.product_name;
                this.orderData[1].product_name='版本:'+this.$route.params.configure;
                this.orderData[2].product_name='操作系统:'+this.$route.params.os+" " +this.$route.params.edtion;
                this.orderData[0].buy_nums=this.$route.params.buy_nums+'台';
                this.orderData[0].buy_times=this.$route.params.buy_times;
                this.orderData[0].pay=this.$route.params.pay;
                this.infoForm=this.$route.params.info;
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
                // this.$router.push('/example');
                const {data:res}=await this.$http.post('/order/insert',{
                    product_name:this.product_name,
                    userId:this.user_id,
                    goodsId:this.good_id,
                    num:this.orderData[1].buy_nums,
                    hire_time:this.orderData[1].buy_times,
                    OS:this.os,
                    status:this.status,
                    infoForm:this.infoForm,
                }) ;
               if(res.code===20000){
                   this.$router.push(
                       {
                           name:'ToPay',
                           params:{
                               product_name:this.product_name,
                               userId:this.user_id,
                               goodsId:this.good_id,
                               num:this.orderData[1].buy_nums,
                               hire_time:this.orderData[1].buy_times,
                               OS:this.os,
                               status:this.status,
                               infoForm:this.infoForm,
                               configure:this.configure,
                               order_id:res.order_id,
                               order_time:res.order_time,
                           }
                       });
               }

           }

        }
    }
</script>
<style scoped>
    .home-container{
        background-color: #F4F4F4;
        border: 1px solid;
    }
    .content{
        width: 80%;
        background-color: white;
        margin: 40px auto 0 auto;


    }
    .titles{
        font-weight: bold;
        font-size: 21px;

    }
    .title{
       margin: 20px auto 100px 30px;
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
    .login_form{
        width: 40%;
    }
    .order_btn{
        width: 87%;
        text-align: right;
        margin: 20px auto 0 80px;
        padding: 20px 40px 10px 30px;

    }
</style>