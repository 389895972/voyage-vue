<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt="">
            </div>

            <div class="main">
                <div class="first">
                    <div  id="aikit_img_div" class="col-md-8 col-xs-12" style="background-color: white;padding: 0;height:100%">
                        <img src="../../assets/images/aikit1.png" alt=""  width="100%" >
                    </div>
                    <div id="aikit_ours" class="col-md-4 col-xs-12" >
                        <div class="aikit_title">Thundercomm TurboX  <SUP>TM</SUP> AI  KIT</div>
                        <div class="aikit_introduce">Thundercomm AI Kit is the most powerful on-device AI vision enabled edge device for developers. Thundercomm AI Kit helps developers and terminal manufacture to port their AI algorithm and AI application. It is designed with Qualcomm® SDA845 and provide device for development, algorithm SDK, develop guide and demo code.</div>
                          <div class="aikit_btn">
                              <el-button type="primary">立即购买</el-button>
                              <el-button type="primary">管理设备</el-button>
                          </div>
                    </div>


                </div>
                <div>
                <div class="product">
                    <span class="product_det">商品详情</span>
                    <div class="product_indexs" >
                        <div class="product_index"   >

                        <div class="product_btn" @click="counter3">关键优势</div>
                        <div class="product_btn" @click="counter7">使用示例</div>
                        <div class="product_btn" @click="counter4">产品硬件</div>
                        <div class="product_btn" @click="counter5">产品软件</div>
                            <div class="product_btn" @click="counter1">产品展示</div>
                            <div class="product_btn" @click="counter2">产品接口图</div>
                        <div class="product_btn" @click="counter6">{{$t('nav.document')}}</div>
