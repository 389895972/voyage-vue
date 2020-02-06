<template>
    <el-container>
        <div class="home-container">
            <div class="fixTi1" :class="{fixTitle:whether}" v-if="whether">
                <div class="tabs_tabs1">
                    <el-tabs class="tab_pane" @tab-click="handleClick1">
                        <el-tab-pane label="产品优势" name="#i1"></el-tab-pane>
                        <el-tab-pane label="产品规格" name="#i2"></el-tab-pane>
                        <el-tab-pane label="产品特性" name="#i3"></el-tab-pane>
                        <el-tab-pane label="教程与文档" name="#i4"></el-tab-pane>
                    </el-tabs>
                    <el-tabs class="tab_btn" @tab-click="handleClick1">
                        <el-button style="width: 200px;background-color: #3254DC;border-color: #3254DC" type="primary" @click="buy_aikit">立即购买</el-button>
                        <el-button style="background-color: white ;color: #3254DC;width: 150px;border-color: #3254DC" type="primary">管理设备</el-button>
                        <!--                                </div>-->
                    </el-tabs>
                </div>
            </div>

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
<!--                                The Qualcomm Robotics RB3 development kit includes the purpose-built robotics-focused DragonBoard<sup>TM</sup> 845c development board, based on the Qualcomm<sup>&reg;</sup> SDA845 processor and compliant with the 96Boards open hardware specification to support a broad range of mezzanine-board expansions.-->
                                Qualcomm Robotics RB3开发套件包括专门针对机器人技术的DragonBoardTM 845c开发板，该开发板基于Qualcomm®SDA845处理器并符合96Boards开放式硬件规格，以支持多种夹层板扩展。
                            </p>
                            <p>
<!--                                The Qualcomm SDA845 processor is a heterogeneous computing architecture and integrates an Octa Core Qualcomm <sup> &reg;</sup> Kryo<sup>TM</sup> CPU withperformance up to 2.8GHz a Qualcomm<sup>&reg;</sup> AdrenoQualcomm<sup>TM</sup> 630 Visual Processing Subsystem (including GPU, VPU and DPU), and a Qualcomm<sup>&reg;</sup> HexagonQualcomm<sup>TM</sup> 685 DSP with Hexagon Vector Extensions (HVX) delivering sophisticated, on-device AI processing and mobile-optimized computer vision (CV) capabilities for perception, navigation and manipulation.-->
                                Qualcomm SDA845处理器是一种异构计算架构，集成了性能高达2.8GHz的Octa Core Qualcomm®KryoTM CPU，Qualcomm®AdrenoQualcommTM 630视觉处理子系统（包括GPU，VPU和DPU）以及Qualcomm®HexagonQualcommTM 685 DSP和Hexagon Vector 扩展程序（HVX）提供先进的设备上AI处理功能和针对感知，导航和操纵的针对移动设备优化的计算机视觉（CV）功能。
                            </p>
                            <p >
