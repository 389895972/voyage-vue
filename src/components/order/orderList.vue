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

      <el-table :data="filterData" style="width: 100%">
        <el-table-column label="订单编号" prop="orderID"></el-table-column>
        <el-table-column label="产品" prop="product"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="创建时间" prop="create_time"></el-table-column>
        <el-table-column label="支付时间" prop="pay_time"></el-table-column>
        <el-table-column label="状态" prop="state"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>

        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      type_scope: ["新购", "续费"],
      time_scope: ["一个月内", "二个月内", "三个月内"],
      state_scope: ["已支付", "已取消", "未支付"],

      tableData: [
        {
          orderID: "20191106174445000",
          product: "AiKit",
          type: "新购",
          create_time: "2019-12-18 16:44:40",
          pay_time: "2019-11-06 17:44:40",
          state: "已支付",
          price: 10.0
        },
        {
          orderID: "20191106174445001",
          product: "EdgeKit",
          type: "新购",
          create_time: "2019-12-06 17:44:44",
          pay_time: "2019-11-06 17:44:44",
          state: "已支付",
          price: 20.0
        },
        {
          orderID: "20191106174445002",
          product: "Rb3",
          type: "新购",
          create_time: "2020-01-06 17:44:54",
          pay_time: "2019-11-06 17:44:54",
          state: "已支付",
          price: 30.0
        },
        {
          orderID: "20191106174445003",
          product: "AiKit",
          type: "续费",
          create_time: "2019-11-06 17:44:44",
          pay_time: "N/A",
          state: "未支付",
          price: 10.0
        },
        {
          orderID: "20191106174445004",
          product: "EdgeKit",
          type: "新购",
          create_time: "2019-10-06 17:39:44",
          pay_time: "N/A",
          state: "已取消",
          price: 20.0
        }
      ],
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
    handleEdit(index, row) {
      window.console.log(index, row);
    },
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    set_search() {
      this.search_product = this.formInline.search_product;
      this.search_timescope = this.formInline.search_timescope;
      this.search_ID = this.formInline.search_ID;
      this.search_type = this.formInline.search_type;
      this.search_state = this.formInline.search_state;
    },
    submit() {},
    export_exl() {
      //  this.$http.get('http://10.0.20.144:9001/goodsitem/findAll?goodsid=1682320') .then(response => (this.info = response)) .catch(function (error) { // 请求失败处理
      //  window.console.log(error); });
    },
    addDate(months, type) {
      var d = new Date();
      var is_last_year = false;
      window.console.log(d)
      d.setDate(d.getDate());
      var month = d.getMonth() + 1 + months;
      if(month<=0){
        month = d.getMonth() + 13 +months;
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
      if(is_last_year){
        val = d.getFullYear()-1 + "-" + month + "-" + day + time;
      }
 
      window.console.log(val)
      return val;
    },
    time_filter(order_create_time, t_scope) {

      let type = "0";
      let start_time = '';
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

      f = f.filter(p =>
        p.product.toLowerCase().includes(search_product.toLowerCase())
      );
      f = f.filter(p => p.type.includes(search_type));
      if(search_timescope){
      f = f.filter(p => this.time_filter(p.create_time, search_timescope));
      }

      f = f.filter(p => p.state.includes(search_state));
      return f;
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