<!--                            <nav> {{ $t('nav.home') }}  </nav>-->
<!--                            <nav> {{ vm.$t('nav.document') }}  </nav>-->
                       <div> </div>
                        </div>
                    </div>
                    <div class="product_show">
                         <div class="product_show_div" id="i1">产品展示</div>
                        <img class="imgs" src="../../assets/images/aikit_show8.png" alt=""  width="100%" height="100%">
                        <hr class="all_hr">
                    </div>

                    <div class="product_show" id="i2">
                        <div class="product_show_div">产品接口图</div>
                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">
                        <hr class="all_hr">
                    </div>

                    <div class="product_show" id="i3">
                        <div class="product_show_div">关键优势</div>
                        <div class="advantages">
                          <span class="advantages_span1">算法SDK</span>
                          <span class="advantages_span2"> 算法SDK包括一些优化算法和演示应用程序的源代码，如人脸识别和目标检测。开发人员可以使用算法SDK开发自己的人工智能应用程序。此外，开发人员还可以集成自己的AI算法，方便地演示应用程序。</span>
                        <hr class="in_hr">
                        </div>
                        <div class="advantages">
                        <span class="advantages_span1">强大计算</span>
                        <span class="advantages_span2">AI工具包集成了最新的高通六角685 DSP、新的矢量引擎和异构计算(CPU、DSP和GPU)，提供了超过450 GLOP的计算能力来完成4k视频的人工智能可视化处理。</span>
                        <hr  class="in_hr">
                        </div>
                        <div class="advantages">
                        <span class="advantages_span1">柔性视觉解</span>
                        <span class="advantages_span2">支持多种摄像头解决方案，包括内置超高清相机、USB3.0摄像头和IP摄像头。</span>

                        </div>
                        <hr class="all_hr">
                    </div>
                    <div class="product_show" id="i4">
                        <div class="product_show_div">产品硬件</div>
                        <div class="pro_border">
                            <table border="1" style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;">
                            <tbody>
                            <tr style="background-color:#526fe1;color:#fff;font-weight:700;"><td>Module</td><td>Item</td><td>Spec</td></tr>
                            </tbody>
                            <tbody>
                            <tr><td rowspan="4">Computing
                            </td><td>CPU</td><td>Qualcomm SDA845 processor, 8x Qualcomm=C2=AE Kryo=E2=84=A2 385 @ 2.8GHz</td>
                            </tr>
                            <tr><td>GPU</td><td>Adreno 630 GPU</td></tr><tr><td>DSP</td><td>Hexgan 685 DSP</td>
                            </tr>
                            <tr><td>ISP</td><td>Qualcomm Spectra=E2=84=A2 280 image sensor processor</td></tr>
                            <tr><td rowspan="3">Memory</td><td>RAM</td><td>8GB LPDDR4</td></tr>
                            <tr><td>ROM</td><td>64GB UFS2.1</td></tr>
                            <tr><td>SD Card</td><td>Support MicroSD Card</td></tr>
                            <tr><td rowspan="2">Camera</td><td>Built in Camera</td><td>8MP, FOV 120 degree;</td></tr><tr><td>External Camera</td><td><span>USB3.0 camera (accessory, not included in release)</span>=20</td></tr><tr><td rowspan="2">Display</td><td>HDMI</td>                                <td>1x Micro HDMI, 4k Ultra HD</td></tr><tr><td>Type C</td><td>4k Ultra HD</td></tr><tr><td>Video</td><td>VPU</td><td>Support for HDR10, HLG, and H.265 (HEVC) 4k@60fps video capture</td></tr><tr><td rowspan="3">Audio</td><td>Speaker</td><td>1x speaker</td></tr><tr><td>Audio out</td><td>1x Headsetout</td></tr><tr><td>Microphone</td><td>1x microphone</td></tr><tr><td>Wireless Connectivity</td><td>WIFI</td><td>2.4G/5G,802.11 a/b/g/n/ac 2x2 MIMO</td></tr><tr><td rowspan="2">Wired Connectivity</td><td>USB</td><td>3x USB3.0 host, 1x 3.0 Type C</td></tr><tr><td>Ethernet</td><td>1x GbE.</td></tr><tr><td>Debug Port</td><td>Micro USB</td><td>1x Micro USB (connecting to serial port for debug purpose)</td></tr><tr><td>Indicator</td><td>LED</td><td>RGB Led: Power status, WIFI status, Ethernet status;</td></tr><tr><td>Input</td><td>Buttons</td><td>Power key/ Volume up/down key/Camera snapshot key</td></tr><tr><td>Sensors</td><td>9-axis sensor</td><td>Gyroscope &amp; accelerometer &amp; geomagnetic sensor</td></tr><tr><td>Power</td><td>Power charging</td><td>12v DC</td></tr></tbody>
                            </table>
                        </div>
                        <hr class="all_hr">
                    </div>
                    <div class="product_show" id="i5">
                        <div class="product_show_div">产品软件</div>
                        <div class="pro_border">
                        <table border="1px solid" style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;" >
                        <tbody>
                        <tr><th style="text-align:center;font-weight:400;vertical-align:middle;border:1px solid #DCDDE0;background:#526FE1;color:#FFFFFF;">Module</th><th style="text-align:center;font-weight:400;vertical-align:middle;border:1px solid #DCDDE0;background:#526FE1;color:#FFFFFF;">Feature</th>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">OS</td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Android O</td>
                        </tr>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">AI Framework</td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Tensorflow, Tensorflow Lite, Caffe/Caffe2, ONNX,SNPE, Android NN</td></tr>
                        <tr><td rowspan="2" style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">AI Algorithm SDK</td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Face Detection &amp; Face Recognition &amp; Emotion Detection &amp; Age= Detection &amp; Gender Detection algorithm &amp; Eye blink</td>
                        </tr>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Object Detection algorithm</td>
                        </tr>
                        <tr><td rowspan="2" style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">AI Sample Application</td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Face Recognition &amp; Emotion Detection &amp; Age Detection &amp; Gend</td>
                        </tr>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Objection Detection algorithm demo</td>
                        </tr>
                        <tr><td rowspan="3" style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Camera
                        </td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Support USB3.0 Camera, 1080p@30fps
                        </td></tr><tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Ultra HD camera preview, recording and snapshot</td>
                        </tr>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">RTSP Client</td>
                        </tr>
                        <tr><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">Graphic
                        </td><td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;">OpenGLES3.2, OpenCL2.0 full
                        </td></tr>
                        </tbody>
                        </table>
                        </div>
                        <hr class="all_hr">
                    </div>
                    <div class="product_show" id="i6">
                        <div class="product_show_div">文档</div>
                        <button class="download-btn" @click="download">
                        <span>Click Here to Download the Documents</span>
                    </button>

                        <hr class="all_hr1"  >
                    </div>
                </div>

            </div>
            <!--            <div class="footer">-->
            <!--                <div  class="footer_inners">-->
            <!--                    <div class="footer_inner">-->
            <!--                        <span class="footer_span1">CONTACT INFO联系方式</span>-->
            <!--                        <span class="footer_span11">中科创达股份有限公司是智能操作系统产品和技术提供商。自2008年成立依赖，公司致力于提供智能化操作系统系列产品、技术及解决方案。</span>-->
            <!--                    </div>-->
            <!--                    <div class="footer_inner">-->
            <!--                        <span class="footer_span2">(86)10-62662686</span>-->
            <!--                        <span class="footer_span21">biz@thundersoft.com</span>-->
            <!--                        <span class="footer_span22">北京市海淀区清华东路9号院3号楼创达大厦 邮编：100083</span>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
        </div>
    </el-container>


