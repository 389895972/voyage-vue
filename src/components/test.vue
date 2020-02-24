<template>

    <div>
<!--        <div class="act-form">-->
<!--            <iframe :src="src" width="400px" height="500px" ref="iframe"></iframe>-->
<!--        </div>-->
        <el-button v-loading="activeLoading"
                   element-loading-spinner="el-icon-loading"
                   element-loading-customClass="iconClass"
                   @click="activeLoading=!activeLoading">test111</el-button>



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



        },
        mounted(){



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
    .el-loading-spinner {
        top: 80%;
        /*margin-top: -21px;*/
        width: 100%;
        text-align: center;
        position: absolute;
    }
</style>
