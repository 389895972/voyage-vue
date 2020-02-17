<template>
    <el-header  class="header_head" height="100px">
        <div class="nav_layout">
            <img class="logo" src="../../assets/images/logo.png" alt />
            <div class="nav_layout_right">
                <div class="nav_item">
                    <a class="nav_a" @click="go_tutorial" href="#">
                        <span class="nav_font">我的教程</span>
                    </a>
                </div>

                <div class="nav_item">
                    <a class="nav_a"  @click="go_instance" href="#">
                        <span class="nav_font">控制台</span>
                    </a>
                </div>

                <div class="nav_item">
                    <a class="nav_a" @click="go_orderList" href="#">
                        <span class="nav_font">我的订单</span>
                    </a>
                </div>
                <div v-if="isLogin" class="nav_item">
                    <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="head_frame" src="../../assets/images/aikit.png" alt />
                </span>
                        <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                            <el-dropdown-item icon="el-icon-user-solid">
                                <a class="nav_a" href="#">
                                    <span class="nav_dropdown_font">个人中心</span>
                                </a>
                            </el-dropdown-item>
                            <hr style="opacity: 0.15;background: #FFFFFF;margin-left: 5px">
                            <el-dropdown-item icon="el-icon-switch-button">
                                <a href="#">
                                    <span class="nav_dropdown_font">退出登陆</span>
                                </a>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-else class="nav_item">
                    <el-button size="small"
                               type="primary"
                               @click="go_login">
                    <span class="button_font">
                        立即登陆
                    </span></el-button>
                </div>

            </div>
        </div>
        <div id="login_dia">
        <el-dialog
                title="登录"
                :visible.sync="login_dialog"
                width="380px"
                style="position: absolute">

            <hr style="margin: 0;width: 100%;">

            <div style="width: 300px;margin:0 auto">
                <div style="width: 100%;height:40px;vertical-align:middle;display:table-cell;">
                   <span style="font-size:16px;color: #606879;font-weight: bold;margin-right: 5px">手机登录</span> |
                   <span style="font-size:16px;color:#3254DC;font-weight: bold;margin-left: 10px"> 手机快捷登录</span>
                 </div>
                <el-select v-model="prefix" placeholder="请选择" >
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-input style="width: 200px;margin-left: 10px" v-model="login_tel" placeholder="请输入手机号"></el-input>
                <el-input style="width: 200px;" v-model="login_code" placeholder="请输入四位验证码"></el-input>
<!--                <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span" @click="countDown" >{{content}}</el-button>-->
                <el-button  :id="btn_code"   style="height: 44px"  @click="log_send_code(login_tel)" >{{content}}</el-button>

                <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="login(login_tel,login_code)" >立即登录</el-button>
                <div style="width: 80%;height:40px;vertical-align:middle;display:table-cell;">
                    <span style="font-size:14px;color: #606879;">没有账号？</span>
                    <span style="font-size:14px;color:#3254DC;cursor: pointer" @click="register"> 5秒注册</span>
                    <span style="font-size:14px;color:#FCA200;margin-left: 100px;cursor:pointer" @click="modify_pwd1"> 忘记密码？</span>
                </div>
                <div style="font-size: 16px;color: #606879;margin:0 auto 0 100px;width:100px"> 其他登录方式</div>
                 <div style="height: 60px">
                     <span style="display: inline-block;width: 120px"><hr></span> <img src="../../assets/images/home/weixin.png" @click="wx_login" alt="" style="margin-bottom: 30px;cursor:pointer"> <span style="display: inline-block;width: 100px"><hr></span>
                 </div>
            </div>
