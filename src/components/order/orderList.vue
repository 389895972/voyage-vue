<template>
    <!-- .filter(data => !search || data.orderID.toLowerCase().includes(search.toLowerCase())) -->
    <el-container>
        <el-main>
            <div class="middle_size">
                <h1>订单列表</h1>
                <el-form :inline="true" :model="formInline" class="demo-form-inline form_height">
                    <div class="form_left">
                        <el-form-item class="product_input">
                            <span class="label_font">产品</span>
                            <el-input v-model="formInline.search_product" placeholder="搜索产品 "></el-input>
                        </el-form-item>
                        <el-form-item>
                            <span class="label_font">订单号</span>
                            <el-input v-model="formInline.search_ID" placeholder="搜索订单"></el-input>
                        </el-form-item>
                        <el-form-item class="time_input">
                            <span class="label_font">时间范围</span><br>
                            <el-select v-model="formInline.search_timescope">
                                <el-option label="全部" value></el-option>
                                <el-option v-for="item in time_scope" :key="item" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="type_input">
                            <span class="label_font">类型</span><br>
                            <el-select v-model="formInline.search_type">
                                <el-option label="全部" value></el-option>
                                <el-option v-for="item in type_scope" :key="item" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="state_input">
                            <span class="label_font">状态</span><br>
                            <el-select v-model="formInline.search_state">
                                <el-option label="全部" value></el-option>
                                <el-option v-for="item in state_scope" :key="item" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <span class="label_font"></span><br>
                            <el-button type="primary" icon="el-icon-search" @click="set_search" class="query_button">
                                查询
                            </el-button>
                        </el-form-item>
                    </div>
                    <div class="form_right">
                        <el-form-item>
                            <span class="label_font"></span><br>
                            <el-button icon="el-icon-download" type="success" @click="handleDownload" class="export_button">
                                导出
                            </el-button>
                        </el-form-item>
                    </div>

                </el-form>
                <el-table :data="PageData" style="width: 100%"
                          :header-cell-style="{background:'#E4E7EB',color:' #16161D'}">
                    <el-table-column label="订单编号" prop="orderID"></el-table-column>
                    <el-table-column label="产品" prop="product"></el-table-column>
                    <el-table-column width="100px" label="类型" prop="type"></el-table-column>
                    <el-table-column label="创建时间" align="center" prop="create_time"></el-table-column>
                    <el-table-column label="支付时间" align="center" prop="pay_time"></el-table-column>
                    <el-table-column width="100px" label="状态" prop="state" style="color:red;">
                        <template scope="scope">
                            <span v-if="scope.row.state==='已支付'" style="color: green">已支付</span>
                            <span v-else-if="scope.row.state==='已取消'">已取消</span>
                            <span v-else-if="scope.row.state==='未支付'" style="color: red">未支付</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="100px" label="价格" prop="price"></el-table-column>

                    <el-table-column width="208px" align="left" label="操作" header-align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="go_order_detaile(scope.$index, scope.row)">详情</el-button>

                            <el-button
                                    v-if="scope.row.state=='未支付'"
                                    size="mini"
                                    type="primary"
                                    @click="payOpera(scope.$index,scope.row)"
                            >支付
                            </el-button>

                            <el-button
                                    v-if="scope.row.state=='未支付'"
                                    size="mini"
                                    type="warning"
                                    @click="handleCancel(scope.$index,scope.row)"
                            >取消
                            </el-button>


                            <el-button
                                    v-if="scope.row.state=='已支付'"
                                    size="mini"
                                    type="success"
                                    @click="go_control_page(scope.$index,scope.row)"
                            >资源管理
                            </el-button>

                            <el-button
                                    v-if="scope.row.state=='已取消'"
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)"
                            >删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                            background
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="page_size"
                            :total="total_info"
                            layout="total, prev, pager, next, jumper"
                    ></el-pagination>
                </div>
            </div>
            <el-dialog
                    title="支付提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <span>确认支付吗?</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible=false">取 消</el-button>
                  <el-button type="primary" @click="handlePay">确 定</el-button>
                </span>
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
    // import Export2Excel from '../../ventor/Export2Excel.js'
    export default {
        data() {
            return {
                //用户Id
                userId: this.$route.query.user_id,
                //分页属性
                currentPage: 1,
                page_size: 10,

                //下拉表属性
                type_scope: ["新购", "续费"],
                time_scope: ["一个月内", "二个月内", "三个月内"],
                state_scope: ["已支付", "已取消", "未支付"],

                //数据属性
                tableData: [],
                //过滤属性
                search_ID: "",
                search_product: "",
                search_type: "",
                search_timescope: "",
                search_state: "",
                formInline: {
                    search_ID: "",
                    search_product: "",
                    search_type: "",
                    search_timescope: "",
                    search_state: ""
                },
                //下拉框
                dialogVisible: false,
                //获取索引和列
                row:null,
                index:null,
                //下载表格
                list: null,
                listLoading: true,
                filename: '',
                autoWidth: true,
                bookType: 'xlsx'

            };
        },
        methods: {
            //设置当前页
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            //跳转到订单详情
            go_order_detaile(index, row) {
                this.$router.push({name: "ToPay", params: {orderId: row.orderID}});
            },
            //跳转到资源列表
            go_control_page() {
                this.$router.push({path: "../instance"})
            },
            //取消订单
            handleCancel(index, row) {
                var that = this
                this.$http
                    .get("/order/cancelOrder", {
                        params: {
                            orderId: row.orderID
                        }
                    })
                    .then(function (response) {
                        // window.console.log(response);
                        if (response.status == 200) {
                            that.$set(that.PageData[index], "state", "已取消");
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                        alert("取消失败")
                    });
            },
            //删除订单
            handleDelete(index, row) {
                window.console.log(index, row);
                var that = this
                this.$http
                    .delete("/order/deleteOrder", {
                        params: {
                            orderId: row.orderID
                        }
                    })
                    .then(function (response) {
                        if (response.status == 200) {
                            // this.$router.go(0);
                            that.filterData.splice(that.page_size * (that.currentPage - 1) + index, 1);
                            alert("删除成功");
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                        alert("删除失败");
                    });
            },
            //支付操作
            payOpera(index,row){
                this.dialogVisible=true;
                window.console.log(index,row)
                this.index=index
                this.row=row
            },
            //支付订单
            handlePay() {
                window.console.log('支付订单:',this.index, this.row);
                var that=this

                this.$http.get('/order/changeStatus', {params: {orderId: that.row.orderID}})
                    .then(function (response) {
                        if (response.status == 200) {
                            that.$set(that.PageData[that.index], "state", "已支付");
                            that.dialogVisible=false
                            that.index=null
                            that.row=null
                            alert("支付成功")
                        }
                    }).catch(function (error) {
                        that.dialogVisible=false
                        alert("服务出错")
                        window.console.log(error)
                })
            },
          handleClose(done) {
            this.$confirm('确认关闭？')
                    .then(_ => {
                      done();
                      window.console.log(_)
                    })
                    .catch(_ => { window.console.log(_)});
          },
          //下载表格
          handleDownload() {

              require.ensure([], () => {
                  const { export_json_to_excel } = require('../../ventor/Export2Excel.js');
                  const tHeader = Object.keys(this.tableData[0])
                  const list = this.filterData
                  const filterVal = []
                  for(var i in tHeader){
                      filterVal.push(tHeader[i])
                  }
                  window.console.log(filterVal)

                  const data = this.formatJson(filterVal, list)
                  export_json_to_excel({
                      header: tHeader,
                      data,
                      filename: this.filename,
                      autoWidth: this.autoWidth,
                      bookType: this.bookType
                  })
              })

          },
            //下载的表格数据格式化
            formatJson(filterVal, jsonData) {
              return jsonData.map(v => filterVal.map(j => {
                if (j === 'timestamp') {
                  return v[j]
                } else {
                  return v[j]
                }
              }))
            },
            //获取订单数据
            async get_order_list() {
                const {data: res} = await this.$http.get("/order/findOrders", {
                    params: {userId: 1}
                });
                if (res.code == 20000) {
                    let status_map = {"1": "未支付", "2": "已支付", "3": "已取消"};
                    let type_map = {"1": "新购", "2": "续费"};

                    this.tableData = [];
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

                    }
                    this.tableData.sort(function (a, b) {
                        return Date.parse(b.create_time) - Date.parse(a.create_time);
                    })

                } else {
                    this.$message.error("连接服务器失败")
                    //alert("连接服务器失败");
                }
                // const newAixos = Axios.create({
                //     baseURL: 'http://10.0.20.114:9002',
                //     // timeout: 1000,
                // });
                // // newAixos.get("/tbUser/getToken/"+tokenStr)
                // newAixos({
                //     method:'post',
                //     url:"/order/insert",
                //     data:{
                //         product_name:this.product_name,
                //         userId:this.user_id,
                //         goodsId:this.good_id,
                //         num:this.buy_nums,
                //         hire_time:this.hire_time,
                //         OS:this.os,
                //         // status:this.status,
                //         status:2,
                //         price:this.pay,
                //         infoForm:this.infoForm,
                //         order_status:2,
                //         due_time:this.due_time,
                //         due_order_time:this.due_order_time,
                //     },
                //     headers:{"Authorization":"Bearer "+tokenStr}})
                //     .then(function(response) {
                //         window.console.log(123777)
                //         window.console.log(response);
                //         if (response.data.code == 20000) {
                //             that.isLogin=true
                //             that.userInfo=response.data.data.userInfo
                //             that.roles=response.data.data.roles
                //         }
                //     })
                //     .catch(function(error) {
                //         window.console.log(error);
                //         this.$message.success("服务器错误")
                //     });
            },
            //设置过滤参数
            set_search() {
                this.search_product = this.formInline.search_product;
                this.search_timescope = this.formInline.search_timescope;
                this.search_ID = this.formInline.search_ID;
                this.search_type = this.formInline.search_type;
                this.search_state = this.formInline.search_state;
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
            //获取n个月前日期
            addDate(months, type) {
                var d = new Date();
                var is_last_year = false;
                d.setDate(d.getDate());
                var month = d.getMonth() + 1 + months;
                if (month <= 0) {
                    month = d.getMonth() + 13 + months;
                    is_last_year = true;
                }

                var day = d.getDate();
                var hour = d.getHours();
                var minutes = d.getMinutes();
                var seconds = d.getSeconds();

                if (month < 10) {
                    month = "0" + month;
                }

                if (day < 10) {
                    day = "0" + day;
                }
                var time = "";
                //type不是空字符串 表示需要时分秒
                if (type != null && "" != type) {
                    if (hour < 10) {
                        hour = "0" + hour;
                    }

                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }

                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    time = " " + hour + ":" + minutes + ":" + seconds;
                }
                var val = d.getFullYear() + "-" + month + "-" + day + time;
                if (is_last_year) {
                    val = d.getFullYear() - 1 + "-" + month + "-" + day + time;
                }

                return val;
            },
            //过滤时间
            time_filter(order_create_time, t_scope) {
                let type = "0";
                let start_time = "";
                switch (t_scope) {
                    case "一个月内":
                        start_time = this.addDate(-1, type);
                        break;
                    case "二个月内":
                        start_time = this.addDate(-2, type);
                        break;
                    case "三个月内":
                        start_time = this.addDate(-3, type);
                        break;
                    default:
                        break;
                }

                let st = new Date(start_time);

                let ort = new Date(order_create_time);
                if (ort >= st) {
                    return true;
                }
                return false;
            }
        },
        computed: {
            //过滤数据
            filterData() {
                const tableData = this.tableData;
                const search_ID = this.search_ID;
                const search_product = this.search_product;
                const search_type = this.search_type;
                const search_timescope = this.search_timescope;
                const search_state = this.search_state;
                let f = tableData;
                if (search_ID) {
                    f = tableData.filter(p => p.orderID == search_ID);
                }
                if (search_product) {
                    f = f.filter(p =>
                        p.product.toLowerCase().includes(search_product.toLowerCase())
                    );
                }
                if (search_type) {
                    f = f.filter(p => p.type.includes(search_type));
                }

                if (search_timescope) {
                    f = f.filter(p => this.time_filter(p.create_time, search_timescope));
                }
                if (search_state) {
                    f = f.filter(p => p.state && p.state.includes(search_state));
                }

                return f;
            },
            //分页数据
            PageData() {
                let cp = this.currentPage;
                let ps = this.page_size;
                let f = this.filterData;
                return f.slice((cp - 1) * ps, cp * ps);
            },


            //过滤数据总条数
            total_info() {
                return this.filterData.length;
            }
        },

        //加载前调用
        mounted() {
            this.get_order_list();
        },
        watch: {
            //当过滤数据发生变化设当前页为1，否则获取不到过滤数据
            filterData() {
                this.currentPage = 1;
            }

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


    .el-icon-arrow-up:before {
        content: "\e790";
    }


</style>
