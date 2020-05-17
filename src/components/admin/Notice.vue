<template>
    <el-container style="display: block" >
        <el-header  class="header_head" height="100px">
            <div class="nav_layout">
                <img class="logo" src="../../assets/images/header/logo1.png"  width="60px" height="60px" @click="go_home"  style="cursor: pointer" alt />
                <div class="nav_layout_right">
                    <div  class="nav_item">
                        <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="head_frame" src="../../assets/images/header/admin.png"  />
                </span>
                            <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                                <el-dropdown-item icon="el-icon-switch-button">
                                    <a href="#">
                                        <span class="nav_dropdown_font" >退出登陆</span>
                                    </a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>

        </el-header>

        <div class="home-container" style="background-color: #D7D7DB">
            <div class="main">
                <div class="voyage_display">
                    <div class="voyage_cards">

                        <div style="height:1200px;width: 100%;font-size: 30px;font-weight: bold">
                            <div>
                                <img src="../../assets/images/header/logo.png" style="width:70px;height: 70px">
                                公告列表
                            </div>
                            <hr>
                            <el-button type="warning" @click="add">新增</el-button>

                            <el-dialog
                                    title="新增"
                                    :visible.sync="dialogVisible"
                                    width="40%"
                                    :before-close="handleClose">
                                <div>
                                    <span>公告内容</span>
                                    <el-input  type="textarea" style="width: 600px" v-model="add_notice.content"></el-input>
                                    <br>
                                    <span>公告日期</span>
                                    <el-date-picker
                                            v-model="add_notice.time"
                                            type="datetime"
                                            value-format="yyyy-MM-dd HH:mm:ss"
                                            placeholder="选择日期时间">
                                    </el-date-picker>


                                </div>
                                <span slot="footer" class="dialog-footer">
                                   <el-button @click="dialogVisible = false">取 消</el-button>
                                 <el-button type="primary" @click="insert">确 定</el-button>
                            </span>
                            </el-dialog>

                            <el-table
                                    :data="tableData"
                                    style="width: 100%"
                            >
                                <el-table-column
                                        prop="id"
                                        label="公告编号"
                                        width="200">
                                </el-table-column>
                                <el-table-column
                                        prop="content"
                                        label="公告内容"
                                        width="820">
                                </el-table-column>
                                <el-table-column
                                        prop="time"
                                        label="公告日期"
                                        width="200">
                                </el-table-column>




                            </el-table>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    </el-container>