<!--                                The development board supports Linux and Robotics Operating System (ROS), while also including support for the Qualcomm<sup>&reg;</sup> Neural Processing software development kit (SDK) for advanced on-device AI, the Qualcomm<sup>&reg;</sup> Computer Vision Suite, the Qualcomm<sup>&reg;</sup> Hexagon DSP SDK, and<a href="https://aws.amazon.com/robomaker/" target="_blank" rel="nofollow" style="text-decoration: underline !important;">AWS RoboMaker</a>.-->
                                该开发板支持Linux和机器人操作系统（ROS），还包括用于高级设备上AI的Qualcomm®神经处理软件开发套件（SDK），Qualcomm®Computer Vision Suite，Qualcomm®Hexagon DSP SDK，和AWS RoboMaker。
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
                        <span class="adv_span1">Robotics DragaonBoard™845c的规格</span>
                        <table border="1" style="font-size:12px;border-collapse:collapse;width:100%;text-align:center;line-height:2em;">
                            <tbody>
                            <tr style="background-color:#526fe1;color:#fff;font-weight:700;">
                                <td style="width:15%;">
                                    Component
                                </td>
                                <td>
                                    Qualcomm<sup>&reg;</sup> Robotics RB3 Development Kit
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    SoC
                                </td>
                                <td style="text-align:left;padding-left:10px;">
                                    Qualcomm<sup>&reg;</sup>&nbsp;SDA845
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CPU
                                </td>
                                <td style="text-align:left;padding-left:10px;">
                                    SDA845 8x Kryo 385 CPU, up to 2.8 GHz
                                </td>
                            </tr>
                            <tr><td>GPU</td>
                                <td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Adreno<sup>TM</sup> 630 GPU with support for OpenGL ES 3.2 and Open CL 2.0</td></tr>
                            <tr><td>DSP</td><td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Hexagon<sup>TM</sup> 685 DSP with 3rd Gen Vector Extensions</td>
                            </tr>
                            <tr>
                            </tr>
                            <tr><td>ISP</td><td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Spectra<sup>TM</sup> 280 Image Signal Processor with new architecture for 14-bit image signal processing</td></tr>
                            <tr><td>RAM</td><td style="text-align:left;padding-left:10px;">4GB LPDDR4x SDRAM @ 1866 MHz</td></tr>
                            <tr><td>Memory</td><td style="text-align:left;padding-left:10px;">LPDDR4x, 4x16 bit; up to 1866MHz, 4GB RAM</td>
                            </tr><tr></tr>
                            <tr><td>Storage</td><td style="text-align:left;padding-left:10px;">64GB UFS 2.1 on-board storage and 1 x MicroSD card slot</td>
                            </tr><tr><td>Ethernet</td><td style="text-align:left;padding-left:10px;">1x GbE Ethernet</td>
                            </tr><tr><td>
                                Wireless</td><td style="text-align:left;padding-left:10px;">Wi-Fi integrated 802.11ac 2x2 with MU-MIMO; Tri-band Wi-Fi: 2.4 GHz and5 GHz with Dual Band Simultaneous (DBS).<br>Qualcomm <sup>&reg;</sup> TrueWireless<sup>TM</sup> Bluetooth 5.0</td>
                            </tr>
                            <tr><td>Location</td>
                                <td style="text-align:left;padding-left:10px;">GPS, Glonass, BeiDou, Galileo, QZSS, and SBAS</td>
                            </tr>
                            <tr><td>
                                USB</td>
                                <td style="text-align:left;padding-left:10px;">
                                    1 x USB 2.0 Micro B (Debug only)<br>
                                    1 x USB 3.0 Type C (OTG mode)<br>
                                    2x USB 3.0 Type A (Host mode only)</td>
                            </tr>
                            <tr><td>
                                Display</td>
                                <td style="text-align:left;padding-left:10px;">
                                    Two 4-lane DSI, D-PHY 1.2 or C-PHY 1.0; VESA DSC 1.1<br>
                                    1 x HDMI 1.4 (Type A - full) connector</td>
                            </tr>
                            <tr><td>Video</td>
                                <td style="text-align:left;padding-left:10px;">Ultra HD Premium video capture @ 4K (3840x2160) 60fps, 10bit HDR, Rec 2020 color gamut; H.264 (AVC), H.265 (HEVC) and VP9 support; Slow motion HEVC video encoding of either HD (720p) video up to 480fps or FHD (1080p) up to 240fps</td></tr>
                            <tr><td>Audio</td>
                                <td style="text-align:left;padding-left:10px;">MP3; aacPlus, eAAC; WMA 9/Pro
                                </td></tr>
                            <tr><td>Camera</td>
                                <td style="text-align:left;padding-left:10px;">Single HFR 16 MPix camera at 60fps ZSL, Dual 16 MPix cameras at 30fps ZSL, Single 32 MPix camera at 30fps ZSL</td></tr>
                            <tr><td>Sensor</td>
                                <td style="text-align:left;padding-left:10px;">ICM-42688 6-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense.</td></tr>
                            <tr><td>Expansion Interfaces</td>
                                <td style="text-align:left;padding-left:10px;">2 x 60 pin High-Speed connectors , 2 x 40 pin Low-Speed connectors, 1 x20 pin Low-Speed connector</td></tr>
                            <tr><td>LED</td><td style="text-align:left;padding-left:10px;">7 x LED indicators</td></tr>
                            <tr><td>Button</td>
                                <td style="text-align:left;padding-left:10px;">Power ,Volume Up/Down,Force Usb Boot, DIP Switch</td>
                            </tr>
                            <tr><td>Power Source</td>
                                <td style="text-align:left;padding-left:10px;">12V@2.5A adapter with a DC plug</td></tr>
                            <tr><td>OS Support</td><td style="text-align:left;padding-left:10px;">LE</td></tr>
                            <tr><td>Size</td><td style="text-align:left;padding-left:10px;">85mm by 54 mm</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="pro_show" id="i3">
                    <div  class="pro_show_div_border">
                        <div class="pro_show_div" ><span >产品特性</span></div>
                    </div>
                    <div class="pro_advs">
                        <span class="adv_span1">应用领域</span>
                    </div>
                    <img class="imgs" src="../../assets/images/rb3/rb3-11.png" alt width="100%" height="100%"/>
                    <div class="pro_advs">
                        <span class="adv_span1">功能演示</span>
                    </div>
                    <div class="pro_hightlight">
                        <div class="contain">
                            <div class="row">
                                <div class="col-md-2">
                                    <p class="p" style="line-height:1.7em;margin-right:50px;text-align:justify;">
                                        Qualcomm&prime;s Robotics RB3 Platform with ROS has been seamlessly integrated with and drives Kobuki mobile research base. RB3 platform&prime;s ToF camera or structured light camera can be used for depth mapping and development of navigation algorithms to drive the Kobuki. RB3 platform&prime;s tracking camera can be used for visual simultaneous location and mapping (vSLAM), and the high resolution camera can be used for video recording.
                                    </p>
                                </div>
                                <div class="col-md-2">
                                    <video width="100%" height="auto" controls="controls">
                                        <source src="../../assets/video/basic kit.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pro_advs">
                        <span class="adv_span1">兼容于</span>
                    </div>
                    <div class="pro_bor">
                        <div class="col-md-1" style="padding: 0 auto">
                            <img src="../../assets/images/rb3/rb3-12.png" alt="">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                            <a class="robomaker" href="https://aws.amazon.com/robomaker/" target="_blank">
                                <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/e975e3a2475948ab9e8231ea596bea0c--1003843795" alt="" width="250" height="138"></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                            <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/6a2050580563482aa2165faac637a517--2105746679" alt="" width="250" height="100" title="" align="">
                        </div>
                    </div>
                </div>
                <div class="pro_show" id="i4">
                    <div  class="pro_show_div_border">
                        <div class="pro_show_div" ><span style="font-size: 13px">教程与文档</span></div>
                    </div>
                    <span class="adv_span1" style="margin-left: 25px">相关文档</span>
                    <span class="adv_span1" style="margin-left: 25px">相关教程</span>
                </div>
            </div>


