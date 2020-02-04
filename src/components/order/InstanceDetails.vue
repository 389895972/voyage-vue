<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>
            <div class="first">
                 <el-tag> ID:{{id}}</el-tag>
                 <el-button type="primary" @click="instancedialog=true">进入控制台</el-button>
            </div>
            <div class="title"> 基本信息</div>
            <div>
                <div class="labels">ID:{{id}}</div>
                <div class="labels">实例名称:{{instance}}<el-button style="margin-left: 10px" type="primary" icon="el-icon-edit" size="small" @click="modifydialog = true"></el-button></div>
                <div class="labels">ID:{{id}}</div>
            </div>
            <el-dialog
                    title="编辑实例名称"
                    :visible.sync="modifydialog"
                    width="30%" @close="closedDialog"
                    >
                <el-form ref="Dialogform" :model="instance"  :label-position="'top'" label-width="80px">
                    <el-form-item >
                        <el-input  v-model="ins"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="modifydialog = false">取 消</el-button>
                <el-button type="primary" @click="modified_instance">确 定</el-button>
                </span>
            </el-dialog>
            <div class="title"> 配置信息</div>
            <div>
                <div class="labels">CPU:{{id}}</div>
                <div class="labels">Memory:{{id}}</div>
                <div class="labels">Disk:{{id}}</div>
                <div class="labels">Gpu:{{id}}</div>
                <div class="labels">IP:{{id}}</div>
            </div>
            <div class="title"> 下载私钥</div>
            <div style="height: 400px">
                <div class="labels"><a href="#">链接地址</a></div>
            </div>
            <el-dialog
                    title="提示"
                    :visible.sync="instancedialog"
                    width="45%"
                    >
                <div style="display: flex">


                <span>连接方式：</span>
                <div style="display: grid; margin-left:20px">

                    <el-radio v-model="radio" label="1">本地SSH访问</el-radio>
                    <el-radio v-model="radio" label="2">WEB页面访问</el-radio>
                </div>
                </div>
                <hr>


                    <div v-if="radio==='1'">
                        <h6 style = "font-weight: 900">要访问您的实例：</h6>
                        <div style="margin-left:50px">
                            <p>1)下载自己的秘钥文件(xxx.pem)</p>
                            <p>2)修改秘钥文件权限</p>
                            <p style="text-indent: 20px">sudo chmod 600 xxx.pem</p>
                            <p>3)本地ssh登录：</p>
                            <p style="text-indent: 20px">ssh -i xxx.pem -p 2222 username@10.0.20.250</p>
                            <p>4)登录后可根据提示查看自己当前可访问的设备，或直接输入设备IP登录到设备</p>
                            <span>示例：</span>
                            <p style="text-indent: 20px;">chmod 600 baijt.pem</p>
                            <p style="text-indent: 20px;">ssh -i baijt.pem -p 2222 baijt@10.0.20.250</p>
                            <p style="text-indent: 20px">>10.0.10.100</p>
                            即可从本地以SSH的方式登录到IP为10.0.10.100的设备。
                        </div>
                        </div>
                    <div v-else >
                        <a style="display: block;text-indent: 80px" href="">访问设备终端</a>
                        <a style="display: block;text-indent:80px" href="">访问设备桌面</a>
                    </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="instancedialog = false">取 消</el-button>
               <el-button type="primary" @click="instancedialog = false">确 定</el-button>
                </span>
            </el-dialog>


        </div>
    </el-container>
</template>
<script>
    export default {
        data(){
            return{
                radio:"1",
                id:111,
                instancedialog:false,
                modifydialog: false,
                instance:'aikit001',
                ins:'',
            }
        },
        methods:{
            go(){

            },
            init(){
                this.ins=this.instance;
            },
            modified_instance(){
                this.modifydialog = false;
                this.instance = this.ins;

               // const res= this.$http.get('/xxx',{params:{Instance_name:this.ins}})
               //  if(res.code===200){
               //      this.instance = this.ins;
               //      this.$message.success("更改成功");
               //  }else{
               //      this.$message.error("更新失败!");
               //  }


            },
            closedDialog(){
                this.$refs.Dialogform.resetFields();
            },


        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
    .first{
        display: flex;
        justify-content: space-between;
        margin: 10px 80PX;
    }
    .title{
        width: 90%;
        background-color: #D7D7D7;
        padding-left: 30px;
        margin: 20px auto;
        font-size: 21px;
        height: 50px;
        line-height: 50px;
    }
    .labels{
        width: 50%;
        margin: 15px auto 10px 190px;
        font-size: 20px;
    }
</style>