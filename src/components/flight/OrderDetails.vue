<template>
    <el-container style="display: block" >
        <div class="home-container" style="background-color: #D7D7DB">
            <div class="main">
                <div class="voyage_display">
                    <div class="voyage_cards">
                     <div style="font-weight: bold;font-size: 25px">订单详情</div>
                        <hr>
                        <div style="font-size: 20px">订单编号:  {{tableData[0].orderId}}</div>
                        <div style="font-size: 20px">已付款:￥  {{tableData[0].ticketPrice}}</div>
                        <hr>
                        <div style="font-weight: bold;font-size: 25px">航班详情</div>

                        <el-table
                                :data="tableData"
                                style="width: 100%">

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

                        </el-table>
                        <hr>

                        <div style="font-weight: bold;font-size: 25px">乘客</div>
                        <hr>
                        <div v-for="item in tableData[0].passengers" :key="item">
                            <el-button  type="success" :key="item" plain>{{item.user}}</el-button>

                            <el-button  type="primary" :key="item" plain>座位号：{{item.seat}}</el-button>
                            <el-button  type="warning" :key="item" plain @click="returnTicket(item.seat)">退票</el-button>

                        </div>

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
                tableData:[{
                    orderId:''
                }],
                orderId:this.$route.query.orderId
            }
        },
        methods:{

            init(){
                let _this =this
                this.$http.get('/item/order/orderDetails/'+this.orderId).then(function (res) {
                    if(res.status==200){
                       // window.console.log(res)
                        // _this.total=res.data.total
                       //alert(res.data.passengers)
                        _this.tableData=[]
                        // _this.tableData=res.data.data
                      //  for (var index in res.data.passengers) {
                            _this.tableData[0] = {};
                            _this.tableData[0].flightNo = res.data.flightNo
                            _this.tableData[0].orderId = res.data.orderId
                            _this.tableData[0].flightDate = tranDate1(res.data.flightDate)
                            _this.tableData[0].fromCity = res.data.fromCity
                            _this.tableData[0].fromTime = tranDate(res.data.fromTime)
                            _this.tableData[0].toCity = res.data.toCity
                            _this.tableData[0].ticketPrice = res.data.ticketPrice
                            _this.tableData[0].toTime = tranDate(res.data.toTime)
                            _this.tableData[0].passengers = []

                            // for (var index1 in res.data.passengers) {
                            //     _this.tableData[0].passengers[index1] = {}
                            //     _this.tableData[0].passengers[index1].user = res.data.passengers[index1]
                            // }
                         var index=0

                        for (var key in res.data.passengers) {
                            //alert(key+':'+res.data.passengers[key])
                            _this.tableData[0].passengers[index] = {}
                             _this.tableData[0].passengers[index].user = key
                             _this.tableData[0].passengers[index].seat = res.data.passengers[key]
                            index=index+1
                        }

                       // }
                    }
                }).catch(function (error) {
                    window.console.log(error)
                    _this.$message.error("服务器错误")
                })
            },
            go_order(orderId){
                window.console.log(orderId)

                this.$router.push({
                    path:'/orders'
                })
            },
            //退票
            returnTicket(seat){
                    let _this =this
                    this.$http.get('/item/order/deleteTicket/'+this.tableData[0].flightNo+'/'+seat+'/'+this.orderId).then(function (res) {
                        if(res.status==200){
                            _this.$message.success("退票成功")
                            _this.init()
                        }
                    }).catch(function (error) {
                        window.console.log(error)
                        _this.$message.error("服务器错误")
                    })

            }
        },
        mounted(){
            this.init();
        }
    }
</script>
<style scoped>
    .voyage_cards{
        width:1280px;
        margin: 0 auto;

    }
    .voyage_display{

        background-color: #F0F1F3;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
    }
</style>