<!--            <div class="main">-->
<!--                <div class="first">-->
<!--&lt;!&ndash;                    <div   class="col-md-4 col-xs-11 aikit_img_div" style="background-color: white;padding: 0;">&ndash;&gt;-->
<!--&lt;!&ndash;                        <img src="../../assets/images/rb3/rb3.png" alt=""  width="100%" >&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div id="aikit_ours" class="col-md-4 col-xs-11" >&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="aikit_title">Qualcomm  <SUP>&reg;</SUP> Robotics RB3 Platform <sapn>(SDA845)</sapn></div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="aikit_introduce"> The Qualcomm Robotics RB3 development kit supports the development of smart, power-efficient and cost-effective robots by combining high-performance heterogeneous computing, Qualcomm® Artificial Intelligence (AI) Engine for on-device machine learning, computer vision, vault-like security, multimedia and Wi-Fi and cellular connectivity (4G/LTE and CBRS). Comprised of a comprehensive set of software & hardware, including the industry’s best performing 6-Axis Motion Sensor (ICM-42688), Top Port PDM Microphone (ICS-41351), and Barometric Pressure Sensor (ICP-10101) from TDK InvenSense.The Qualcomm Robotics RB3 development kit is designed to help manufacturers and developers create robotic products ranging from large industrial and enterprise robots to small battery-operated one’s with challenging power and thermal dissipation requirements.</div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="aikit_btn">&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-button type="primary">Buy Now</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-button type="primary">Device Management</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                    <div   class="col-md-7 col-xs-12 aikit_img_div1" style="background-color: white;padding: 0;height:100%">-->
<!--                        <img src="../../assets/images/3rb3.png" alt=""  width="100%" >-->
<!--                    </div>-->
<!--                    <div id="aikit_ours1" class="col-md-4 col-xs-11" >-->
<!--                        <div class="aikit_title">Qualcomm  <SUP>&reg;</SUP> Robotics RB3 Platform <sapn>(SDA845)</sapn></div>-->
<!--                        <div class="aikit_introduce"> The Qualcomm Robotics RB3 development kit supports the development of smart, power-efficient and cost-effective robots by combining high-performance heterogeneous computing, Qualcomm® Artificial Intelligence (AI) Engine for on-device machine learning, computer vision, vault-like security, multimedia and Wi-Fi and cellular connectivity (4G/LTE and CBRS). Comprised of a comprehensive set of software & hardware, including the industry’s best performing 6-Axis Motion Sensor (ICM-42688), Top Port PDM Microphone (ICS-41351), and Barometric Pressure Sensor (ICP-10101) from TDK InvenSense.The Qualcomm Robotics RB3 development kit is designed to help manufacturers and developers create robotic products ranging from large industrial and enterprise robots to small battery-operated one’s with challenging power and thermal dissipation requirements.</div>-->
<!--                        <div class="aikit_btn">-->
<!--                            <el-button type="primary"  @click="buy_rb3">Buy Now</el-button>-->
<!--                            <el-button type="primary" @click="devMan">Device Management</el-button>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--                &lt;!&ndash;                            悬浮框&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="fixTitle1" :class="{fixTitle:whether}"  v-if="whether" >&ndash;&gt;-->
<!--&lt;!&ndash;                    <div  class="tabs1 col-md-12 col-xs-11" >&ndash;&gt;-->

