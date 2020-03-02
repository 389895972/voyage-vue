<template>
  <el-container>
    <div class="home-container">

      <div class="aikit_body">
         <div class="aikit_pic">

           <div class="aikit_body_title">
             Thundercomm TurboX
             <SUP>TM</SUP>AI套件
             <div class="content">
             <p>Thundercomm AI Kit是面向开发人员的功能最强大的设备上具有AI视觉功能的边缘设备。</p>
             <p> Thundercomm AI Kit可帮助开发人员和终端制造商移植其AI算法和AI应用程序。 </p>
             </div>
             <div class="aikit_btn">
               <el-button style="width: 200px;background-color: #3254DC;border-color: #3254DC" type="primary" @click="buy_aikit">立即购买</el-button>
               <el-button style="background-color: #101C3D;color: white;width: 150px" @click="dev_mag">管理设备</el-button>
             </div>
           </div>


         </div>
          <div class="pro_det" id="i1">商品详情</div>

          <div class="pro_show" >
            <div  class="pro_show_div_border">
              <div class="pro_show_div" id="iii"><span >产品优势</span></div>
            </div>
          <div class="pro_advs">
            <span class="adv_span1" >算法SDK</span>
            <span class="adv_span2" >算法SDK包括一些优化算法和演示应用程序的源代码，如人脸识别和目标检测。开发人员可以使用算法SDK开发自己的人工智能应用程序。此外，开发人员还可以集成自己的AI算法，方便地演示应用程序。</span>

          </div>
          <div class="pro_advs">
            <span class="adv_span1">强大计算</span>
            <span
                    class="adv_span2"
            >AI工具包集成了最新的高通六角685 DSP、新的矢量引擎和异构计算(CPU、DSP和GPU)，提供了超过450 GLOP的计算能力来完成4k视频的人工智能可视化处理。</span>

          </div>
          <div class="pro_advs">
            <span class="adv_span1" id="i2">柔性视觉解</span>
            <span class="adv_span2">支持多种摄像头解决方案，包括内置超高清相机、USB3.0摄像头和IP摄像头。</span>
          </div>


        </div>

        <div class="pro_show" >
            <div  class="pro_show_div_border">
                <div class="pro_show_div" ><span >产品规格</span></div>
            </div>
          <div class="pro_advs">
            <span class="adv_span1">产品硬件规格</span>
            <table border="1"
                   style="border:1px solid #F1F3F5;border-collapse:collapse;width:100%;text-align:left;line-height:2em;margin-top: 20px">
              <tbody>
              <tr style="background-color:#E4E7EB;color:black;font-weight:700;font-size: 14px">
                <td>Module</td>
                <td>Item</td>
                <td>Spec</td>
              </tr>
              </tbody>
              <tbody style="font-size: 12px">
              <tr>
                <td rowspan="4">Computing</td>
                <td>CPU</td>
                <td>Qualcomm SDA845 processor, 8x Qualcomm=C2=AE Kryo=E2=84=A2 385 @ 2.8GHz</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>Adreno 630 GPU</td>
              </tr>
              <tr>
                <td>DSP</td>
                <td>Hexgan 685 DSP</td>
              </tr>
              <tr>
                <td>ISP</td>
                <td>Qualcomm Spectra=E2=84=A2 280 image sensor processor</td>
              </tr>
              <tr>
                <td rowspan="3">Memory</td>
                <td>RAM</td>
                <td>8GB LPDDR4</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>64GB UFS2.1</td>
              </tr>
              <tr>
                <td>SD Card</td>
                <td>Support MicroSD Card</td>
              </tr>
              <tr>
                <td rowspan="2">Camera</td>
                <td>Built in Camera</td>
                <td>8MP, FOV 120 degree;</td>
              </tr>
              <tr>
                <td>External Camera</td>
                <td>
                  <span>USB3.0 camera (accessory, not included in release)</span>=20
                </td>
              </tr>
              <tr>
                <td rowspan="2">Display</td>
                <td>HDMI</td>
                <td>1x Micro HDMI, 4k Ultra HD</td>
              </tr>
              <tr>
                <td>Type C</td>
                <td>4k Ultra HD</td>
              </tr>
              <tr>
                <td>Video</td>
                <td>VPU</td>
                <td>Support for HDR10, HLG, and H.265 (HEVC) 4k@60fps video capture</td>
              </tr>
              <tr>
                <td rowspan="3">Audio</td>
                <td>Speaker</td>
                <td>1x speaker</td>
              </tr>
              <tr>
                <td>Audio out</td>
                <td>1x Headsetout</td>
              </tr>
              <tr>
                <td>Microphone</td>
                <td>1x microphone</td>
              </tr>
              <tr>
                <td>Wireless Connectivity</td>
                <td>WIFI</td>
                <td>2.4G/5G,802.11 a/b/g/n/ac 2x2 MIMO</td>
              </tr>
              <tr>
                <td rowspan="2">Wired Connectivity</td>
                <td>USB</td>
                <td>3x USB3.0 host, 1x 3.0 Type C</td>
              </tr>
              <tr>
                <td>Ethernet</td>
                <td>1x GbE.</td>
              </tr>
              <tr>
                <td>Debug Port</td>
                <td>Micro USB</td>
                <td>1x Micro USB (connecting to serial port for debug purpose)</td>
              </tr>
              <tr>
                <td>Indicator</td>
                <td>LED</td>
                <td>RGB Led: Power status, WIFI status, Ethernet status;</td>
              </tr>
              <tr>
                <td>Input</td>
                <td>Buttons</td>
                <td>Power key/ Volume up/down key/Camera snapshot key</td>
              </tr>
              <tr>
                <td>Sensors</td>
                <td>9-axis sensor</td>
                <td>Gyroscope &amp; accelerometer &amp; geomagnetic sensor</td>
              </tr>
              <tr>
                <td>Power</td>
                <td>Power charging</td>
                <td>12v DC</td>
              </tr>
              </tbody>
            </table>
            <span class="adv_span1">产品软件规格</span>
