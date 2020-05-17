<template>
  <el-container style="display: block" >
    <div class="home-container" style="background-color: #D7D7DB">
      <div class="main">
        <div>

          <div class="voyage_display">
            <div class="voyage_cards">

               <div style="height: 400px;width: 30%;border:1px blue solid;padding: 30px">
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
                           <el-button type="primary" style="width: 200px" @click="search">搜索</el-button>
                       </el-form-item>
                   </el-form>

               </div>
              <div style="height: 400px;width: 70%;">
                <img src="../../assets/images/home/voyage.png" style="width: 100%;height: 100%">
              </div>

            </div>
          </div>


          <div style="">
            <div class="advs">
              <div class="adv_title">
                  <span class="adv_content1">
                     <span style="text-align: center"> 机票服务</span>
                     <span style="text-align: center"> 多重</span>
                    <hr style="opacity:0.4;margin: 0 auto;text-align: center;width:85px;height: 0.1px">
                    <span style="font-size:38px;margin:0 auto;width:80px;text-align:center;letter-spacing:2px;color: #FCD131">
                       保障
                    </span>
                  </span>

                <span class="adv_content2">
                      <span class="adv_image">
                      <img src="../../assets/images/home/dichengben.png" alt="">
                          </span>
                    <span class="adv_content_title1"> 价格放心</span>
                    <span class="adv_content_title2"> 价格透明统一，退改标准收费</span>
                  </span>
                <span class="adv_content2">
                    <span class="adv_image">
                      <img src="../../assets/images/home/xinziyuan.png" alt="">
                    </span>
                        <span class="adv_content_title1"> 出行安全</span>
                    <span class="adv_content_title2"> 全力保障出行风险计师预警</span>
                  </span>
                <span class="adv_content2">
                      <span class="adv_image">
                    <img src="../../assets/images/home/gengzhuanye.png" alt="">
                          </span>
                    <span class="adv_content_title1"> 应急救援</span>
                    <span class="adv_content_title2"> 突发意外情况提供紧急支援</span>
                  </span>
                <span class="adv_content2">
                      <span class="adv_image">
                    <img src="../../assets/images/home/gongjinbu.png" alt="">
                     </span>
                    <span  class="adv_content_title1"> 联动保障</span>
                    <span  class="adv_content_title2"> 航班取消或延误可免费取消</span>
                  </span>

              </div>

            </div>

          </div>
          <div class="mid">
            <div class="iblock"></div>
            <div class="blocks">
              <div class="block">
                <img src="../../assets/images/home/bianzu7.png" class="block_img" alt="">
                <span class="block_title_info"></span>
                <div class="block_inners">

                </div>
              </div>
              <div class="block">
                 <img src="../../assets/images/home/bianzu8.png" class="block_img" alt="">
                <span class="block_title_info"></span>
                <div class="block_inners">
                </div>
              </div>
              <div class="block">
                <img src="../../assets/images/home/bianzu9.png"  class="block_img" alt="">
                <span class="block_title_info"></span>
                <div class="block_inners">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div style="width: 1280px;margin: 0 auto;">
        <el-card class="box-card" >
            <div slot="header" class="clearfix">
                <span style="font-weight: bold;font-size: 25px">公告</span>
            </div>
            <div v-for="(no,index) in notice" :key="index" style="margin-bottom: 10px" >