<!--&lt;!&ndash;                        <el-tabs   class="tab_pane" @tab-click="handleClick1">&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;                                <div class="aikit_btn">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;                                    <el-button type="primary">Buy Now</el-button>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;                                    <el-button type="primary">Device Management</el-button>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;                                </div>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-tabs>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-tabs   class="tab_btn" @tab-click="handleClick1">&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-button type="primary"  @click="buy_rb3">Buy Now</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-button type="primary" >Device Management</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;                                </div>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-tabs>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--                <div>-->
<!--                    <div class="product">-->
<!--                        <span class="product_det">Product Details</span>-->
<!--                        <div  class="tabs">-->
<!--                            <el-tabs  id="iii" class="tabs_1" @tab-click="handleClick">-->
<!--                                <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>-->
<!--                                <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>-->
<!--                                <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>-->
<!--                                <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>-->
<!--                            </el-tabs>-->
<!--                        </div>-->
<!--&lt;!&ndash;                        <div class="product_indexs" >&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="product_index"   >&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="product_btn" @click="counter3">Key Advantage</div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="product_btn" @click="counter7">Product Specification</div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="product_btn" @click="counter4">Product Characteristics</div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="product_btn" @click="counter5">Tutorials and Documentation</div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div> /</div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                        <div class="product_show">-->
<!--                            <div class="product_show_div" id="i1">Key Advantage</div>-->
<!--                            <span class="prohard">Introduction</span>-->
<!--                            <div>-->
<!--                                <p >-->
<!--                                    The Qualcomm Robotics RB3 development kit includes the purpose-built robotics-focused DragonBoard<sup>TM</sup> 845c development board, based on the Qualcomm<sup>&reg;</sup> SDA845 processor and compliant with the 96Boards open hardware specification to support a broad range of mezzanine-board expansions.-->
<!--                                </p>-->
<!--                                <p>-->
<!--                                    The Qualcomm SDA845 processor is a heterogeneous computing architecture and integrates an Octa Core Qualcomm <sup> &reg;</sup> Kryo<sup>TM</sup> CPU withperformance up to 2.8GHz a Qualcomm<sup>&reg;</sup> AdrenoQualcomm<sup>TM</sup> 630 Visual Processing Subsystem (including GPU, VPU and DPU), and a Qualcomm<sup>&reg;</sup> HexagonQualcomm<sup>TM</sup> 685 DSP with Hexagon Vector Extensions (HVX) delivering sophisticated, on-device AI processing and mobile-optimized computer vision (CV) capabilities for perception, navigation and manipulation.-->
<!--                                </p>-->
<!--                                <p >-->
<!--                                    The development board supports Linux and Robotics Operating System (ROS), while also including support for the Qualcomm<sup>&reg;</sup> Neural Processing software development kit (SDK) for advanced on-device AI, the Qualcomm<sup>&reg;</sup> Computer Vision Suite, the Qualcomm<sup>&reg;</sup> Hexagon DSP SDK, and<a href="https://aws.amazon.com/robomaker/" target="_blank" rel="nofollow" style="text-decoration: underline !important;">AWS RoboMaker</a>.-->
<!--                                </p>-->
<!--                                <p>-->
<!--                                    The kit includes:-->
<!--                                </p>-->

<!--                                <ul >-->
<!--                                    <li>-->
<!--                                        Robotics DragonBoard Qualcomm<sup>TM</sup> 845c development board featuring Qualcomm<sup>&reg;</sup> SDA/SDM845 processor and compliant with the 96Boards open hardware specification-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        Qualcomm Robotics navigation mezzanine featuring time-of-flight, trackingcamera, active stereo camera and main camera, which is compliant with 96Boards open hardware specification-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        Sensor support including the industry&prime;s best performing ICM-426886-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        Qualcomm Robotics cellular mezzanine (optional)-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        Multi-Mic support-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        Power supply-->
<!--                                    </li>-->
<!--                                </ul>-->


<!--                            </div>-->
<!--                            <hr class="all_hr">-->
<!--                        </div>-->

