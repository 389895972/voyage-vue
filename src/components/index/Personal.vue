<template>
    <el-container>
        <div class="home-container">
            <div class="content">
                <span style="font-size: 36px">个人中心</span>
                <div style="width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell">
                    <img src="../../assets/images/person/我的资料.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">我的资料</span>
                </div>
<!--                个人信息-->
                <div v-if="!modify_info" style="display: flex;height: 300px">
                    <div style="width: 140px;height: 140px;display: inline-block;margin: 40px 0 100px 15px">
                         <img src="../../assets/images/person/u779.png" alt="" style="width: 100%;height: 100%">
                    </div>
                    <div style="display: inline-block;height: 140px;margin: 40px 0 100px 0">
                        <div style="border: 1px solid #E4E7EB;width: 358px;height: 50px;vertical-align: middle;display: table-cell;font-size: 18px;font-weight: bold;padding-left: 15px">
                            {{nickname}}
                            <el-button type="primary" icon="el-icon-edit"  @click="modify_instance" style="color:blue;background-color:white;border: white;font-size:14px"></el-button>
                        </div>
                        <div style="border: 1px solid #E4E7EB;width: 358px;height: 90px;padding: 10px ">
                            <div style="font-size: 14px;font-weight: bold">个人简介</div>
                            <div>请输入简介</div>
                        </div>
                    </div>
                </div>