<!--                {{'列表内容 ' + o }}-->
                <span style="display: inline;width: 10px">{{index+1}}</span>
                <span style="display: inline;width: 70%;margin-left:10px">{{no.content}}</span>
                <span style="display: inline;width: 20%;float: right">{{no.time}}</span>

            </div>
        </el-card>
            <el-card class="box-card" style="margin-left: 50px">
                <div slot="header" class="clearfix">
                    <span style="font-weight: bold;font-size: 25px">推荐航班</span>
                </div>
                <span v-for="(no,index) in nullRate" :key="index" style="margin-bottom: 20px;display:inline;width: 300px;padding:0 50px;magin-bottom:20px" @click="buy(1,no.flightNo)">
                  {{no.fromCity}}-->{{no.toCity}}

                    ({{no.flightDate}})


                </span>
            </el-card>
        </div>

      <div style="background-color:#D7D7DB;padding-bottom:10px">
        <div class="service">
          <span class="service_title">常见问题</span>
          <el-tabs v-model="home_reg_activeName" class="home_question">
            <el-tab-pane label="注册与登录" name="home_reg_first" class="home_reg_first">
              <div class="service_contents">
                <table style="width:100%">
                  <tr>
                    <td>
                      <span class="service_querstion">注册账号都需要那些条件？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向您的邮箱或者手机号发送验证码，只有验证通过才能购买机票。</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">收不到邮箱验证码怎么办？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">
                          可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。
                          如果任然无法收到验证码，您可尝试切换手机号进行验证。
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">收不到短信验证码怎么办？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">
                            可能会由于手机停机、存储信息已满、信号网络延迟等原因没有及时收到验证码，这时请检查您的手机，保证手机可正常接收短信后，尝试重新获取验证码。
                            如果仍然无法收到验证码，您可尝试换用邮箱进行验证。
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>

          </el-tabs>

        </div>

      </div>

    </div>
  </el-container>
</template>

<script>
  import{ globalBus }from'../../../globalBus';