<!--            <table border="1px solid" style="border:1px solid #F1F3F5;border-collapse:collapse;width:100%;text-align:center;line-height:2em;font-size: 14px">-->
            <table border="1px solid" style="border:1px solid #F1F3F5;border-collapse:collapse;width:100%;text-align:left;line-height:2em;margin-top: 20px">

                <tbody>
                <tr style="text-align:left;font-weight:400;vertical-align:middle;border:1px solid #DCDDE0;background:#E4E7EB;color:black;">
                  <th >Module</th>
                  <th >Feature</th>
                </tr>
                </tbody>
                <tbody style="font-size: 12px;text-align:left">
                <tr>
<!--                  <td style="vertical-align:middle;border:1px solid #DCDDE0;text-align:left;">OS</td>-->
                  <td >OS</td>
                  <td >Android O</td>
                </tr>
                <tr>
                  <td >AI Framework</td>
                  <td >Tensorflow, Tensorflow Lite, Caffe/Caffe2, ONNX,SNPE, Android NN</td>
                </tr>
                <tr>
                  <td rowspan="2" >AI Algorithm SDK</td>
                  <td >Face Detection &amp; Face Recognition &amp; Emotion Detection &amp; Age= Detection &amp; Gender Detection algorithm &amp; Eye blink</td>
                </tr>
                <tr>
                  <td
                  >Object Detection algorithm</td>
                </tr>
                <tr>
                  <td rowspan="2"
                  >AI Sample Application</td>
                  <td >Face Recognition &amp; Emotion Detection &amp; Age Detection &amp; Gend</td>
                </tr>
                <tr>
                  <td
                  >Objection Detection algorithm demo</td>
                </tr>
                <tr>
                  <td rowspan="3"
                  >Camera</td>
                  <td >Support USB3.0 Camera, 1080p@30fps</td>
                </tr>
                <tr>
                  <td >Ultra HD camera preview, recording and snapshot</td>
                </tr>
                <tr>
                  <td >RTSP Client</td>
                </tr>
                <tr>
                  <td >Graphic</td>
                  <td >OpenGLES3.2, OpenCL2.0 full</td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
        <div class="pro_show" id="i3">
            <div  class="pro_show_div_border">
                <div class="pro_show_div" ><span >产品特性</span></div>
            </div>
          <img class="imgs" src="../../assets/images/aikit_show8.png" alt width="100%" height="100%"/>
        </div>
        <div class="pro_show" id="i4">
            <div  class="pro_show_div_border">
                <div class="pro_show_div" ><span style="font-size: 13px">教程与文档</span></div>
            </div>
          <span class="adv_span1" style="margin-left: 25px">相关文档</span>
            <div class="product_documents">
                <div class = "product_document">
                    <div class="product_document_left">
                        <img class="document_image" src="../../assets/icons/pdf.png">
                        <span class="document_name">相关操作文档.pdf</span>
                    </div>
                    <div class="product_document_right">
                        <span class="document_size">1MB</span>
                        <span class="document_time">2020/1/23</span>
                        <span><a class="document_link">立即下载</a></span>
                    </div>

                </div>
                <hr class="document_hr">

                <div class = "product_document">
                    <div class="product_document_left">
                        <img class="document_image" src="../../assets/icons/pdf.png">
                        <span class="document_name">相关操作文档.pdf</span>
                    </div>
                    <div class="product_document_right">
                        <span class="document_size">1MB</span>
                        <span class="document_time">2020/1/23</span>
                        <span><a class="document_link">立即下载</a></span>
                    </div>

                </div>
                <hr class="document_hr">

                <div class = "product_document">
                    <div class="product_document_left">
                        <img class="document_image" src="../../assets/icons/pdf.png">
                        <span class="document_name">相关操作文档.pdf</span>
                    </div>
                    <div class="product_document_right">
                        <span class="document_size">1MB</span>
                        <span class="document_time">2020/1/23</span>
                        <span><a class="document_link">立即下载</a></span>
                    </div>

                </div>
                <hr class="document_hr">

                <div v-if="isMore" class="more">
                    <div class = "product_document">
                        <div class="product_document_left">
                            <img class="document_image" src="../../assets/icons/pdf.png">
                            <span class="document_name">相关操作文档.pdf</span>
                        </div>
                        <div class="product_document_right">
                            <span class="document_size">1MB</span>
                            <span class="document_time">2020/1/23</span>
                            <span><a class="document_link">立即下载</a></span>
                        </div>

                    </div>
                    <hr class="document_hr">
                    <el-button class="more_button" @click="showLess">收起 &lt; &lt;</el-button>
                </div>

                <div v-else class="less">
                    <el-button class="more_button" @click="showMore">更多&gt;&gt;</el-button>
                </div>


            </div>
            <span class="adv_span1" style="margin-left: 25px">相关教程</span>
            <el-row>
                <el-col span="8">
                    <div class="vedio_block_left">