<!--                        <div class="product_show" id="i2">-->
<!--                            <span class="prohard">Highlights</span>-->
<!--                            <div class="product_hightlight">-->
<!--                            <table style="font-size:16px;font-family:Arial, Helvetica, sans-serif;">-->
<!--                            <tbody>-->
<!--                            <tr>-->
<!--                                <td>-->
<!--                                    <img src="../../assets/images/rb3/rb3-1.png" alt="">-->
<!--                                </td>-->
<!--                                <td>-->
<!--                                    <img src="../../assets/images/rb3/rb3-2.png" alt=""> -->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 3% 0 0;height:50px;color:#495a75;">-->
<!--                                On-device intelligence powered by Artificial Intelligence Engine (AIE)-->
<!--                                </td>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">-->
<!--                                Power efficient and cost-effective-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">-->
<!--                                The Qualcomm <sup>&reg;</sup> AI Engine on the Qualcomm<sup>&reg;</sup> Robotics RB3 Platform includes the Qualcomm&reg; Neural Processing SDK,which encompasses analysis, optimization, and debugging tools designed to allow developers and manufacturers to port trained deep learning networks on the various heterogeneous compute blocks offered by the platform.-->
<!--                                </td>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">-->
<!--                                The Qualcomm <sup>&reg;</sup> Robotics RB3 Platform is designed to support large industrial and enterpriseenterprise robot&prime;s as well as small battery-operated robots with challenging power and thermal dissipation requirements.-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td>-->
<!--                                    <br>-->
<!--                                    <img src="../../assets/images/rb3/rb3-3.png" alt="">-->
<!--                                </td>-->
<!--                                <td>-->
<!--                                    <br>-->
<!--                                    <img src="../../assets/images/rb3/rb3-4.png" alt="">-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">-->
<!--                                Comprehensive development kit-->
<!--                                </td>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">-->
<!--                                Flexible design options for commercialization-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">-->
<!--                                Further reduce development time and complexity for intelligent high-performance robots using a feature packed development kit. The kit includes the robotics-focused DragonBoard<sup>TM</sup> 845c development board, compliant with the 96Boards open hardware specification for supporting a broad range of mezzanine-board expansions and range of sensor support like time-of-flight (ToF), active stereo camera, multi-mic, IMU and proximity.-->
<!--                                </td>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">-->
<!--                                In addition to a feature packed development kit, the platform offers a range of solutions for commercialization from off-the-shelf System-on-Module (SoM) solutions to speed commercialization, to the flexibility for chip-on-board designs for cost-optimization at scale.-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B1 &ndash;&gt;-->
<!--                            <tr>-->
<!--                                <td>-->
<!--                                    <br>-->
<!--                                    <img src="../../assets/images/rb3/rb3-5.png" alt="">-->
<!--                                </td>-->
<!--                                <td>-->
<!--                                    <br>-->
<!--                                    <img src="../../assets/images/rb3/rb3-6.png" alt="">-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">-->
<!--                                High resolution depth sensing-->
<!--                                </td>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">-->
<!--                                Time-of-Flight (ToF) camera-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">-->
<!--                                Powered by Qualcomm Spectra<sup>TM</sup> 280 ISP for high resolution and high accuracy depth sensing-->
<!--                                </td>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">-->
<!--                                Time-of-flight for gestures and hand tracking use cases-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F &ndash;&gt;-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B2 &ndash;&gt;-->
<!--                            <tr><td><br><img src="../../assets/images/rb3/rb3-7.png" ></td><td><br><img src="../../assets/images/rb3/rb3-8.png" alt=""></td></tr>-->
<!--                            <tr>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">-->
<!--                                Tracking camera-->
<!--                                </td>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">-->
<!--                                Advanced security-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">-->
<!--                                Sensor module to do visual Simultaneous Localization and Mapping (vSLAM=-->
<!--                                )-->
<!--                                </td>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">-->
<!--                                Qualcomm <sup>&reg;</sup>Secure Processing Unit, hardware root of trust, trusted execution environment, secure boot, camera security-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F &ndash;&gt;-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B3 &ndash;&gt;-->
<!--                            <tr>-->
<!--                                <td><br><img src="../../assets/images/rb3/rb3-9.png" alt=""></td><td><br><img src="../../assets/images/rb3/rb3-10.png" alt=""></td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">-->
<!--                                Sensor Core-->
<!--                                </td>-->
<!--                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">-->
<!--                                Connectivity-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            <tr><td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">Support for multiple sensors and 3rd party algorithms through Sensor Software Framework</td>-->
<!--                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">Wi-Fi integrated 802.11ac 2x2 with MU-MIMO and support for Bluetooth 5.0 and cellular mezzanines for LTE and CBRS</td>-->
<!--                            </tr>-->
<!--                            &lt;!&ndash; =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F &ndash;&gt;-->
<!--                            </tbody>-->
<!--                            </table>-->
<!--                            </div>-->
<!--                            <hr class="all_hr">-->
<!--                        </div>-->

<!--                        <div class="product_show" id="i3">-->
<!--                            <div class="product_show_div" >Product Specification</div>-->
<!--                            <span class="prohard">Specifications of the Robotics DragaonBoard™ 845c</span>-->
<!--                            <div class="pro_border">-->

