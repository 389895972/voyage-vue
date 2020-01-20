
<template>
    <div >

        <el-slider v-model="timestep" :step="1" :format-tooltip="timestepToolTip" show-stops :max="50"></el-slider>


    </div>
</template>
<script>
   export default {
       data() {
           return {
               timestep:10,
               volume: 600,
               toolmsg: ['1 day', '2 day','3 day','4 day','5 day','6 day','7 day','8 day','9 day','10 day',
                   '10 day','11 day','12 day','13 day','14 day','15 day','7 day','16 day','17 day','18 day','19 day','20 day',
                   '21 day','22 day','23 day','24 day','25 day','26 day','27 day','28 day','29 day',
                   '1 month', '2 month','3 month','4 month','5 month','6 month','7 month','8 month','9 month','10 month','11 month',
                   '1 year','2 years','3 years',
               ]
           }
       },
       methods: {
           timestepToolTip(index) {
               return this.toolmsg[index / 1]
           }
       }
       // data() {
       //     return {
       //
       //     }
       // },
       // methods:{
       //     formatTooltip(val) {
       //         /* 处理小于或大于指定值 */
       //         if (val < 50) {
       //             this.orderForm.bandWidth = 50
       //             this.orderData.bandWidth = 50
       //         } else if(val > 3000){
       //             this.orderForm.bandWidth = 3000
       //             this.orderData.bandWidth = 3000
       //         }
       //
       //         /* 自定义mask文字颜色 */
       //         const customClassValue = document.getElementsByClassName('el-slider__marks-text')
       //         for (let i = 0; i < customClassValue.length; i++) {
       //             let value = customClassValue[i].innerHTML
       //             /* 去除Masks的单位(1000M => 1000) */
       //             value = value.substring(0, value.length - 1)
       //
       //             /* 当滑块的值大于mask时改变颜色 */
       //             if (val >= value) {
       //                 customClassValue[i].style.color = '#FFFFFF'
       //             } else {
       //                 customClassValue[i].style.color = '#717171'
       //             }
       //         }
       //
       //         /* Tooltip增加单位 */
       //         return val + 'M'
       //     }
       // }
   }
</script>
<style scoped>
    /*.el-form-item__content {*/
    /*.el-slider {*/
    /*.el-slider__input {*/
    /*    margin-top: 0;*/
    /*}*/
    /*.el-slider__runway {*/
    /*    height: 32px;*/
    /*    margin-top: 0;*/
    /*    margin-bottom: 0 !important;*/
    /*    background-color: #FFFFFF;*/
    /*    border: 1px solid #DCDFE6;*/
    /*.el-slider__bar {*/
    /*    height: 31px;*/
    /*}*/
    /*.el-slider__button-wrapper {*/
    /*    top: 0;*/
    /*    height: 32px;*/
    /*.el-slider__button {*/
    /*    width: 4px;*/
    /*    height: 31px;*/
    /*    border-radius: 0;*/
    /*    background: #FFFFFF;*/
    /*    border: solid 2px #0068A5;*/
    /*}*/
    /*}*/
    /*.el-slider__stop {*/
    /*    width: 1px;*/
    /*    height: 31px;*/
    /*    border-radius: 0;*/
    /*    background-color: #DCDFE6;*/
    /*}*/
    /*.el-slider__marks-text {*/
    /*    color: #717171;*/
    /*    margin-top: 0;*/
    /*    transform: translateX(-115%);*/
    /*}*/
    /*}*/
    /*}*/
    /*}*/

</style>