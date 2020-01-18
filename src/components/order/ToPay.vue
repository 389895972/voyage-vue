<template>
        <el-container>
            <div class="home-container">
                <div class="header">
                    <img class="img" src="../../assets/images/logo.png" alt />
                </div>
                <div><a href="">返回</a>|订单管理
                </div>
                <hr>
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
                <div>  <el-button type="primary" size="mini">立即支付</el-button> <el-button type="info" size="mini" plain>取消订单</el-button> </div>
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
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="付款方法"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="起止时间"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="金额"
                            width="200">
                    </el-table-column>
                </el-table>
            </div>
        </el-container>
</template>
<script>
    export default {
        data() {
            return {
                pay:0.0,
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
                    order_id: '支付状态：未支付 ￥',
                    order_type: '',
                },
                ],
                orderInfoDetails: [
                {
                    product_name:this.$route.params.product_name,
                    product_num: this.$route.params.num,
                    configure:'',
                    pay_methods:'',
                    start_end_time:'',
                    pay:'',
                }, {
                        product_name: '订单编号：',
                        product_num: '订单类型：',
                        configure:'',
                        pay_methods:'',
                        start_end_time:'',
                        pay:'',
                }, {
                        product_name: '订单编号：',
                        product_num: '订单类型：',
                        configure:'',
                        pay_methods:'',
                        start_end_time:'',
                        pay:'',
                },{
                        product_name: '订单编号：',
                        product_num: '订单类型：',
                        configure:'',
                        pay_methods:'',
                        start_end_time:'',
                        pay:'',
                },
                ],

            }
        },

    }
</script>
<style>

</style>
