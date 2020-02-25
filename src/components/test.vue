<template>
    <div> <h1> 500</h1><button @click="ii">456</button>
        <el-dialog

                :visible.sync="register_ok_dialog"
                width="380px"
        >

            <div style="width: 200px;margin: 0 auto;">
                <div style="margin-top:20px;text-align: center;font-size: 20px;color:#333333">注册成功！</div>



                <div style="height: 40px"></div>
            </div>

        </el-dialog></div>

</template>
<script>
    export default {
        data(){
           return {
               register_ok_dialog:false
           }
        },
        methods:{
            ii(){

                setTimeout(function(){
                    window.console.log(963)
                    this.register_ok_dialog=true
                    window.console.log(45663)},1000)
            }
        }
    }
</script>