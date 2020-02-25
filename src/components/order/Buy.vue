
<template>
    <keep-alive>
    <el-container>
        <div class="home-container">

            <div class="buy_body">
                <div class="product_name">
                    <span style="width: 10px;height:32px;background-color:#5171F0 ;display: inline-block"></span>
                    <span> {{product_name}}</span>
                </div>
                <!--{{os_specs}}-->
                <div style="display: flex;justify-content:space-around;width: 100%;">
                    <div style="width: 100%">
                 <div class="configure" style="height: 130px">
                     <span class="configure_title"> 规格配置</span>
                      <div class="configure_content" >
                          <el-radio-group v-model="configure">
                              <el-radio-button label="标准版"></el-radio-button>
                          </el-radio-group>

<!--                      <el-select v-model="configure" placeholder="请选择">-->
<!--                          <el-option  v-for="item in configures"  :key="item.value"  :label="item.label"-->
<!--                            :value="item.value">-->
<!--                          </el-option>-->

<!--                      </el-select>-->
                      </div>
                </div>


<!--                 {{spec[0].attributeName}}-->
                <div class="configure" id="os_config" style="height: 165px;margin-top: 15px">
                    <span class="configure_title" >操作系统</span>
                    <div class="configure_content" >
                        <el-radio-group v-model="current_os">
                       <span style="display:inline-block" v-for="item in oss" :key="item">
                          <el-radio-button style="display:block"
                                              :key="item"
                                              :label="item"
                                              :value="item" >

                            </el-radio-button>

                           <el-select  v-bind:class="{isVisible:current_os!==item}"  style="display:block;width:200px;" v-model="current_os_version" placeholder="请选择">
                                <el-option
                                        v-for="i in os_specs[current_os]"
                                        :key="i"
                                        :label="i"
                                        :value="i"></el-option>
                            </el-select>

                       </span>

                        </el-radio-group>

                    <span class="configure_os">
<!--            <el-select v-model="current_os" placeholder="请选择">-->
<!--              <el-option-->
<!--                      v-for="item in oss"-->
<!--                      :key="item"-->
<!--                      :label="item"-->
<!--                      :value="item"-->
<!--              ></el-option>-->
<!--            </el-select>-->


          </span>
<!--            <el-select v-model="current_os_version" placeholder="请选择">-->
<!--                <el-option-->
<!--                      v-for="item in os_specs[current_os]"-->
<!--                      :key="item"-->
<!--                      :label="item"-->
<!--                      :value="item"></el-option>-->
<!--             </el-select>-->


                    </div>
                </div>
<!--                <div class="configure">-->
<!--                    <span class="configure_title">操作系统</span>-->
<!--                    <span  class="configure_os">-->
<!--                        <el-select v-model="oss" placeholder="请选择">-->
<!--                            <el-option  v-for="item in spec"  :key="item.id"  :label="item.attributeName"-->
<!--                                        :value="item.attributeName">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                        </span>-->
<!--                    <span v-if="oss==='linux'" class="configure_os">-->
<!--                        <el-select   v-model="ubuntus" placeholder="请选择">-->
<!--                            <el-option  v-for="item in data"  :key="item.id"  :label="item.spec[0].attributeValue"-->
<!--                                        :value="item.spec[0].attributeValue">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                        </span>-->
<!--                    <span v-if="oss==='Android'" class="configure_os">-->
<!--                        <el-select   v-model="androids" placeholder="请选择">-->
<!--                            <el-option  v-for="item in data"  :key="item.id"  :label="item.spec[0].attributeValue"-->
<!--                                        :value="item.spec[0].attributeValue">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                    </span>-->
<!--                </div>-->

                <div class="configure" style="height: 235px;margin-top: 15px">
                    <span class="configure_title">购买数量</span>
                    <div class="configure_content" >
                    <el-input-number v-model="buy_nums" @change="handleChange" :min="1" :max="1" label="描述文字"></el-input-number>

                  <div class="block" style="width:90%;margin-top: 20px">

                    <span class="configure_title">购买时长 <span style="margin-left:30px;font-weight:normal">{{ buy_time}}</span></span>

                      <el-slider v-model="hire_time" :step="1" :format-tooltip="timestepToolTip" show-stops :max="41" :min="1" ></el-slider>


                      </div>
                </div>
                </div>
                <div class="configure" style="height: 280px;margin-top: 15px;margin-bottom: 15px" id="config">
                    <div class="configure_title"> 请输入个人信息</div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login_form">
                        <div style="display: flex;margin-top: 20px">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部门" prop="dept">
                            <el-input v-model="ruleForm.dept"></el-input>
                        </el-form-item>
                        </div>
                        <div style="display: flex;margin-top: 0px">
                        <el-form-item label="性别">
                            <el-radio-group class="sex" v-model="ruleForm.sex" id="radiosex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="手机号"  style="margin-left:36.5%">
                            <el-input v-model="ruleForm.tel"></el-input>
                        </el-form-item>
                        </div>
                         <div style="width: 616px">
                        <el-form-item label="用途"  style="width: 100%;margin-top: 0px">
                            <el-input type="textarea" v-model="ruleForm.purpose"></el-input>
                        </el-form-item>
                         </div>
                    </el-form>
                </div>
