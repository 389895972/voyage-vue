<template>
  <el-container>
    <div class="home-container">
      <div class="header">
        <img class="img" src="../../assets/images/logo.png" alt />
      </div>

      <div class="main">
        <div class="first">
          <div
            class="col-md-7 col-xs-12 aikit_img_div"
            style="background-color: white;padding: 0;height:100%"
          >
            <img src="../../assets/images/Edgekit/edgekit2.png" alt width="100%" />
          </div>
          <div id="aikit_ours" class="col-md-4 col-xs-11">
            <div class="aikit_title">
              TurboX Edgekit
              <SUP>TM</SUP>Edge KIT
            </div>
            <div
              class="aikit_introduce"
            >EdgeKit is dedicated to driving and implementing powerful, reliable and intelligent universal edge computing E2E solutions in our daily life. To accelerate the deployment of edge computing services, the EdgeKit team works with LF Edge, AWS and Qualcomm, which provide an interoperable, flexible and scalable edge computing service platform, cloud infrastructure and chipset. Edge Kit is an on-device AI feature supported by Qualcomm SNPE to meet the growing demand for machine vision, AI algorithms and predictive maintenance. EdgeKit initially supported Edge-X, which is neutral to any vendor. The universal open framework provides a simplified and standardized foundation for edge computing architecture in AIoT. EdgeKit has good documentation and tutorials to make DevKit easy to use.</div>
            <div class="aikit_btn">
              <el-button type="primary">Buy Now</el-button>
              <el-button type="primary">Device Management</el-button>
            </div>
          </div>
        </div>

        <!--                            悬浮框-->
        <div class="fixTitle1" :class="{fixTitle:whether}" v-if="whether">
          <div class="tabs1 col-md-12 col-xs-11">
            <el-tabs class="tab_pane" @tab-click="handleClick1">
              <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>
              <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>
              <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>
              <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>
            </el-tabs>
            <el-tabs class="tab_btn" @tab-click="handleClick1">
              <el-button type="primary">Buy Now</el-button>
              <el-button type="primary">Device Management</el-button>
              <!--                                </div>-->
            </el-tabs>
          </div>
        </div>

        <div class="product">
          <span class="product_det">Product Details</span>
          <div class="tabs">
            <el-tabs id="iii" class="tabs_1" @tab-click="handleClick">
              <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>
              <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>
              <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>
              <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="product_show" id="i1">
            <div class="product_show_div">Key advantages</div>
            <span class="prohard">Introduce</span>
            <div class="product_advantages">
              <p style="line-height:1.7em;margin-bottom:10px;">
                The TurboX Edge Kit includes the purpose-built robotics-focused DragonBoard™ 845c development board, based on the Qualcomm
                <sup>®</sup> SDA845 processor and compliant with the 96Boards open hardware specification to
                support a broad range of mezzanine-board expansions.
              </p>
              <p style="line-height:1.7em;margin-bottom:10px;">
                The Qualcomm SDA845 processor is a heterogeneous computing architecture and integrates an Octa Core Qualcomm
                <sup>®</sup> Kryo™ CPU with performance up to 2.8GHz a Qualcomm
                <sup>®</sup> Adreno™ 630 Visual Processing Subsystem (including GPU, VPU and DPU), and a Qualcomm
                <sup>®</sup> Hexagon™ 685 DSP with Hexagon Vector Extensions (HVX) delivering sophisticated, on-device AI processing and mobile-optimized computer vision (CV) capabilities for perception, navigation and manipulation.
              </p>
              <p style="line-height:1.7em;margin-bottom:10px;">
                The development board supports Linux and Robotics Operating System (ROS), while also including support for the Qualcomm
                <sup>®</sup> Neural Processing software development kit (SDK) for advanced on-device AI, the Qualcomm
                <sup>®</sup> Computer Vision Suite, the Qualcomm
                <sup>®</sup> Hexagon DSP SDK.
              </p>
              <p style="line-height:1.7em;margin-bottom:10px;">The kit includes:</p>
              <ul
                style="line-height:1.7em;font-size:16px;font-family:Arial, Helvetica, sans-serif;"
              >
                <li>
                  Robotics DragonBoard™ 845c development board featuring Qualcomm
                  <sup>®</sup> SDA/SDM845 processor and compliant with the 96Boards open hardware specification
                </li>
                <li>Qualcomm Robotics navigation mezzanine featuring time-of-flight, tracking camera, active stereo camera and main camera, which is compliant with 96Boards open hardware specification</li>
                <li>Sensor support including the industry’s best performing ICM-42688 6-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense</li>
                <li>Qualcomm Robotics cellular mezzanine (optional)</li>
                <li>Multi-Mic support</li>
                <li>Power supply</li>
              </ul>
              <br />
              <br />
            </div>
            <hr class="all_hr" />

            <span class="prohard">Hightlight</span>
            <div class="product_hightlight">
              <table style="font-size:16px;font-family:Arial, Helvetica, sans-serif;">
                <tbody>
                  <tr>
                    <td>
                      <img src="../../assets/images/Edgekit/Hightligh1.png" alt />
                    </td>
                    <td>
                      <img src="../../assets/images/Edgekit/Hightligh2.png" alt />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 3% 0 0;height:50px;color:#495a75;"
                    >On-device intelligence powered by Artificial Intelligence Engine (AIE)</td>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;"
                    >Power efficient and cost-effective</td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;"
                    >
                      The Qualcomm
                      <sup>®</sup> AI Engine on the Qualcomm
                      <sup>®</sup> TurboX Edge Kit includes the Qualcomm® Neural Processing SDK, which encompasses analysis, optimization, and debugging tools designed to allow developers and manufacturers
                      to port trained deep learning networks on the various heterogeneous compute blocks offered by the platform.
                    </td>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;"
                    >
                      The Qualcomm
                      <sup>®</sup> TurboX Edge Kit is designed to support large industrial and enterpriseenterprise robot’s as well as small battery-operated robots with challenging power and thermal dissipation requirements.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh3.png" alt />
                    </td>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh4.png" alt />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;"
                    >Comprehensive development kit</td>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;"
                    >Flexible design options for commercialization</td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;"
                    >
                      Further reduce development time and complexity for intelligent high-performance robots using a feature packed development kit. The kit includes the robotics-focused DragonBoard™ 845c development board, compliant with the 96Boards open hardware specification
                      for supporting a broad range of mezzanine-board expansions and range of sensor support like time-of-flight (ToF), active stereo camera, multi-mic, IMU and proximity.
                    </td>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;"
                    >
                      In addition to a feature packed development kit, the platform offers a range of solutions for commercialization from off-the-shelf System-on-Module (SoM) solutions to speed commercialization, to the flexibility for chip-on-board designs for cost-optimization
                      at scale.
                    </td>
                  </tr>
                  <!-- 新增开始1 -->
                  <tr>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh5.png" alt />
                    </td>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh6.png" alt />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;"
                    >High resolution depth sensing</td>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;"
                    >Time-of-Flight (ToF) camera</td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;"
                    >Powered by Qualcomm Spectra™ 280 ISP for high resolution and high accuracy depth sensing</td>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;"
                    >Time-of-flight for gestures and hand tracking use cases</td>
                  </tr>
                  <!-- 新增结束 -->
                  <!-- 新增开始2 -->
                  <tr>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh7.png" alt />
                    </td>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh8.png" alt />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;"
                    >Tracking camera</td>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;"
                    >Advanced security</td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;"
                    >Sensor module to do visual Simultaneous Localization and Mapping (vSLAM)</td>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;"
                    >
                      Qualcomm
                      <sup>®</sup>Secure Processing Unit, hardware root of trust, trusted execution environment, secure boot, camera security
                    </td>
                  </tr>
                  <!-- 新增结束 -->
                  <!-- 新增开始3 -->
                  <tr>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh9.png" alt />
                    </td>
                    <td>
                      <br />
                      <img src="../../assets/images/Edgekit/Hightligh10.png" alt />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;"
                    >Sensor Core</td>
                    <td
                      style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;"
                    >Connectivity</td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;"
                    >Support for multiple sensors and 3rd party algorithms through Sensor Software Framework</td>
                    <td
                      style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;"
                    >Wi-Fi integrated 802.11ac 2x2 with MU-MIMO and support for Bluetooth 5.0 and cellular mezzanines for LTE and CBRS</td>
                  </tr>
                  <!-- 新增结束 -->
                </tbody>
              </table>
            </div>
            <hr class="all_hr" />
          </div>
        </div>
        <div class="product_show" id="i2">
          <div class="product_show_div">Specification</div>
          <div class="pro_border">
            <table
              border="1"
              style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;"
            >
              <tbody>
                <tr style="background-color:#526fe1;color:#fff;font-weight:700;">
                  <td>Module</td>
                  <td>Item</td>
                  <td>Spec</td>
                </tr>
              </tbody>
              <tbody>
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
          </div>
          <hr class="all_hr" />
        </div>
        <!-- <div class="product_show" id="i5">
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
        </div>-->
        <div class="product_show">
          <div class="product_show_div" id="i3">Product Characteristics</div>
          <span class="prohard">Application</span>
          <div class="product_application">
            <img src="../../assets/images/Edgekit/application.jpg" alt width="100%" height="auto" />
          </div>
          <hr class="all_hr" />
        </div>
        <div class="product_show" id="i4">
          <div class="product_show_div">Document</div>
          <button class="download-btn" @click="download">
            <span>Click Here to Download the Documents</span>
          </button>

          <hr class="all_hr1" />
        </div>
      </div>
      <!-- <div class="footer">
        <div class="footer_inners">
          <div class="footer_inner">
            <span class="footer_span1">CONTACT INFO联系方式</span>
            <span
              class="footer_span11"
            >中科创达股份有限公司是智能操作系统产品和技术提供商。自2008年成立依赖，公司致力于提供智能化操作系统系列产品、技术及解决方案。</span>
          </div>
          <div class="footer_inner">
            <span class="footer_span2">(86)10-62662686</span>
            <span class="footer_span21">biz@thundersoft.com</span>
            <span class="footer_span22">北京市海淀区清华东路9号院3号楼创达大厦 邮编：100083</span>
          </div>
        </div>
      </div>-->
      <!-- <div class="home_reg">
          <span class="home_reg_title">现在注册，免费体验Devices on Cloud 平台所有开放设备</span>
          <div class="home_reg_img">
               <img src="../../assets/images/home/home_reg.png" alt="">
          </div>
          <div>
            <el-button class="home_reg_btn"> 立即注册并试用</el-button>
          </div>
      </div>
      <div style="background-color:#D7D7DB;padding-bottom:10px" >
           <div class="service"> 
                       <span class="service_title">常见问题</span>
                       <div class="service_index">注册与登录 注册与收费 其他常见问题</div>
                        <hr style="margin-bottom:1px">
           </div>
           <div class="service_contents">
             <table>
                  <tr>
                         <td> <span class="service_querstion">注册账号都需要那些条件？</span>
                           <div style="width:80%">  <p>注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向index邮箱或者手机号发送验证码，只有验证通过才能使用我们的设备。</p> </div> </td>
                         <td> <span class="service_querstion">什么是使用服务？</span>
                              <p>适用服务是我们为使用者提供的免费使用本平台指定设备的服务。</p> </td>
                  </tr>
                                   <tr>
                         <td> <span class="service_querstion">收不到邮箱验证码怎么办？</span>
                            <div style="width:80%">   <p>可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。<br>
                              如果任然无法收到验证码，您可尝试切换手机号进行验证。</p></div> </td>
                         <td> <span class="service_querstion">试用过后如何计费？</span>
                              <p>30天以下：按日计费<br>
                               30天以上：按月计费<br>
                              可选择：1~29日或者1~12月<br>
                               订单页面选择日期后，费用自动生成</p> </td>
                  </tr>
                                    <tr>
                         <td> <span class="service_querstion">收不到短信验证码怎么办？</span>
                          <div style="width:80%">     <p>可能会由于手机停机、存储信息已满、网络延迟等原因没有及时收到验证码，这时请检查您的手机，保证手机可正常接收短信后，尝试重新获取验证码。<br>
                              如果仍然无法收到验证码您可尝试邮箱进行验证。</p></div> </td>
                         <td>  </td>
                  </tr>
             </table>
             
           </div>
      </div> -->
      <el-footer height="300px">
        <el-col :span="3" :offset="1">
          <div class="footer_block">
            <span style="margin-left:30%">产品</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block">
            <span style="margin-left:30%">社区</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block">
            <span style="margin-left:30%">教程</span>
          </div>
        </el-col>
         <el-col :span="3">
          <div class="footer_block">
            <span style="margin-left:30%"></span>
          </div>
        </el-col>
         <el-col :span="3">
          <div class="footer_block">
            <span style="margin-left:30%"></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block_final">
            <span style="margin-left:10%;padding-top:10px">联系我们</span>
            <p style="margin:10% 0 0 10%;font-size:16px">   Email</p>
            <p style="margin-left:10%;font-size:16px"> service@45iot,com</p>
          </div>
        </el-col>
      </el-footer>
    </div>
  </el-container>
