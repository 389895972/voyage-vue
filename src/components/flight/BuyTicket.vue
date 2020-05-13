<template>
    <el-container style="display: block" >
        <div class="home-container" style="background-color: #D7D7DB">
            <div class="main">
                <div class="voyage_display">
                    <div class="voyage_cards">
                        <div style="font-size: 25px;font-weight: bold">购买</div>
                        <div style="width: 800px;height: 120px;border: 1px blue solid">

                            <table style="font-size: 22px">
                            <tr>
                                <tr>
                                    <td width="200px">航班号：{{flight_info.flightNo}}</td>
                                    <td></td>
                                    <td >{{flight_info.fromCity}}</td>
                                    <td>----></td>
                                    <td width="200px">{{flight_info.toCity}}</td>
                                <td></td>
                                    <td>{{flight_info.flightDate}}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td> {{flight_info.fromTime}}</td>
                                    <td></td>
                                    <td>{{flight_info.toTime}}</td>
                                </tr>

                            </table>
                            <el-select v-model="value"  placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                >
                                </el-option>
                            </el-select>
<!--                            <el-button type="primary" size="mini" >经济舱￥{{flight_info.economyPrice}}</el-button>-->
<!--                            <el-button type="success" size="mini">头等舱￥{{flight_info.headPrice}}</el-button>-->
                        </div>
<!--                        <div>{{flightNo}}</div>-->
                        <div>
<!--                            {{this.GroupList.length}}--><el-button type="primary" @click="add()"> 增加乘客</el-button>
                          <div v-for="(item, index) in GroupList" :key="index">
                              <div>乘客{{index+1}}</div>
                            <el-form ref="item"  inline="true" :model="item" label-width="80px">
                                <el-form-item label="姓名"   prop="passengerName" label-width="80px" :rules="[
                              { required: true, message: '请输入姓名', trigger: 'blur' },
                                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'  }
                                  ]">
                                    <el-input v-model="item.passengerName"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号"  prop="passengerTel" :rules="[
                              { required: true, message: '请输入手机号', trigger: 'blur' },
                                    { min:11, max: 11, message: '长度11 个字符', trigger: 'blur'  }
                                  ]">
                                    <el-input v-model="item.passengerTel"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证" prop="passengerIdcard" :rules="[
                                   { required: true, message: '请输入身份证', trigger: 'blur' },
                                    { min:18, max: 18, message: '长度18个字符', trigger: 'blur'  }
                                  ]">
                                    <el-input v-model="item.passengerIdcard"></el-input>
                                </el-form-item>
                                <el-button v-if="index!=0" @click="remove(index)">删除</el-button>
                            </el-form>
                          </div>

                        </div>
                        <div>
                           <span style="font-size: 20px;float: right"> 费用总计 <span style="color: red">￥{{pay}}</span><el-button type="success" @click="buy">确认下单</el-button></span>
                            <br>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </el-container>
</template>
<script>
     export default {
         data() {
             return {
                 flightNo: this.$route.query.flightno,
                 flight_info: {},
                 options: [{
                     value: '',
                     label: '',
                 }
                 ],
                 value: '',
                 status:null,
                 GroupList: [
                     {
                         passengerName: '',
                         passengerTel: '',
                         passengerIdcard: ''
                     }

                 ]
             }
         },
        methods:{
             buy(){
                 let _this=this
                 if(_this.value==_this.flight_info.economyPrice){
                     _this.status=1
                 }else if(_this.value==_this.flight_info.headPrice){
                     _this.status=2
                 }
                 const tokenStr=window.sessionStorage.getItem('token');
                 this.$http(
                     {
                         method:"post",
                         url:'/item/order/insert/'+this.flight_info.flightNo+'/'+this.status,
                         data:{
                             token:tokenStr,
                             users:this.GroupList,
                             pay:this.pay
                         },
                         headers:{"Authorization":tokenStr}
                     })
                     .then(function (res) {
                         if(res.status==200){
                             window.console.log(res)
                             _this.$message.success("购买机票成功")
                         }
                     })
                     .catch(function (error) {
                         window.console.log(error)

                     })

             },
            add(){
                 this.GroupList.push({
                     passengerName: '',
                     passengerTel: '',
                     passengerIdcard: ''
                 })
            },
            remove(index){
                this.GroupList.splice(index,1)
            },
           tranDate(standard_time){

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
           init(){
              let _this=this
              this.$http.get('/item/flight/flightInfo/'+this.flightNo
              ).then(function (res) {
                 if(res.status==200){
                    window.console.log(res.data)
                     _this.flight_info={}

                     _this.options[0]={}
                     _this.options[1]={}

                    _this.flight_info.flightNo=res.data.flightNo
                    _this.flight_info.flightName=res.data.flightName
                     _this.options[0].label='经济舱￥'+res.data.economyPrice
                     _this.options[0].value=res.data.economyPrice
                     _this.options[1].label='头等舱￥'+res.data.headPrice
                     _this.options[1].value=res.data.headPrice
                    _this.flight_info.economyPrice=res.data.economyPrice
                    _this.flight_info.economyNum=res.data.economyNum
                    _this.flight_info.headPrice=res.data.headPrice
                    _this.flight_info.headNum=res.data.headNum
                    _this.flight_info.flightDate=_this.tranDate1(res.data.flightDate)
                    _this.flight_info.fromCity=res.data.fromCity
                    _this.flight_info.fromTime=_this.tranDate(res.data.fromTime)
                    _this.flight_info.toCity=res.data.toCity
                    _this.flight_info.toTime=_this.tranDate(res.data.toTime)
                 }
              }).catch(function (error) {
                 window.console.log(error)
                 _this.$message.error("服务器错误")
              })
           }
        },
         created(){
            this.init()
         },
         computed:{
             pay(){
                 let pay=this.value*this.GroupList.length
                 return pay

             }
         }
     }
</script>
<style scoped>
    .voyage_cards{
        width:1280px;
        margin: 0 auto;

    }
    .voyage_display{

        background-color: #F0F1F3;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
    }
</style>