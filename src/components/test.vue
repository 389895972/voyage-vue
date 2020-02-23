<template>
    <div>
<!--        <div class="act-form">-->
<!--            <iframe :src="src" width="400px" height="500px" ref="iframe"></iframe>-->
<!--        </div>-->
        <el-button v-loading="activeLoading" @click="activeLoading=!activeLoading">test111</el-button>

        <el-button @click="test3">test</el-button>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                iframeWin:null,
                src:'http://10.0.20.250:8008',
                isCheck:false,
                activeLoading:false
            }
        },
        methods:{
            test(){

                // var settings = {
                //     "url": "http://10.0.20.250:8008/auth/login/",
                //     "method": "POST",
                //     "timeout": 1000,
                //     "headers": {
                //         "Content-Type": "application/x-www-form-urlencoded",
                //     })                //         'Access-Control-Allow-Origin': '*',
                //         'Access-Control-Allow-Credentials' :true,
                //         'cookie':'sessionid=upaxbl4hj0sci6n5mo60mpt3aq77yxg0;'
                //
                //
                //     },
                //     "data": {
                //         "username": "admin",
                //         "password": "admin"
                //     },
                // };

                // this.$http.get('http://10.0.20.250:8008/auth/login/')
                //     .then(function (res) {
                //         window.console.log(res.headers)
                //     })
                //     .catch()
                // this.$http.request(settings)
                //     .then(function (response) {
                //         window.console.log(response)
                //         // window.location.href = 'http://10.0.20.114:10088/'
                //     }
                // )
                //     .catch(function (error) {
                //         window.console.log(error)



            },
            test2(){
                document.domain='http://10.0.20.250:8008'
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("username", "admin");
                urlencoded.append("password", "admin");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: 'follow'
                };

                fetch("http://10.0.20.250:8008/auth/login/", requestOptions)
                    .then(response => response.text())
                    .then(result => window.console.log(result))
                    .catch(error => window.console.log('error', error));
            },
            test3(){
                this.src="http://10.0.20.250:8008/assets/user-asset/"


            },

        },
        mounted(){
            this.iframeWin = this.$refs.iframe.contentWindow
            // this.iframeWin.addEventListener('message', function (e) {
            //     alert(e.origin);
            // });


        },

    }
</script>
<style scoped>

</style>
<style>
    .tooltipStyle{
        /*background-color: #E84948 !important;*/
        background: #E84948;
        height: 36px;
        min-width: 100px;
        vertical-align: center;

        color: white;
        cursor:pointer;
    }
    .el-popper[x-placement^=top] .popper__arrow{
        border-top-color:#E84948;
    }
    .el-popper[x-placement^=top] .popper__arrow::after{
        border-top-color:#E84948;
    }

</style>
