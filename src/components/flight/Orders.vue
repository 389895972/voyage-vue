<template>
    <el-container style="display: block" >
        <div class="home-container" style="background-color: #D7D7DB">
            <div class="main">
                <div class="voyage_display">

                    <div class="voyage_cards">
                        <div style="display: block;font-weight: bold"><h1>我的订单</h1></div>
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="orderId"
                                    label="订单编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="flightNo"
                                    label="航班编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="flightDate"
                                    label="航班日期">
                            </el-table-column>
                            <el-table-column
                                    prop="fromCity"
                                    label="出发城市">
                            </el-table-column>
                            <el-table-column
                                    prop="toCity"
                                    label="到达城市">
                            </el-table-column>
                            <el-table-column
                                    prop="fromTime"
                                    label="出发时间">
                            </el-table-column>
                            <el-table-column
                                    prop="toTime"
                                    label="到达时间">
                            </el-table-column>
                            <el-table-column

                                    label="操作">
                                    <template scope="scope">
                                        <el-button type="success" @click="go_order(scope.row.orderId)">详情</el-button>
                                    </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </el-container>
</template>
<script>
    import {tranDate,tranDate1} from '../../../date'

    export default {
        data(){
            return{
                tableData:[],
            }
        },
        methods:{
            init(){
                let _this =this

                const tokenStr=window.sessionStorage.getItem('token');

                this.$http.post('/item/order/findAllOrdersByUser',
                    {
                        token:tokenStr
                    }).then(function (res) {
                      if(res.status==200){
                          window.console.log(res)
                         // _this.total=res.data.total
                          //  alert(res.data.total)
                          _this.tableData=[]
                          // _this.tableData=res.data.data
                          for (var index in res.data) {
                              _this.tableData[index] = {};
                              _this.tableData[index].flightNo=res.data[index].flightNo
                              _this.tableData[index].orderId=res.data[index].orderId
                              _this.tableData[index].flightDate=tranDate1(res.data[index].flightDate)
                              _this.tableData[index].fromCity=res.data[index].fromCity
                              _this.tableData[index].fromTime=tranDate(res.data[index].fromTime)
                              _this.tableData[index].toCity=res.data[index].toCity
                              _this.tableData[index].toTime=tranDate(res.data[index].toTime)
                          }

                      }
                }).catch(function (error) {
                    window.console.log(error)
                    _this.$message.error("服务器错误")
                })
            },
            go_order(orderId){
                window.console.log(orderId)
                this.$http.get('/item/order/orderDetails/'+orderId)
               this.$router.push({
                   path:'/orderDetails',
                   query:{orderId:orderId}
               })
            }
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    .voyage_cards{
        width:1280px;
        margin: 0 auto;
        /*display: flex;*/
    }
    .voyage_display{

        background-color: #F0F1F3;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
    }
</style>