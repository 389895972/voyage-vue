<template>
    <el-container>
        <div class="home-container">
            <div class="content">
            <div> <el-button @click="back">&larr;返回</el-button></div>

                <div class="titles" >
                    <div class="title" style="display: flex;justify-content: space-between"> 实例详情
                    <el-button type="primary" @click="instancedialog=true" style="width: 180px;height: 50px;font-size: 16px;color:white;background-color:#3254DC ">进入控制台</el-button>
                </div>
                </div>

                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block"></div>
                    <span style="font-size: 16px;"> 基本信息</span>
                </div>
<!--                <div class="table_product">-->
                <el-table :header-cell-style="{background:'#E4E7EB',color:' #16161D'}"
                          :data="tableData"
                          style="width: 100%">
                    <el-table-column
                            prop="device_id"
                            label="设备ID"
                            width="300px">
                    </el-table-column>
                    <el-table-column
                            prop="device_name"
                            label="设备名称"
                            width="200px">
                    </el-table-column>
                    <el-table-column label="">
<!--                        <template slot-scope="scope">-->
                        <template >


                            <!--                                               {{scope.row}}-->
                            <el-button type="primary" icon="el-icon-edit" size="mini" @click="modify_instance" style="color:blue;background-color:white;border: white;font-size:14px">修改</el-button>
                            <el-button type="primary" icon="el-icon-copy-document" size="mini"  id="bbtn" :data-clipboard-text="tableData[0].device_name" style="color:blue;background-color:white;border: white;font-size:14px"
                                       @click="copy1">复制</el-button>

<!--                            <el-button type="primary" icon="el-icon-edit" size="mini"    @click="modifydialog = true" >修改</el-button>-->
<!--                            <el-button type="success" icon="el-icon-copy-document" size="mini"  id="bbtn" :data-clipboard-text="tableData[0].device_name"-->
<!--                                       @click="copy1">复制</el-button>-->

                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="device_model"
                            label="设备型号">
                    </el-table-column>

                </el-table>
                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-top: 20px"></div>
                    <span style="font-size: 16px;"> 配置信息</span>
                </div>
                <div class="device_configure">
                 <table style="margin-top: 15px;font-size: 14px">
                     <tr style="margin-top: 10px">
                         <td>CPU:</td>
                         <td  style="width: 500px;text-align: left;padding-left: 15px;">{{cpu}}</td>
                     </tr>
                     <tr style="margin-top: 10px;">
                         <td>Memory:</td>
                         <td style="width: 500px;text-align: left;padding-left: 15px;" >{{memory}}</td>
                     </tr>
                     <tr>
                         <td>Disk:</td>
                         <td style="width: 500px;text-align: left;padding-left: 15px;">{{disk}}</td>
                     </tr>
                     <tr>
                         <td>Gpu:</td>
                         <td style="width: 500px;text-align: left;padding-left: 15px;">{{gpu}}</td>
                     </tr>
                     <tr>
                         <td>IP:</td>
                         <td style="width: 500px;text-align: left;padding-left: 15px;">{{ip}}</td>
                     </tr>
                 </table>
                </div>
                <div class="product_name">
                    <div style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-top: 30px"></div>
                    <span style="font-size: 16px;"> 下载密钥</span>
                </div>
                <div style="background-color: #E4E7EB;width: 336px;margin-top: 15px">
                <el-input  v-model="secret_key" class="footer_input" size="mini"></el-input>
                <!--          <span class="footer_input"> {{email}}</span>-->
                <el-button
                        type="primary"
                        class="btn"
                        size="mini"
                        :data-clipboard-text="secret_key"
                        style="background-color: #3FB560;color: white;width: 70px"
                        @click="copy"
                >  去下载</el-button></div>

                <el-dialog
                        title="连接到您的实例"
                        :visible.sync="instancedialog"
                        width="860px" heigth="800px" font-size="30px"
                >
                    <hr>
                    <div style="display: flex;font-weight: bold">

                        <span style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-right: 5px"></span>
                        <span style="font-size: 16px">连接方式：</span>
                    </div>
                    <div style="display: grid; margin-left:45px;margin-top: 20px">

                        <el-radio v-model="radio" label="1" style="font-size: 16px">本地SSH访问</el-radio>
                        <el-radio v-model="radio" label="2" style="margin-top: 15px;font-size: 16px;margin-bottom: 20px">WEB页面访问</el-radio>

                    </div>
                    <hr>


                    <div v-if="radio==='1'">
                        <span style="width: 5px;height:18px;background-color:#5171F0 ;display: inline-block;margin-right: 5px"></span>
                        <span style = "font-weight:bold;font-size: 16px">要访问您的实例：</span>
                        <div style="margin-left:55px;font-size: 16px;margin-top: 20px">
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
                    <div v-else style="height:165px;padding-top: 35px ;padding-left: 40px">
                        <el-button @click="uu" style="width: 180px;height: 50px;color:white;background-color: #3254DC;margin-right: 20px">访问设备终端</el-button>
                        <el-button type="primary" @click="uu" style="width: 180px;height: 50px;color:white;background-color: #3254DC">访问设备桌面</el-button>
                    </div>
                    <span slot="footer" class="dialog-footer">