<!--                        <img class="vedio_image" src="../../assets/images/AiKit/aikit_vedio.png">-->
                        <div class="vedio_image">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_middle">
<!--                        <img class="vedio_image" src="../../assets/images/AiKit/aikit_vedio.png">-->
                        <div class="vedio_image">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>

                <el-col span="8">
                    <div class="vedio_block_right">
<!--                        <img class="vedio_image" src="../../assets/images/AiKit/aikit_vedio.png">-->
                        <div class="vedio_image">
                            <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                            <span class="vedio_desc"></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
                    <el-row v-if="isMoreVedio">
                        <el-col span="8">
                            <div class="vedio_block_left">
                                <div class="vedio_image">
                                    <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                                    <span class="vedio_desc"></span>
                                </div>
                            </div>
                        </el-col>

                        <el-col span="8">
                            <div class="vedio_block_middle">
                                <div class="vedio_image">
                                    <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                                    <span class="vedio_desc"></span>
                                </div>
                            </div>
                        </el-col>

                        <el-col span="8">
                            <div class="vedio_block_right">
                                <div class="vedio_image">
                                    <span class="vedio_title">AIKIT的实验一OpenCV在AIKIT中</span>
                                    <span class="vedio_desc"></span>
                                </div>
                            </div>
                        </el-col>
                        <div style="width: 100%;text-align: center">
                            <el-button class="more_button" @click="showLessVedio">收起 &lt; &lt;</el-button>
                        </div>

                    </el-row>

                    <el-row v-else>
                        <div style="width: 100%;text-align: center">
                            <el-button class="more_button" @click="showMoreVedio">更多&gt; &gt;</el-button>
                        </div>
                    </el-row>
        </div>
      </div>

