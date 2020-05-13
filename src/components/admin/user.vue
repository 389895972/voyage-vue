<template>
    <el-container>
        <el-header  class="header_head" height="100px">
            <div class="nav_layout">
                <img class="logo" src="../../assets/images/header/logo1.png"  width="60px" height="60px"  @click="go_home"  style="cursor: pointer" alt />
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
        <el-main>
            <div class="middle_size">
                <h1>用户列表</h1>
                <hr>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="用户编号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="username"
                            label="用户名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="idcard"
                            label="身份证号码">
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="手机号">
                    </el-table-column>
                    <el-table-column
                            prop="created"
                            label="注册日期">
                    </el-table-column>

                    <el-table-column

                            label="操作">
                        <template scope="scope">
                            <el-button type="success" @click="go_order(scope.row.orderId)">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                            background
                            @current-change="handleCurrentChange"
                            :current-page="page"
                            :page-size="size"
                            :total="total"
                            layout="total, prev, pager, next, jumper"
                    ></el-pagination>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    import {tranDate1} from '../../../date'
    export default {
        data() {
            return {

                //分页属性
                page: 1,
                size: 10,
                total:10,
                tableData:[]


            };
        },
        methods: {
            go_home(){
                this.$router.push({
                    path:'/admin/admin'
                })
            },
            //设置当前页
            handleCurrentChange(val) {
                this.currentPage=val
                // 获取请求数据

            },
            //跳转到订单详情（这里跳转到管理员视图的订单详情）
            go_order_detaile(index, row) {
                this.$router.push({name: "ToPay_Admin", params: {orderId: row.orderID}});
            },
            admin(){
                this.$emit('header', false);
                this.$emit('footer', false);
            },


            //获取订单数据
            async get_order_list() {
                let _this=this
                this.$http.get("user/queryAllUser/"+_this.page).then(function (res) {
                    if (res.status == 200) {
                        window.console.log(res.data[0])
                        _this.total=res.data.length
                        //  alert(res.data.total)
                        _this.tableData=[]

                        // _this.tableData=res.data.data
                        for (var index in res.data) {
                            _this.tableData[index] = {};
                            _this.tableData[index].id=res.data[index].id
                            _this.tableData[index].username=res.data[index].username
                            _this.tableData[index].name=res.data[index].name
                            _this.tableData[index].created=tranDate1(res.data[index].created)

                            _this.tableData[index].idcard=res.data[index].idcard
                            _this.tableData[index].phone=res.data[index].phone

                        }

                    }
                })


            },
            go_order(orderId){
                window.console.log(orderId)
                this.$http.get('/item/order/orderDetails/'+orderId)
                this.$router.push({
                    path:'/orderDetails',
                    query:{orderId:orderId}
                })
            },
            //获取分页过滤订单数据
            async get_order_list_filter() {
                this.dataLoading=true
                var that=this
                const {data: res} = await this.$http.post("/order/findOrders", {
                    token: window.sessionStorage.getItem('token'),
                    filterDate:that.formInline,
                    page:that.currentPage
                });
                if (res.code == 20000) {
                    let status_map = {"1": "未支付", "2": "已支付", "3": "已取消"};
                    let type_map = {"1": "新购", "2": "续费"};

                    this.tableData=[]
                    for (var index in res.data) {
                        this.tableData[index] = {};
                        this.tableData[index]["orderID"] = res.data[index]["order_id"];
                        this.tableData[index]["product"] = res.data[index]["goods_name"];
                        this.tableData[index]["type"] =
                            type_map[res.data[index]["payment_type"]];
                        this.tableData[index]["create_time"] = this.tranDate(
                            res.data[index]["create_time"]
                        );
                        this.tableData[index]["pay_time"] = this.tranDate(
                            res.data[index]["payment_time"]
                        );
                        this.tableData[index]["state"] =
                            status_map[res.data[index]["status"]];
                        this.tableData[index]["price"] = res.data[index]["price"];
                        if(this.tableData[index]["state"]==='已取消'){
                            this.orderOptions.push(this.tableData[index]["orderID"])
                        }


                    }
                    this.tableData.sort(function (a, b) {
                        return Date.parse(b.create_time) - Date.parse(a.create_time);
                    })
                    this.dataLoading=false
                } else {
                    //alert("连接服务器失败");
                    this.$message.error("连接服务器失败！")
                }
            },
            //检测订单复选状态
            handleCheckedOrderChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.orderOptions.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.orderOptions.length;
            },
            handleCheckAllChange(val) {
                this.checkedOrder = val ? this.orderOptions : [];
                this.isIndeterminate = false;
            },

            //转换日期
            tranDate(standard_time) {

                if (standard_time == null) {
                    return null
                }
                let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000+0800', ''));
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
            //后台过滤查询
            set_search(){
                this.get_order_list_filter()
            },

        },

        computed: {
            isPopover(){
                return this.checkedOrder.length>0;
            }
        },

        //加载前调用
        created() {
            this.get_order_list();
            this.admin()
        },

    };
</script>
<style scoped>
    .el-form-item {
        margin-left: 20px;
        margin-right: 100px;
    }

    .middle_size {
        width: 1280px;
        margin: 0 auto;
    }

    .el-table .cell {
        display: table-row-group;
    }


    .label_font {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #16161D;
        letter-spacing: 0;
        text-align: center;

        font-weight: bold;
    }

    .el-select-dropdown__item.hover, .el-select-dropdown__item {
        letter-spacing: 0;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        text-align: center;
        /*font-weight: bolder;*/
    }

    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
        background-color: #3254DC;;


        color: #FFFFFF;

    }

    .el-form-item {
        margin-left: 0px;
        margin-right: 20px;
    }

    .product_input {

    }

    .id_input {

    }

    .time_input {
        width: 100px;
    }

    .type_input {
        width: 100px;

    }

    .state_input {
        width: 100px;

    }

    .form_height {
        height: 100px;
        display: -webkit-box;
    }

    .form_left {
        width: 90%;
    }

    .form_right {
        width: 10%;
    }

    .query_button {
        width: 120px;
    }

    .export_button {
        width: 128px;
    }






</style>
<style type="text/css">
    .label_text{
        font-family: PingFangSC-Medium;
        font-size: 15px;
        color: #16161D;
        letter-spacing: 0;
        font-weight: bolder;
    }

    .tooltipStyle{
        background: #E84948;
        height: 36px;
        min-width: 100px;
        vertical-align: center;

        color: white;
        cursor:pointer;
    }

    /*.el-popper[x-placement^=bottom] .popper__arrow{*/
    /*  border-bottom-color:#E84948;*/
    /*}*/
    /*.el-popper[x-placement^=bottom] .popper__arrow::after{*/
    /*  border-bottom-color:#E84948;*/
    /*}*/
    /*.el-popper[x-placement^=top] /deep/ .popper__arrow{*/
    /*  border-top-color:#E84948;*/
    /*}*/
    /*.el-popper[x-placement^=top] /deep/ .popper__arrow::after{*/
    /*  border-top-color:#E84948;*/
    /*}*/
    .el-loading-spinner {
        top: 85%;
        width: 100%;
        font-size: 25px;
        text-align: center;
        position: absolute;
    }
    .el-loading-spinner i {
        color: white;
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