<!--                                <table border="1" style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;">-->
<!--                                <tbody>-->
<!--                                <tr style="background-color:#526fe1;color:#fff;font-weight:700;">-->
<!--                                    <td style="width:15%;">-->
<!--                                        Component-->
<!--                                    </td>-->
<!--                                    <td>-->
<!--                                        Qualcomm<sup>&reg;</sup> Robotics RB3 Development Kit-->
<!--                                    </td>-->
<!--                                </tr>-->
<!--                                <tr>-->
<!--                                    <td>-->
<!--                                        SoC-->
<!--                                    </td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">-->
<!--                                        Qualcomm<sup>&reg;</sup>&nbsp;SDA845-->
<!--                                    </td>-->
<!--                                </tr>-->
<!--                                <tr>-->
<!--                                    <td>-->
<!--                                        CPU-->
<!--                                    </td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">-->
<!--                                        SDA845 8x Kryo 385 CPU, up to 2.8 GHz-->
<!--                                    </td>-->
<!--                                </tr>-->
<!--                                <tr><td>GPU</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Adreno<sup>TM</sup> 630 GPU with support for OpenGL ES 3.2 and Open CL 2.0</td></tr>-->
<!--                                <tr><td>DSP</td><td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Hexagon<sup>TM</sup> 685 DSP with 3rd Gen Vector Extensions</td>-->
<!--                                </tr>-->
<!--                                <tr>-->
<!--                                </tr>-->
<!--                                <tr><td>ISP</td><td style="text-align:left;padding-left:10px;">Qualcomm<sup>&reg;</sup> Spectra<sup>TM</sup> 280 Image Signal Processor with new architecture for 14-bit image signal processing</td></tr>-->
<!--                                <tr><td>RAM</td><td style="text-align:left;padding-left:10px;">4GB LPDDR4x SDRAM @ 1866 MHz</td></tr>-->
<!--                                <tr><td>Memory</td><td style="text-align:left;padding-left:10px;">LPDDR4x, 4x16 bit; up to 1866MHz, 4GB RAM</td>-->
<!--                                </tr><tr></tr>-->
<!--                                <tr><td>Storage</td><td style="text-align:left;padding-left:10px;">64GB UFS 2.1 on-board storage and 1 x MicroSD card slot</td>-->
<!--                                </tr><tr><td>Ethernet</td><td style="text-align:left;padding-left:10px;">1x GbE Ethernet</td>-->
<!--                                </tr><tr><td>-->
<!--                                        Wireless</td><td style="text-align:left;padding-left:10px;">Wi-Fi integrated 802.11ac 2x2 with MU-MIMO; Tri-band Wi-Fi: 2.4 GHz and5 GHz with Dual Band Simultaneous (DBS).<br>Qualcomm <sup>&reg;</sup> TrueWireless<sup>TM</sup> Bluetooth 5.0</td>-->
<!--                                </tr>-->
<!--                                <tr><td>Location</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">GPS, Glonass, BeiDou, Galileo, QZSS, and SBAS</td>-->
<!--                                </tr>-->
<!--                                <tr><td>-->
<!--                                        USB</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">-->
<!--                                        1 x USB 2.0 Micro B (Debug only)<br>-->
<!--                                        1 x USB 3.0 Type C (OTG mode)<br>-->
<!--                                        2x USB 3.0 Type A (Host mode only)</td>-->
<!--                                </tr>-->
<!--                                <tr><td>-->
<!--                                        Display</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">-->
<!--                                        Two 4-lane DSI, D-PHY 1.2 or C-PHY 1.0; VESA DSC 1.1<br>-->
<!--                                        1 x HDMI 1.4 (Type A - full) connector</td>-->
<!--                                </tr>-->
<!--                                <tr><td>Video</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">Ultra HD Premium video capture @ 4K (3840x2160) 60fps, 10bit HDR, Rec 2020 color gamut; H.264 (AVC), H.265 (HEVC) and VP9 support; Slow motion HEVC video encoding of either HD (720p) video up to 480fps or FHD (1080p) up to 240fps</td></tr>-->
<!--                                <tr><td>Audio</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">MP3; aacPlus, eAAC; WMA 9/Pro-->
<!--                                    </td></tr>-->
<!--                                <tr><td>Camera</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">Single HFR 16 MPix camera at 60fps ZSL, Dual 16 MPix cameras at 30fps ZSL, Single 32 MPix camera at 30fps ZSL</td></tr>-->
<!--                                <tr><td>Sensor</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">ICM-42688 6-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense.</td></tr>-->
<!--                                <tr><td>Expansion Interfaces</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">2 x 60 pin High-Speed connectors , 2 x 40 pin Low-Speed connectors, 1 x20 pin Low-Speed connector</td></tr>-->
<!--                                <tr><td>LED</td><td style="text-align:left;padding-left:10px;">7 x LED indicators</td></tr>-->
<!--                                <tr><td>Button</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">Power ,Volume Up/Down,Force Usb Boot, DIP Switch</td>-->
<!--                                </tr>-->
<!--                                <tr><td>Power Source</td>-->
<!--                                    <td style="text-align:left;padding-left:10px;">12V@2.5A adapter with a DC plug</td></tr>-->
<!--                                <tr><td>OS Support</td><td style="text-align:left;padding-left:10px;">LE</td></tr>-->
<!--                                <tr><td>Size</td><td style="text-align:left;padding-left:10px;">85mm by 54 mm</td>-->
<!--                                </tr>-->
<!--                                </tbody>-->
<!--                                </table>-->
<!--                            </div>-->
<!--                            <hr class="all_hr">-->
<!--                        </div>-->
<!--                        <div class="product_show" id="i4">-->
<!--                            <div class="product_show_div" >Product Characteristics</div>-->
<!--                            <span class="prohard">Applications</span>-->
<!--                            <div class="pro_border">-->
<!--                                <img src="../../assets/images/rb3/rb3-11.png" alt="">-->
<!--                            </div>-->

