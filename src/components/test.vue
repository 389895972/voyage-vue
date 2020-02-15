<template>
    <div>
        <el-button  :class="btn_code"   id="code_span1" @click="countDown" >{{content}}</el-button>

    </div>
</template>

<script>

    export default {
        data(){
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
                icon:"el-input__icon el-icon-view",
                passw:"password",
                tips:' 用户名或密码错误'
            }
        },
        methods:{
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
                    },1000)}
            },


        }
    }
</script>

<style  scoped>

    .canCli{
        width: 100px;
        background-color: #3254DC;
        color:white;
        height: 40px
    }
    .noCli{
        width: 100px;
        background-color: #C0C3C9;
        color:white;
        height: 40px
    }

</style>