</template>
<script>
export default {
  data() {
    const vm = window.vm;
    return {
      //home:this.$t('nav.document')
      activeName: "first",
      whether: false,
      curId: 0,
      vm: vm
    };
  },
  methods: {
    download() {
      this.$i18n.locale = "en";
      //console.log($i18n.locale)
    },

    handleClick(tab) {
      document.querySelector(tab.name).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const w = document.getElementById("iii");
      window.console.log(w.offsetTop);
      // var scrollTop = w.scrollTop;
      // window.console.log('aaa'+scrollTop);
      //alart(scrollTop);
      if (scrollTop > w.offsetTop) {
        this.whether = true;
      } else {
        this.whether = false;
      }
    },
    handleClick1(tab) {
      document.querySelector(tab.name).scrollIntoView(true);
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
.product_advantages {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  background-color: white;
  width: 85%;
  padding: 10px 10px 10px 0px;
}
.product_advantages p {
  line-height: 1.7em;
  margin-bottom: 10px;
  line-height: 1.7em;
  font-size: 16px;
  font-family: Arial, Helvetica, sansserif;
}
.product_hightlight {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  background-color: white;
  width: 85%;
  padding: 10px 10px 10px 20px;
}
.product_application {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  background-color: white;
  width: 85%;
  padding: 10px 10px 10px 20px;
}

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
  background-color: #cccccc;
  padding: 25px 25px;
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
  // width: 200px;
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
.tabs {
  background-color: white;
  padding-left: 1.2%;
  padding-top: 10px;
  padding-right: 7.5%;
  font-size: 21px;
  margin-top: 40px;
  border: 1px solid #0f0f0f;
}

.el-tabs__item {
  font-size: 21px !important;
}
.el-tabs__nav-wrap::after {
  height: 0px;
}
.fixTitle1 {
  background-color: #cccccc;
  width: 97.3%;
  padding: 0;
  margin: 0;
  z-index: 5;
}
.tabs1 {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-top: 10px;

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

.el-footer{
  background-color: #666666
}
.el-col {
  height: 100%;
}
.footer_block {
  margin-top:60px;
  height: 60%;
  width: 100%;
  color: white;
  border-left: 2px solid grey;
  font-size: 21px
}
.footer_block_final {
  margin-top:60px;
  margin-bottom:60px;
  height: 60%;
  width: 100%;
  color: white;
   border-left: 2px solid grey;
  border-right: 2px solid grey;
   font-size: 21px;
   
}

.service{
  background-color: #D7D7DB;
  text-align: center;
  padding-bottom: 1%;
  padding-top: 2%
}
.service_title{
  font-size: 21px;

  width: 100%;
}
.service_index{
  text-align: left;
  font-size: 21px;
  padding-left: 6%;
  margin-top: 3%;
  margin-bottom: 1%
}
.service_contents{
  width: 85%;
  margin: 0 auto;
  background-color: #D7D7DB
 
}
.service_querstion{
  font-weight: bold;
}

.home_reg{
  text-align: center;
  background-color: #000143;
  font-size:  18px;
  padding-top: 2%;
  padding-bottom: 2%
  
}
.home_reg_img{
  align-content: center;
  margin: 0 auto;
  width: 85%;
  text-align: center;
  background-color:#000143
}
.home_reg_title{
     color: white;
}
.home_reg_btn{
  background-color: #000143;
  border:1px solid white;
  color: white;
  cursor: pointer;
}


@media (max-width: 768px) {
  .tabs1 {
    display: block !important;
  }
}
</style>
