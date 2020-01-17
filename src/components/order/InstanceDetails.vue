<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>
            <div class="first">
                 <el-tag> ID:{{id}}</el-tag>
                 <el-button type="primary" @click="go">进入控制台</el-button>
            </div>
            <div class="title"> 基本信息</div>
            <div>
                <div class="labels">ID:{{id}}</div>
                <div class="labels">实例名称:{{instance}}<el-button style="margin-left: 10px" type="primary" icon="el-icon-edit" size="small" @click="dialogVisible = true"></el-button></div>
                <div class="labels">ID:{{id}}</div>
            </div>
            <el-dialog
                    title="编辑实例名称"
                    :visible.sync="dialogVisible"
                    width="30%" @close="closedDialog">
                <el-form ref="Dialogform" :model="instance"  :label-position="'top'" label-width="80px">
                    <el-form-item >
                        <el-input  v-model="ins"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
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
        </div>
    </el-container>
</template>
<script>
    export default {
        data(){
            return{
                id:111,
                dialogVisible: false,
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
                this.dialogVisible = false;
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
            }


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