<!--                <div class="order_btn">-->
<!--                   <span>费用合计：</span><span style="text-decoration:line-through">￥{{pay}} </span> <span style="color:red">￥{{topay}}</span><el-button  type="primary" @click="buy">确认订单</el-button>-->
<!--                </div>-->
                    </div>
<!--                    <div class="configure_configure">-->
<!--                        <span class="configure_title"> 当前配置</span>-->
<!--                        <div style="margin-top: 20px">-->
<!--                        <span class="config_title"> 规格配置 <span style="margin-left: 40px;color:black"> {{configure}}</span></span>-->
<!--                        <span class="config_title"> 操作系统<span style="margin-left: 40px;color:black"> {{current_os}} {{current_os_version}}</span></span>-->
<!--                        <span class="config_title"> 购买数量 <span style="margin-left: 40px;color:black"> {{buy_nums}}</span></span>-->
<!--                        <span class="config_title" style="margin-top: 40px;margin-bottom: 0px"> 配置费用 </span>-->
<!--                        <span class="config_title" style="margin-top: 10px;margin-bottom: 0px" > <span style="text-decoration:line-through;font-size: 24px;color: black">￥{{pay}} </span> </span>-->
<!--                        <span class="config_title" style="margin-top: 0px"> <span style="color:red;font-size:36px">￥{{topay}}</span></span>-->
<!--                        <span class="config_title"> <el-button  type="primary"  style="background-color: #3254DC;width: 180px;margin-left: 0"  @click="buy">立即下单</el-button></span>-->
<!--                    </div></div>-->

                </div>
            </div>
            <div class="configure_foot">
                 <div class="order_btn">
                      <span style="display: inline-block;text-align: right;width: 800px;height: 100px">
                          <span style="color:red;font-size:36px;display: block">  <span style="color:black;font-size:16px">配置费用:</span> ￥{{topay}}</span>
                          <span style="text-decoration:line-through;font-size: 24px;color: black;display: block;font-weight:bold">￥{{pay}} </span>
                      </span>

                     <div style="display: inline-block;line-height: 100px;
vertical-align:middle;">
<!--                     <span style="display: inline-block;line-height: 100px;height: 100px">-->
                     <el-button  type="primary"  style="background-color: #3254DC;width: 180px;margin-bottom: 35%;height:50px"  @click="buy">立即下单</el-button>
<!--                     </span>-->
                     </div>
                 </div>
            </div>
        </div>
    </el-container>
    </keep-alive>
</template>