<!--                            <hr class="all_hr">-->
<!--                        </div>-->
<!--                        <div class="product_show" id="i5">-->
<!--                            <span class="prohard">Feature Demo</span>-->
<!--                            <div class="product_hightlight">-->
<!--                                <div class="contain">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-2">-->
<!--                                            <p class="p" style="line-height:1.7em;margin-right:50px;text-align:justify;">-->
<!--                                                Qualcomm&prime;s Robotics RB3 Platform with ROS has been seamlessly integrated with and drives Kobuki mobile research base. RB3 platform&prime;s ToF camera or structured light camera can be used for depth mapping and development of navigation algorithms to drive the Kobuki. RB3 platform&prime;s tracking camera can be used for visual simultaneous location and mapping (vSLAM), and the high resolution camera can be used for video recording.-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                        <div class="col-md-2">-->
<!--                                            <video width="100%" height="auto" controls="controls">-->
<!--                                                <source src="../../assets/video/basic kit.mp4" type="video/mp4">-->
<!--                                            </video>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <hr class="all_hr">-->
<!--                        </div>-->
<!--                        <div class="product_show" id="i6">-->
<!--                            <span class="prohard">Compatible With</span>-->
<!--                            <div class="pro_border">-->
<!--                                <div class="col-md-1" style="margin-bottom: 30px">-->
<!--                                    <img src="../../assets/images/rb3/rb3-12.png" alt="">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;-->
<!--                                    <a class="robomaker" href="https://aws.amazon.com/robomaker/" target="_blank">-->
<!--                                        <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/e975e3a2475948ab9e8231ea596bea0c&#45;&#45;1003843795" alt="" width="250" height="138"></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;-->
<!--                                    <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/6a2050580563482aa2165faac637a517&#45;&#45;2105746679" alt="" width="250" height="100" title="" align="">-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <hr class="all_hr"  >-->
<!--                        </div>-->
<!--                        <div class="product_show" id="i7">-->
<!--                        <span class="prohard">Compatible With</span>-->
<!--                        <div class="pro_border">-->
<!--                            <table border="1" style="width:100%;font-size:16px;line-height:2em;text-align:left;border-color:cornflowerblue;" cellspacing="0" class="doc">-->
<!--                            <tbody>-->
<!--                            <tr><td rowspan="17" style="font-weight:550;text-align:center;">Documentation</td><td rowspan="13" style="font-weight:550;text-align:center;">Hardware</td><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;">Quick Start-->
<!--                                        Guide</span> </a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics-->
<!--                                        DragonBoard 845c Spec</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics-->
<!--                                        Navigation Mezzanine Spec</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics Machine-->
<!--                                        Communication Mezzanine Spec</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Main-->
<!--                                        Camera Spec</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Tracking Camera-->
<!--                                        Spec</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">ToFCamera Hardware User Guide</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">SLM-->
<!--                                        Camera Hardware User Guide</span></a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Hardware User Guide</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Schematics</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform  STEP Models</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">D845 SOM Datasheet</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">D845 SOM GPIO Pin Assignment</a></td></tr>-->
<!--                            <tr><td rowspan="4" style="font-weight:550;text-align:center;">Software</td><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Linux User Guide</a></td></tr>-->
<!--                            &lt;!&ndash; <tr>-->
<!--                                <td class="doc_td_left">-->
<!--                                    <a title="docment" rel="nofollow" href="javascript:void(0)" oncl=-->
<!--                            ick="getDocument('220')">Qualcomm Robotics RB3 LE SDK User Manual</a> -->
<!--                                </td>-->
<!--                            </tr> &ndash;&gt;-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Qualcomm Robotics RB3 Platform Release notes</span></a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">SLM Camera ImageViewer.pdf</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">RB3 Robomaker Guide</a></td>-->
<!--                            </tr>-->
<!--                            <tr>-->
<!--                                <td colspan="2" rowspan="2" style="font-weight:550px;text-align:center;">Firmware</td>-->
<!--                                &lt;!&ndash;-->
<!--                                                <td class="doc_td_left">-->
<!--                                                    <a title="docment" rel="nofollow" href="javascript:void(0)" oncl=-->
<!--                                ick="getDocument('166')">Qualcomm Robotics-->
<!--                                                                RB3 Platform Image_20190222</a> -->
<!--                                                </td>-->
<!--                                &ndash;&gt;<td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Image_20191029</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Readme</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td rowspan="11" colspan="2" style="font-weight:550;text-align:center;">Samples-apps-codes</td><td class="doc_td_left"><a title="docment" rel="nofollow">button_test.tar</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">can-test.tar</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">bt-app_test.tar</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">aplay_test.tar</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">hal_play_test.tar</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">sns_hal_tests.tar</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">camera_test.tar</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">omx_test.tar</a>-->
<!--                            </td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">gst_test.tar</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">opengles_test.tar</a>-->
<!--                            </td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">ros_test.tar</a>-->
<!--                            </td></tr>-->
<!--                            <tr><td rowspan="5" colspan="2" style="font-weight:550;text-align:center;">testResource</td><td class="doc_td_left"><a title="docment" rel="nofollow">Audio</a>-->
<!--                            </td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">FastCV</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">OpenGLES</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Video</a></td>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">SNPE</a></td></tr>-->
<!--                            <tr><td rowspan="6" colspan="2" style="font-weight:550;text-align:center;">Tools</td><td class="doc_td_left"><a title="docment" rel="nofollow">SLM-->
<!--                                        Camera Image-->
<!--                                        Viewer.exe</a></td></tr><tr>-->
<!--                            </tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">App-->
<!--                                        Toolchain-->
<!--                                        SDK</a></td></tr><tr><td class="doc_td_left"><a title="docment" rel="nofollow">QTI-->
<!--                                        USB driver</a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;">TFlash</span> </a></td></tr>-->
<!--                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;text-align: left">Thundersoft_Flash_Programmer_Tool_User_Guide</span> </a></td></tr>-->
<!--                            </tbody>-->
<!--                            </table>-->
<!--                        </div>-->

