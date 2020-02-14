<template>
    <el-container>
        <div class="home-container">
            <div class="content">

                <div class="titles">
                    <div class="title"> 我的设备
                    </div>
                </div>
                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                    <span style="font-size: 16px;"> 设备列表</span>
                </div>

                <div>
                    <el-table :header-cell-style="{background:'#E4E7EB',color:' #16161D'}"
                              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                              @filter-change="handleFilterChange"
                              v-loading="dataLoading"
                              style="width: 100%">
                        <el-table-column
                                prop="nickname"
                                label="设备名称"
                                width="200px">
                        </el-table-column>
                        <el-table-column
                                prop="id"
                                label="设备ID"
                                width="200px">
                        </el-table-column>
                        <el-table-column
                                prop="goodsname"
                                width="150px"
                                label="设备型号">
                        </el-table-column>
                        <el-table-column
                                prop="os"
                                width="140px"
                                label="设备os">
                        </el-table-column>
                        <el-table-column
                                prop="examplestatus"
                                width="100px"
                                :filters="[{text:'运行中',value:'运行中'},{text:'即将过期',value:'即将过期'},{text:'已过期',value:'已过期'}]"
                                :filter-multiple="false"
                                filter-placement="top"
                                :filter-method="filter_status"
                                column-key="status"
                                label="状态">
                            <template scope="scope">
                                <span v-if="scope.row.examplestatus==='运行中'" style="color: green">运行中</span>
                                <span v-else-if="scope.row.examplestatus==='即将过期'" style="color: yellow">即将过期</span>
                                <span v-else-if="scope.row.examplestatus==='已过期'">已过期</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="finishtime"
                                label="到期日期">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                header-align="center"
                                align="left"
                        >
                            <template slot-scope="scope">
                                <el-button type="primary" icon="el-icon-edit" size="mini" @click="manage(scope.row.id)">管理</el-button>
                                <el-button type="success" icon="el-icon-thumb" size="mini" @click="go(scope.row.assetuuid)">进入控制台</el-button>
                            </template>
                        </el-table-column>
                        <div slot="empty">
                            <span>暂无相关设备，请<a href="/home">立即购买</a></span>
                        </div>
                    </el-table>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :current-page="currentPage"
                            @current-change="currentChange"
                            :total="total"
                            :pager-count="pagerCount"
                            :page-size="pageSize"
                            style="text-align: center">
                    </el-pagination>
                </div>
            </div>
        </div>

    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                currentPage:1,
                pagerCount:7,
                pageSize:10,
                tableData:[],
                total:0,
                dataLoading:true,
            }
        },
        methods:{
            async getList(){
                const { data: res } = await this.$http.get("example/findExampleList", {
                    params: { userId: 3 }
                }).catch(function(error) {
                    window.console.log(error);
                    alert("连接服务器失败");
                });


                if (res.code == 20000) {
                    let status_map = { "1": "运行中", "2": "即将过期", "3": "已过期" };
                    var data = [...res.data];

                    for (var index in data) {
                        const ct = data[index].createtime
                        const ft = data[index].finishtime
                        const et = data[index].examplestatus
                        data[index].createtime=this.tranDate(ct)
                        data[index].finishtime=this.tranDate(ft)
                        data[index].examplestatus=status_map[et]

                    }
                    this.tableData = [...data];
                    this.total=this.tableData.length
                    this.dataLoading=false



                } else {
                    alert("连接服务器失败");
                }

            },
            tranDate(standard_time) {
                let d=new Date(standard_time.replace(/-/g,'/').replace('T',' ').replace('.000+0800',''));
                let month = d.getMonth() + 1;
                let day = d.getDate();
                let hour = d.getHours();
                let minutes = d.getMinutes();
                let seconds = d.getSeconds();
                if (month < 10) {
                    month = "0" + month;
                }

                if (day < 10) {
                    day = "0" + day;
                }
                if (hour < 10) {
                    hour = "0" + hour;
                }

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                let time = " " + hour + ":" + minutes + ":" + seconds;
                let t = d.getFullYear() + "-" + month + "-" + day + time;
                return t;
            },
            manage(id){
                this.$router.push({ path: "InstanceDetails", params: {instanceId: id}});
            },
            go(assetsId){
                window.location.href = 'http://10.0.20.114:10088/luna/?login_to='+assetsId;

            },
            filter_status(value,row,column){
                const pro = column['property']

                return row[pro]==value
            },
            currentChange(currentPage){
                this.currentPage=currentPage
            },
            handleFilterChange(filters){
                this.total=this.tableData.filter(data => data.examplestatus==filters.status[0]).length
            }


        },
        computed:{
            // total(){
            //     return this.tableData.length
            // }
        },
        created(){
            this.getList();
        },

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
