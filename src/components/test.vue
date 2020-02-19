<template>
    <div  style="display: flex">
        <div style="width: 140px;height: 140px;display: inline-block;margin: 40px 0 100px 15px">




        <div  style="display: flex">
        <div id="img" class="upload-btn common mb_10" v-if="!isShow" style="border:1px solid red;width: 140px;height:140px">
            <label>
                <input type="file"   style="display: none" @change="uploadImg">
                 <i class="el-icon-plus avatar-uploader-icon"></i>
            </label>
        </div>
        <div class="img-list-item common mb_10" v-if="isShow">
            <img :src="src" class="common" style="width: 140px;height: 140px">
            <i class="del-img" @click="forkImage"></i>
        </div>

        <div style="display: inline-block;height: 140px;margin: 40px 0 100px 0">
            <div style="border: 1px solid #E4E7EB;width: 358px;height: 50px;vertical-align: middle;display: table-cell;font-size: 18px;font-weight: bold;padding-left: 15px">
                <el-input style="width: 260px">521</el-input>
                <el-button type="primary" size="mini"  @click="submitUpload" style="color:white;background-color:#3254DC ;border: white;font-size:14px;margin-left:10px ">确定</el-button>
            </div>
            <div style="border: 1px solid #E4E7EB;width: 358px;height: 90px;padding: 10px ">
                <div style="font-size: 14px;font-weight: bold">个人简介</div>

                <el-input type="textarea"> </el-input>
            </div>

        </div>
        <el-button @click="ii">1232</el-button>

    </div>

        </div>



    </div>
</template>
<script >
    import Axios from "axios";
    export default {
        data(){
            return {
                reg:{
                    reg_username:'',
                    name:'',
                },
                reg_username:'',
                src: '',
                isShow:false,
                formData:'',
                rules: {
                    reg_username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            }

        },

        methods:{
            uploadImg (e) {
                let _this = this;
                let files = e.target.files[0];
                if (!e || !window.FileReader) return; // 看支持不支持FileReader
                let reader = new FileReader();
                reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
                reader.onloadend = function () {
                    _this.src = this.result;
                    _this.isShow = true;
                };

                _this.formData = new FormData();
                _this.formData.append('file', files);
                _this.formData.append('username', "123");
                _this.formData.append('introduce', "123");
            },

            forkImage () {
                this.src = '';
                this.isShow = false;
            },
            ii(){

                const newAixos = Axios.create({
                    baseURL: 'http://127.0.0.1:8888',
                    // timeout: 1000,
                });
                newAixos.post("/upload",this.formData,{headers: {'Content-Type': 'multipart/form-data'}})
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
            jjj(file){
                var fileObj = file;
                this.formData = new FormData();
                this.formData.append('file', fileObj);
                this.formData.append('username', "123");
                this.formData.append('introduce', "123");

            }
        }


    };
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
        /*display:none;*/
        color: #8c939d;
        width: 140px;
        height: 140px;
        line-height: 140px;
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