<!--            <div style="position: relative;top: -125px">123</div>-->
        </el-dialog>
            <el-dialog
                    title="微信扫码，安全登录"
                    :visible.sync="wx_login_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <span style="background-color:#E84948;color: white">{{}}</span>
                <div style="width: 200px;margin: 0 auto;">

                     <div style="width: 180px;height:180px;margin:20px auto 0 auto;border: 1px solid #E4E7EB;display: flex;align-items: center;justify-content: center;">
                         <img src="../../assets/images/aikit.png" alt="" style="width: 150px;height: 150px;">
                     </div>
                    <div style="width: 200px;height:40px;vertical-align:middle;margin:0 auto;text-align: center">
                        <span style="font-size:14px;color: #606879;margin-right: 5px">没有账号？</span>
                        <span style="font-size:14px;color:#3254DC;margin-left: 10px;cursor: pointer" @click="wx_to_login"> 5秒注册</span>
                    </div>
                    <div style="font-size: 16px;color: #606879;margin:10px auto 0 auto;width:100px"> 其他登录方式</div>

                    <div style="text-align: center;height: 40px">
                        <span style="margin-right: 10px">手机密码登录</span>|
                        <span style="margin-left: 10px">手机快捷登录</span>
                    </div>
                    <div style="height: 40px"></div>
                </div>

            </el-dialog>
            <el-dialog
                    title="重置密码"
                    :visible.sync="modify_pwd_dialog1"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:10px auto 0 auto">
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
<!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                    <el-button  :class="btn_code"   id="code_span2" @click="countDown" >{{content}}</el-button>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="to_modify2">下一步</el-button>
                    <div style="width: 200px;height:40px;vertical-align:middle;margin:140px auto 30px auto;text-align: center">
                        <span style="font-size:14px;color: #606879;margin-right: 5px">已有账号？</span>
                        <span style="font-size:14px;color:#3254DC;margin-left: 10px;cursor:pointer" @click="to_login1">马上登录></span>
                    </div>
                      <div style="height: 2px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="重置密码"
                    :visible.sync="modify_pwd_dialog2"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:10px auto 0 auto">
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入新密码"></el-input>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请重复新密码"></el-input>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="modify_password">确定</el-button>
                    <div style="width: 200px;height:40px;vertical-align:middle;margin:140px auto 30px auto;text-align: center">
                        <span style="font-size:14px;color: #606879;margin-right: 5px">已有账号？</span>
                        <span style="font-size:14px;color:#3254DC;margin-left: 10px;cursor:pointer" @click="to_login2">马上登录></span>
                    </div>
                    <div style="height: 2px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="注册登录"
                    :visible.sync="register_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:0 auto">
                    <span style="background-color:#E84948;color: white;width: 300px;height: 44px;display: inline-block;line-height:44px;text-align: center;font-size: 14px"><img
                            src="../../assets/icons/注意.png" alt="">{{tips}}</span>
                    <el-input style="width: 300px;" v-model="reg_username" placeholder="请输入用户名"></el-input>
                    <el-select v-model="prefix" placeholder="请选择" >
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input style="width: 200px;margin-left: 10px" v-model="reg_tel" placeholder="请输入手机号"></el-input>
                    <el-input style="width: 300px;"  :type="passw" v-model="reg_password" placeholder="请输入密码" prefix-icon="el-icon-lock"  ><i slot="suffix" :class="icon" @click="showPass"></i></el-input>
                    <el-input style="width: 200px;"  v-model="reg_code" placeholder="请输入内容"></el-input>
<!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span2" @click="countDown" >{{content}}</el-button>-->
                    <el-button  :id="btn_code"   style="height: 44px"  @click="reg_send_code(reg_tel)" >{{content}}</el-button>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="regist(reg_username,reg_tel,reg_password,reg_code)">立即注册</el-button>
                    <div style="width: 80%;height:40px;vertical-align:middle;display:table-cell;">
                        <span style="font-size:14px;color: #606879;">已有账号？</span>
                        <span style="font-size:14px;color:#3254DC;cursor: pointer" @click="reg_to_login"> 马上登录></span>
                        <span style="font-size:14px;color:#3254DC;margin-left: 100px;cursor:pointer" @click="wx_register"> 微信注册</span>
                    </div>
                    <div style="height: 50px"></div>
                </div>

            </el-dialog>
            <el-dialog
                    title="微信注册"
                    :visible.sync="wx_register_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 200px;margin: 0 auto;">

                    <div style="width: 180px;height:180px;margin:60px auto 0 auto;border: 1px solid #E4E7EB;display: flex;align-items: center;justify-content: center;">
                        <img src="../../assets/images/aikit.png" alt="" style="width: 150px;height: 150px;">
                    </div>
                    <div style="width: 200px;height:40px;vertical-align:middle;margin:0 auto;text-align: center">
                        <span style="font-size:14px;color:#3254DC;margin-left: 10px;cursor:pointer" @click="wx_reg_to_reg"> 手机号注册></span>
                    </div>
                    <div style="width: 200px;height:40px;vertical-align:middle;margin: 90px auto 0 auto;text-align: center">
                        <span style="font-size:14px;color: #606879;margin-right: 5px">已有账号？</span>
                        <span style="font-size:14px;color:#3254DC;margin-left: 10px;cursor: pointer" @click="wx_reg_to_login"> 马上登录></span>
                    </div>


                    <div style="height: 40px"></div>
                </div>

            </el-dialog>
        </div>
    </el-header>
