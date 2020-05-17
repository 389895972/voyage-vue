<template>
    <el-container>
        <div class="home-container">
            <div class="content">
                <div style="margin-bottom: 10px">
                <span style="font-size: 36px;margin-bottom: 30px">个人中心</span>
                </div>
                <div style="width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell;margin-top: 30px">
                    <img src="../../assets/images/person/myintro.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">我的资料</span>
                </div>
<!--                个人信息-->
                <div style="height: 300px;display:flex;margin-bottom: 50px" id="personal_infomation">

                    <div style="border-left: 1px solid #E4E7EB;padding:40px 0 0 20px;width: 700px">
                             <div style="font-size: 16px;font-weight: bold;margin-bottom: 20px">个人信息</div>
                             <div style="border-bottom: 1px solid #E4E7EB;margin-left: 20px">
                                 <span class="person_info" >用户名</span>
                                 <div style="display: inline-block;width: 500px;">
                                 <el-input style="width: 490px;display: inline-block;font-weight: bold" v-model="nickname" ref="nickname_input">{{nickname}}</el-input>
                                 </div>
                                 <el-button  size="mini" style="color:#3254DC;background-color: white" @click="nickname_mod">修改</el-button>
                             </div>

                        <div style="border-bottom: 1px solid #E4E7EB;margin-left: 20px">
                            <span class="person_info">真实姓名</span>

                            <el-input style="width: 500px;display: inline-block;font-weight: bold" ref="name_input"  v-model="uname">{{uname}}</el-input>
                            <el-button  size="mini" style="color:#3254DC;background-color: white" @click="uname_mod">修改</el-button>
                        </div>

                        <div style="border-bottom: 1px solid #E4E7EB;margin-left: 20px">
                            <span class="person_info" style="width: 80px">身份证号码</span>

                            <el-input style="width: 500px;display: inline-block;font-weight: bold" ref="name_input"  v-model="idcard">{{idcard}}</el-input>
                            <el-button  size="mini" style="color:#3254DC;background-color: white" @click="idcard_mod">修改</el-button>
                        </div>
                        <div style="border-bottom: 1px solid #E4E7EB;margin-left: 20px">
                        <span class="person_info">手机号</span>

                        <el-input style="width: 500px;display: inline-block;font-weight: bold" ref="name_input"  v-model="phone">{{phone}}</el-input>
                            <el-button  size="mini" style="color:#3254DC;background-color: white" @click="phone_mod">修改</el-button>
                    </div>
                    </div>
                </div>

                <div style="margin-top:50px;width: 1280px;height: 50px;background-color: #F0F1F3;vertical-align: middle;display: table-cell">
                    <img src="../../assets/images/person/safe.png" style="width: 23px;height: 23px;margin-left: 15px;margin-bottom: 5px"> <span style="font-size: 18px;font-weight: bold;;margin-left: 10px">安全设置</span>
                </div>
                <div>

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
                <img src="../../assets/images/person/person.png" style="width: 1280px;height:600px" alt="">
            </div>
        </div>
        <div id="login_dia">
        <el-dialog
                title="绑定邮箱"
                :visible.sync="email_dialog"
                width="380px"
        >
            <hr style="margin:15px;width: 100%;">
            <div style="width: 300px;margin:15px auto 0 auto" id="b_email">
<!--               <table> <tr><td>-->
                <el-form :model="bind_email" :rules="rules" ref="bind_email" >
                <el-form-item  prop="b_email" style="margin-left:0">

                <el-input style="width: 300px;" v-model="bind_email.b_email" placeholder="请输入邮箱号"></el-input>
                </el-form-item>
               </el-form>
<!--               </td></tr></table>-->
                    <!--                <el-input style="width: 200px;" v-model="tel" placeholder="请输入验证码"></el-input>-->
                <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
