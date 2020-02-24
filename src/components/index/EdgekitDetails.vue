<template>
  <el-container>
    <div class="home-container">

      <div class="fixTi1" :class="{fixTitle:whether}" v-if="whether">
        <div class="tabs_tabs1">
            <div style="margin: 0 auto;width: 1280px;display: flex">
          <el-tabs class="tab_pane" @tab-click="handleClick1">
            <el-tab-pane label="产品优势" name="#i1"></el-tab-pane>
            <el-tab-pane label="产品规格" name="#i2"></el-tab-pane>
            <el-tab-pane label="产品特性" name="#i3"></el-tab-pane>
            <el-tab-pane label="教程与文档" name="#i4"></el-tab-pane>
          </el-tabs>
          <el-tabs class="tab_btn" @tab-click="handleClick1">
            <el-button style="width: 200px;background-color: #3254DC;border-color: #3254DC" type="primary" @click="buy_edgekit">立即购买</el-button>
            <el-button style="background-color: white ;color: #3254DC;width: 150px;border-color: #3254DC" type="primary"  @click="dev_mag">管理设备</el-button>
            <!--                                </div>-->
          </el-tabs>
            </div>
        </div>
      </div>

      <div class="aikit_body">
        <div class="aikit_pic">

          <div class="aikit_body_title">
              TurboX Edge Kit
            <div class="content">
                <p style="width:670px;margin:30px auto auto 0">EdgeKit的目标是致力于驱动和实现在日常生活中运行的健壮、可靠和智能的通用边缘计算E2E解决方案。为了加速边缘计算服务的部署，EdgeKit的团队与LF EdGE、AWS和高通公司合作，它们提供可互操作的、灵活的和可伸缩的边缘计算服务平台、云基础设施和芯片组。Edge-Kit是高通SNPE公司推出的一款基于设备的人工智能产品，能够满足日益增长的机器视觉、人工智能算法、预测性维护等需求。EdgeKit最初支持Edge-X，它对于任何供应商都是中立的，公共开放框架为AIOT中的边缘计算架构提供了简化和标准化的基础。EdgeKit是一个易于操作的DevKit，有很好的文档和教程。</p>
            </div>
            <div class="aikit_btn">
              <el-button style="width: 200px;background-color: #3254DC;border-color: #3254DC" type="primary" @click="buy_edgekit">立即购买</el-button>
              <el-button style="background-color: #101C3D;color: white;width: 150px" >管理设备</el-button>
            </div>
          </div>


        </div>
        <div class="pro_det" id="i1">商品详情</div>

        <div class="pro_show" >
          <div  class="pro_show_div_border">
            <div class="pro_show_div" id="iii"><span >产品优势</span></div>
          </div>
          <div class="pro_advs">
            <span class="adv_span1">介绍</span>
            <div>
              <p >
                TurboX Edge套件包括专门针对机器人的龙板™ 845c开发板，基于高通公司（Qualcomm）SDA845处理器，符合96板开放硬件规范，支持多种夹层板扩展。
              </p>
              <p>
                Qualcomm SDA845处理器是一种异构计算架构，它集成了一个性能高达2.8GHz的八核Qualcomm？Kryo？CPU、一个Qualcomm？Adreno？630视频处理子系统（包括GPU、VPU和DPU）和一个Qualcomm？Hexagon？685数字信号处理器（带有Hexagon Vector Extensions（HVX））来提供复杂的设备内人工智能处理和移动优化计算机视觉（CV）感知、导航和操作能力。
              </p>
              <p >
                开发板支持Linux和Robotics操作系统（ROS），同时还支持用于高级设备人工智能的Qualcomm®神经处理软件开发工具包（SDK）、Qualcomm®计算机视觉套件、Qualcomm®Hexagon DSP SDK。
              </p>
              <p>
                <!--                                The kit includes:-->
                该套件包括：
              </p>

              <ul >
                <li>
                  <!--                                    Robotics DragonBoard Qualcomm<sup>TM</sup> 845c development board featuring Qualcomm<sup>&reg;</sup> SDA/SDM845 processor and compliant with the 96Boards open hardware specification-->
                  Robotics DragonBoard QualcommTM 845c开发板具有Qualcomm®SDA / SDM845处理器并符合96Boards开放式硬件规格
                </li>
                <li>
                  <!--                                    Qualcomm Robotics navigation mezzanine featuring time-of-flight, trackingcamera, active stereo camera and main camera, which is compliant with 96Boards open hardware specification-->
                  高通机器人导航夹层具有飞行时间，跟踪摄像头，有源立体摄像头和主摄像头，符合96Boards开放式硬件规格
                </li>
                <li>
                  <!--                                    Sensor support including the industry&prime;s best performing ICM-426886-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense-->
                  传感器支持，包括业界性能最佳的ICM-426886轴高性能运动传感器，ICS-41351顶部端口数字麦克风和TDK InvenSense的ICP-10101气压传感器
                </li>
                <li>
                  <!--                                    Qualcomm Robotics cellular mezzanine (optional)-->
                  Qualcomm Robotics蜂窝夹层楼（可选）
                </li>
                <li>
                  <!--                                    Multi-Mic support-->
                  多麦克风支持
                </li>
                <li>
                  <!--                                    Power supply-->
                  电源
                </li>
              </ul>


            </div>
            <span class="adv_span1">强调</span>
            <table style="font-size:12px;font-family:Arial, Helvetica, sans-serif;text-align: left">
              <tbody>
              <tr>
                <td><img src="../../assets/images/rb3/rb3-1.png" alt=""></td>
                <td><img src="../../assets/images/rb3/rb3-2.png" alt=""></td>
              </tr>
              <tr><td style="font-weight:600;padding-right:100px;width:50%;padding:0 3% 0 0;height:50px;color:#495a75;">
                <!--                                    On-device intelligence powered by Artificial Intelligence Engine (AIE)-->
                人工智能引擎（AIE）支持的设备上智能
              </td>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                  <!--                                    Power efficient and cost-effective-->
                  高效节能
                </td>
              </tr>
              <tr>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    The Qualcomm <sup>&reg;</sup> AI Engine on the Qualcomm<sup>&reg;</sup> Robotics RB3 Platform includes the Qualcomm&reg; Neural Processing SDK,which encompasses analysis, optimization, and debugging tools designed to allow developers and manufacturers to port trained deep learning networks on the various heterogeneous compute blocks offered by the platform.-->
                  Qualcomm®Robotics RB3平台上的Qualcomm®AI引擎包括Qualcomm®Neural Processing SDK，它包含分析，优化和调试工具，旨在使开发人员和制造商可以将经过训练的深度学习网络移植到由其提供的各种异构计算模块上。
                </td>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    The Qualcomm <sup>&reg;</sup> Robotics RB3 Platform is designed to support large industrial and enterpriseenterprise robot&prime;s as well as small battery-operated robots with challenging power and thermal dissipation requirements.-->
                  Qualcomm®Robotics RB3平台旨在支持具有挑战性的电源和散热要求的大型工业和企业级机器人以及小型电池供电的机器人。
                </td>
              </tr>
              <tr>
                <td>
                  <br>
                  <img src="../../assets/images/rb3/rb3-3.png" alt="">
                </td>
                <td>
                  <br>
                  <img src="../../assets/images/rb3/rb3-4.png" alt="">
                </td>
              </tr>
              <tr>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                  <!--                                    Comprehensive development kit-->
                  综合开发套件
                </td>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                  <!--                                    Flexible design options for commercialization-->
                  灵活的商业化设计选择
                </td>
              </tr>
              <tr>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Further reduce development time and complexity for intelligent high-performance robots using a feature packed development kit. The kit includes the robotics-focused DragonBoard<sup>TM</sup> 845c development board, compliant with the 96Boards open hardware specification for supporting a broad range of mezzanine-board expansions and range of sensor support like time-of-flight (ToF), active stereo camera, multi-mic, IMU and proximity.-->
                  使用功能丰富的开发套件，进一步减少智能高性能机器人的开发时间和复杂性。 该套件包括以机器人技术为重点的DragonBoardTM 845c开发板，符合96Boards开放式硬件规格，可支持多种夹层板扩展和传感器支持范围，例如飞行时间（ToF），有源立体摄像头， 麦克风，IMU和感应器。
                </td>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    In addition to a feature packed development kit, the platform offers a range of solutions for commercialization from off-the-shelf System-on-Module (SoM) solutions to speed commercialization, to the flexibility for chip-on-board designs for cost-optimization at scale.-->

                  除了功能强大的开发套件外，该平台还提供了一系列商业化解决方案，从现成的模块上系统（SoM）解决方案以加快商业化速度，到为成本节约成本的板载芯片设计的灵活性, 大规模优化。
                </td>
              </tr>
              <!-- =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B1 -->
              <tr>
                <td>
                  <br>
                  <img src="../../assets/images/rb3/rb3-5.png" alt="">
                </td>
                <td>
                  <br>
                  <img src="../../assets/images/rb3/rb3-6.png" alt="">
                </td>
              </tr>
              <tr>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                  <!--                                    High resolution depth sensing-->
                  高分辨率深度感应
                </td>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                  <!--                                    Time-of-Flight (ToF) camera-->
                  飞行时间（ToF）相机
                </td>
              </tr>
              <tr>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Powered by Qualcomm Spectra<sup>TM</sup> 280 ISP for high resolution and high accuracy depth sensing-->
                  由Qualcomm SpectraTM 280 ISP提供支持的高分辨率和高精度深度感应
                </td>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Time-of-flight for gestures and hand tracking use cases-->
                  手势和手跟踪用例的飞行时间
                </td>
              </tr>
              <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
              <!-- =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B2 -->
              <tr><td><br><img src="../../assets/images/rb3/rb3-7.png" ></td><td><br><img src="../../assets/images/rb3/rb3-8.png" alt=""></td></tr>
              <tr>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                  <!--                                    Tracking camera-->
                  追踪相机
                </td>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                  <!--                                    Advanced security-->
                  先进的安全性
                </td>
              </tr>
              <tr>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Sensor module to do visual Simultaneous Localization and Mapping (vSLAM=-->
                  <!--                                    )-->
                  传感器模块进行可视化同时定位和映射（vSLAM =）
                </td>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Qualcomm <sup>&reg;</sup>Secure Processing Unit, hardware root of trust, trusted execution environment, secure boot, camera security-->
                  Qualcomm®安全处理单元，信任的硬件根，信任的执行环境，安全启动，相机安全性
                </td>
              </tr>
              <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
              <!-- =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B3 -->
              <tr>
                <td><br><img src="../../assets/images/rb3/rb3-9.png" alt=""></td><td><br><img src="../../assets/images/rb3/rb3-10.png" alt=""></td>
              </tr>
              <tr>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                  <!--                                    Sensor Core-->
                  传感器核心
                </td>
                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                  <!--                                    Connectivity-->
                  连接性
                </td>
              </tr>
              <tr><td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                <!--                                Support for multiple sensors and 3rd party algorithms through Sensor Software Framework-->
                通过传感器软件框架支持多种传感器和第三方算法
              </td>
                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                  <!--                                    Wi-Fi integrated 802.11ac 2x2 with MU-MIMO and support for Bluetooth 5.0 and cellular mezzanines for LTE and CBRS-->
                  Wi-Fi集成了具有MU-MIMO的802.11ac 2x2，并支持蓝牙5.0和LTE和CBRS的蜂窝夹层
                </td>
              </tr>
              <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
              </tbody>
            </table>
          </div>



        </div>


        <div class="pro_show" >
          <div  class="pro_show_div_border">
            <div class="pro_show_div" ><span >产品规格</span></div>
          </div>

          <div class="pro_advs">
            <table
                    border="1"
                    style="border:1px solid #F1F3F5;margin-top:10px;border-collapse:collapse;width:100%;text-align:left;line-height:2em;"
            >
              <tbody>
              <tr style="background-color:#E4E7EB;color:black;font-weight:700;">
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
        </div>

        <div class="pro_show" id="i4">
          <div  class="pro_show_div_border">
            <div class="pro_show_div" ><span style="font-size: 13px">教程与文档</span></div>
          </div>
