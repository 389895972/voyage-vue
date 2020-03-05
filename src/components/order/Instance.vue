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
                                sortable
                                label="到期日期">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                header-align="center"
                                align="left"
                        >
                            <template slot-scope="scope">
                                <el-button type="primary" icon="el-icon-edit" size="mini" @click="manage(scope.row.id)">管理</el-button>
                                <el-button type="success" icon="el-icon-thumb" size="mini" @click="go(scope.row.assetuuid,scope.row.os)">进入控制台</el-button>
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

        <el-dialog
                title="连接到您的实例"
                :visible.sync="instancedialog"
                width="860px" heigth="800px" font-size="30px"
        >
            <hr>
            <div style="display: flex;font-weight: bold">

                <span style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-right: 5px"></span>
                <span style="font-size: 16px">连接方式：</span>
            </div>
            <div style="display: grid; margin-left:45px;margin-top: 20px">
                <el-radio-group v-model="radio">
                    <el-radio  label="1" style="font-size: 16px">本地SSH访问</el-radio>
                    <el-radio  label="2" style="margin-top: 15px;font-size: 16px;margin-bottom: 20px">WEB页面访问</el-radio>
                </el-radio-group>


            </div>
            <hr>


            <div v-if="radio==='1'">
                <span style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-right: 5px"></span>
                <span style = "font-weight:bold;font-size: 16px">要访问您的实例：</span>
                <div style="margin-left:55px;font-size: 16px;margin-top: 20px">
                    <p>1)下载自己的秘钥文件(xxx.pem)</p>
                    <p>2)修改秘钥文件权限</p>
                    <p style="text-indent: 20px">sudo chmod 600 xxx.pem</p>
                    <p>3)本地ssh登录：</p>
                    <p style="text-indent: 20px">ssh -i xxx.pem -p 2222 username@10.0.20.250</p>
                    <p>4)登录后可根据提示查看自己当前可访问的设备，或直接输入设备IP登录到设备</p>
                    <span>示例：</span>
                    <p style="text-indent: 20px;">chmod 600 baijt.pem</p>
                    <p style="text-indent: 20px;">ssh -i baijt.pem -p 2222 baijt@10.0.20.250</p>
                    <p style="text-indent: 20px">>10.0.10.100</p>
                    即可从本地以SSH的方式登录到IP为10.0.10.100的设备。
                </div>
            </div>
            <div v-else style="height:165px;padding-top: 35px ;padding-left: 40px">
                <el-button v-if="device_os.toLowerCase()==='linux'" @click="go_to_teminal" style="width: 180px;height: 50px;color:white;background-color: #3254DC;margin-right: 20px">访问设备终端</el-button>
                <el-button v-if="device_os.toLowerCase()==='android'" type="primary" @click="go_to_teminal" style="width: 180px;height: 50px;color:white;background-color: #3254DC">访问设备桌面</el-button>
            </div>
            <span slot="footer" class="dialog-footer">
<!--                <el-button @click="instancedialog = false">取 消</el-button>-->
                <!--               <el-button type="primary" @click="instancedialog = false">确 定</el-button>-->
                </span>
        </el-dialog>

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
                instancedialog:false,
                radio:'1',
                assetsId:'',
                device_os:'',
            }
        },
        methods:{
            async getList(){
                const { data: res } = await this.$http.get("example/findExampleList", {
                    params: { userId: 1 ,
                        token:window.sessionStorage.getItem('token')}
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
                    this.$message.error("连接服务器失败")
                  //  alert("连接服务器失败");
                }

                //
                // const newAixos = Axios.create({
                //     baseURL: 'http://10.0.20.114:9002',
                //     // timeout: 1000,
                // });
                // // newAixos.get("/tbUser/getToken/"+tokenStr)
                // newAixos({
                //     method:'get',
                //     url:"example/findExampleList",
                //     // data:{token:tokenStr},
                //     headers:{"Authorization":"Bearer "+tokenStr}})
                //     .then(function(response) {
                //         window.console.log(response);
                //         if (response.data.code == 20000) {
                //             that.isLogin=true
                //             that.userInfo=response.data.data.userInfo
                //             that.roles=response.data.data.roles
                //         }
                //     })
                //     .catch(function(error) {
                //         window.console.log(error);
                //         that.$message.error("服务器错误")
                //     });

            },
            tranDate(standard_time) {
                if(standard_time==null){

                    return  null
                }
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
                window.console.log(id)
                this.$router.push({ name: "InstanceDetails", params: {instanceId: id}});
            },
            go(assetsId,device_os){
                this.instancedialog=true
                this.assetsId = assetsId
                this.device_os=device_os
            },
            go_to_teminal(){
                this.instancedialog=false
                window.location.href = 'http://10.0.20.114:10089/luna/?login_to='+this.assetsId;

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
<style type="text/css">
    .el-icon-arrow-down:before{
        content: "\e790";
        font-size: large;
    }
</style>