</template>
<script>
    export default {
        data(){
            return{
                time:'',
                add_notice:{
                   time:'',
                    content:''
                },
                upd_flight:{
                    flightDate:'',
                    flightName:'',
                    toCity:'',
                    fromCity:'',
                    fromTime:'',
                    toTime:'',
                    economyNum:'',
                    economyPrice:'',
                    headPrice:'',
                    headNum:'',
                },
                tableData:[],
                page:1,
                size:10,
                total:null,
                flightNo:null,
                dialogVisible: false,
                dialogVisible1: false,
                form:{
                    fromCity:this.$route.query.fromCity,
                    toCity:this.$route.query.toCity,
                    flightDate:this.$route.query.flightDate,
                },
                rules: {
                    fromCity: [
                        {required: true, message: '请输入出发城市', trigger: 'blur'},
                        {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
                    ],
                    toCity: [

                        {required: true, message: '请输入到达城市', trigger: 'blur'},
                        {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
                    ],
                    flightDate: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ],
                },
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now()-8.64e7;
                    },
                    value:''
                },
            }
        },
        methods:{
            updateF(){
                let  _this=this
                _this.$http(
                    {
                        method:"post",
                        url:'/item/flight/update/'+_this.flightNo,
                        data:this.upd_flight

                    }).then(function (res) {
                    if(res.status==200){
                        window.console.log(res)

                        _this.$message({
                            message: '更新成功',
                            type: 'success'
                        });
                        _this.dialogVisible1=false
                        _this.init()
                    }
                }) .catch(function (error) {
                    window.console.log(error)
                    _this.$message({
                        message: '更新失败',
                        type: 'warning'
                    });
                })
            },
            init(){
                let _this=this

                this.$http.get("item/notice/getAllNotices")
                    .then(function (res) {
                        if(res.status==200){
                            _this.total=res.data.total
                            //  alert(res.data.total)
                            _this.tableData=[]
                            window.console.log(res.data)
                            // _this.tableData=res.data.data
                            for (var index in res.data) {
                                _this.tableData[index] = {};
                                _this.tableData[index].id=res.data[index].id

                                _this.tableData[index].content=res.data[index].content

                                _this.tableData[index].time=_this.tranDate1(res.data[index].time)

                            }
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error)
                        alert("登陆失败")
                    })

            },
            add(){
                this.dialogVisible=true
            },
            go_home(){
                this.$router.push({
                    path:'/admin/admin'
                })
            },
            insert(){
                let _this=this
                _this.$http(
                    {
                        method:"post",
                        url:'/item/notice/insertNotice',
                        data:this.add_notice

                    })
                    .then(function (res) {
                        if(res.status==200){
                            window.console.log(res)
                            _this.dialogVisible = false
                            _this.$message({
                                message: '添加成功',
                                type: 'success'
                            });
                            _this.init()
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error)
                        _this.$message({
                            message: '添加失败',
                            type: 'warning'
                        });
                    })
            },
            buy(index, row) {
                window.console.log(index, row);
                this.$router.push(
                    {
                        path:'/buyticket',
                        query:{flightno:row.flightNo}
                    }
                )
            },
            del(index, row) {
                let _this =this
                window.console.log(index, row);
                this.$http.get('/item/flight/delete/'+row.flightNo).then(function (res) {
                    if(res.status==200){
                        window.console.log(res)

                        _this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        _this.init()
                    }
                }) .catch(function (error) {
                    window.console.log(error)
                    _this.$message({
                        message: '删除失败',
                        type: 'warning'
                    });
                })
            },
            upd(index, row) {
                let _this =this
                window.console.log(1111);
                window.console.log(index, row);
                window.console.log(2221);
                _this.upd_flight.flightNo=row.flightNo
                _this.upd_flight.flightName=row.flightName
                _this.upd_flight.flightDate=row.flightDate
                _this.upd_flight.economyPrice=row.economyPrice
                _this.upd_flight.headPrice=row.headPrice
                _this.upd_flight.economyNum=row.economyNum
                _this.upd_flight.headNum=row.headNum

                _this.upd_flight.toCity=row.to.toCity

                _this.upd_flight.toTime=_this.dateT(row.to.toTime)

                _this.upd_flight.fromCity=row.from.fromCity
                _this.upd_flight.fromTime=_this.dateT(row.from.fromTime)
                _this.dialogVisible1=true
                _this.flightNo=row.flightNo

            },
            tableRowClassName({row, rowIndex}) {
                window.console.log(row)
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        window.console.log(_)
                        done();
                    })
                    .catch(_ => {
                        window.console.log(_)
                    });
            },
            handleSizeChange(val) {
                window.console.log(`每页 ${val} 条`);
            },
            dateT(time){

                var timeArr = time.split(":");
                var d= timeArr[0]
                var r= timeArr[1]
                let time1=new Date(0,0,0,d,r)
                return time1

            },
            tranDate(standard_time) {

                if (standard_time == null) {
                    return null
                }
                let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000+0800', ''));

                let hour = d.getHours();
                let minutes = d.getMinutes();


                if (hour < 10) {
                    hour = "0" + hour;
                }

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }


                let time = hour + ":" + minutes  ;
                return time;
            },
            admin(){
                this.$emit('header', false);
                this.$emit('footer', false);
            },
            tranDate1(standard_time) {

                if (standard_time == null) {
                    return null
                }

                let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000+0800', ''));
                let month = d.getMonth() + 1;
                let day = d.getDate();

                if (month < 10) {
                    month = "0" + month;
                }

                if (day < 10) {
                    day = "0" + day;
                }




                let t = d.getFullYear() + "-" + month + "-" + day ;
                return t;
            },
        },
        created(){
            this.init()
            this.admin()
        }
    }
</script>
<style scoped>
    .voyage_cards{
        width:1280px;
        margin: 0 auto;
        display: flex;
    }
    .voyage_display{

        background-color: #F0F1F3;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
    }
    .nav_layout {
        display: flex;
        justify-content: space-between;
        line-height: 6;
        /*padding-left: 100px;*/
        /*padding-right: 150px;*/
    }
    .nav_layout_right{
        display: flex;
        align-items: center;
    }
    .header_head{
        border-bottom: 1px solid grey;
        border-color: rgba(151, 151, 151, 0.3);
        padding: 0;
    }
    .nav_item{
        margin-left:20px ;

    }
    .el-header {
        background-color: #101c3d;
        color: white;
        line-height: 60px;

    }
    @media (min-width: 768px) {
        .nav_layout{
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*line-height: 6;*/
            /*padding-left: 18.1%;*/
            /*padding-right: 18.1%;*/
            margin: 0 auto;
            width: 1280px;
        }
    }
    .head_frame {
        border: 1px solid rgba(228, 231, 235, 0.2);
        height: 44px;
        width: 44px;
        border-radius: 22px;
    }
    .logo{
        width: 64px;
        height:64px;
        margin-top: 15px;
        /*margin: auto auto auto 0;*/
    }
</style>