<!--              <button class="download-btn" @click="download">-->
<!--                        <span>Click Here to Download the Documents</span>-->
<!--                      </button>-->
            <span class="adv_span1" style="margin-left: 25px">相关文档</span>
            <div class="product_documents">
                <div class = "product_document">
                    <div class="product_document_left">
                        <img class="document_image" src="../../assets/icons/pdf.svg">
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
                        <img class="document_image" src="../../assets/icons/pdf.svg">
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
                        <img class="document_image" src="../../assets/icons/pdf.svg">
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
                            <img class="document_image" src="../../assets/icons/pdf.svg">
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
                    <el-button class="more_button" @click="showMoreVedio">更多 &gt; &gt;</el-button>
                </div>
            </el-row>
        </div>
      </div>



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
      vm: vm,
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
    },
    buy_edgekit() {
        const tokenStr=window.sessionStorage.getItem('token');

        if(!tokenStr){
            this.$message.error("请先登录！")
            this.login_dialog1=true
        }else {
            this.$router.push(
                {
                    path: '/buy',
                    query: {name: 'Edge KIT',
                        good_id: 1682320,}
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

  }
};
</script>
<style lang="less" scoped>
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
        width: 31px;
        height: 36px;
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
  width: 100%;
  /*margin: 0 auto;*/
  margin-top: 20px;
  margin-bottom: 30px;
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
  margin-top: 30px;
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
  background-color: rgb(58,58,58);
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
    width: 100%;
    margin-top: 20px;
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
    margin-top: 30px;
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
    background-image: url("../../assets/images/edgekit_pic.jpg");
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
    padding-top: 4%;
  }
  .aikit_body_title p{
    font-size:14px ;

  }
  .aikit_body_title .content{
    margin-top: 10px;
  }
  .pro_det{
    /*margin-left: 18.8%;*/
    font-weight: bold;
    font-size: 36px;
    margin-top: 50px;
      width: 1280px;
      margin-left: auto;
    margin-right: auto;
  }
  .pro_show{
    width: 1280px;
    margin: 0 auto;
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
    margin-bottom: 10px;

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
  .pro_show td,th{
    padding-left: 15px;
  }
  p{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    line-height:1.7em;
    margin-bottom:10px;
    line-height:1.7em;
    font-size:12px;
    font-family:Arial, Helvetica,sansserif;
  }
  ul{
    /*width: 85%;*/
    /*margin-left: auto;*/
    margin-right: auto;
    text-align: left;
    line-height:1.7em;
    margin-bottom:10px;
    padding-left: 12px;
    line-height:1.7em;
    font-size:12px;
    font-family:Arial, Helvetica,sansserif;
  }
</style>