<!--                        <hr class="all_hr"  >-->
<!--                    </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--                &lt;!&ndash;            <div class="footer">&ndash;&gt;-->
<!--                &lt;!&ndash;                <div  class="footer_inners">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div class="footer_inner">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <span class="footer_span1">CONTACT INFO联系方式</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <span class="footer_span11">中科创达股份有限公司是智能操作系统产品和技术提供商。自2008年成立依赖，公司致力于提供智能化操作系统系列产品、技术及解决方案。</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div class="footer_inner">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <span class="footer_span2">(86)10-62662686</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <span class="footer_span21">biz@thundersoft.com</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <span class="footer_span22">北京市海淀区清华东路9号院3号楼创达大厦 邮编：100083</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;            </div>&ndash;&gt;-->
<!--            </div>-->
        </div>
    </el-container>


</template>
<script>

    export default {
        data(){
            const vm=window.vm;
            return {
                //home:this.$t('nav.document')
                vm:vm,
                whether:false,
                curId:0
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
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                const w=document.getElementById("iii")
                window.console.log(w.offsetTop)
                // var scrollTop = w.scrollTop;
                // window.console.log('aaa'+scrollTop);
                //alart(scrollTop);
                if(scrollTop>w.offsetTop){
                    this.whether = true;
                }else{
                    this.whether = false;
                }
            },
            handleClick(tab){

                document.querySelector(tab.name).scrollIntoView({
                    behavior:"smooth"});
            },
            handleClick1(tab){

                document.querySelector(tab.name).scrollIntoView(true);
            },
            buy_rb3() {
                this.$router.push(
                    { path: '/buy',
                        query:{ name:'RB3'}
                    }
                );

            }


        },
        mounted:function(){
            window.addEventListener("scroll", this.handleScroll)
        },
    }
</script>
<style scoped lang="less">

 /*td{*/
 /*   text-align: left;*/
 /*}*/
 a{
    cursor: pointer;
}
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
        /*background-color: white;*/
        padding: 25px 25px;
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
        margin: 0 12px;
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
        margin-left: 25px;
    }
    .product_show{
        /*display: flex;*/
        /*justify-content:space-around;*/
        text-align: center;
        background-color: white;
        width: 100%;
        padding-top: 10PX;
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
        margin-left: 30px;
        height: 28px ;
        /*width: 200px;*/
        cursor:pointer;
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
        /*width: 200px;*/
        margin: 0 0 10px 30px;
        /*margin-left: 2.3%;*/
        padding: 20px;
        font-size: 21px;
        font-weight: bold;
        text-align: left;
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
   .pro_bor{
     width: 100%;
     margin: 0 auto;

       height: 170px;
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
.tabs{
    background-color: white;
    padding-left:1.2%;
    padding-top: 10px;
    padding-right: 7.5%;
    font-size: 21px;
    margin-top: 40px;
    border:1px solid #0f0f0f;
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
        margin: 50px auto 0 0;
        font-size: 21px;
        font-weight: bold;

    }

    .aikit_introduce{
        margin: 40px 20px 0 0;
    }
    .aikit_btn{
        /*margin: 60px  auto 101.5px 0;*/
        margin-top: 50px;
        margin-bottom: 20px;
    }
    #aikit_ours{
        height: 100%;
        background-color: white;
        padding: 0;
        margin-left: 10%;
        margin-top: 0.2%;


    }
    .aikit_img_div{
           margin-left: 10%;
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
    .prohard{
        display: block;
        /*margin:10px 0 0 115px;*/
        margin-left: 7.5%;
        font-weight: bold;
        font-size: 18px;
        /*width:118px;*/
        text-align: left;
        margin-bottom: 15px;
    }
    .product_hightlight{
        margin-left:auto;
        margin-right:auto;
        text-align:left;
        background-color:white;
        width:85%;
        padding:10px 10px 10px 20px;
    }
 .pro_hightlight{
     margin-left:auto;
     margin-right:auto;
     text-align:left;
     background-color:white;
     width:100%;
     padding:10px 10px 10px 20px;
 }
     .contain {}
    .row {}
    .row>div {
        box-sizing: border-box;
    }
    .row:before,
    .row:after {
        content: '';
        display: table;
        clear: both;
    }
    @media (min-width: 768px) {
        .col-md-1 {
            width: calc(100% - 20px);
        }
        .col-md-2 {
            width: calc(50% - 20px);
        }
        .col-md-1,
        .col-md-2 {
            float: left;
        }
    }
   .p{
       margin: 0 0 10px;
   }

     .robomaker img {
         padding: 5px;
         border: solid 1px rgb(150, 150, 150);
         /* background: lightgreen; */
         cursor: pointer;
         transition: background 0.5s;
         -webkit-transition: background 0.5s;
     }

    .robomaker img:hover {
        border: #5eb6ff solid 1px;
    }
   .fixTitle1{
       background-color: #cccccc;
      width: 97.3%;
       padding: 0;
        margin: 0;
       z-index:1
     }
   .fixTitle{
    position:fixed;
    top:0;
    display: flex;
  }
</style>