<!--      <div class="main">-->
<!--        <div class="first">-->
<!--          <div-->
<!--                  class="col-md-7 col-xs-12 aikit_img_div"-->
<!--                  style="background-color: white;padding: 0;height:100%">-->
<!--            <img src="../../assets/images/aikit1.png"  width="100%" />-->
<!--          </div>-->
<!--          <div id="aikit_ours" class="col-md-4 col-xs-11">-->
<!--            <div class="aikit_title">-->
<!--              Thundercomm TurboX-->
<!--              <SUP>TM</SUP>AI套件-->
<!--            </div>-->
<!--            <div class="aikit_introduce">Thundercomm AI Kit是面向开发人员的功能最强大的设备上具有AI视觉功能的边缘设备。Thundercomm AI Kit可帮助开发人员和终端制造商移植其AI算法和AI应用程序。</div>-->
<!--            <div class="aikit_btn">-->
<!--              <el-button type="primary" @click="buy_aikit">立即购买</el-button>-->
<!--              <el-button type="primary">管理设备</el-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--                            悬浮框-->
        <!-- <div> -->
        <div class="fixTi1" :class="{fixTitle:whether}" v-if="whether">
          <div class="tabs_tabs1 ">
              <div style="margin: 0 auto;width: 1280px;display: flex">
            <el-tabs class="tab_pane" @tab-click="handleClick1">
              <el-tab-pane label="产品优势" name="#i1"></el-tab-pane>
              <el-tab-pane label="产品规格" name="#i2"></el-tab-pane>
              <el-tab-pane label="产品特性" name="#i3"></el-tab-pane>
              <el-tab-pane label="教程与文档" name="#i4"></el-tab-pane>
            </el-tabs>
            <el-tabs class="tab_btn" @tab-click="handleClick1">
              <el-button style="width: 200px;background-color: #3254DC;border-color: #3254DC" type="primary" @click="buy_aikit">立即购买</el-button>
              <el-button style="background-color: white ;color: #3254DC;width: 150px;border-color: #3254DC" type="primary"  @click="dev_mag">管理设备</el-button>
              <!--                                </div>-->
            </el-tabs>
              </div>
          </div>
        </div>

<!--        <div class="product">-->
<!--          <span class="product_det">商品详情</span>-->
<!--          <div class="tabs">-->
<!--            <el-tabs id="iii" class="tabs_1" @tab-click="handleClick">-->
<!--              <el-tab-pane label="产品优势" name="#i1"></el-tab-pane>-->
<!--              <el-tab-pane label="产品规格" name="#i2"></el-tab-pane>-->
<!--              <el-tab-pane label="产品特性" name="#i3"></el-tab-pane>-->
<!--              <el-tab-pane label="教程与文档" name="#i4"></el-tab-pane>-->
<!--            </el-tabs>-->
<!--          </div>-->