export default {
  components:{

  },
  data() {
    return {
        notice:[],
        nullRate:[],
        form: {
            fromCity: '北京',
            toCity:'太原',
            flightDate:''
        },
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
            },
            value:''
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
                {required: true, message: '请输入航班日期', trigger: 'blur'}
            ],
        },
      home_reg_activeName: "home_reg_first",
      email:"E-mail:service@45iot.com",
      isLogin:false,
    };
  },
  methods: {
      buy(index, row) {
          window.console.log(index, row);
          this.$router.push(
              {
                  path:'/buyticket',
                  query:{flightno:row}
              }
          )
      },
      search(){
          this.$refs.ruleForm.validate(valid=>{
              if(!valid){
                  this.$message.error("请填写查询信息")
              }else {
                  this.$router.push({
                      path:"flights",
                      query:this.form
                  })
              }
          })


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
      tranDate1(standard_time) {

          if (standard_time == null) {
              return null
          }

          let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000Z', ''));
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
    buy_aikit() {

      this.$router.push(
              { path: '/buy',
                query:{
                  name:'AI KIT',
                  good_id: 1682320,
                }
              }
      );

    },


    //进入订单列表
    go_orderList() {
      this.$router.push(
              { path: '/order/orderList',
                query:{
                  user_id: 1,
                }
              }
      );

    },
    //进入实例列表
    go_instanceList(){
      this.$router.push(
              { path: '/',
                query:{
                  user_id: 1,
                }
              }
      );
    },
    go_login(){
      // this.$router.push(
      //     { path: '/login',
      //     }
      // );
      this.isLogin=true;
    },
     copy() {
     // var _this = this;
     // var clipboard = new Clipboard(".btn"); //单页面引用
      var clipboard = new this.Clipboard(".btn"); //在main.js中引用
      clipboard.on("success", e => {
        // 释放内存
        clipboard.destroy();
        window.console.log(e)
      });
      clipboard.on("error", e => {
        // 不支持复制
        window.console.log(e)
        this.Message({
          message: "该浏览器不支持自动复制",
          type: "warning"
        });
        // 释放内存
        clipboard.destroy();
      });
    },
    ii(){
     //  window.console.log("ddd")
        globalBus.$emit('login_dialog1',true);
     //  this.$emit('app-header:go_login',true)
       this.$emit('incrl')

     //  this.$emit('header:kk')
     //  this.$emit('header:go_login',false)
      this.$refs.ff.go_login();
     //  this.$parent.$emit('go_login',true)
     //  window.console.log("fff")
    },
      free_tiyan(){
          const tokenStr=window.sessionStorage.getItem('token');

          if(!tokenStr){
              this.$message.error("请先登录！")
              this.ii()
          }else{
              this.$router.push({
                  path:'instance',

              })
          }
      },
      getNotice(){
          this.$http.get("item/notice/getNotice").then(res=>{
            this.notice=  res.data
          })
      },
      getNullRate(){
          this.$http.get("item/data/nullrate").then(res=>{

              this.nullRate=  res.data

          })
      },
      getHotCity(){
          this.$http.get("item/data/hotcity").then(res=>{

              this.form.fromCity=  res.data.startCity
              this.form.toCity=  res.data.endCity

          })
      }
  },
  created(){
  // this.$emit('header',false);
    //this.$emit('footer',false);
   // this.ii()
      this.getNotice()
      this.getNullRate()
      this.getHotCity()
  },
   // watch:{
   //
   //
   //      num1(){
   //          window.console.log("111")
   //          let _this=this
   //           _this.login_dialog1=true
   //          alert("111")
   //          window.console.log("111")
   //     }
   //    },

};

</script>
<style scoped>
div {
  /*margin: 0;*/
  /* padding: 0; */
}


.mid {
  /*margin-left: 2px;*/
  /*margin-right: 2px;*/
  border: 1px solid;
  text-align: center;
  /*background-color: #f5f5f5;*/
  background-image: url("../../assets/images/home/bj_pic1.png");
  background-size: 100% 100%;
  height: 450px;

}

.block {
  display: inline-block;
  justify-content: space-between;
  width: 27%;
  margin-top: 15px;
  color: white;
}

.block_img_border{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid red;
  margin: 0 auto;
  align-items:center
}
.block_img{
    width:70px ;
}
.iblock {

  color: white;
  margin-top: 35px;
  font-size: 36px;
  width: 50%;
  /*margin-left: 18.8%;*/
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
  text-align: left;

}

.blocks {
  text-align: center;
  display: inline-flex;
  justify-content: space-around;
  /*width: 60%;*/
  width: 1134px;
  margin-top: 70px;
}

.block_title_info {
  margin-top: 10px;
  display: block;
  font-size: 22px;
}

.block_inner {
  display: block;
  margin: 0 0 10px 0;
  width: 50%;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: white;
}

.block_inners {
  margin-top: 15px;
  margin-bottom: 45px;
  color: white;
  font-size: 15px;
}

span {
  display: block;
}
.home_reg_icon .el-step__head.is-finish{
 color:white;

}
.home_reg_icon >>> .el-step__icon{
   background: #F0BD2E;
  color: white;
  width: 16px;
  height: 16px;
  font-size: 8px;
}
.home_reg_icon >>> .el-step__head.is-finish{
  border-color: grey;
}
/*img {*/
/*  !*height: 100%;*!*/
/*}*/

.home_first {
  display: flex;
  background-color: #e9f1f2;
  width: 100%;

}

.home_first_left {
  width: 50%;
}

.home_first_left_top {
  height: 10%;
  display: inline;
}

.home_first_right {
  width: 50%;
}

.first_font {
  font-size: 35px;
  color: #6173c4;
  margin: 10px auto;
  width: 75%;
}

.advantages_title {
  width: 50%;
  margin: 40px auto 0 auto;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.advs{
    /*box-shadow:red  0 0 50px 0 ;*/
    box-shadow:2px 2px 10px #909090;
    height: 170.88px;
     background-color: white;
}
.adv_title{
  /*width: 62.4%;*/
  width: 1280px;
  margin: 0 auto;
  display: flex;
}
.adv_content1{
  background-color: #3254DC;
  width: 170.88px;
  height: 170.88px;
  color: white;
  padding: 2.4%  ;
  display:inline-block;
  font-size: 23px;
}
.adv_content2{
    display:inline-block;
    width: 20%;
  margin-left: 13px;
}
.adv_content2 img{
    width: 50px;

}
.adv_content_title1{
     text-align: center;
    font-size: 18px;
}
.adv_content_title2{
    text-align: center;
    margin: 0 auto;
    font-size: 14px;
     width: 160px;
}
.adv_image{
    width: 53.7px;
    margin: 23px auto 13px auto;
}
.advantages {
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.adv_imgs_bottom {
  /* align-items: center; */

  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.adv_imgs {
  /*align-items: center;*/
  /*width: 20%;*/
  /*position: relative;*/
  text-align: center;
  vertical-align: middle;
}

.imgs {
  margin: 20px;
  height: 65px;
  /*position: absolute;*/
  /*left:25%;*/
  vertical-align: middle;
}

.adv_content {
  font-size: 25px;
  margin: 10px 50px 60px 50px;
  width: 20%;
  /* text-align: center; */
  justify-content: space-around;
}

.product_show {
  background-color: #d0e2f2;
  padding-top: 20px;
  padding-bottom: 20px;
}

.el-col {
  margin-bottom: 20px;
}

.u242_img {
  border-width: 0px;
  left: 0px;
  top: 0px;
  width: 26px;
  height: 26px;
}

.card_span {
  margin-left: 10px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  color: rgba(102, 102, 102, 0.874509803921569);
}


.el-card {
  /*box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04) !important;*/
  /*box-shadow: none;*/
}

.el-footer {
  /*background-color: rgb(58, 58, 58);*/
  background-color: #101C3D;

}

.el-col {
  height: 100%;
}

.footer_block {
  margin-top: 60px;
  height: 60%;
  width: 100%;
  color: white;
  /*border-left: 2px solid grey;*/
  font-size: 21px;
}
.footer_block_title{
  margin-left:30%
}
.footer_block_content{
  margin-left:30%;
  font-size:15px;
  color:white;
  margin-top: 8%;
}
.footer_img{
  margin-top: 50px;
   margin-left: 18.8%;
}
.footer_title_ours{
  color: white;
  margin-left: 18.8%;
  margin-top: 60px;
}
.footer_title_email{
  color: #7785AC;
  display: inline;
  font-size: 12px;
  margin-left: 18.8%;
  margin-right: 0;
  margin-top: 10px;
 width: 40%;
}
.footer_title_email2{
  color: #7785AC;
  display: inline-block;
  font-size: 12px;
  margin-left: 32%;
  margin-right: 0;
  margin-top: 10px;
  width: 40%;
}
.footer_footer{
   color: white;
  font-size: 10px;
  background-color: #0B152E;
  height: 90px;
  line-height: 90px;
  padding-left: 19.2%;
}
.item{
  width: 62.5%;
  margin: 0 auto;
  text-align: left;
}
.el-cols{
  width: 40%;
}
a:link{
  color: #dddddd;
  text-decoration: none;
}
.footer_input{
  width: 20%;
  /*margin-left: 16%;*/
  margin-top: 5px;
  background-color: #0aa0e8;
}
.footer_input >>> .el-input__inner{
  background-color: #0B152E;
  border: none;
  border-radius: 0px;
  color: white;
}
.item >>> span{
  display: inline-block;
  margin-left: 12%;
}
.item >>> img{
  width: 25px;
  margin-left: 8px;
}

.service {
  background-color: #d7d7db;
  text-align: center;
  padding-bottom: 1%;
  padding-top: 2%;
}

.service_title {
 font-weight: bold;
  text-align: left;
  /*width: 100%;*/
  /*margin-left: 18.8%;*/
    width: 1280px;
    margin: 0 auto;
  font-size: 36px;
}
.home_question{
    /*margin-left: 17%;*/
    width: 1340px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}

.service_index {
  text-align: left;
  font-size: 21px;
  padding-left: 6%;
  margin-top: 3%;
  margin-bottom: 1%;
}

.service_contents {
  width: 85%;
  margin: 0 2%;
  background-color: #d7d7db;
    height: 240px;
}

.service_querstion {
  font-weight: bold;
  text-align: left;

}
.service_querstion_p{
    text-align: left;
    font-size: 12px;
    margin-top: 10px;
    width: 1280px;

}

.home_reg {
  text-align: center;
  background-color: #404964;
  font-size: 18px;
  padding-top: 2%;
  padding-bottom: 5%;
  background-image: url("../../assets/images/home/bg_logo.png");
  background-size: 400px 360px;
  background-repeat: no-repeat;
  /*opacity: 0.9;*/
  background-position: 75%;

}



.home_reg_img {
  align-content: center;
  margin: 0 auto;
  width: 634px;
  /*opacity: 0.5;*/
  text-align: center;

  /*background-color: #404964;*/
}
.home_reg_img1 {
  display: flex;
  margin-top: 40px;
  justify-content: space-around;

}
.home_reg_img1 img {
    width: 36px;
}
.home_reg_img2 {
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
  justify-content: space-around;
  color: white;
  font-size: 18px;
}

.home_reg_title{
  font-size: 36px;
  color: white;
  /*width:20%;*/
  /*margin-left: 18.8%;*/
    width: 1280px;
    margin: 0 auto;
  text-align: left;
}
.home_reg_introduce  {

  color: white;
  font-size: 30px;
    width: 634px;
    margin: 30px auto 0 auto;
}

.home_reg_btn {
  margin-top:45px;
  background-color: #3254DC;
  border: 1px solid #3254DC;
    width: 180px;
    height: 50px;
    font-size: 18px;
  /*color: white;*/
  /*cursor: pointer;*/
}
.image{
   cursor: pointer;
 }
.card_div{
  cursor: pointer;
}
  .btn{
    font-size: 8px;
  }

</style>

<style  scoped>
  /*导航栏*/
  .el-header {
    background-color: #101c3d;
    color: white;
    line-height: 60px;


  }

  .logo{
    width: 64px;
    height:64px;
    margin-top: 15px;
    /*margin: auto auto auto 0;*/
  }
  .nav_layout{
    display: flex;
    justify-content: space-between;
    line-height: 6;

    width: 62.5%;
    margin:0 auto;

  }
  .nav_layout_right{
    display: flex;
    align-items: center;

  }
  .nav_font{
    opacity: 0.8;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
  }
  .nav_font:hover{
    opacity: 1;

  }
  .nav_dropdown_font{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    opacity: 0.8;
    color: #FFFFFF;
  }
  .nav_dropdown_font:hover{
    opacity: 1;
  }
  .nav_a{
    text-decoration:none;
    color:white;
  }
  .button_font{
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
  }

  .nav_item{
    margin-left:20px ;

  }
  .head_frame {
    border: 1px solid rgba(228, 231, 235, 0.2);
    height: 44px;
    width: 44px;
    border-radius: 22px;
    border-radius: 22px;
  }
  .el-button--primary{
    background-color: #3254DC;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background-color: #5171F0;
  }
  .el-dropdown-menu__item{
    line-height: 0;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    /* background-color: #ecf5ff; */
    color: #66b1ff;
  }

  /*产品展示区*/
  .block_title{
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #16161D;
    font-weight: bold;
  }
  .product_display{

    background-color: #F0F1F3;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
  }
  .product_display span{
    display: inline;
  }
  .product_cards{
    width:1280px;
    margin: 0 auto;
     display: flex;
  }
  .el-col {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .el-card{
    margin-top: 20px;
    margin-bottom:10px ;

  }
  .card_image{
    height: 12vw;

    width: 100%;
    cursor: pointer;
    overflow: hidden;
    display: block;
  }
  .card_title{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #16161D;
    line-height: 20px;
  }
  .card_content{
    margin-top: 20px;
    height: 40px;
    width: 100%;
    font-family: PingFangSC-Regular;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow:ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #16161D;
    line-height: 20px;
  }
  .card_tags{
    /*margin-top: 20px;*/
    height: 55px;
  }
  .card_tag{

    background: #F0F1F3;
    border-radius: 3px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #606879;
  }
  .card_labels{
    margin-top: 20px;
  }
  .card_label{
    margin-left: 5px;

    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #16161D;
    line-height: 14px;
  }
  .card_hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card_div{
    cursor: pointer;
  }

  .card_left{
    width: 90%;
  }
  .card_right{
    margin-left: auto;

    width: 90%;
  }
  .card_middle{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
  .el-pagination {
    text-align: center;

  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #F0F1F3;
  }



  @media (max-width: 768px) {
    .nav_layout {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }

    .product_cards {
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
    }

    .card_left {
      width: 100%;
    }

    .card_right {
      width: 100%;
    }

    .card_middle {
      width: 100%;
    }

    .card_image {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      .nav_layout {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      .product_cards {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
      }

      .card_left {
        width: 100%;
      }

      .card_right {
        width: 100%;
      }

      .card_middle {
        width: 100%;
      }

      .card_image {
        width: 100%;
        height: auto;
      }


    }
  }
  .el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{
      -webkit-box-shadow:  5px 5px 5px   5px  rgba(0,0,0,0.3);
      box-shadow: 5px 6px 10px  5px rgba(0,0,0,0.3);
  }
</style>
<style>
    .el-tabs__item{
        font-size: 16px !important;
        /*border: 1px solid red;*/
        /*border-bottom: 44px solid #3254DC;*/
        /*border-left: 30px solid #3254DC;*/
        /*border-right: 30px solid transparent;*/
        /*color: white;*/
    }

</style>
<!--<style>-->
<!--  .el-input__inner{-->
<!--    background-color: #0aa0e8;-->
<!--  }-->
<!--</style>-->
<!--<style scoped >-->
<!--  /*导航栏*/-->
<!--  .el-header {-->
<!--    background-color: #101c3d;-->
<!--    color: white;-->
<!--    line-height: 60px;-->

<!--  }-->
<!--  .logo{-->
<!--    width: 64px;-->
<!--    height:64px;-->
<!--    margin-top: 15px;-->
<!--    /*margin: auto auto auto 0;*/-->
<!--  }-->
<!--  .nav_layout{-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    line-height: 6;-->
<!--    /*padding-left: 100px;*/-->
<!--    /*padding-right: 150px;*/-->

<!--  }-->
<!--  .nav_layout_right{-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .nav_font{-->
<!--    opacity: 0.8;-->
<!--    font-family: PingFangSC-Medium;-->
<!--    font-size: 16px;-->
<!--    color: #FFFFFF;-->
<!--  }-->
<!--  .nav_font:hover{-->
<!--    opacity: 1;-->

<!--  }-->
<!--  .nav_dropdown_font{-->
<!--    font-family: PingFangSC-Regular;-->
<!--    font-size: 12px;-->
<!--    opacity: 0.8;-->
<!--    color: #FFFFFF;-->
<!--  }-->
<!--  .nav_dropdown_font:hover{-->
<!--    opacity: 1;-->
<!--  }-->
<!--  .nav_a{-->
<!--    text-decoration:none;-->
<!--    color:white;-->
<!--  }-->
<!--  .button_font{-->
<!--    font-family: PingFangSC-Medium;-->
<!--    font-size: 16px;-->
<!--    color: #FFFFFF;-->
<!--  }-->

<!--  .nav_item{-->
<!--    margin-left:20px ;-->

<!--  }-->
<!--  .head_frame {-->
<!--    border: 1px solid rgba(228, 231, 235, 0.2);-->
<!--    height: 44px;-->
<!--    width: 44px;-->
<!--    border-radius: 22px;-->

<!--  }-->
<!--  .el-button&#45;&#45;primary{-->
<!--    background-color: #3254DC;-->
<!--  }-->
<!--  .el-button&#45;&#45;primary:focus, .el-button&#45;&#45;primary:hover {-->
<!--    background-color: #5171F0;-->
<!--  }-->
<!--  .el-dropdown-menu__item{-->
<!--    line-height: 0;-->
<!--  }-->
<!--  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {-->
<!--    /* background-color: #ecf5ff; */-->
<!--    color: #66b1ff;-->
<!--  }-->

<!--  /*产品展示区*/-->
<!--  .block_title{-->
<!--    font-family: PingFangSC-Semibold;-->
<!--    font-size: 23px;-->
<!--    color: #16161D;-->
<!--    font-weight: bold;-->

<!--  }-->
<!--  .product_display{-->
<!--    background-color: #F0F1F3;-->
<!--    padding-top: 20px;-->
<!--    padding-bottom: 20px;-->
<!--  }-->
<!--  .el-col {-->
<!--    margin-bottom: 10px;-->
<!--    margin-top: 20px;-->
<!--  }-->
<!--  .el-card{-->
<!--    margin-top: 20px;-->
<!--    margin-bottom:10px ;-->
<!--  }-->
<!--  .card_image{-->
<!--    height: auto;-->
<!--    width: 100%;-->
<!--    cursor: pointer;-->
<!--  }-->
<!--  .card_title{-->
<!--    font-family: PingFangSC-Semibold;-->
<!--    font-size: 20px;-->
<!--    color: #16161D;-->
<!--    line-height: 20px;-->
<!--  }-->
<!--  .card_content{-->
<!--    margin-top: 20px;-->
<!--    height: 40px;-->
<!--    width: 90%;-->
<!--    font-family: PingFangSC-Regular;-->
<!--    display: -webkit-box;-->
<!--    -webkit-box-orient: vertical;-->
<!--    -webkit-line-clamp: 2;-->
<!--    text-overflow:ellipsis;-->
<!--    overflow: hidden;-->
<!--    font-size: 14px;-->
<!--    color: #16161D;-->
<!--    line-height: 20px;-->
<!--  }-->
<!--  .card_tags{-->
<!--    margin-top: 20px;-->
<!--    height: 55px;-->
<!--  }-->
<!--  .card_tag{-->

<!--    background: #F0F1F3;-->
<!--    border-radius: 3px;-->
<!--    border-radius: 3px;-->

<!--    font-family: PingFangSC-Regular;-->
<!--    font-size: 10px;-->
<!--    color: #606879;-->
<!--  }-->
<!--  .card_labels{-->
<!--    margin-top: 20px;-->
<!--  }-->
<!--  .card_label{-->
<!--    margin-left: 5px;-->

<!--    font-family: PingFangSC-Regular;-->
<!--    font-size: 12px;-->
<!--    color: #16161D;-->
<!--    line-height: 14px;-->
<!--  }-->
<!--  .card_hr{-->
<!--    margin-top: 10px;-->
<!--    margin-bottom: 10px;-->
<!--  }-->
<!--  .card_div{-->
<!--    cursor: pointer;-->
<!--  }-->
<!--  .el-pagination {-->
<!--    text-align: center;-->

<!--  }-->

<!--  .el-pagination.is-background .el-pager li:not(.disabled):hover {-->
<!--    color: #F0F1F3;-->
<!--  }-->
<!--  @media (min-width: 768px) {-->
<!--    .nav_layout{-->
<!--      /*display: flex;*/-->
<!--      /*justify-content: space-between;*/-->
<!--      /*line-height: 6;*/-->
<!--      padding-left: 16%;-->
<!--      padding-right: 150px;-->

<!--    }-->
<!--  }-->
<!--</style>-->
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
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 610px;
        height: 300px;
        display: inline-block;
    }
</style>