<!--                修改个人信息-->
                <div v-if="modify_info" style="height: 300px;width: 800px;margin: 20px">

                  <span style="height: 44px;vertical-align:middle;display:table-cell;"> <span style="line-height: 44px">用户名:</span>
                    <el-input style="width: 490px;margin-left: 10px;display: inline-block" v-model="modify_nickname">{{modifynickname}}</el-input></span>
                    <div style="display: flex;margin-top: 10px">
                    <div style="height: 44px;vertical-align:middle;display:table-cell;"> <span>个人头像</span> </div>

                    <div style="width: 40px;height: 40px;display: inline;margin-left: 20px">

                        <div id="img" class="upload-btn common mb_10" v-if="!isShow" style="border:1px solid grey;width: 100px;height:100px">
                            <label>
                                <input type="file"   style="display: none" @change="uploadImg">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </label>
                        </div>
                        <div class="img-list-item common mb_10" v-if="isShow">
                            <img :src="src" class="common" style="width: 100px;height: 100px">
                            <i class="del-img" @click="forkImage"></i>
                        </div>

                    </div>
                    <div style="margin-left: 70px">
                         <el-button  style="color:#3254DC;background-color: white" @click="mod">更换图片</el-button>
                        <br>
                        <span style="display: inline-block;width: 400px">图片比例为1：1，建议上传128*128@2x分辨率的图片，支持jpg/jpeg/png格式，大小不要超过100KB</span>
                    </div>

                    </div>
                    <div style="display: flex;margin-top: 50px">
                       <span style="height: 44px;vertical-align:middle;display:table-cell;"> <span style="line-height: 44px">个人简介:</span></span>
                        <el-input type="textarea" style="width: 490px">{{modify_introduce}} </el-input>
                    </div>
                    <div>         <el-button type="primary"   @click="submitUpload" style="text-align: right;color:white;background-color:#3254DC ;border: white;font-size:14px;margin-left:490px ;margin-top:20px">确定</el-button></div>
                     <div style="height: 100px"></div>
                </div>
                <div style="margin-top:50px;width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell">
                    <img src="../../assets/images/person/安全.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">安全设置</span>
                </div>
                <div>

                    <div  v-if="mobile===''" style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                      <div style="width: 450px;display: flex;margin-bottom: 10px">
                        <img src="../../assets/images/person/tel_no.png" alt="">
                         <div style="margin-left: 10px">
                             <div style="font-size:14px;color:#16161D;font-weight: bold">手机未绑定</div>
                             <div style="font-size:13px;color:#606879">您可以享受手机相关的安全及提醒</div>
                         </div>
                        <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">绑定手机</el-button>
                      </div>
                        <hr>
                    </div>


                    <div v-if="email" style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/email_yes.png" style="height: 26px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color:#16161D;font-weight: bold">邮箱已绑定</div>
                                <div style="font-size:13px;color:#606879">您可以使用邮箱保障您的账号安全</div>
                            </div>
                            <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC">修改邮箱</el-button>
                        </div>
                        <hr>
                    </div>
                    <div v-if="mobile" style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/tel_yes.png" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color:#16161D;font-weight: bold">手机已绑定（{{trans(mobile)}}}）</div>
                                <div style="font-size:13px;color:#606879">您可以享受手机相关的安全及提醒</div>
                            </div>
                            <el-button size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC" @click="modify_tel">修改手机</el-button>
                        </div>
                        <hr>
                    </div>
                    <div v-if="email===''" style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/email_no.png" style="height: 26px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color:#16161D;font-weight: bold">邮箱未绑定</div>
                                <div style="font-size:13px;color:#606879">您可以使用邮箱保障您的账号安全</div>
                            </div>
                            <el-button @click="bind_email" size="mini" style="margin-left:90px;border-color: #3254DC;color: #3254DC" >绑定邮箱</el-button>
                        </div>
                        <hr>
                    </div>
                    <div style="margin:30px 0 0 10px;width: 450px;display: inline-block">
                        <div style="width: 450px;display: flex;margin-bottom: 10px">
                            <img src="../../assets/images/person/pwd.png" style="height: 28px;width:34px;margin-top: 10px" alt="">
                            <div style="margin-left: 10px">
                                <div style="font-size:14px;color:#16161D;font-weight: bold">登录密码</div>
                                <div style="font-size:13px;color:#606879">密码强度越强，账号安全越强</div>
                            </div>
                            <el-button size="mini" style="margin-left:105px;border-color: #3254DC;color: #3254DC" @click="modify_pwd">修改密码</el-button>
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
            <hr style="margin:15px;width: 100%;">
            <div style="width: 300px;margin:15px auto 0 auto">
                <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 10px 0 0 0;" @click="to_modify2">下一步</el-button>

                <div style="height: 190px"></div>


            </div>

        </el-dialog>
            <el-dialog
                    title="修改密码"
                    :visible.sync="modify_pwd_dialog"
                    width="380px"
            >
                <hr style="margin: 10px;width: 100%;">
                <div style="width: 300px;margin:30px auto 0 auto">
                    <span style="font-size: 16px;color: #16161D;">原密码</span>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <div style="font-size: 16px;color: #16161D;margin-top: 10px">新密码</div>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-input style="width: 300px;" v-model="tel" placeholder="请输入手机号"></el-input>
                    <el-button  style="margin-top:10px;width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;" @click="to_modify2">确认修改</el-button>

                    <div style="height: 100px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="手机号修改"
                    :visible.sync="modify_tel_dialog1"
                    width="380px"
            >
                <hr style="margin: 10px;width: 100%;">
                <div style="width: 300px;margin:30px auto 0 auto">
                    <span style="font-size: 18px;color: #16161D;line-height: 14px;"> 手机验证（）</span>
                    <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                    <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                    <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                    <el-button  style="margin-top:10px;margin-bottom:170px;width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 0" @click="to_tel_modi2">下一步</el-button>
                    <el-steps :active="1" >
                        <el-step id="el-step1" title="验证身份"></el-step>
                        <el-step id="el-step2" title="绑定新手机号"></el-step>
                        <el-step id="el-step3" title="完成"></el-step>
                    </el-steps>
                    <div style="height: 40px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="手机号修改"
                    :visible.sync="modify_tel_dialog2"
                    width="380px"
            >
                <hr style="margin-top:10px;width: 100%;">
                <div style="width: 300px;margin:10px auto">

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
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin:15px 0 130px 0" @click="to_tel_modi3">确认绑定</el-button>
                    <el-steps :active="2">
                        <el-step id="el-step4" title="验证身份"></el-step>
                        <el-step id="el-step5" title="绑定新手机号"></el-step>
                        <el-step id="el-step6" title="完成"></el-step>
                    </el-steps>
                     <div style="height: 40px"></div>
                </div>

            </el-dialog>
            <el-dialog
                    title=""
                    :visible.sync="modify_tel_dialog3"
                    width="380px"
            >

                <div style="width: 300px;margin:80px auto 0 auto">
                    <img src="../../assets/images/person/成功.png"  style="width: 58px;height: 58px;margin-left: 120px" alt="">
                       <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">手机号 18888888888</div>
                       <div style="margin-bottom:20px;margin-top:10px;text-align: center;font-size: 20px;color:#16161d">绑定成功！</div>
                    <el-button  style="width: 300px;height: 50px;background-color: #3FB560;color:white;font-size: 16px;margin: 0" @click="countDown">完成</el-button>
                    <el-steps :active="3" style="margin-top: 70px">
                        <el-step id="el-step7" title="验证身份"></el-step>
                        <el-step id="el-step8" title="绑定新手机号"></el-step>
                        <el-step id="el-step9" title="完成"></el-step>
                    </el-steps>
                  <div style="height: 40px"></div>
                </div>

            </el-dialog>
        </div>
    </el-container>
