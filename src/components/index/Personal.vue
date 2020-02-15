<template>
    <el-container>
        <div class="home-container">
            <div class="content">
                <span style="font-size: 36px">个人中心</span>
                <div style="width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell">
                    <img src="../../assets/images/person/我的资料.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">我的资料</span>
                </div>
                <div  style="display: flex">
                    <div style="width: 140px;height: 140px;display: inline-block;margin: 40px 0 100px 15px">
                         <img src="../../assets/images/person/u779.png" alt="" style="width: 100%;height: 100%">
                    </div>
                    <div style="display: inline-block;height: 140px;margin: 40px 0 100px 0">
                        <div style="border: 1px solid #E4E7EB;width: 358px;height: 50px;vertical-align: middle;display: table-cell;font-size: 18px;font-weight: bold;padding-left: 15px">521</div>
                        <div style="border: 1px solid #E4E7EB;width: 358px;height: 90px;padding: 10px ">
                            <div style="font-size: 14px;font-weight: bold">个人简介</div>
                            <div>请输入简介</div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:50px;width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell">
                    <img src="../../assets/images/person/安全.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">安全设置</span>
                </div>
                <div>

                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                      <div style="width: 450px;display: flex;margin-bottom: 10px">
                        <img src="../../assets/images/person/tel_no.png" alt="">
                         <div style="margin-left: 10px">
                             <div style="font-size:14px;color：#16161D;font-weight: bold">手机未绑定</div>
                             <div style="font-size:13px;color：#606879">您可以享受手机相关的安全及提醒</div>
                         </div>
                        <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">绑定手机</el-button>
                      </div>
                        <hr>
                    </div>


                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/email_yes.png" style="height: 26px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color：#16161D;font-weight: bold">邮箱已绑定</div>
                                <div style="font-size:13px;color：#606879">您可以使用邮箱保障您的账号安全</div>
                            </div>
                            <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">修改邮箱</el-button>
                        </div>
                        <hr>
                    </div>
                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/tel_yes.png" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color：#16161D;font-weight: bold">手机已绑定（）</div>
                                <div style="font-size:13px;color：#606879">您可以享受手机相关的安全及提醒</div>
                            </div>
                            <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">修改手机</el-button>
                        </div>
                        <hr>
                    </div>
                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/email_no.png" style="height: 26px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color：#16161D;font-weight: bold">邮箱未绑定</div>
                                <div style="font-size:13px;color：#606879">您可以使用邮箱保障您的账号安全</div>
                            </div>
                            <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">绑定邮箱</el-button>
                        </div>
                        <hr>
                    </div>
                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/pwd.png" style="height: 28px;width:34px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color：#16161D;font-weight: bold">登录密码</div>
                                <div style="font-size:13px;color：#606879">密码强度越强，账号安全越强</div>
                            </div>
                            <el-button size="mini" style="margin-left:105px;border-color: #3254DC;color: #3254DC">修改密码</el-button>
                        </div>
                        <hr>
                    </div>


                </div>
                <img src="../../assets/images/person/u779.png" style="width: 1280px" alt="">
            </div>
        </div>
        <div id="login_dia">
        <el-dialog
                title="绑定邮箱"
                :visible.sync="email_dialog"
                width="380px"
        >
            <hr style="margin: 0;width: 100%;">
            <div style="width: 300px;margin:10px auto 0 auto">
                <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="to_modify2">下一步</el-button>

                <div style="height: 150px"></div>


            </div>

        </el-dialog>
            <el-dialog
                    title="修改密码"
                    :visible.sync="email_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:10px auto 0 auto">
                    <span style="font-size: 16px;color: #16161D;">原密码</span>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <span style="font-size: 16px;color: #16161D;">新密码</span>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="to_modify2">确认修改</el-button>

                    <div style="height: 150px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="手机号修改"
                    :visible.sync="email_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:10px auto 0 auto">
                    <span style="font-size: 18px;color: #16161D;line-height: 14px;"> 手机验证（）</span>
                    <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                    <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                    <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="to_modify2">下一步</el-button>
                    <el-steps :active="2" >
                        <el-step title="验证身份"></el-step>
                        <el-step title="绑定新手机号"></el-step>
                        <el-step title="完成"></el-step>
                    </el-steps>
                    <div style="height: 150px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="手机号修改"
                    :visible.sync="login_dialog"
                    width="380px"
            >
                <hr style="margin: 0;width: 100%;">
                <div style="width: 300px;margin:0 auto">

                    <el-select v-model="prefix" placeholder="请选择" >
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input style="width: 200px;margin-left: 10px" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                    <!--                <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span" @click="countDown" >{{content}}</el-button>-->
                    <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="countDown">确认绑定</el-button>
                    <el-steps :active="2" process-status="process">
                        <el-step title="验证身份"></el-step>
                        <el-step title="绑定新手机号"></el-step>
                        <el-step title="完成"></el-step>
                    </el-steps>

                </div>

            </el-dialog>
        </div>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                prefix:'+86',
                email_dialog:true,
                login_dialog:true,
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
        method:{
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
<style scoped>
    .el-header {
        background-color: #101c3d;
        color: white;
        line-height: 60px;

    }
    .content{
        width: 1280px;
        background-color: white;
        margin: 40px auto 0 auto;
        padding-bottom: 200px;
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
        margin-top: 15px;

    }
    #login_dia >>> .el-step__head.is-finish{
            color:white;
            border-color:  #3FB560;

        }
    #login_dia >>> .el-step__title.is-finish{
        color:#3FB560;


    }
    #login_dia >>> .el-step__title.is-process{
        color: grey;


    }
    #login_dia >>> .el-step__head.is-process{
        color:white;
        border-color: #FFFFFF;
        background-color: red;

    }
    #login_dia >>> .el-step__icon.is-process{
        background: red;
    }
    #login_dia >>> .el-step__icon{
        background: #3FB560;
    }
    /*#login_dia >>> .el-step__icon{*/
    /*     background-color:red;*/
    /* }*/

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

</style>
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

</style>