<!--          <div class="product_show" id="i1">-->
<!--            <div class="product_show_div">产品优势</div>-->
<!--            <div class="advantages">-->
<!--              <span class="advantages_span1">算法SDK</span>-->
<!--              <span-->
<!--                      class="advantages_span2"-->
<!--              >算法SDK包括一些优化算法和演示应用程序的源代码，如人脸识别和目标检测。开发人员可以使用算法SDK开发自己的人工智能应用程序。此外，开发人员还可以集成自己的AI算法，方便地演示应用程序。</span>-->
<!--              <hr class="in_hr" />-->
<!--            </div>-->
<!--            <div class="advantages">-->
<!--              <span class="advantages_span1">强大计算</span>-->
<!--              <span-->
<!--                      class="advantages_span2"-->
<!--              >AI工具包集成了最新的高通六角685 DSP、新的矢量引擎和异构计算(CPU、DSP和GPU)，提供了超过450 GLOP的计算能力来完成4k视频的人工智能可视化处理。</span>-->
<!--              <hr class="in_hr" />-->
<!--            </div>-->
<!--            <div class="advantages">-->
<!--              <span class="advantages_span1">柔性视觉解</span>-->
<!--              <span class="advantages_span2">支持多种摄像头解决方案，包括内置超高清相机、USB3.0摄像头和IP摄像头。</span>-->
<!--            </div>-->
<!--            <hr class="all_hr" />-->
<!--          </div>-->
<!--          <div class="product_show" id="i2">-->
<!--            <div class="product_show_div">产品规格</div>-->
<!--            <span class="prohard">产品硬件规格</span>-->
<!--            <div class="pro_border">-->
<!--              <table border="1"-->
<!--                     style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;">-->
<!--                <tbody>-->
<!--                <tr style="background-color:#526fe1;color:#fff;font-weight:700;">-->
<!--                  <td>Module</td>-->
<!--                  <td>Item</td>-->
<!--                  <td>Spec</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td rowspan="4">Computing</td>-->
<!--                  <td>CPU</td>-->
<!--                  <td>Qualcomm SDA845 processor, 8x Qualcomm=C2=AE Kryo=E2=84=A2 385 @ 2.8GHz</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>GPU</td>-->
<!--                  <td>Adreno 630 GPU</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>DSP</td>-->
<!--                  <td>Hexgan 685 DSP</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>ISP</td>-->
<!--                  <td>Qualcomm Spectra=E2=84=A2 280 image sensor processor</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td rowspan="3">Memory</td>-->
<!--                  <td>RAM</td>-->
<!--                  <td>8GB LPDDR4</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>ROM</td>-->
<!--                  <td>64GB UFS2.1</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>SD Card</td>-->
<!--                  <td>Support MicroSD Card</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td rowspan="2">Camera</td>-->
<!--                  <td>Built in Camera</td>-->
<!--                  <td>8MP, FOV 120 degree;</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>External Camera</td>-->
<!--                  <td>-->
<!--                    <span>USB3.0 camera (accessory, not included in release)</span>=20-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td rowspan="2">Display</td>-->
<!--                  <td>HDMI</td>-->
<!--                  <td>1x Micro HDMI, 4k Ultra HD</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Type C</td>-->
<!--                  <td>4k Ultra HD</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Video</td>-->
<!--                  <td>VPU</td>-->
<!--                  <td>Support for HDR10, HLG, and H.265 (HEVC) 4k@60fps video capture</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td rowspan="3">Audio</td>-->
<!--                  <td>Speaker</td>-->
<!--                  <td>1x speaker</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Audio out</td>-->
<!--                  <td>1x Headsetout</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Microphone</td>-->
<!--                  <td>1x microphone</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Wireless Connectivity</td>-->
<!--                  <td>WIFI</td>-->
<!--                  <td>2.4G/5G,802.11 a/b/g/n/ac 2x2 MIMO</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td rowspan="2">Wired Connectivity</td>-->
<!--                  <td>USB</td>-->
<!--                  <td>3x USB3.0 host, 1x 3.0 Type C</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Ethernet</td>-->
<!--                  <td>1x GbE.</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Debug Port</td>-->
<!--                  <td>Micro USB</td>-->
<!--                  <td>1x Micro USB (connecting to serial port for debug purpose)</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Indicator</td>-->
<!--                  <td>LED</td>-->
<!--                  <td>RGB Led: Power status, WIFI status, Ethernet status;</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Input</td>-->
<!--                  <td>Buttons</td>-->
<!--                  <td>Power key/ Volume up/down key/Camera snapshot key</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Sensors</td>-->
<!--                  <td>9-axis sensor</td>-->
<!--                  <td>Gyroscope &amp; accelerometer &amp; geomagnetic sensor</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>Power</td>-->
<!--                  <td>Power charging</td>-->
<!--                  <td>12v DC</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--            <hr class="all_hr" />-->
<!--          </div>-->
<!--          <div class="product_show" id="i5">-->
<!--            &lt;!&ndash;                        <div class="product_show_div">产品软件</div>&ndash;&gt;-->
<!--            <span class="prohard">产品软件规格</span>-->
<!--            <div class="pro_border">-->
<!--              <table-->
<!--                      border="1px solid"-->
<!--                      style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;"-->
<!--              >-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <th-->
<!--                          style="text-align:center;font-weight:400;vertical-align:middle;border:1px solid #DCDDE0;background:#526FE1;color:#FFFFFF;"-->
<!--                  >Module</th>-->
<!--                  <th-->
<!--                          style="text-align:center;font-weight:400;vertical-align:middle;border:1px solid #DCDDE0;background:#526FE1;color:#FFFFFF;"-->
<!--                  >Feature</th>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >OS</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Android O</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >AI Framework</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Tensorflow, Tensorflow Lite, Caffe/Caffe2, ONNX,SNPE, Android NN</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          rowspan="2"-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >AI Algorithm SDK</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Face Detection &amp; Face Recognition &amp; Emotion Detection &amp; Age= Detection &amp; Gender Detection algorithm &amp; Eye blink</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Object Detection algorithm</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          rowspan="2"-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >AI Sample Application</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Face Recognition &amp; Emotion Detection &amp; Age Detection &amp; Gend</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Objection Detection algorithm demo</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          rowspan="3"-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Camera</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Support USB3.0 Camera, 1080p@30fps</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Ultra HD camera preview, recording and snapshot</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >RTSP Client</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >Graphic</td>-->
<!--                  <td-->
<!--                          style="vertical-align:middle;border:1px solid #DCDDE0;text-align:center;"-->
<!--                  >OpenGLES3.2, OpenCL2.0 full</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--            <hr class="all_hr" />-->
<!--          </div>-->
<!--          <div class="product_show">-->
<!--            <div class="product_show_div" id="i3">产品特性</div>-->
<!--            <img-->
<!--                    class="imgs"-->
<!--                    src="../../assets/images/aikit_show8.png"-->
<!--                    alt-->
<!--                    width="100%"-->
<!--                    height="100%"-->
<!--            />-->
<!--            <hr class="all_hr" />-->
<!--          </div>-->
<!--          <div class="product_show" id="i4">-->
<!--            <div class="product_show_div">相关文档</div>-->
<!--            <button class="download-btn" @click="download">-->
<!--              <span>Click Here to Download the Documents</span>-->
<!--            </button>-->
<!--            <hr class="all_hr1" />-->
<!--          </div>-->
<!--          &lt;!&ndash;                    <div class="product_show" id="i2">&ndash;&gt;-->
<!--          &lt;!&ndash;                        <div class="product_show_div">产品接口图</div>&ndash;&gt;-->
<!--          &lt;!&ndash;                        <img src="../../assets/images/aikit_jiekou.png" alt="" width="100%" height="100%">&ndash;&gt;-->
<!--          &lt;!&ndash;                        <hr class="all_hr">&ndash;&gt;-->
<!--          &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        </div>-->
      </div>



