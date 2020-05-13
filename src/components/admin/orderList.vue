<template>
  <!-- .filter(data => !search || data.orderID.toLowerCase().includes(search.toLowerCase())) -->
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
        <h1>管理员   订单列表</h1>
        <hr>
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
  import {tranDate,tranDate1} from '../../../date'
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
          this.get_order_list()
      },
      //跳转到订单详情（这里跳转到管理员视图的订单详情）
      go_order_detaile(index, row) {
        this.$router.push({name: "ToPay_Admin", params: {orderId: row.orderID}});
      },
      admin(){
        this.$emit('header', false);
        this.$emit('footer', false);
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
        this.$confirm('确定要删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {


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

                    // alert("删除成功");
                    that.$message.success("删除成功！")
                    that.orderOptions.splice(that.orderOptions.indexOf(row.orderID),1)
                  }
                })
                .catch(function (error) {
                  window.console.log(error);
                  //alert("删除失败");
                  that.$message.error("删除失败！")
                });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      //删除订单列表
      deleteOrderList(){
        var that = this
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {


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
                      for(var j in that.tableData){

                        if (that.tableData[j] == that.checkedOrder[i]) {
                          that.tableData.splice(j, 1);
                        }
                      }
                      that.orderOptions.splice(that.orderOptions.indexOf(that.checkedOrder[i]),1)
                    }
                    that.checkedOrder=[];
                   // alert("删除成功");
                    that.$message.success("删除成功！")
                  }
                })
                .catch(function (error) {
                  window.console.log(error);
                 // alert("删除失败");
                  that.$message.error("删除失败！")
                });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });

      },

      //下载表格
      handleDownload() {

        require.ensure([], () => {
          const { export_json_to_excel } = require('../../ventor/Export2Excel.js');
          const tHeader = Object.keys(this.tableData[0])
          const list = this.tableData
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
        let _this=this
        this.$http.get("item/order/findAllOrders/"+_this.page).then(function (res) {
          if (res.status == 200) {
            window.console.log(res)
            _this.total=res.data.total
            //  alert(res.data.total)
            _this.tableData=[]

            // _this.tableData=res.data.data
            for (var index in res.data.list) {
              _this.tableData[index] = {};
              _this.tableData[index].flightNo=res.data.list[index].flightNo
              _this.tableData[index].flightName=res.data.list[index].flightName
              _this.tableData[index].orderId=res.data.list[index].orderId
              _this.tableData[index].economyPrice='￥'+res.data.list[index].economyPrice+'起'
              _this.tableData[index].flightDate=tranDate1(res.data.list[index].flightDate)

              _this.tableData[index].fromCity=res.data.list[index].fromCity
              _this.tableData[index].fromTime=tranDate(res.data.list[index].fromTime)
              _this.tableData[index].toCity=res.data.list[index].toCity
              _this.tableData[index].toTime=tranDate(res.data.list[index].toTime)
            }

          }
        })


      },
      go_order(orderId){
        window.console.log(orderId)
        this.$http.get('/item/order/orderDetails/'+orderId)
        this.$router.push({
          path:'/admin/orderDetails',
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