</template>

<script >
    import Axios from "axios";
    export default {
        data() {
            return {
                prefix:'+86',
                isLogin:false,
                login_dialog:true,
                register_dialog:false,
                modify_pwd_dialog1:false,
                modify_pwd_dialog2:false,
                wx_login_dialog:false,
                wx_register_dialog:false,

                content: '获取验证码',  // 按钮里显示的内容
                totalTime: 10 ,     //记录具体倒计时时间
                canClick: true ,//添加canClick
                btn_code:'canCli' ,
                tell:0,
                tel:'',
                icon:"el-input__icon el-icon-view",
                passw:"password",
                tips:' 用户名或密码错误',
                login_tel:'',
                login_code:'',

                reg_tel:'',
                reg_code:'',
                reg_username:'',
                reg_password:'',
            };
        },
        methods:{
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
            go_tutorial() {
                this.$router.push(
                    { path: '/tutorial',

                    }
                );

            },
            go_instance() {
                this.$router.push(
                    { path: '/instance',

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
            countDown(){
                // if (!this.canClick) return
                // this.canClick = false
                if(!this.btn_code==='canCli') {
                    return
                }else {
                this.btn_code='noCli'
                this.content = this.totalTime + 's'
                let clock = window.setInterval(() => {
                    //console.log(clock)
                    this.totalTime--
                    this.content = this.totalTime + 's'
                    if (this.totalTime < 0) {
                        window.clearInterval(clock)
                        this.content = '重新发送'
                        this.totalTime = 10
                        this.canClick = true  //这里重新开启
                        this.btn_code = 'canCli'  //这里重新开启
                    }
                },1000)
                }
            },
            showPass(){
                //点击图标是密码隐藏或显示
                if( this.passw=="text"){
                    this.passw="password";
                    //更换图标
                    this.icon="el-input__icon el-icon-view";
                }else {
                    this.passw="text";
                    this.icon="el-input__icon el-icon-loading";
                }
            },
            register(){
                this.login_dialog=false
                this.register_dialog=true
            },
            modify_pwd1(){
                this.login_dialog=false
                this.modify_pwd_dialog1=true
            },
            wx_login(){
                this.login_dialog=false
                this.wx_login_dialog=true
            },
            wx_to_login(){
                this.wx_login_dialog=false
                this.register_dialog=true
            },
            to_modify2(){
                this.modify_pwd_dialog1=false
                this.modify_pwd_dialog2=true
            },
            async modify_password(){
                this.modify_pwd_dialog2=false
                    const {data: res} = await this.$http.get('example/findExampleEntity', {params: {id: this.instanceId}})
                    // window.console.log(res)
                    if (res.code == 20000) {
                   window.console.log("444")

                    }
            },
           to_login1(){
                this.modify_pwd_dialog1=false
                this.login_dialog=true
           },
            to_login2(){
                this.modify_pwd_dialog2=false
                this.login_dialog=true
            },
            reg_to_login(){
                this.register_dialog=false
                this.login_dialog=true
            },
            wx_register(){
                this.register_dialog=false
                this.wx_register_dialog=true
            },
            wx_reg_to_login(){
                this.wx_register_dialog=false
                this.login_dialog=true
            },
            wx_reg_to_reg(){
                this.wx_register_dialog=false
                this.register_dialog=true
            },
            async reg_send_code(tel){
                this.countDown()
                const newAixos = Axios.create({
                    baseURL: 'http://10.0.20.114:9002',
                   // timeout: 1000,
                });
                newAixos.post("/tbUser/sendSms/"+tel)
                    .then(function(response) {
                        window.console.log(response);
                        if (response.status == 200) {
                            this.$message.success("验证码已发送")
                        }
                    })
                    .catch(function(error) {
                        window.console.log(error);
                        this.$message.success("服务器错误")
                    });

            },
            async log_send_code(tel){
                this.countDown()
                const newAixos = Axios.create({
                    baseURL: 'http://10.0.20.114:9002',
                   // timeout: 1000,
                });
                newAixos.post("/tbUser/loginSms/"+tel)
                    .then(function(response) {
                        window.console.log(response);
                        if (response.status == 200) {
                            this.$message.success("验证码已发送")
                        }
                    })
                    .catch(function(error) {
                        window.console.log(error);
                        this.$message.success("服务器错误")
                    });

            },
            async regist(username,tel,password,code){
                const newAixos = Axios.create({
                    baseURL: 'http://10.0.20.114:9002',
                   // timeout: 1000,
                });
                newAixos.post("/tbUser/register/"+code,{

                        nikeName:username,
                        mobile:tel,
                        password:password,

                    }
                )
                    .then(function(response) {
                        window.console.log(response);
                        if (response.status == 200) {
                            this.$message.success("验证码已发送")
                        }
                    })
                    .catch(function(error) {
                        window.console.log(error);
                        this.$message.success("服务器错误")
                    });

            },
            async login(tel,code){
                const newAixos = Axios.create({
                    baseURL: 'http://10.0.20.114:9002',
                   // timeout: 1000,
                });
                newAixos.get("/tbUser/login",{

                    params: {
                        mobile: tel,
                        code:code,
                    }
                    }
                )
                    .then(function(response) {
                        window.console.log(response);
                        if (response.status == 200) {
                            this.$message.success("验证码已发送")
                        }
                    })
                    .catch(function(error) {
                        window.console.log(error);
                        this.$message.success("服务器错误")
                    });

            },


        }
    };
</script>

<style  scoped>
    .header_head{
        border-bottom: 1px solid grey;
        border-color: rgba(151, 151, 151, 0.3);
        padding: 0;
    }
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
        /*padding-left: 100px;*/
        /*padding-right: 150px;*/

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
    }
    .nav_layout >>>  .el-button--primary{
        background-color: #3254DC;
    }
    .nav_layout >>> .el-button--primary:focus, .el-button--primary:hover {
        background-color: #5171F0;
    }
    .nav_layout >>> .el-dropdown-menu__item{
        line-height: 0;
    }
    .nav_layout >>> .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
        /* background-color: #ecf5ff; */
        color: #66b1ff;
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
    #login_dia >>> .el-dialog__body{
        padding: 0;
    }
    #login_dia >>> .el-dialog__header{
        padding-left: 38px;
        padding-bottom: 0;
        font-weight: bold;
        font-size: 24px

      }
    #login_dia >>> .el-dialog__title{

        font-size: 24px

    }
    #login_dia >>> .el-input{

      width: 90px;

    }
    #login_dia >>> .el-input__inner{
         height: 44px;


    }
    #code_span1 >>> span{
        margin-left: -4px;
    }
    #code_span1 {
        height: 44px;
    }

    /*#login_dia >>>  .el-button:focus, .el-button:hover{*/
    /*    background-color: #C0C3C9;*/
    /*    border-color: #C0C3C9;*/
    /*    color: white;*/
    /*}*/
    /*#code_span1 >>> .el-button:focus , .el-button:hover{*/
    /*    !*background-color: #3254DC;*!*/
    /*    !*background-color: #C0C3C9;*!*/
    /*    !*border-color: #C0C3C9;*!*/
    /*    !*color: white;*!*/
    /*}*/
    #code_span2 >>> span{
        margin-left: -4px;
        height: 44px;
    }
    #code_span3 >>> span{
        margin-left: -4px;
        height: 44px;
    }
    #canCli{
       width: 100px;
        background-color: #3254DC;
        color:white;
        height: 40px
    }
    #noCli{
        width: 100px;
        background-color: #C0C3C9;
        color:white;
        height: 40px
    }
    #canCli >>> span{
        margin-left: -4px;
    }

</style>