</template>
<script >
    import Axios from "axios";
    export default {
        data() {
            return {
                prefix:'+86',
                email_dialog:true,
                modify_pwd_dialog:false,
                modify_tel_dialog1:false,
                modify_tel_dialog2:false,
                modify_tel_dialog3:false,
                content: '获取验证码',  // 按钮里显示的内容
                totalTime: 10 ,     //记录具体倒计时时间
                canClick: true ,//添加canClick
                btn_code:'canCli' ,
                tell:0,
                icon:"el-input__icon el-icon-view",
                passw:"password",
                tips:'用户名或密码错误',
                 imageUrl: '',
                fileData: '',

                username:'123',
                fileList:[],

                nickname: this.$route.params.userInfo.nickname,
                 mobile: this.$route.params.userInfo.mobile,
                email: '',
                modify_userInfo:false,
                src: '',
                isShow:false,
                formData:'',
                modify_nickname:'',
                introduce:'456',
                modify_introduce:'',
                modify_info:false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            }
        },
        created(){
            this.init()
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
            bind_email(){
                this.email_dialog=true;

            },
            modify_pwd(){
                this.modify_pwd_dialog=true
            },
            modify_tel(){
                this.modify_tel_dialog1=true
            },
            to_tel_modi2(){
                this.modify_tel_dialog1=false
                this.modify_tel_dialog2=true

            },
            to_tel_modi3(){
                this.modify_tel_dialog2=false
                this.modify_tel_dialog3=true
            },
             mod(){
                this.src=''
                 this.isShow=false
             },
            // 上传到服务器
            submitUpload() {
            //  let introduce= this.introduce

                // let fieldData = this.fileData;
                // if (fieldData.id === '') {
                //     this.$message({
                //         message: '请选择上传机构',
                //         type: 'warning'
                //     })
                // } else
                //     if (this.fileList.length === 0) {
                //     this.$message({
                //         message: '请先选择文件',
                //         type: 'warning'
                //     })
                // } else {
                //     const isLt100M = this.fileList.every(file => file.size / 1024 / 1024 < 100);
                //     if (!isLt100M) {
                //         this.$message.error('请检查，上传文件大小不能超过100MB!');
                //     } else {

                let _this=this
                _this.formData.append('username', this.modify_nickname);
                _this.formData.append('introduce', this.modify_introduce);
                window.console.log("==========="+this.modify_nickname)
                window.console.log("==========="+this.modify_introduce)
                this.nickname= this.modify_nickname
                this.introduce= this.modify_introduce
                        const newAixos = Axios.create({
                            baseURL: 'http://127.0.0.1:8888',
                            // timeout: 1000,
                        });
                        newAixos.post("/upload",this.formData,)
                            .then(function(response) {
                                window.console.log(response);
                                if (response.status == 200) {
                                    this.$message.success("验证码已发送")
                                    this.nickname= this.modify_nickname
                                    this.introduce= this.modify_introduce
                                }
                            })
                            .catch(function(error) {
                                window.console.log(error);
                                this.$message.success("服务器错误")
                            });
                    // }
                // }
            },
            forkImage () {
                this.src = '';
                this.isShow = false;
            },
            uploadImg (e) {
                let _this = this;
                let files = e.target.files[0];
                let type=files.type;//文件的类型，判断是否是图片
                let size=files.size;//文件的大小，判断图片的大小
                if(this.imgData.accept.indexOf(type) == -1){
                    this.$message.error('请选择我们支持的图片格式！');
                    return false;
                }
                if(size>102400){
                    this.$message.error('请选择100kb以内的图片！');
                    return false;
                }
                if (!e || !window.FileReader) return; // 看支持不支持FileReader
                let reader = new FileReader();
                reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
                reader.onloadend = function () {
                    _this.src = this.result;
                    _this.isShow = true;
                };

                _this.formData = new FormData();
                _this.formData.append('file', files);

            },
            init(){
                this.modify_nickname=this.nickname;
                this.modify_introduce=this.introdue;
            },
            modify_instance(){
                this.modify_info=true
            },
            trans(tel){
                var hide_tel=tel.substr(0,3)+'****'+tel.substr(7)
                return hide_tel
            }
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
    .content >>> .el-upload__input{
        display: none;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 140px;
        height: 140px;
        display: block;
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
         font-size: 14px;


    }
    #el-step1 >>> .el-step__title.is-finish{
        color:#3FB560;
        font-size: 14px;
        margin-left: -13px;

    }
    #el-step4 >>> .el-step__title.is-finish{
        color:#3FB560;
        font-size: 14px;
        margin-left: -13px;

    }
    #el-step5 >>> .el-step__title.is-finish{
        color:#3FB560;
        font-size: 14px;
        margin-left: -27px;

    }
    #el-step2 >>> .el-step__title.is-process{
        color:#3FB560;
        font-size: 14px;
        margin-left: -27px;

    }
    #login_dia >>> .el-step__title.is-process{
        color: grey;
         font-weight: normal;
        font-size: 14px;

    }
    #login_dia >>> .el-step__title.is-wait{
        color: grey;
        font-size: 14px;


    }
    #login_dia >>> .el-step__head.is-process{
        color:white;
        border-color: #FFFFFF;


    }
    #login_dia >>> .el-step__icon.is-process{
        background: red;
    }
    #login_dia >>> .el-step__icon{
        background: #3FB560;
    }
    #login_dia >>> .el-step__head.is-wait{
        color: white;

    }
    #el-step1 >>> .el-step__icon{
        background: #3FB560;
        border-color: white;
    }
    #el-step2 >>> .el-step__icon{
        background: #C0C3C9;
        color: white;
    }
    #el-step3 >>> .el-step__icon{
        background:#C0C3C9;
        border-color: white;
    }
    #el-step4 >>> .el-step__icon{
        background: #ABE5BB;
        border-color:  white;
    }
    #el-step5 >>> .el-step__icon{
        background:#3FB560;
        border-color:  white;
    }

    #el-step6 >>> .el-step__icon{
        background: #C0C3C9;
    }
    #el-step7 >>> .el-step__icon{
        background: #ABE5BB;
        border-color:  white;
    }
    #el-step8 >>> .el-step__icon{
        background: #ABE5BB;
        border-color:  white;
    }
    #el-step9 >>> .el-step__icon{
        background:#3FB560;
        border-color:  white;
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