<!--                <el-button @click="instancedialog = false">取 消</el-button>-->
                        <!--               <el-button type="primary" @click="instancedialog = false">确 定</el-button>-->
                </span>
                </el-dialog>


            <el-dialog id="instance_edit"
                    title="编辑实例详情"
                    :visible.sync="modifydialog"
                    width="360px" height="200px" @close="closedDialog"
                    >
                <el-form ref="Dialogform"  :rules="rules" :model="tableData[0]"  :label-position="'top'" label-width="80px">
                    <el-form-item prop="ins" >
                        <el-input  v-model="tableData[0].ins"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="modifydialog = false" style="width: 46%">取 消</el-button>
                <el-button style="width: 46%" type="primary" @click="modified_instance">确 定</el-button>
                </span>
            </el-dialog>
<!--            <div class="title"> 配置信息</div>-->
<!--            <div>-->
<!--                <div class="labels">CPU:{{id}}</div>-->
<!--                <div class="labels">Memory:{{id}}</div>-->
<!--                <div class="labels">Disk:{{id}}</div>-->
<!--                <div class="labels">Gpu:{{id}}</div>-->
<!--                <div class="labels">IP:{{id}}</div>-->
<!--            </div>-->
<!--            <div class="title"> 下载私钥</div>-->
<!--            <div style="height: 400px">-->
<!--                <div class="labels"><a href="#">链接地址</a></div>-->
<!--            </div>-->


            </div>
        </div>
    </el-container>
</template>
<script>
    export default {
        data(){
            return{
                orderId:this.$route.params.orderId,
                 secret_key:'www.123456789.com',
                // device_id:'2019110617444500',
                //  instance:'我是设备名称我是设备名称',
                // device_model:'WES1343452',
                ip:'192.168.12.10',
                gpu:'Adreno 630 GPU',
                disk:'ABCD1234',
                memory:'BGB LPDDR4',
                cpu:'Qualcomm SDA845,8X Qualcomm Kryo 385 2.8GHz',
                radio:"1",
                id:111,
                instancedialog:false,

                modifydialog: false,
                instance:'我是设备名称我是设备名称',
                ins:'',
                rules: {
                    ins: [
                         { required: true, message: '请输入实例名称', trigger: 'blur' },
                        { min: 2, max: 128, message: '长度限制在 2 到 128 个字符', trigger: 'blur' }
                    ],
                },
                tableData:[
                    {
                        device_id:'2019110617444500',
                        device_name:'我是设备名称我是设备名称',
                        device_model:'WES1343452',
                        ins:''
                    }
                ]
            }
        },
        methods:{
            go(){

            },

            init(){
                this.tableData[0].ins=this.tableData[0].device_name;
            },
            modify_instance(){
               this.modifydialog = true
                this.tableData[0].ins=this.tableData[0].device_name
            },
            modified_instance(){
                this.$refs.Dialogform.validate(valid=>{
                    window.console.log(valid)
                    if(valid){
                        this.modifydialog = false;
                        this.tableData[0].device_name= this.tableData[0].ins;
                    }else{
                        this.$message.error("请正确填写实例名称")
                    }

                })


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
            copy1() {
                // var _this = this;
                // var clipboard = new Clipboard(".btn"); //单页面引用
                var clipboard = new this.Clipboard("#bbtn"); //在main.js中引用
                clipboard.on("success", e => {
                    // 释放内存
                    clipboard.destroy();
                    this.$message.success("已复制")
                    window.console.log(e)
                });
                clipboard.on("error", e => {
                    // 不支持复制
                    window.console.log(e)
                    this.Message({
                        message: "该浏览器不支持自动复制",
                        type: "warning"
                    });
                    // 释放内存
                    clipboard.destroy();
                });
            },
            async getInstance() {
                const {data: res} = await this.$http.get('/goodsitem/findAll', {params: {goodsid: this.good_id}})
                // window.console.log(res)
                if (res.code == 20000) {
                    window.console.log(111)
                }
            },
           back(){
            this.$router.go(-1);//返回上一层
         },
        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
    .content{
        width: 1280px;
        background-color: white;
        margin: 40px auto 0 auto;
        padding-bottom: 200px;
    }
    .content >>> .el-input__inner{

        background-color: #E4E7EB;

    }
    .content >>> .el-dialog__title{
        font-size: 30px;
           font-weight: bold;
    }
    #instance_edit >>> .el-dialog__title{
        font-size: 16px;
    }
    .content >>> .el-dialog__header{
        padding-top: 40px;
    }
    .content >>> .el-dialog__body{
        padding-top: 10px;
    }
    .content >>> .el-radio__label{
       font-size: 16px;
    }
    .titles{
        font-weight: bold;
        font-size: 36px;

    }
    .title{
        margin: 20px auto 50px 0;

    }
    .device_configure tr{

        height: 30px;

    }
    .device_configure td{

        height: 40px;
        width: 80px;
        text-align: right;
    }
    .first{
        display: flex;
        justify-content: space-between;
        margin: 10px 80PX;
    }
    /*.title{*/
    /*    width: 90%;*/
    /*    background-color: #D7D7D7;*/
    /*    padding-left: 30px;*/
    /*    margin: 20px auto;*/
    /*    font-size: 21px;*/
    /*    height: 50px;*/
    /*    line-height: 50px;*/
    /*}*/
    .labels{
        width: 50%;
        margin: 15px auto 10px 190px;
        font-size: 20px;
    }
    .footer_input{
        width: 266px;
        /*margin-left: 16%;*/
        margin-top: 5px;
        background-color: #E4E7EB;
    }
</style>