<template>
    <keep-alive>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>
            <div>
                <div class="product_name"> {{product_name}}  </div>
                <!--{{os_specs}}-->
                <div class="configure">
                     <span class="configure_title"> 规格配置</span>
                      <el-select v-model="configure" placeholder="请选择">
                          <el-option  v-for="item in configures"  :key="item.value"  :label="item.label"
                            :value="item.value">
                          </el-option>
                      </el-select>
                </div>

                <hr>
<!--                 {{spec[0].attributeName}}-->
                <div class="configure">
                    <span class="configure_title">操作系统</span>
                    <span class="configure_os">
            <el-select v-model="current_os" placeholder="请选择">
              <el-option
                      v-for="item in oss"
                      :key="item"
                      :label="item"
                      :value="item"
              ></el-option>
            </el-select>
          </span>

                    <el-select v-model="current_os_version" placeholder="请选择">
                        <el-option
                                v-for="item in os_specs[current_os]"
                                :key="item"
                                :label="item"
                                :value="item"
                        ></el-option>
                    </el-select>

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

                <div class="configure">
                    <span class="configure_title">购买数量</span><el-input-number v-model="buy_nums" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                  <div class="block" style="width: 60%;margin: 20px">
                    <span class="demonstration">购买时长</span>
                   
                      <el-slider v-model="hire_time" :step="1" :format-tooltip="timestepToolTip" show-stops :max="41" :min="1" ></el-slider>

                      {{hire_time}}---{{pay}}---{{hire_time_pa}}
                </div>
                </div>
                <div class="info_form">
                    <div class="configure_title"> 请输入个人信息</div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login_form">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部门" prop="dept">
                            <el-input v-model="ruleForm.dept"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group class="sex" v-model="ruleForm.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="手机号" prop="tel">
                            <el-input v-model="ruleForm.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="用途" prop="purpose">
                            <el-input type="textarea" v-model="ruleForm.purpose"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="order_btn">
                   <span>费用合计：</span><span style="text-decoration:line-through">￥{{pay}} </span> <span style="color:red">￥{{topay}}</span><el-button  type="primary" @click="buy">确认订单</el-button>
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
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
                if(this.current_os===''||this.current_os_version===''){
                    this.$message.error("请选择操作系统版本")
                }else{
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
                 return pay;
             },
             hire_time_pa(){
                 return this.toolmsg[this.hire_time_pay]
             }
        }
    }
</script>

<style scoped>
    .product_name{
        font-size: 20px;
        margin: 50px 0 0 80px;
        font-weight: bold;
    }
    .configure{
        width: 90%;
        height: 150px;
        margin: 20px auto 0 80px;
        padding-top: 20px;
        padding-left: 30px;
        border: 1px solid ;
    }
    .configure_title{
        margin-right: 20px;
    }
    .configure_os{
        margin-right: 30px;
    }
    .login_form{
        width: 40%;
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
        width: 60%;
        position: absolute;
        top:30%
    }
    .order_btn{
        width: 90%;
        text-align: right;
        margin: 20px auto 0 80px;
        padding: 20px 40px 10px 30px;
        border: 1px solid ;
    }
     .el-button{
         margin-left: 20px;
     }


</style>