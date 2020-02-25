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
        <el-table :data="tableData" style="width: 100%"
                  :header-cell-style="{background:'#E4E7EB',color:' #16161D'}"
                  header-row-class-name="headerStyle"
                  v-loading="dataLoading">
          <el-checkbox-group v-model="checkedOrder">
          <el-table-column width="100" >
            <template slot="header">
              <el-popover trigger="manual" class="popover_scope" popper-class="tooltipStyle" placement="top" :value="isPopover" width="120">
                <div @click="deleteOrderList">
                  <i class="el-icon-delete" style="margin-right: 10px;"></i>
                  <span>批量删除</span>
                </div>
                <el-checkbox slot="reference" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="label_text">全选</el-checkbox>
              </el-popover>
            </template>

              <template scope="scope">
                <el-checkbox-group v-model="checkedOrder" @change="handleCheckedOrderChange">
                  <el-checkbox :label="scope.row.orderID" :disabled="scope.row.state!=='已取消'" >{{null}}</el-checkbox>
                </el-checkbox-group>

              </template>
          </el-table-column>
          </el-checkbox-group>

          <el-table-column label="订单编号" prop="orderID" width="200"></el-table-column>
          <el-table-column label="产品" prop="product" width="120"></el-table-column>
          <el-table-column width="60" label="类型"  prop="type"></el-table-column>
          <el-table-column label="创建时间" align="center" prop="create_time" width="200"></el-table-column>
          <el-table-column label="支付时间" align="center" prop="pay_time" width="200"></el-table-column>
          <el-table-column width="80" label="状态" prop="state" style="color:red;">
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

<!--              这块需要返回是否已经开通-->
              <el-button
                      :id = "scope.$index"
                      v-if="scope.row.state=='已支付'"
                      size="mini"
                      type="success"
                      @click="active(scope.$index,scope.row)"
              >开通
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
                  :total="total"
                  layout="total, prev, pager, next, jumper"
          ></el-pagination>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        //用户Id
        userId: this.$route.query.user_id,
        //分页属性
        currentPage: 1,
        page_size: 10,
        total:10,

        //下拉表属性
        type_scope: ["新购", "续费"],
        time_scope: ["一个月内", "二个月内", "三个月内"],
        state_scope: ["已支付", "已取消", "未支付"],

        //数据属性
        tableData: [],
        //过滤属性
        formInline: {
          search_ID: "",
          search_product: "",
          search_type: "",
          search_timescope: "",
          search_state: ""
        },
        //复选
        checkedOrder:[],
        checkAll:false,
        isIndeterminate:false,
        orderOptions:[],


        //下载表格
        list: null,
        listLoading: true,
        filename: '',
        autoWidth: true,
        bookType: 'xlsx',

        //加载
        dataLoading:true,

      };
    },
    methods: {
      //设置当前页
      handleCurrentChange(val) {
        this.currentPage=val
        // 获取请求数据

      },
      //跳转到订单详情（这里跳转到管理员视图的订单详情）
      go_order_detaile(index, row) {
        this.$router.push({name: "ToPay", params: {orderId: row.orderID}});
      },
      //开通设备
      active(index,row){
        window.console.log(index,row)
        var that = this
        const loading = this.$loading({
          target:document.getElementById(index),
          lock: false,
          spinner: 'el-icon-loading',
          background: '#67C23A'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
        this.$http
                .put("/xxx/xxx", {
                  params: {
                    orderId: row.orderID
                  }
                })
                .then(function (response) {
                  if (response.status == 200) {
                    // this.$router.go(0);
                    // that.$set(that.PageData[index], "state", "已取消");
                    // that.$set(that.tableData[index], "state");
                    that.$message({
                      showClose: true,
                      message: '开通成功',
                      type: 'success'
                    });
                    that.activeLoading=false;
                  }
                })
                .catch(function (error) {
                  window.console.log(error);
                  that.$message({
                    showClose: true,
                    message: '开通失败',
                    type: 'error'
                  });
                  that.activeLoading=false;
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
                    that.tableData.splice(index, 1);
                    alert("删除成功");
                  }
                })
                .catch(function (error) {
                  window.console.log(error);
                  alert("删除失败");
                });
      },
      //删除订单列表
      deleteOrderList(){
        var that = this
        this.$http
                .delete("/order/deleteOrderList", {
                  params: {
                    orderList: this.checkedOrder
                  }
                })
                .then(function (response) {
                  if (response.status == 200) {
                    // this.$router.go(0);
                    for(var i in that.checkedOrder){
                      that.tableData.splice(that.tableData.indexOf(that.checkedOrder[i]),1)
                    }
                    that.checkedOrder=[];
                    alert("删除成功");
                  }
                })
                .catch(function (error) {
                  window.console.log(error);
                  alert("删除失败");
                });

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
      //获取订单数据（这里仅测试用，将由获取过滤分页数据替换）
      async get_order_list() {
        this.dataLoading=true
        const {data: res} = await this.$http.get("/order/findOrders", {
          params: {userId: 1}
        });
        if (res.code == 20000) {
          let status_map = {"1": "未支付", "2": "已支付", "3": "已取消"};
          let type_map = {"1": "新购", "2": "续费"};

          let testIndex=0;
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
            testIndex++;
            if(this.tableData[index]["state"]==='已取消'){
              this.orderOptions.push(this.tableData[index]["orderID"])
            }

            if(testIndex>20){
              break;
            }

          }
          this.tableData.sort(function (a, b) {
            return Date.parse(b.create_time) - Date.parse(a.create_time);
          })
          this.dataLoading=false
          window.console.log(this.tableData.length)

        } else {
          alert("连接服务器失败");
        }
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
          alert("连接服务器失败");
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
    mounted() {
      this.get_order_list();
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
  .popover_scope{

  }
  .popover_scope /deep/ .el-popper[x-placement^=top] /deep/ .popper__arrow{
    border-top-color:#E84948;
  }
  .popover_scope /deep/ .el-popper[x-placement^=top] /deep/ .popper__arrow::after{
    border-top-color:#E84948;
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

  .el-popper[x-placement^=bottom] .popper__arrow{
    border-bottom-color:#E84948;
  }
  .el-popper[x-placement^=bottom] .popper__arrow::after{
    border-bottom-color:#E84948;
  }
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
</style>