<!--       </div> -->
<!--    </div>-->
  </el-container>
</template>
<script>
export default {
  data() {
    const vm = window.vm;
    return {
      //home:this.$t('nav.document')
      vm: vm,
      whether: false,
      curId: 0,
        isMore:false,
        isMoreVedio:false
    };
  },

  methods: {
      dev_mag(){
          const tokenStr=window.sessionStorage.getItem('token');

          if(!tokenStr){
              this.$message.error("请先登录！")
              this.login_dialog1=true
          }else {
              this.$router.push(
                  {
                      path: '/instance',

                  }
              );
          }
      },
    download() {
      this.$i18n.locale = "en";
      // console.log($i18n.locale)
    },
    counter1() {
      //counter1是绑定的点击事件名称
      const returnEle = document.querySelector("#i1"); //productId是将要跳转区域的id
      if (returnEle) {
        returnEle.scrollIntoView(true); // true 是默认的
      }
      document.querySelector("counter1").scrollIntoView(true); //这里的counter1是将要返回地方的id
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const w = document.getElementById("iii");
      // window.console.log(w.offsetTop);
      // var scrollTop = w.scrollTop;
      // window.console.log('aaa'+scrollTop);
      //alart(scrollTop);
      if (scrollTop > w.offsetTop) {
        this.whether = true;
      } else {
        this.whether = false;
      }
    },
    handleClick(tab) {
      document.querySelector(tab.name).scrollIntoView({
        behavior: "smooth"
      });
    },
    handleClick1(tab) {
      document.querySelector(tab.name).scrollIntoView(true);
    },
    buy_aikit() {
        const tokenStr=window.sessionStorage.getItem('token');

        if(!tokenStr){
            this.$message.error("请先登录！")
            this.login_dialog1=true
        }else {
            this.$router.push(
                {
                    path: '/buy',
                    query: {
                        name: 'AI KIT',
                        good_id: 1682320,
                    }
                }
            );
        }
    },
      showMore(){
          this.isMore=true;
      },
      showLess(){
          this.isMore=false;
      },
      showMoreVedio(){
          this.isMoreVedio=true;
      },
      showLessVedio(){
          this.isMoreVedio=false;
      }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);

  },
  created: function(){
    // this.$emit('header',false);
  }

};
</script>
<style   lang="less" scoped>
.first {
  /*display: flex;*/
  display: inline-block;
  background-color: white;
}
#index_pic {
  /*background-image: url("../../assets/images/ailit_bg.png");*/
  /*  background-size: cover;*/
  /*  width: 100%;*/
  /*  height: 445px;*/
  position: relative;
}

.main {
  background-color: white;
  /*padding: 25px 25px;*/
}

