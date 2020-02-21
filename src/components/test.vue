<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form" label-width=" 0px">
                  <span>
                  <el-form-item  prop="username">
                      <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                  </el-form-item>
                  <el-form-item prop="password" >
                      <el-input   type="password" v-model="loginForm.password" prefix-icon="iconfont icon-mima"></el-input>
                  </el-form-item>
                  <el-form-item prop="vcode" >
                      <el-input   type="vcode" v-model="loginForm.vcode" prefix-icon="iconfont icon-mima" class="vcode"></el-input>
                      <el-button class="button" :class="{disabled: !this.canClick}" @click="countDown">{{content}}</el-button>
                  </el-form-item>
                  <el-form-item class="btns">
                      <el-button type="primary" @click="login">登录</el-button>
                      <el-button type="info" @click="resetLoginForm">重置</el-button>
                  </el-form-item>
                      </span>
                <span>dfasdffsaf</span>
            </el-form>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                loginForm:{
                    username:'zs123',
                    password:'123456798',
                    vcode:''
                },
                loginFormRules:{
                    //验证用户名是否合法
                    username:[
                        { required: true, message: '请输入登录名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                },
                content: '发送验证码',  // 按钮里显示的内容
                totalTime: 10 ,     //记录具体倒计时时间
                canClick: true //添加canClick
            }
        },
        methods:{
            resetLoginForm(){
                //  console.log(this);
                this.$refs.loginFormRef.resetFields();
            },
            login(){
                this.$refs.loginFormRef.validate(async valic =>{
                    window.console.log(valic);
                    if(!valic) return;
                    const {data: res}= await this.$http.post('login',this.loginForm);

                    //const res= await this.$http.post('login',this.loginForm);
                    if(res.meta.status!=200) return  this.$message.error('登录失败');
                    this.$message.success('登录成功');
                    window.sessionStorage.setItem('token',res.data.token);
                    await this.$router.push("/home");
                });
            },
            countDown(){
                if (!this.canClick) return
                this.canClick = false
                this.content = this.totalTime + 's后重新发送'
                let clock = window.setInterval(() => {
                    window.console.log(clock)
                    this.totalTime--
                    this.content = this.totalTime + 's后重新发送'
                    if (this.totalTime < 0) {
                        window.clearInterval(clock)
                        this.content = '重新发送验证码'
                        this.totalTime = 10
                        this.canClick = true  //这里重新开启
                    }
                },1000)
            },


        }
    }
</script>

<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 400px;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        .avatar_box{
            height: 130px;
            width: 130px;
            border: 1px solid white;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: white;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #EEE5DD;
            }
        }
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .vcode{
        width: 50%;
        margin-right: 30px;
    }
    .disabled{
        background-color: #dddddd;
        border-color: #dddddd;
        color:#57a3f3;
        cursor: not-allowed; // 鼠标变化
    }
    .button{
        background-color: #57a3f3;
        border-color: #57a3f3;
        color: white;
    }
</style>