<!--                <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>-->
                <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 10px 0 0 0;" @click="bang_email">绑定邮箱</el-button>

                <div style="height: 190px"></div>


            </div>

        </el-dialog>
            <el-dialog
                    title="修改邮箱"
                    :visible.sync="email_dialog2"
                    width="380px"
            >
                <hr style="margin:15px;width: 100%;">
                <div style="width: 300px;margin:15px auto 0 auto" >
                    <!--               <table> <tr><td>-->
                    <el-form :model="mmod_email" :rules="rules" ref="mod_email" >
                        <el-form-item  prop="m_email" style="margin-left:0">

                            <el-input style="width: 300px;" v-model="mmod_email.m_email" placeholder="请输入邮箱号"></el-input>
                        </el-form-item>
                    </el-form>
                    <!--               </td></tr></table>-->
                    <!--                <el-input style="width: 200px;" v-model="tel" placeholder="请输入验证码"></el-input>-->
                    <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                    <!--                <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>-->
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin: 10px 0 0 0;" @click="modd_email">修改邮箱</el-button>

                    <div style="height: 190px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="修改密码"
                    :visible.sync="modify_pwd_dialog"
                    width="380px" id="mod_pwd"
            >
                <hr style="margin: 10px;width: 100%;">
                <div style="width: 300px;margin:30px auto 0 auto">
                    <span style="font-size: 16px;color: #16161D;">原密码</span>
                    <el-form :model="modify_pwdd" :rules="rules" ref="mod_pwdd" >

                        <el-form-item  prop="old_pwd" style="margin-left:0">
                    <el-input style="width: 300px;" v-model="modify_pwdd.old_pwd" placeholder="请输入原密码"></el-input>
                        </el-form-item>
                    <div style="font-size: 16px;color: #16161D;margin-top: 10px">新密码</div>
                        <el-form-item  prop="new_pwd1" style="margin-left:0">
                    <el-input style="width: 300px;" v-model="modify_pwdd.new_pwd1" placeholder="请输入新密码"></el-input>
                        </el-form-item>
                            <el-form-item  prop="new_pwd2" style="margin-left:0">
                    <el-input style="width: 300px;" v-model="modify_pwdd.new_pwd2" placeholder="请确认密码"></el-input>
                            </el-form-item>
                    </el-form>
                        <el-button  style="margin-top:10px;width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;" @click="mod_pwd">确认修改</el-button>

                    <div style="height: 100px"></div>


                </div>

            </el-dialog>
            <el-dialog
                    title="确认原手机"
                    :visible.sync="modify_tel_dialog1"
                    width="380px"
            >
                <hr style="margin: 10px;width: 100%;">
                <div style="width: 300px;margin:30px auto 0 auto">
                    <span style="font-size: 18px;color: #16161D;line-height: 14px;"> 手机验证（{{trans(mobile)}}）</span>
                    <el-input style="width: 200px;" v-model="tel" placeholder="请输入内容"></el-input>
                    <!--                    <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span1" @click="countDown">{{content}}</el-button>-->
                    <el-button  :id="btn_code"    @click="countDown" >{{content}}</el-button>
                    <el-button  style="margin-top:10px;margin-bottom:170px;width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin-left: 0" @click="to_tel_modi2">下一步</el-button>
                    <el-steps :active="1" style="margin-top:10px" >
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
                    <el-form :model="modify_tell" :rules="rules" ref="mod_tell" >

                           <table> <tr> <td>
                    <el-select v-model="prefix" placeholder="请选择" style="margin-bottom: 18px;" >
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                           </td> <td>

                        <el-form-item  prop="mod_tel" style="margin-left:0">
                             <el-input style="width: 200px;margin-left: 10px" v-model="modify_tell.mod_tel" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                           </td>  </tr></table>
                           <table> <tr> <td>
                        <el-form-item  prop="mod_code" style="margin-left:0">
                            <el-input style="width: 200px;margin-top: 2px" v-model="modify_tell.mod_code" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                           </td> <td>

                    <!--                <el-button  :class="{disabled: !this.canClick}" style="width: 100px;background-color: #3254DC;color:white;height: 40px"  id="code_span" @click="countDown" >{{content}}</el-button>-->
                    <el-button  :id="btn_code"    @click="countDown"  style="height: 44px;margin-top: -5px">{{content}}</el-button>
                    </td>  </tr></table>
                    <el-button  style="width: 300px;height: 50px;background-color: #3254DC;color:white;font-size: 16px;margin:15px 0 130px 0" @click="to_tel_modi3">确认绑定</el-button>