</template>
<script>

  export default {
      data(){
          const vm=window.vm;
          return {
              //home:this.$t('nav.document')
              vm:vm
          }
      },
      methods:{
          download(){
              this.$i18n.locale = 'en'
              //console.log($i18n.locale)
          },
          counter1() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i1");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },

          counter2() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i2");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },
          counter3() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i3");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },
          counter4() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i4");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },
          counter5() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i5");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },
          counter6() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i6");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },
          counter7() {  //counter1是绑定的点击事件名称
              const returnEle = document.querySelector("#i7");  //productId是将要跳转区域的id
              if (returnEle) {
                  returnEle.scrollIntoView(true); // true 是默认的
              }
              document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
          },

      },
  }
</script>
<style scoped>


    .first{
        /*display: flex;*/
        display: inline-block;
        background-color: white;


    }
    #index_pic{
        /*background-image: url("../../assets/images/ailit_bg.png");*/
        /*  background-size: cover;*/
        /*  width: 100%;*/
        /*  height: 445px;*/
        position:relative;

    }


    .main{
        background-color: #cccccc;
        padding: 20px 25px;
    }

    .index_btn{
        display: inline-block;
        position: absolute;
        right: 10px;
        bottom: 100px;
        width: 300px;
        margin-right: 50px;
        /*margin-left: 1300px;*/
        margin-left: auto;
        justify-content: space-between;
    }
    .el-button{
        margin-left: 20px;
    }
    a{
        text-decoration: none;
        margin: 0 55px;
        width: 110px;
    }

    .product_indexs{
        display: flex;
        border: 1px solid;
        background-color: white;
        color: #4A4A4D;
        margin-top: 30px;
        font-size: 21px;
        height: 50px;
        align-items: center;
        overflow: hidden;
    }
    .product_index{
        display: flex;
        margin-left: 50px;


    }
    .product_show{
        /*display: flex;*/
        /*justify-content:space-around;*/
        text-align: center;
        background-color: white;
        width: 100%;
        padding-bottom: 40px;

    }
    .product_show_span{
         margin-top: 50px;
        margin-right: 300px;
        margin-left: 118px;
        font-size: 21px;

        /*margin-top: 50px;*/
        /*margin-right: 130px;*/
        /*margin-left:120px;*/
        /*font-size: 21px;*/
    }
    .product_btn{
        border: 0;
        background-color: white;
        /*font-size: 21px;*/
        margin-left: 50px;
        height: 28px ;
        width: 105px;
    }
    .product{
        margin-top: 40px;
    }
    .product_det{
      font-weight: bold;
        font-size: 21px;

    }
   /*.imgs{*/
   /*   margin: 0 40px;*/
   /*}*/
    .product_show_div{
        width: 200px;
        margin: 0 0 10px 30px;
        /*margin-left: 2.3%;*/
        padding: 10px;
        font-size: 21px;
        font-weight: bold;
    }
    .advantages{
        display:block;
    }
    .advantages_span1{
        display: block;
        /*margin:10px 0 0 115px;*/
        margin-left: 7.5%;
        font-weight: bold;
        font-size: 18px;
        width:118px;
        text-align: left;
    }
    .advantages_span2{
     display: inline-block;
        margin:5px 0 10px 0;
        text-align: left;
        /*display: block;*/
        width: 85%;
    }
    .index_pic_details{
        background-color: white;
        width: 40%;

    }
    .el-table{
        width: 85%;
        margin-right: auto;
        margin-left: auto;
    }
    .pro_border{
        width: 85%;
        margin: 0 auto;
        margin-bottom: 80px;
    }
    .table2{
        border: 1px;
        margin:0px auto;
        padding:0px;
        background-color:#FFFFFF;
        width:100%;color:#454545;
        font-family:Roboto,sans-serif;
        font-size:1em;
    }
    .download-btn{
        border: none;

        line-height:2em;
        color:#fff;
        background-color:#0aa0e8;
        text-align:center;
        font-size:1em;
        border-radius:8px;
        width: 85%;
        margin: 0 auto;
        margin-bottom: 80px;
        cursor:pointer;
    }
    .aikit_title{
        margin: 80px auto 0 0;
        font-size: 21px;
        font-weight: bold;

    }

    .aikit_introduce{
        margin: 40px 20px 0 0;
    }
    .aikit_btn{
        /*margin: 60px  auto 101.5px 0;*/
        margin-top: 60px;
        margin-bottom: 20px;
    }
    #aikit_ours{
        height: 100%;
        background-color: white;
        padding: 0;
    }
</style>
