<template>
    <keep-alive>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>
            <div>
                <div class="product_name"> {{product_name}}  </div>


                <div class="configure">
                     <span class="configure_title"> 规格配置</span>
                      <el-select v-model="configure" placeholder="请选择">
                          <el-option  v-for="item in configures"  :key="item.value"  :label="item.label"
                            :value="item.value">
                          </el-option>
                      </el-select>
                </div>
                {{data}}
              {{data[0].spec}}
                <hr>
<!--                 {{spec[0].attributeName}}-->
                  {{spec}}
                {{product_name}}
<!--                <div class="configure">-->
<!--                    <span class="configure_title">操作系统</span>-->
<!--                    <span  class="configure_os">s-->
<!--                        <el-select v-model="oss" placeholder="请选择">-->
<!--                            <el-option  v-for="item in os"  :key="item.value"  :label="item.label"-->
<!--                                        :value="item.value">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                        </span>-->
<!--                        <span v-if="oss==='linux'" class="configure_os">-->
<!--                        <el-select   v-model="ubuntus" placeholder="请选择">-->
<!--                            <el-option  v-for="item in ubuntu"  :key="item.value"  :label="item.label"-->
<!--                                        :value="item.value">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                        </span>-->
<!--                        <span v-if="oss==='Android'" class="configure_os">-->
<!--                        <el-select   v-model="androids" placeholder="请选择">-->
<!--                            <el-option  v-for="item in android"  :key="item.value"  :label="item.label"-->
<!--                                        :value="item.value">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                    </span>-->
<!--                </div>-->
                <div class="configure">
                    <span class="configure_title">操作系统</span>
                    <span  class="configure_os">
                        <el-select v-model="oss" placeholder="请选择">
                            <el-option  v-for="item in spec"  :key="item.id"  :label="item.attributeName"
                                        :value="item.attributeName">
                            </el-option>
                        </el-select>
                        </span>
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
                </div>
                 {{value2}}
                <div class="configure">
                    <span class="configure_title">购买数量</span><el-input-number v-model="buy_nums" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                  <div class="block" style="width: 60%;margin: 20px">
                    <span class="demonstration">购买时长</span>
                    <el-slider
                            v-model="value2"
                            :step="1"
                            show-stops>
                    </el-slider>
<!--                      <el-slider v-model="orderForm.bandWidth" :step="50" :max="3050" :marks="marks" show-input :format-tooltip="formatTooltip" />-->

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
                   <span>费用合计：</span><span style="color: red">￥{{pay}}</span> <el-button  type="primary" @click="buy">确认订单</el-button>
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
                data:[],
                vision:'标准版',
                os:'请选择',
                ubuntu:'请选择',
                android: '请选择',
                hire_time: 10,
                buy_nums: 1,
                pay:'0.00',
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
                os_specs:[],

            }
        },
        methods: {
            handleChange(value) {
                window.console.log(value);
            },
            async getOs(){
              const {data:res}=await this.$http.get('/goodsitem/findAll',{params:{ goodsid:this.good_id}})
              window.console.log(res)
              if(res.code==20000) {
                  this.data=res.data
                  this.spec = JSON.parse(this.data[0].spec)
                  window.console.log(this.spec)
                  for(var index in this.data){
                      //获取规格
                      let specs = JSON.parse(this.data[index].spec)

                      if(specs[0].attributeName && specs[0].attributeValue){
                          //获取单个操作系统规格
                          let os_spec = {}
                          os_spec[specs[0].attributeName].push(specs[0].attributeValue)

                      }


                  }
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
                if(this.oss==='linux'){
                    this.$router.push(
                        {
                            name:'Confirm',
                            params:{
                                product_name:this.product_name,
                                os:this.oss,
                                edtion:this.ubuntus,
                                info:this.ruleForm,
                                buy_nums:this.buy_nums,
                                buy_times:this.value2+'周',
                                pay:this.pay,
                                configure:this.configure
                            }
                        });
                }else {
                    this.$router.push(
                        {
                            name:'Confirm',
                            params:{
                                product_name:this.product_name,
                                os:this.oss,
                                edtion:this.androids,
                                info:this.ruleForm,
                                buy_nums:this.buy_nums,
                                buy_times:this.value2+'周',
                                pay:this.pay,
                                configure:this.configure
                            }
                        });

                }

            },

        },
        created(){
           this.getOs();
           // this.setOs();
        },

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