.index_btn {
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
.el-button {
  margin-left: 20px;
}
a {
  text-decoration: none;
  margin: 0 55px;
  width: 110px;
}

.product_indexs {
  display: flex;
  border: 1px solid;
  background-color: white;
  color: #4a4a4d;
  margin-top: 30px;
  font-size: 21px;
  height: 50px;
  align-items: center;
  overflow: hidden;
}
.product_index {
  display: flex;
  margin-left: 25px;
}
.product_show {
  /*display: flex;*/
  /*justify-content:space-around;*/
  text-align: center;
  background-color: white;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 10px;
}
.product_show_span {
  margin-top: 50px;
  margin-right: 300px;
  margin-left: 118px;
  font-size: 21px;

  /*margin-top: 50px;*/
  /*margin-right: 130px;*/
  /*margin-left:120px;*/
  /*font-size: 21px;*/
}
.product_btn {
  border: 0;
  background-color: white;
  /*font-size: 21px;*/
  margin-left: 30px;
  height: 28px;
  /*width: 160px;*/
  cursor: pointer;
}
.product {
  margin-top: 40px;
}
.product_det {
  font-weight: bold;
  font-size: 21px;
}

.product_show_div {
  width: 200px;
  margin: 0 0 10px 30px;
  /*margin-left: 2.3%;*/
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  text-align: left;
}
.advantages {
  display: block;
}
.advantages_span1 {
  display: block;
  /*margin:10px 0 0 115px;*/
  margin-left: 7.5%;
  font-weight: bold;
  font-size: 18px;
  width: 118px;
  text-align: left;
}
.advantages_span2 {
  display: inline-block;
  margin: 5px 0 10px 0;
  text-align: left;
  /*display: block;*/
  width: 85%;
}
.index_pic_details {
  background-color: white;
  width: 40%;
}
.el-table {
  width: 85%;
  margin-right: auto;
  margin-left: auto;
}
.pro_border {
  width: 85%;
  margin: 0 auto;
  margin-bottom: 80px;
}
.table2 {
  border: 1px;
  margin: 0px auto;
  padding: 0px;
  background-color: #ffffff;
  width: 100%;
  color: #454545;
  font-family: Roboto, sans-serif;
  font-size: 1em;
}
.download-btn {
  border: none;

  line-height: 2em;
  color: #fff;
  background-color: #0aa0e8;
  text-align: center;
  font-size: 1em;
  border-radius: 8px;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 80px;
  cursor: pointer;
}
.aikit_title {
  margin: 40px auto 0 0;
  font-size: 21px;
  font-weight: bold;
}

.aikit_introduce {
  margin: 40px 5px 0 0;
}
.aikit_btn {
  /*margin: 60px  auto 101.5px 0;*/
  margin-top: 60px;
  margin-bottom: 20px;
}
#aikit_ours {
  height: 100%;
  background-color: white;
  padding: 0;
  margin-left: 5%;
  margin-top: 0.5%;
}
#aikit_ours1 {
  height: 100%;
  background-color: white;
  padding: 0;
  margin-left: 5%;
  margin-top: 0.5%;
}
.aikit_img_div {
}
.prohard {
  display: block;
  /*margin:10px 0 0 115px;*/
  margin-left: 7.5%;
  font-weight: bold;
  font-size: 18px;
  width: 118px;
  text-align: left;
  margin-bottom: 15px;
}
.fixTitle {
  position: fixed;
  top: 0;
  display: flex;
}
.fixTitle1 {
  background-color: #cccccc;
  width: 97.3%;
  padding: 0;
  margin: 0;
  z-index: 5;
}
.tabs {
  background-color: white;
  padding-left: 1.2%;
  padding-top: 10px;
  padding-right: 7.5%;
  font-size: 21px;
  margin-top: 40px;
  border: 1px solid #0f0f0f;
}

/*!*.tabs_1 {*!*/
/*!*    font-size: 50px ;*!*/
/*!*}*!*/
/*.el-tabs_item{*/
/*    font-size: 50px ;*/
/*}*/


  .aikit_pic{
     background-image: url("../../assets/images/aikit_pic.png");
     height: 450px;
     background-repeat: no-repeat;
    background-size: 100% 100%;

  }
  .aikit_body{
    width: 100%;
  }
  .aikit_body_title{
    color: white;
    font-size: 36px;
    /*margin:  3% 26.1% 7.7% 46.8%;*/
    margin-left: 46.8%;
    padding-top: 6%;
  }
.aikit_body_title p{
  font-size:14px ;

}
.aikit_body_title .content{
   margin-top: 10px;
}
  .pro_det{
      /*width: 62.5%;*/
      width: 1280px;
      margin: 0 auto;
    font-weight: bold;
    font-size: 36px;
    margin-top: 50px;
  }
