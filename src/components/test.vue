
<template>
    <div>
        <el-button @click="test" >test</el-button>


    </div>
</template>

<script>

    import Axios from "axios";

    export default {
        data(){
            return {

            }
        },
        methods:{
            test(){
                const instance = Axios.create({
                    baseURL: 'http://10.0.20.114:9002',
                    timeout: 3000,
                });
                instance.post("/tbUser/sendSms/15536830820")
                    .then(function(response) {
                    window.console.log(response);
                    if (response.status == 200) {
                        alert("成功");
                    }
                })
                    .catch(function(error) {
                        window.console.log(error);
                        alert("失败");
                    });
            }


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

