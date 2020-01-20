<template>
  <!-- .filter(data => !search || data.orderID.toLowerCase().includes(search.toLowerCase())) -->
  <el-container>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="产品：">
          <el-input v-model="formInline.search_product" placeholder="搜索产品 "></el-input>
        </el-form-item>
        <el-form-item label="时间范围：">
          <el-select v-model="formInline.search_timescope">
            <el-option label="全部" value></el-option>
            <el-option v-for="item in time_scope" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-form-item label="订单号：">
            <el-input v-model="formInline.search_ID" placeholder="搜索订单"></el-input>
          </el-form-item>

          <el-button type="primary" @click="set_search">查询</el-button>
        </el-form-item>

        <el-form-item>
          <el-button @click="export_exl">导出</el-button>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="类型：">
          <el-select v-model="formInline.search_type">
            <el-option label="全部" value></el-option>
            <el-option v-for="item in type_scope" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.search_state">
            <el-option label="全部" value></el-option>
            <el-option v-for="item in state_scope" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table :data="PageData" style="width: 100%">
        <el-table-column label="订单编号" prop="orderID"></el-table-column>
        <el-table-column label="产品" prop="product"></el-table-column>
        <el-table-column width="100px" label="类型" prop="type"></el-table-column>
        <el-table-column label="创建时间" align="center" prop="create_time"></el-table-column>
        <el-table-column label="支付时间" align="center" prop="pay_time"></el-table-column>
        <el-table-column label="状态" prop="state" style="color:red;">
          <template scope="scope">
            <span v-if="scope.row.state==='已支付'" style="color: green">已支付</span>
            <span v-else-if="scope.row.state==='已取消'">已取消</span>
            <span v-else-if="scope.row.state==='未支付'" style="color: red">未支付</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="go_order_detaile(scope.$index, scope.row)">详情</el-button>

            <el-button
              v-if="scope.row.state=='未支付'"
              size="mini"
              type="primary"
              @click="handlePay(scope.$index,scope.row)"
            >支付</el-button>

            <el-button
              v-if="scope.row.state=='未支付'"
              size="mini"
              type="warning"
              @click="handleCancel(scope.$index,scope.row)"
            >取消</el-button>

            <el-button
              v-if="scope.row.state=='已支付'"
              size="mini"
              type="success"
              @click="go_control_page(scope.$index,scope.row)"
            >资源管理</el-button>

            <el-button
              v-if="scope.row.state=='已取消'"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="page_size"
          :page-count="total_page"
          layout="total, prev, pager, next, jumper"
          :total="total_info"
        ></el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //分页属性
      currentPage: 1,
      page_size: 5,

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
      }
    };
  },
  methods: {
    //设置当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //跳转到订单详情
    go_order_detaile(index, row) {
      this.$router.push({ name: "ToPay", params: { orderId: row.orderID } });
    },
    //跳转到资源列表
    go_control_page(index, row) {
      window.console.log(index, row);
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
        .then(function(response) {
          // window.console.log(response);
          if (response.status == 200) { 
            that.$set(that.PageData[index], "state", "已取消");
          }
        })
        .catch(function(error) {
          window.console.log(error);
          alert("取消失败")
        });
    },
    //删除订单
    handleDelete(index, row) {
      window.console.log(index, row);
      this.$http
        .get("/order/deleteOrder", {
          params: {
            order_id: row.orderID
          }
        })
        .then(function(response) {
          window.console.log(response);
          if (response.status == 200) {
             this.$router.go(0);
            alert("删除成功");
          }
        })
        .catch(function(error) {
          window.console.log(error);
          alert("删除失败");
        });
    },
    //获取订单数据
    async get_order_list() {
      const { data: res } = await this.$http.get("/order/findOrders", {
        params: { userId: 1 }
      });
      if (res.code == 20000) {
        window.console.log(res.data);
        let status_map = { "1": "未支付", "2": "已支付", "3": "已取消" };
        let type_map = { "1": "新购", "2": "续费" };

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
            res.data[index]["update_time"]
          );
          this.tableData[index]["state"] =
            status_map[res.data[index]["status"]];
          this.tableData[index]["price"] = res.data[index]["price"];
        }
      } else {
        alert("连接服务器失败");
      }
    },
    //设置过滤参数
    set_search() {
      this.search_product = this.formInline.search_product;
      this.search_timescope = this.formInline.search_timescope;
      this.search_ID = this.formInline.search_ID;
      this.search_type = this.formInline.search_type;
      this.search_state = this.formInline.search_state;
    },
    //导出表格
    export_exl() {
      alert("暂未开放");
    },
    //转换日期
    tranDate(standard_time) {
      let d = new Date(standard_time);
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
      window.console.log(d);
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

      window.console.log(val);
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
    //过滤数据总页数
    total_page() {
      let f = this.filterData;

      return Math.round(f.length / this.page_size + 0.5);
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

  }
};
</script>
<style scoped>
.el-form-item {
  margin-left: 20px;
  margin-right: 100px;
}
</style>