<template>
    <el-container>
        <div class="home-container">
            <div class="content">

                <div class="titles">
                    <div class="title"> 我的设备
                        <el-button  style="width: 180px;background-color: #3254DC;color:white;line-height: 25px" v-if="order_status===2"> 管理设备</el-button>
                    </div>
                </div>
                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                    <span style="font-size: 16px;"> 设备列表</span>
                </div>

                <div>
                    <el-table :header-cell-style="{background:'#E4E7EB',color:' #16161D'}"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="设备名称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="设备ID"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="设备型号">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="设备os">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="状态">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="配置">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <!--                                               {{scope.row}}-->
                                <el-button type="primary" icon="el-icon-edit" size="mini" @click="manage(scope.row.id)">管理</el-button>
                                <el-button type="success" icon="el-icon-thumb" size="mini" @click="go(scope.row.id)">进入控制台</el-button>

                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            style="text-align: center">
                    </el-pagination>
<!--                    <el-pagination-->
<!--                            @size-change="handleSizeChange"-->
<!--                            @current-change="handleCurrentChange"-->
<!--                            :current-page="currentPage"-->
<!--                            :page-size="pageSize"-->
<!--                            :background=true-->
<!--                            layout="total,sizes, prev, pager, next"-->
<!--                            :total="total"-->
<!--                    style="text-align: center">-->
<!--                    </el-pagination>-->
                </div>
<!--                <div class="table_product">-->
<!--                    <table  style="width: 100%;height:50px;background-color: #E4E7EB;">-->
<!--                        <tr>-->
<!--                            <td style="width: 15%">设备名称</td>-->
<!--                            <td>设备ID</td>-->
<!--                            <td>设备型号<td>-->
<!--                            <td>设备OS</td>-->
<!--                            <td>状态</td>-->
<!--                            <td>配置</td>-->
<!--                            <td  style="width: 15%">操作</td>-->
<!--                        </tr>-->
<!--                          <tr>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                              <td></td>-->
<!--                          </tr>-->
<!--                    </table>-->






<!--                </div>-->


            </div>





        </div>

    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                currentPage:2,
                pageSize:5,
                total:20,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙'
                }]
            }
        },
        methods:{
            getList(){
                this.$http.get('',{params:{
                        currentPage:this.currentPage,
                        pageSize:this.pageSize,
                    }})
            },
            manage(){

            },
            go(){

            }
        },
        created:{
            getList(){

            }
        }
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
        margin: 20px auto 50px 0;
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