<!--                    <el-steps :active="2">-->
<!--                        <el-step id="el-step4" title="验证身份"></el-step>-->
<!--                        <el-step id="el-step5" title="绑定新手机号"></el-step>-->
<!--                        <el-step id="el-step6" title="完成"></el-step>-->
<!--                    </el-steps>-->
                     <div style="height: 90px"></div>
                    </el-form>
                </div>

            </el-dialog>
            <el-dialog
                    title=""
                    :visible.sync="modify_tel_dialog3"
                    width="380px"
            >

                <div style="width: 300px;margin:80px auto 0 auto">
                    <img src="../../assets/images/person/sucess.png" style="width: 58px;height: 58px;margin-left: 120px" alt="">
                       <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">手机号 18888888888</div>
                       <div style="margin-bottom:20px;margin-top:10px;text-align: center;font-size: 20px;color:#16161d">绑定成功！</div>
                    <el-button  style="width: 300px;height: 50px;background-color: #3FB560;color:white;font-size: 16px;margin: 0" @click="countDown">完成</el-button>
<!--                    <el-steps :active="3" style="margin-top: 70px">-->
<!--                        <el-step id="el-step7" title="验证身份"></el-step>-->
<!--                        <el-step id="el-step8" title="绑定新手机号"></el-step>-->
<!--                        <el-step id="el-step9" title="完成"></el-step>-->
<!--                    </el-steps>-->
                  <div style="height: 180px"></div>
                </div>

            </el-dialog>
            <el-dialog

                    :visible.sync="bind_email_ok_dialog"
                    width="380px"
            >

                <div style="width: 200px;margin: 0 auto;">
                    <img src="../../assets/images/person/sucess.png" style="width: 58px;height: 58px;margin-left: 35%" alt="">
                    <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">绑定邮箱成功！</div>



                    <div style="height: 40px"></div>
                </div>

            </el-dialog>
            <el-dialog

                    :visible.sync="mod_pwd_ok_dialog"
                    width="380px"
            >

                <div style="width: 200px;margin: 0 auto;">
                    <img src="../../assets/images/person/sucess.png" style="width: 58px;height: 58px;margin-left: 35%" alt="">
                    <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">修改密码成功！</div>



                    <div style="height: 40px"></div>
                </div>

            </el-dialog>
            <el-dialog

                    :visible.sync="mod_email_ok_dialog"
                    width="380px"
            >

                <div style="width: 200px;margin: 0 auto;">
                    <img src="../../assets/images/person/sucess.png" style="width: 58px;height: 58px;margin-left: 35%" alt="">
                    <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">邮箱修改成功！</div>



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
                mod_intro:true,
                mod_name:true,
                mod_nickname:true,
                mod_head:true,
                login_dialog1:true,
                prefix:'+86',
                email_dialog:false,
                email_dialog2:false,
                modify_pwd_dialog:false,
                modify_tel_dialog1:false,
                modify_tel_dialog2:false,
                modify_tel_dialog3:false,
                bind_email_ok_dialog:false,
                mod_pwd_ok_dialog:false,
                mod_email_ok_dialog:false,
                content:'获取验证码',  // 按钮里显示的内容
                totalTime: 60,     //记录具体倒计时时间
                canClick: true ,//添加canClick
                btn_code:'canCli' ,
                tell:0,
                icon:"el-input__icon el-icon-view",
                passw:"password",
                sex :'男',
                tips:'用户名或密码错误',
                imageUrl: '',
                uname:'',
                phone:'',
                idcard:'',
                fileData: '',
                username:'123',
                fileList:[],
                // nickname: this.$route.params.userInfo.nickname,
                // mobile:this.$route.params.userInfo.mobile,
                nickname:'',
                mobile:'',
                email:'',
                modify_userInfo:false,
                src: '',
                isShow:false,
                formData:'',
                modify_nickname:'',
                introduce:'个人介绍个人介绍个人介绍',
                modify_introduce:'个人介绍个人介绍个人介绍',
                modify_info:false,
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                bind_email:{
                    b_email:''
                },
                mmod_email:{
                    m_email:''
                },
                rules:{
                    b_email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱号', trigger: 'blur' }
                    ],
                    m_email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱号', trigger: 'blur' }
                    ],
                    old_pwd:[
                        { required: true, message: '请输入原密码', trigger: 'blur' },
                    ],
                    new_pwd1:[
                        { required: true, message: '请输入新密码', trigger: 'blur' },
                    ],
                    new_pwd2:[
                        { required: true, message: '请重复输入新密码', trigger: 'blur' },
                    ],
                    mod_tel: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { pattern:/^\d{11}$/, message: '请输入正确的手机号', trigger: 'blur' }
                    ],
                    mod_code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { pattern:/^\d{6}$/, message: '请输入六位验证码', trigger: 'blur'}
                    ],
                },
                modify_pwdd:{
                    old_pwd:'',
                    new_pwd1:'',
                    new_pwd2:'',
                },
                modify_tell:{
                    mod_tel:'',
                    mod_code:'',
                }
            }

        },
        created(){
            this.init1()
            this.init()

        },
        methods:{
            mod_head_before(){
                this.$refs.file_img.click()
                // this.mod_head=false
                //this.submitUpload()
            },
            mod_nickname_before(){
                this.mod_nickname=false
                this.$refs.nickname_input.focus();


            },
            mod_name_before(){
                this.mod_name=false
                this.$refs.name_input.focus();
            },
            mod_introduce_before(){
                this.mod_intro=false
                this.$refs.intro_input.focus();


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
                            this.totalTime = 60
                            this.canClick = true  //这里重新开启
                            this.btn_code = 'canCli'  //这里重新开启
                        }
                    },1000)}
            },
            bbind_email(){
                this.email_dialog=true;

            },
            mod_email(){
                this.email_dialog2=true;
            },
            modify_pwd(){
                this.modify_pwd_dialog=true
            },
            modify_tel(){
                this.modify_tel_dialog2=true
            },
            to_tel_modi2(){
                this.modify_tel_dialog1=false
                this.modify_tel_dialog2=true

            },
            to_tel_modi3(){
                let _this=this
                _this.modify_tel_dialog2=false
                _this.modify_tel_dialog3=true
                setTimeout(function(){
                    window.console.log(963)
                    _this.modify_tel_dialog3=false
                    window.console.log(45663)},1000)
            },
             mod(){
                this.src=''
                 this.isShow=false
             },
            nickname_mod(){

                let that=this
                const tokenStr=window.sessionStorage.getItem('token');
                if(!tokenStr){
                    window.console.log("无token")
                }else {
                    this.$http.post(
                        "auth/modifyUser", {token: tokenStr}, {params: {username: this.nickname}}
                    )
                        .then(function (response) {
                            window.console.log(response);
                            if (response.status == 200) {
                                that.$message.success("修改成功")
                                that.init1()
                            }
                        })
                        .catch(function (error) {
                            window.console.log(error);
                            that.$message.error("服务器错误")
                        });

                }
            },
            uname_mod(){

                    let that=this
                    const tokenStr=window.sessionStorage.getItem('token');
                    if(!tokenStr){
                        window.console.log("无token")
                    }else {
                        this.$http.post(
                            "auth/modifyUser", {token: tokenStr}, {params: {name: this.uname}}
                        )
                            .then(function (response) {
                                window.console.log(response);
                                if (response.status == 200) {
                                    that.$message.success("修改成功")
                                    that.init1()
                                }
                            })
                            .catch(function (error) {
                                window.console.log(error);
                                that.$message.error("服务器错误")
                            });

                    }


            },
            idcard_mod(){
                let that=this
                const tokenStr=window.sessionStorage.getItem('token');
                if(!tokenStr){
                    window.console.log("无token")
                }else {
                    this.$http.post(
                        "auth/modifyUser", {token: tokenStr}, {params: {idcard: this.idcard}}
                    )
                        .then(function (response) {
                            window.console.log(response);
                            if (response.status == 200) {
                                that.$message.success("修改成功")
                                that.init1()
                            }
                        })
                        .catch(function (error) {
                            window.console.log(error);
                            that.$message.error("服务器错误")
                        });

                }
            },
            phone_mod(){
                let that=this
                const tokenStr=window.sessionStorage.getItem('token');
                if(!tokenStr){
                    window.console.log("无token")
                }else {
                    this.$http.post(
                        "auth/modifyUser", {token: tokenStr}, {params: {phone: this.phone}}
                    )
                        .then(function (response) {
                            window.console.log(response);
                            if (response.status == 200) {
                                that.$message.success("修改成功")
                                that.init1()
                            }
                        })
                        .catch(function (error) {
                            window.console.log(error);
                            that.$message.error("服务器错误")
                        });

                }
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
                this.mod_head=true;
                this.formData=''

                 this.$refs.file_img.value=''

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
                this.submitUpload()
            },
            init(){
                this.modify_nickname=this.nickname;
                this.modify_introduce=this.introduce;
            },
            init1(){
                    let that=this
                    const tokenStr=window.sessionStorage.getItem('token');
                    if(!tokenStr){
                        window.console.log(123)
                    }else{
                        this.$http.post(
                            "auth/verify",{token:tokenStr}
                        )
                            .then(function(response) {
                                window.console.log(response);
                                if (response.status == 200) {
                                    that.isLogin=true
                                   that.nickname=response.data.username
                                   that.uname=response.data.name

                                   that.idcard=response.data.idcard
                                   that.phone=response.data.phone

                                    // that.roles=response.data.data.roles
                                }
                            })
                            .catch(function(error) {
                                window.console.log(error);
                                that.$message.error("服务器错误")
                            });

                    }

            },
            modify_instance(){
                this.modify_info=true
            },
            trans(tel){
                if(!tel){
                var hide_tel=tel.substr(0,3)+'****'+tel.substr(7)
                return hide_tel
                }
            },
            bang_email(){
                let _this=this
                _this.$refs.bind_email.validate(valid=> {

                    if (!valid) {
                        _this.$message.error("请完善表单")
                    } else {
                _this.email_dialog=false
                _this.bind_email_ok_dialog=true
                setTimeout(function(){
                    window.console.log(963)
                    _this.bind_email_ok_dialog=false
                    window.console.log(45663)},1000)}})
                // const newAixos = Axios.create({
                //     baseURL: 'http://127.0.0.1:8888',
                //     // timeout: 1000,
                // });
                // newAixos.post("/upload",this.formData,)
                //     .then(function(response) {
                //         window.console.log(response);
                //         if (response.status == 200) {
                //             _this.email_dialog=false
                //             _this.bind_email_ok_dialog=true
                //             setTimeout(function(){
                //                 window.console.log(963)
                //                 _this.bind_email_ok_dialog=false
                //                 window.console.log(45663)},1000)
                //         }
                //     })
                //     .catch(function(error) {
                //         window.console.log(error);
                //         this.$message.success("服务器错误")
                //     });
            },
            modd_email(){
                let _this=this
                _this.$refs.mod_email.validate(valid=> {

                    if (!valid) {
                        _this.$message.error("请完善表单")
                    } else {
                        _this.email_dialog2=false
                        _this.mod_email_ok_dialog=true
                        setTimeout(function(){
                            window.console.log(963)
                            _this.mod_email_ok_dialog=false
                            window.console.log(45663)},1000)}})
                // const newAixos = Axios.create({
                //     baseURL: 'http://127.0.0.1:8888',
                //     // timeout: 1000,
                // });
                // newAixos.post("/upload",this.formData,)
                //     .then(function(response) {
                //         window.console.log(response);
                //         if (response.status == 200) {
                //             _this.email_dialog=false
                //             _this.bind_email_ok_dialog=true
                //             setTimeout(function(){
                //                 window.console.log(963)
                //                 _this.bind_email_ok_dialog=false
                //                 window.console.log(45663)},1000)
                //         }
                //     })
                //     .catch(function(error) {
                //         window.console.log(error);
                //         this.$message.success("服务器错误")
                //     });
            },
            mod_pwd(){

                let _this=this


                // _this.$refs.bind_email.validate(valid=> {
                //
                //     if (!valid) {
                //         _this.$message.error("请完善表单")
                //     } else {
                //
                //         _this.modify_pwd_dialog=false
                //         _this.mod_pwd_ok_dialog=true
                //         setTimeout(function(){
                //             window.console.log(963)
                //             _this.bind_email_ok_dialog=false
                //             window.console.log(45663)},1000)
                //     }
                // })
                const tokenStr=window.sessionStorage.getItem('token');
                 _this.$http.post("auth/updatePwd",{token:tokenStr,oldPwd:this.modify_pwdd.old_pwd,newPwd:this.modify_pwdd.new_pwd1}).then(res=>{
                     if(res.data==1){
                         _this.modify_pwd_dialog=false
                         _this.mod_pwd_ok_dialog=true
                         setTimeout(function(){
                             window.console.log(963)
                             _this.mod_pwd_ok_dialog=false
                             window.console.log(45663)},1000)
                     }else if(res.data==0){
                         _this.modify_pwd_dialog=false
                         _this.$message.error("密码修改失败")
                     }
                 })
                // const newAixos = Axios.create({
                //     baseURL: 'http://127.0.0.1:8888',
                //     // timeout: 1000,
                // });
                // newAixos.post("/upload",this.formData,)
                //     .then(function(response) {
                //         window.console.log(response);
                //         if (response.status == 200) {
                //             _this.email_dialog=false
                //             _this.bind_email_ok_dialog=true
                //             setTimeout(function(){
                //                 window.console.log(963)
                //                 _this.bind_email_ok_dialog=false
                //                 window.console.log(45663)},1000)
                //         }
                //     })
                //     .catch(function(error) {
                //         window.console.log(error);
                //         this.$message.success("服务器错误")
                //     });
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
        padding-bottom: 50px;
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
        font-size: 15px;
        color: #8c939d;
        width: 40px;
        height:4px;
        line-height: 40px;
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
    #b_email >>> .el-form-item__content{
        margin-left: 0;
    }
    .person_info{
        color:#606879;
        margin-right: 20px;
        width: 60px;
        display:inline-block;
        font-size: 14px;
    }
    #personal_infomation >>> .el-input__inner{
        padding:0;
        border: 0;
    }
    #personal_infomation >>> .el-textarea__inner{
        padding:0;
        border: 0;
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
    .del-img{
        width: 15px;
        display: inline-block;
        /*background-image: url("../../assets/images/header/delete.png");*/
        list-style-image: url("../../assets/images/header/delete.png");
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
    #login_dia >>> .el-select .el-input .el-select__caret{
        margin-top: 10px;
        vertical-align: top;
    }
    #code_span1 >>> span{
        margin-left: -4px;
    }
    #code_span1 {
        height: 44px;
    }
    #mod_pwd >>> .el-input__inner{
        margin-top: 0;
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





    #login_dia >>> .el-input__inner{
        height: 44px;
        vertical-align: top;
           margin-top: 0;

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
        vertical-align: top;


    }
    #login_dia >>> .el-form-item{
        margin-bottom: 12px;
    }
    #login_dia >>> .el-form-item__error{
        padding-top: 5px;
        padding-left: 10px;
        font-size: 9px;
    }
    #login_dia >>> .el-select .el-input .el-select__caret{
        margin-top: 9px;
        vertical-align: top;
    }
    #login_dia >>> .el-select-dropdown.el-popper.el-select-dropdown__list{
        width: 300px;
    }
    #login_dia >>> .el-select-dropdown__item{
        width: 300px;
    }
    #login_dia >>> .el-scrollbar__wrap{
        width: 300px;
    }
</style>