<script>
    export default {
        data() {
            return {

                topay:'0.00',
                timestep:10,
                volume: 600,
                toolmsg: ['0 day','1 day', '2 days','3 days','4 days','5 days','6 days','7 days','8 days','9 days','10 days',
                    '11 days','12 days','13 days','14 days','15 days','16 days','17 days','18 days','19 days','20 days',
                    '21 days','22 days','23 days','24 days','25 days','26 days','27 days','28 days','29 days',
                    '1 month', '2 months','3 months','4 months','5 months','6 months','7 months','8 months','9 months','10 months','11 months',
                    '1 year','2 years','3 years','4 years','5 years',
                ],
                data:[],
                configure:'标准版',
                os_specs:{},
                oss:[],
                current_os:'',
                current_os_version:'',

                // vision:'标准版',
                // os:'请选择',
                // ubuntu:'请选择',
                // android: '请选择',
                hire_time: 10,
                hire_time_pay: '',
                buy_nums: 1,
               // pay:188,
                product_name: this.$route.query.name,
                good_id:this.$route.query.good_id,
                configures: [
                    {value: '选项1', label: '标准版'},

                ],

                ruleForm: {
                    name: '',
                    dept: '',
                    sex: '',
                    tel: '',
                    purpose:'',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    dept: [
                        { required: true, message: '请输入部门名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    tel:[
                        {required: true,message:"请输入手机号码",trigger:'blur'},
                        // {validator: checkMobile,trigger: 'blur'}
                    ],
                    purpose: [
                        { required: true, message: '请填写用途', trigger: 'blur' }
                    ]
                },


            }
        },
        methods: {
            handleChange(value) {
                window.console.log(value);
            },
            async getOs(){
              const {data:res}=await this.$http.get('/goodsitem/findAll',{params:{ goodsid:this.good_id}})
              // window.console.log(res)
              if(res.code==20000) {
                  this.$message.success("成功")
                  this.data = res.data;
                  window.console.log(this.data);
                  for (var i in this.data) {
                      var spec = JSON.parse(this.data[i].spec);
                      let spec_attr_name = spec[0].attributeName;
                      let spec_attr_val = spec[0].attributeValue;
                      if (spec_attr_name && spec_attr_val) {
                          if (this.os_specs[spec_attr_name] == undefined) {
                              this.os_specs[spec_attr_name] = [spec_attr_val];
                          } else {
                              if (this.os_specs[spec_attr_name].indexOf(spec_attr_val) == -1) {
                                  this.os_specs[spec_attr_name].push(spec_attr_val);
                              }
                          }
                      }
                  }

                  this.oss = Object.keys(this.os_specs)
              }else if(res==null||res.code!==20000){
                  this.$message.error("获取操作系统失败")
              }



            },
            // setOs(){
            //     if(this.product_name==="AI KIT"){
            //         this.os=this.os1;
            //     }else{
            //         this.os=this.os2;
            //     }
            // },
            buy(){
                this.$refs.ruleForm.validate(valid=>{
                    const tokenStr=window.sessionStorage.getItem('token');
                if(this.current_os===''||this.current_os_version===''){
                    this.$message.error("请选择操作系统版本")
                }else if(!valid){
                    this.$message.error("请完善个人信息")
                }else if(!tokenStr){
                        this.$message.error("请先登录！")
                        this.login_dialog1=true
                    }else {

                    this.$router.push(
                        {
                            name:'Confirm',
                            params:{
                                product_name:this.product_name,
                                os:this.current_os,
                                version:this.current_os_version,
                                info:this.ruleForm,
                                buy_nums:this.buy_nums,
                                hire_time:this.hire_time,
                                pay:this.pay,
                                configure:this.configure,
                                good_id:this.good_id
                            }
                        });
                }

                })
            },
            timestepToolTip(index) {
                this.hire_time_pay=index
                return this.toolmsg[index]

            }

        },
        created(){
           this.getOs();
           // this.setOs();
        },
        watch:{
            current_os(){
                this.current_os_version='';

            }
        },
        computed:{
          pay(){
                  let pay=0
                  let time = this.hire_time;
                   let buy_nums=this.buy_nums
                if(time>=0 && time<=29){
                    pay=10*time*buy_nums

                }else if(time>=30 && time<=40){
                   pay=40*(time-29)*buy_nums
                }else{
                     pay=10*365*buy_nums
                }
                 return pay.toFixed(2);
             },
            buy_time(){
              let buy_time=''
                let time = this.hire_time;

                if(time>=0 && time<=29){

                    buy_time=time+'天'
                }else if(time>=30 && time<=40){
                    buy_time=(time-29)+'月'
                }else{
                    buy_time='1年'
                }
                return buy_time;
            },
             hire_time_pa(){
                 return this.toolmsg[this.hire_time_pay]
             }
        }
    }
</script>

<style scoped>
    .buy_body{
       width: 1280px;
        margin: 50px auto 0 auto;
    }
    .product_name{
        font-size: 36px;

        margin: 50px auto 0 auto;

        font-weight: bold;
    }
    .configure{
        width: 100%;
        height: 200px;
        /*margin: 20px auto 0 80px;*/
        padding-top: 20px;
        padding-left: 30px;
        /*border: 1px solid ;*/
        background-color: #F0F1F3;
        margin-top: 30px;
    }
    .configure_title{
        margin-right: 20px;
        font-size: 18px;
        font-weight: bold;
        display: block;

    }
    .config_title{
        margin-right: 20px;
        font-size: 14px;
         margin-bottom: 20px;
        display: block;
        color: #606879;

    }
    .configure_content{
         margin-top: 20px;
    }
    .configure_content >>>.el-radio-button__inner{
        margin-right: 10px;
        /*background-color: #3FB560;*/
        width: 200px;
        color: black;
    }
    .configure_content >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        margin-right: 10px;
            background-color: #3FB560;
            color: white;
        border-color: #3FB560;
        width: 140px;
    }
    .configure_content >>> .el-radio-button is-active{
        background-color: #3FB560;
    }
    .configure_content >>> .el-select .el-input__inner:focus{
        border-color: #3FB560;
        background-color: #3FB560;
        color: white;
    }
    #os_config  >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        margin-right: 10px;
        background-color: #3FB560;
        color: white;
        border-color: #3FB560;
        width: 200px;
    }
    #os_config >>> .el-input__inner{
        width: 200px;
        /*background-color: #3FB560;*/
    }
    .configure_os{
        margin-right: 30px;
    }
    .login_form{
        width: 48%;
    }
    .info_form{
        width: 90%;

        margin: 20px auto 0 80px;
        padding-top: 20px;
        padding-left: 30px;
        border: 1px solid ;
    }
    .sex{
        display: flex;
        justify-content: space-around;
        width: 50px;
        position: absolute;
        top:30%
    }
    .order_btn{
        width: 1280px;
        text-align: right;
        height: 100px;
        margin: 0 auto;
        /*padding: 20px 40px 10px 30px;*/
        vertical-align: middle;
    }
    .configure_configure{
        width: 30.1%;
        background-color:#F0F1F3 ;
        height: 460px;
        margin-top: 30px;
        padding-top: 20px;
        padding-left: 30px;
    }
     .el-button{
         margin-left: 20px;
     }
    .block  >>> .el-slider__bar{
        background-color: #3FB560;
    }
    .block  >>> .el-slider__button{
        border: 2px solid #3FB560;
    }
    #config >>> .el-input__inner{
        /*background-color: red;*/
        width: 200px;
    }
    #config >>>  .el-input--suffix is-focus{
        width: 200px;
    }
    #radiosex >>> .el-radio__input.is-checked .el-radio__inner{
        /*background-color: red;*/

        background: #3FB560;
        border-color: #3FB560;
    }
    #radiosex >>> .el-radio__input.is-checked+.el-radio__label{
        /*background-color: red;*/

        color:#3FB560 ;
    }

    .configure >>> .el-form-item__label{
        /*background-color: red;*/
       text-align: left;
        width: 60px;
    }
    .configure >>> .el-textarea__inner{
        /*background-color: red;*/
        margin-left: -40px;
    }
    #config >>> .el-input__inner{
        /*background-color: red;*/
        width: 200px;
        margin-left: -40px;
        margin-right: 60px;
    }
    #config >>> .el-form-item__error{
        margin-left: -40px;
    }
    .configure_foot{
        width: 100%;
        height: 100px;
        box-shadow:2px 2px 13px #909090;
        margin-top: 40px;
    }
    .isVisible{
        visibility: hidden;
    }


</style>
<!--<style>-->
<!--    .configure >>> .el-popper[x-placement^=top] .popper__arrow{-->
<!--        border-top-color:white;-->
<!--    }-->
<!--    .configure >>> .el-popper[x-placement^=top] .popper__arrow::after{-->
<!--        border-top-color:white;-->
<!--    }-->
<!--    .el-popper[x-placement^=bottom] .popper__arrow{-->
<!--        border-bottom-color:white;-->
<!--    }-->
<!--    .el-popper[x-placement^=bottom] .popper__arrow::after{-->
<!--        border-bottom-color:white;-->
<!--    }-->
<!--</style>-->
