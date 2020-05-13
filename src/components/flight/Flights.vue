<template>
   <el-container style="display: block" >
            <div class="home-container" style="background-color: #D7D7DB">
               <div class="main">
                     <div class="voyage_display">
                        <div class="voyage_cards">
                           <div style="height: 400px;width: 20%;border:1px blue solid;padding: 30px">
                              <div style="font-weight: bold;font-size: 20px;margin-bottom: 30px">航班查询</div>
                              <el-form  :model="form" label-width="80px" :rules="rules" ref="ruleForm">
                                 <el-form-item label="出发城市" prop="fromCity">
                                    <el-input v-model="form.fromCity"></el-input>
                                 </el-form-item>
                                 <el-form-item label="到达城市" prop="toCity">
                                    <el-input v-model="form.toCity"></el-input>
                                 </el-form-item>
                                 <el-form-item label="出发日期" prop="flightDate">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.flightDate" style="width: 100%;"  :picker-options="pickerOptions"  value-format="yyyy-MM-dd"></el-date-picker>
                                 </el-form-item>
                                 <el-form-item>
                                    <el-button type="primary" style="width: 100px" @click="init">搜索</el-button>
                                 </el-form-item>
                              </el-form>

                           </div>
                           <div style="height:800px;width: 80%;font-size: 30px;font-weight: bold">
                             <div>
                              <img src="../../assets/images/header/logo.png" style="width:70px;height: 70px">
                              选择航班
                             </div>
                               <hr>

                               <el-table
                                       :data="tableData"
                                       style="width: 100%"
                                       >
                                   <el-table-column
                                           prop="flightDate"
                                           label="日期"
                                           width="120">
                                   </el-table-column>
                                   <el-table-column
                                           prop="flightNo"
                                           label="航班编号"
                                           width="120">
                                   </el-table-column>
                                   <el-table-column
                                           prop="flightName"
                                           label="航班名称"
                                           width="120">
                                   </el-table-column>
                                   <el-table-column
                                           prop="from"
                                           width="120"
                                           label="出发">
                                       <template scope="scope">
                                               <div v-if="scope.row.from.fromCity"> {{scope.row.from.fromCity}}</div>
                                               <div v-if="scope.row.from.fromTime"> {{scope.row.from.fromTime}}</div>
                                       </template>
                                   </el-table-column>
                                   <el-table-column

                                           width="50">
                                       <template >
                                           <div >----></div>

                                       </template>
                                   </el-table-column>
                                   <el-table-column
                                           prop="to"
                                           label="到达城市">
                                       <template scope="scope">
                                           <div v-if="scope.row.to.toCity"> {{scope.row.to.toCity}}</div>
                                           <div v-if="scope.row.to.toTime"> {{scope.row.to.toTime}}</div>
                                       </template>
                                   </el-table-column>


                                   <el-table-column
                                           prop="economyPrice"
                                           label="价格"
                                   >
                                   </el-table-column>
                                   <el-table-column
                                           prop="economyPrice"
                                           label="价格"
                                   >


                                    <template scope="scope">
                                        <el-button type="primary" @click="buy(scope.$index, scope.row)">购买</el-button>
                                      </template>
                                   </el-table-column>
                               </el-table>
                               <el-pagination
                                       @current-change="init"
                                       background
                                       :page-size="size"
                                       :current-page.sync="page"
                                       @size-change="handleSizeChange($event)"
                                       layout="prev, pager, next"
                                       :total="total">
                               </el-pagination>
                               
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
             tableData:[],
             page:1,
             size:10,
             total:null,
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
                     return time.getTime() < Date.now() - 8.64e7;
                 },
                 value:''
             },
         }
      },
      methods:{
          init(){
              let _this=this

             this.$http(
                     {
                        method:"post",
                        url:'/item/flight/querys',
                        data:this.form,
                         params:{
                            page:this.page
                         }
                     })
                     .then(function (res) {
                        if(res.status==200){
                            _this.total=res.data.total
                          //  alert(res.data.total)
                            _this.tableData=[]
                           window.console.log(res.data.list)
                           // _this.tableData=res.data.data
                            for (var index in res.data.list) {
                                _this.tableData[index] = {};
                                _this.tableData[index].flightNo=res.data.list[index].flightNo
                                _this.tableData[index].flightName=res.data.list[index].flightName
                                _this.tableData[index].economyPrice='￥'+res.data.list[index].economyPrice+'起'
                                _this.tableData[index].flightDate=_this.tranDate1(res.data.list[index].flightDate)
                                _this.tableData[index].from={}
                                _this.tableData[index].from.fromCity=res.data.list[index].fromCity
                                _this.tableData[index].from.fromTime=_this.tranDate(res.data.list[index].fromTime)
                                _this.tableData[index].to={}
                                _this.tableData[index].to.toCity=res.data.list[index].toCity
                                _this.tableData[index].to.toTime=_this.tranDate(res.data.list[index].toTime)
                            }
                        }
                     })
                     .catch(function (error) {
                        window.console.log(error)
                        alert("登陆失败")
                     })

          },
          insert(){
              //let _this=this
              const tokenStr=window.sessionStorage.getItem('token');
              this.$http(
                  {
                      method:"post",
                      url:'/item/order/insert',
                      data:{token:tokenStr},
                      headers:{"Authorization":tokenStr}
                  })
                  .then(function (res) {
                      if(res.status==200){
                         window.console.log(res)
                      }
                  })
                  .catch(function (error) {
                      window.console.log(error)

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
          tableRowClassName({row, rowIndex}) {
              window.console.log(row)
              if (rowIndex === 1) {
                  return 'warning-row';
              } else if (rowIndex === 3) {
                  return 'success-row';
              }
              return '';
          },
          handleSizeChange(val) {
              window.console.log(`每页 ${val} 条`);
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


              let time = " " + hour + ":" + minutes  ;
              return time;
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
</style>