.pro_show{
   /*width: 62.4%;*/
   width: 1280px;
  margin: 0 auto;
}
.pro_show td,th{
  padding-left: 15px;
}
.pro_show_div{

  font-weight: bold;

    border-bottom: 44px solid #3254DC;
    border-left: 30px solid #3254DC;
    border-right: 30px solid transparent;
    width: 126.72px;
    position: relative;
    /*box-shadow: #2aabd2 2px 2px 2px;*/

}
.pro_show_div span{
   position: absolute;
    color: white;
    top:13px;
   font-size: 16px;

}
.pro_show_div_border{
    border-bottom: 1.5px solid #3254DC;
    margin-top: 20px;
}
.pro_advs{
  margin-left: 2.8%;
}

  .adv_span2{
     /*margin-left: 50px;*/
    margin-top: 10px;
      /*margin-left: 15px;*/
      text-align: left;
      /*text-indent: -7rem;*/
    font-size: 12px;
  }
  .adv_span1{
      display: block;
      /*margin:10px 0 0 115px;*/
      /*s*/
      font-weight: bold;
      font-size: 14px;
      width: 400px;
      text-align: left;
      /*margin-left: 13px;*/
       margin-top: 30px;
      margin-bottom: 6px;

  }

    .fixTi1 {

        width: 100%;
        padding: 0;
        margin: 0;
        z-index: 5;
    }
.tabs_tabs1 {
    display: flex;
    justify-content: space-between;
    background-color: white;
    /*padding-left: 16.6%;*/
    padding-top: 10px;
    /*padding-right: 16.6%;*/
    font-size: 18px;
    /*margin-top: 10px;*/
    margin-bottom: 10px;
    box-shadow:2px 2px 10px #909090;
    width: 100%;
}


     /*教程与文档相关*/
.product_documents{
    display: block;
    width: 100%;
    margin-top: 20px;
}
.product_document{
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: inline-flex;
    margin-left: 20px;
}
.product_document_left{

}
.product_document_right{
    text-align: right;
}
.document_image{
    width: 28px;
    height: 29px;
}
.document_name{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1F1F25;
    margin-left: 10px;
}
.document_size{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #16161D;

    margin-left: 20px;
}
.document_time{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #737A89;

    margin-left: 20px;
}
.document_link{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #3254DC;
    line-height: 12px;

    margin-left: 20px;
    margin-right: 0px;
}
.document_hr{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
}
.less{
    text-align: center;
    width: 100%;
    height: 25px;
}
.more{
    text-align: center;
    width: 100%;
}
.product_vedios{
    width: 100%;
}
.el-row{
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}
.vedio_block_left{

    margin-left: 0;
    width: 90%;
    height: 12vw;

}

.vedio_block_middle{


    margin-left: auto;
    margin-right: auto;;
    width: 90%;
    height: 12vw;
}
.vedio_block_right{

    margin-left: auto;
    width: 90%;
    height: 12vw;
}

.vedio_image{
    /*background-image: linear-gradient(181deg, rgba(0,0,0,0.00) 71%, #000000 100%);*/
    border-radius: 5px;
    background-image: url("../../assets/images/AiKit/aikit_vedio.png");
    background-size: 360px 200px;
    width: 360px;
    height: 200px;
    position:relative;
}
.vedio_title{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 16px;
    z-index: 1;
    display: flow;
    margin-bottom: 10px;

    position:absolute;
    left :20px;
    bottom:20px;
}
.vedio_desc{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    z-index: 1;


}



.more_button{


    width: 360px;
    background: #E4E7EB;
    border-radius: 3px;

    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #16161D;
}
.button_p{

}


/*手机样式*/
@media (max-width: 768px) {

}
</style>
<style  >

.el-tabs__item {
  font-size: 14px !important;
}
.el-tabs__nav-wrap::after {
  height: 0px;
}

.tabs1 {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-left: 20%;
  padding-top: 10px;
  padding-right: 10%;
  font-size: 21px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #0f0f0f;
  width: 100%;
}
.tab_btn {
  display: inline-flex;
  justify-content: space-between;
  background-color: white;
  padding-left: 1%;
  /*padding-top: 10px;*/
  padding-right: 1%;
  /*font-size: 21px;*/
  /*margin-top: 10px;*/
  /*margin-bottom: 10px;*/

  width: 90%;
}
.el-tabs__header {
  margin-left: 30px;
}

@media (max-width: 768px) {
  .tabs1 {
    display: block !important;
  }
}





</style>

