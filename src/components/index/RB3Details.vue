<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt="">
            </div>

            <div class="main">
                <div class="first">
<!--                    <div   class="col-md-4 col-xs-11 aikit_img_div" style="background-color: white;padding: 0;">-->
<!--                        <img src="../../assets/images/rb3/rb3.png" alt=""  width="100%" >-->
<!--                    </div>-->
<!--                    <div id="aikit_ours" class="col-md-4 col-xs-11" >-->
<!--                        <div class="aikit_title">Qualcomm  <SUP>&reg;</SUP> Robotics RB3 Platform <sapn>(SDA845)</sapn></div>-->
<!--                        <div class="aikit_introduce"> The Qualcomm Robotics RB3 development kit supports the development of smart, power-efficient and cost-effective robots by combining high-performance heterogeneous computing, Qualcomm® Artificial Intelligence (AI) Engine for on-device machine learning, computer vision, vault-like security, multimedia and Wi-Fi and cellular connectivity (4G/LTE and CBRS). Comprised of a comprehensive set of software & hardware, including the industry’s best performing 6-Axis Motion Sensor (ICM-42688), Top Port PDM Microphone (ICS-41351), and Barometric Pressure Sensor (ICP-10101) from TDK InvenSense.The Qualcomm Robotics RB3 development kit is designed to help manufacturers and developers create robotic products ranging from large industrial and enterprise robots to small battery-operated one’s with challenging power and thermal dissipation requirements.</div>-->
<!--                        <div class="aikit_btn">-->
<!--                            <el-button type="primary">Buy Now</el-button>-->
<!--                            <el-button type="primary">Device Management</el-button>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div   class="col-md-7 col-xs-12 aikit_img_div1" style="background-color: white;padding: 0;height:100%">
                        <img src="../../assets/images/3rb3.png" alt=""  width="100%" >
                    </div>
                    <div id="aikit_ours1" class="col-md-4 col-xs-11" >
                        <div class="aikit_title">Qualcomm  <SUP>&reg;</SUP> Robotics RB3 Platform <sapn>(SDA845)</sapn></div>
                        <div class="aikit_introduce"> The Qualcomm Robotics RB3 development kit supports the development of smart, power-efficient and cost-effective robots by combining high-performance heterogeneous computing, Qualcomm® Artificial Intelligence (AI) Engine for on-device machine learning, computer vision, vault-like security, multimedia and Wi-Fi and cellular connectivity (4G/LTE and CBRS). Comprised of a comprehensive set of software & hardware, including the industry’s best performing 6-Axis Motion Sensor (ICM-42688), Top Port PDM Microphone (ICS-41351), and Barometric Pressure Sensor (ICP-10101) from TDK InvenSense.The Qualcomm Robotics RB3 development kit is designed to help manufacturers and developers create robotic products ranging from large industrial and enterprise robots to small battery-operated one’s with challenging power and thermal dissipation requirements.</div>
                        <div class="aikit_btn">
                            <el-button type="primary" @click="buy">Buy Now</el-button>
                            <el-button type="primary" @click="devMan">Device Management</el-button>
                        </div>
                    </div>

                </div>
                <!--                            悬浮框-->
                <div class="fixTitle1" :class="{fixTitle:whether}"  v-if="whether" >
                    <div  class="tabs1 col-md-12 col-xs-11" >

                        <el-tabs   class="tab_pane" @tab-click="handleClick1">
                            <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>
                            <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>
                            <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>
                            <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>
                            <!--                                <div class="aikit_btn">-->
                            <!--                                    <el-button type="primary">Buy Now</el-button>-->
                            <!--                                    <el-button type="primary">Device Management</el-button>-->
                            <!--                                </div>-->
                        </el-tabs>
                        <el-tabs   class="tab_btn" @tab-click="handleClick1">
                            <el-button type="primary" @click="buy">Buy Now</el-button>
                            <el-button type="primary" @click="devMan">Device Management</el-button>
                            <!--                                </div>-->
                        </el-tabs>
                    </div>
                </div>
                <div>
                    <div class="product">
                        <span class="product_det">商品详情</span>
                        <div  class="tabs">
                            <el-tabs  id="iii" class="tabs_1" @tab-click="handleClick">
                                <el-tab-pane label="Key Advantage" name="#i1"></el-tab-pane>
                                <el-tab-pane label="Product Specification" name="#i2"></el-tab-pane>
                                <el-tab-pane label="Product Characteristics" name="#i3"></el-tab-pane>
                                <el-tab-pane label="Tutorials and Documentation" name="#i4"></el-tab-pane>
                            </el-tabs>
                        </div>
<!--                        <div class="product_indexs" >-->
<!--                            <div class="product_index"   >-->
<!--                                <div class="product_btn" @click="counter3">Key Advantage</div>-->
<!--                                <div class="product_btn" @click="counter7">Product Specification</div>-->
<!--                                <div class="product_btn" @click="counter4">Product Characteristics</div>-->
<!--                                <div class="product_btn" @click="counter5">Tutorials and Documentation</div>-->
<!--                                <div> /</div>-->
<!--                            </div>-->
<!--                        </div>-->
                        <div class="product_show">
                            <div class="product_show_div" id="i1">Key Advantage</div>
                            <span class="prohard">Introduction</span>
                            <div>
                                <p >
                                    The Qualcomm Robotics RB3 development kit includes the purpose-built robotics-focused DragonBoard<sup>TM</sup> 845c development board, based on the Qualcomm<sup>&reg;</sup> SDA845 processor and compliant with the 96Boards open hardware specification to support a broad range of mezzanine-board expansions.
                                </p>
                                <p>
                                    The Qualcomm SDA845 processor is a heterogeneous computing architecture and integrates an Octa Core Qualcomm <sup> &reg;</sup> Kryo<sup>TM</sup> CPU withperformance up to 2.8GHz a Qualcomm<sup>&reg;</sup> AdrenoQualcomm<sup>TM</sup> 630 Visual Processing Subsystem (including GPU, VPU and DPU), and a Qualcomm<sup>&reg;</sup> HexagonQualcomm<sup>TM</sup> 685 DSP with Hexagon Vector Extensions (HVX) delivering sophisticated, on-device AI processing and mobile-optimized computer vision (CV) capabilities for perception, navigation and manipulation.
                                </p>
                                <p >
                                    The development board supports Linux and Robotics Operating System (ROS), while also including support for the Qualcomm<sup>&reg;</sup> Neural Processing software development kit (SDK) for advanced on-device AI, the Qualcomm<sup>&reg;</sup> Computer Vision Suite, the Qualcomm<sup>&reg;</sup> Hexagon DSP SDK, and<a href="https://aws.amazon.com/robomaker/" target="_blank" rel="nofollow" style="text-decoration: underline !important;">AWS RoboMaker</a>.
                                </p>
                                <p>
                                    The kit includes:
                                </p>

                                <ul >
                                    <li>
                                        Robotics DragonBoard Qualcomm<sup>TM</sup> 845c development board featuring Qualcomm<sup>&reg;</sup> SDA/SDM845 processor and compliant with the 96Boards open hardware specification
                                    </li>
                                    <li>
                                        Qualcomm Robotics navigation mezzanine featuring time-of-flight, trackingcamera, active stereo camera and main camera, which is compliant with 96Boards open hardware specification
                                    </li>
                                    <li>
                                        Sensor support including the industry&prime;s best performing ICM-426886-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense
                                    </li>
                                    <li>
                                        Qualcomm Robotics cellular mezzanine (optional)
                                    </li>
                                    <li>
                                        Multi-Mic support
                                    </li>
                                    <li>
                                        Power supply
                                    </li>
                                </ul>


                            </div>
                            <hr class="all_hr">
                        </div>

                        <div class="product_show" id="i2">
                            <span class="prohard">Highlights</span>
                            <div class="product_hightlight">
                            <table style="font-size:16px;font-family:Arial, Helvetica, sans-serif;">
                            <tbody>
                            <tr>
                                <td>
                                    <img src="../../assets/images/rb3/rb3-1.png" alt="">
                                </td>
                                <td>
                                    <img src="../../assets/images/rb3/rb3-2.png" alt=""> 
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 3% 0 0;height:50px;color:#495a75;">
                                On-device intelligence powered by Artificial Intelligence Engine (AIE)
                                </td>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                                Power efficient and cost-effective
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                                The Qualcomm <sup>&reg;</sup> AI Engine on the Qualcomm<sup>&reg;</sup> Robotics RB3 Platform includes the Qualcomm&reg; Neural Processing SDK,which encompasses analysis, optimization, and debugging tools designed to allow developers and manufacturers to port trained deep learning networks on the various heterogeneous compute blocks offered by the platform.
                                </td>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                                The Qualcomm <sup>&reg;</sup> Robotics RB3 Platform is designed to support large industrial and enterpriseenterprise robot&prime;s as well as small battery-operated robots with challenging power and thermal dissipation requirements.
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
                                Comprehensive development kit
                                </td>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                                Flexible design options for commercialization
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                                Further reduce development time and complexity for intelligent high-performance robots using a feature packed development kit. The kit includes the robotics-focused DragonBoard<sup>TM</sup> 845c development board, compliant with the 96Boards open hardware specification for supporting a broad range of mezzanine-board expansions and range of sensor support like time-of-flight (ToF), active stereo camera, multi-mic, IMU and proximity.
                                </td>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                                In addition to a feature packed development kit, the platform offers a range of solutions for commercialization from off-the-shelf System-on-Module (SoM) solutions to speed commercialization, to the flexibility for chip-on-board designs for cost-optimization at scale.
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
                                High resolution depth sensing
                                </td>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                                Time-of-Flight (ToF) camera
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                                Powered by Qualcomm Spectra<sup>TM</sup> 280 ISP for high resolution and high accuracy depth sensing
                                </td>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                                Time-of-flight for gestures and hand tracking use cases
                                </td>
                            </tr>
                            <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
                            <!-- =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B2 -->
                            <tr><td><br><img src="../../assets/images/rb3/rb3-7.png" ></td><td><br><img src="../../assets/images/rb3/rb3-8.png" alt=""></td></tr>
                            <tr>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                                Tracking camera
                                </td>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                                Advanced security
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                                Sensor module to do visual Simultaneous Localization and Mapping (vSLAM=
                                )
                                </td>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                                Qualcomm <sup>&reg;</sup>Secure Processing Unit, hardware root of trust, trusted execution environment, secure boot, camera security
                                </td>
                            </tr>
                            <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
                            <!-- =E6=96=B0=E5=A2=9E=E5=BC=80=E5=A7=8B3 -->
                            <tr>
                                <td><br><img src="../../assets/images/rb3/rb3-9.png" alt=""></td><td><br><img src="../../assets/images/rb3/rb3-10.png" alt=""></td>
                            </tr>
                            <tr>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;color:#495a75;">
                                Sensor Core
                                </td>
                                <td style="font-weight:600;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;color:#495a75;">
                                Connectivity
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 5% 0 0;height:50px;line-height:1.7em;">
                                Support for multiple sensors and 3rd party algorithms through Sensor Software Framework
                                </td>
                                <td style="vertical-align:top;padding-right:100px;width:50%;padding:0 0% 0 0;height:50px;line-height:1.7em;">
                                Wi-Fi integrated 802.11ac 2x2 with MU-MIMO and support for Bluetooth 5.0 and cellular mezzanines for LTE and CBRS
                                </td>
                            </tr>
                            <!-- =E6=96=B0=E5=A2=9E=E7=BB=93=E6=9D=9F -->
                            </tbody>
                            </table>
                            </div>
                            <hr class="all_hr">
                        </div>

                        <div class="product_show" id="i3">
                            <div class="product_show_div" >Product Specification</div>
                            <span class="prohard">Specifications of the Robotics DragaonBoard™ 845c</span>
                            <div class="pro_border">

                                <table border="1" style="border-collapse:collapse;width:100%;text-align:center;line-height:2em;">
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
                                <tr><td>
                                        Video</td>
                                    <td style="text-align:left;padding-left:10px;">
                                        Ultra HD Premium video capture @ 4K (3840x2160) 60fps, 10bit HDR, Rec 2020 color gamut; H.264 (AVC), H.265 (HEVC) and VP9 support; Slow motion HEVC video encoding of either HD (720p) video up to 480fps or FHD (1080p) up to 240fps</td>
                                </tr>
                                <tr><td>
                                        Audio
                                    </td>
                                    <td style="text-align:left;padding-left:10px;">MP3; aacPlus, eAAC; WMA 9/Pro
                                    </td>
                                </tr>
                                <tr><td>Camera</td>
                                    <td style="text-align:left;padding-left:10px;">
                                        Single HFR 16 MPix camera at 60fps ZSL, Dual 16 MPix cameras at 30fps ZSL, Single 32 MPix camera at 30fps ZSL</td>
                                </tr>
                                <tr><td>Sensor</td>
                                    <td style="text-align:left;padding-left:10px;">ICM-42688 6-Axis High Performance Motion Sensor, ICS-41351 Top Port Digital Microphone, and ICP-10101 Barometric Pressure Sensor from TDK InvenSense.</td>
                                </tr>
                                <tr><td>Expansion Interfaces</td>
                                    <td style="text-align:left;padding-left:10px;">2 x 60 pin High-Speed connectors , 2 x 40 pin Low-Speed connectors, 1 x20 pin Low-Speed connector</td>
                                </tr>
                                <tr><td>LED</td><td style="text-align:left;padding-left:10px;">7 x LED indicators</td>
                                </tr>
                                <tr><td>Button</td>
                                    <td style="text-align:left;padding-left:10px;">Power ,Volume Up/Down,Force Usb Boot, DIP Switch</td>
                                </tr>
                                <tr><td>Power Source</td>
                                    <td style="text-align:left;padding-left:10px;">12V@2.5A adapter with a DC plug</td>
                                </tr>
                                <tr><td>OS Support</td>
                                    <td style="text-align:left;padding-left:10px;">LE</td>
                                </tr>
                                <tr><td>Size</td>
                                    <td style="text-align:left;padding-left:10px;">85mm by 54 mm</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                            <hr class="all_hr">
                        </div>
                        <div class="product_show" id="i4">
                            <div class="product_show_div" >Product Characteristics</div>
                            <span class="prohard">Applications</span>
                            <div class="pro_border">
                                <img src="../../assets/images/rb3/rb3-11.png" alt="" width="100%">
                            </div>

                            <hr class="all_hr">
                        </div>
                        <div class="product_show" id="i5">
                            <span class="prohard">Feature Demo</span>
                            <div class="product_hightlight">
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
                            <hr class="all_hr">
                        </div>
                        <div class="product_show" id="i6">
                            <span class="prohard">Compatible With</span>
                            <div class="pro_border">
                                <div class="col-md-1" style="margin-bottom: 30px">
                                    <img src="../../assets/images/rb3/rb3-12.png" alt="">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                    <a class="robomaker" href="https://aws.amazon.com/robomaker/" target="_blank">
                                        <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/e975e3a2475948ab9e8231ea596bea0c--1003843795" alt="" width="250" height="138"></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                    <img src="https://thundercomm.s3-ap-northeast-1.amazonaws.com/shop/1544580412842651/6a2050580563482aa2165faac637a517--2105746679" alt="" width="250" height="100" title="" align="">
                                </div>
                            </div>

                            <hr class="all_hr"  >
                        </div>
                        <div class="product_show" id="i7">
                        <span class="prohard">Compatible With</span>
                        <div class="pro_border">
                            <table border="1" style="width:100%;font-size:16px;line-height:2em;text-align:left;border-color:cornflowerblue;" cellspacing="0" class="doc">
                            <tbody>
                            <tr><td rowspan="17" style="font-weight:550;text-align:center;">Documentation</td><td rowspan="13" style="font-weight:550;text-align:center;">Hardware</td><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;">Quick Start
                                        Guide</span> </a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics
                                        DragonBoard 845c Spec</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics
                                        Navigation Mezzanine Spec</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Robotics Machine
                                        Communication Mezzanine Spec</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Main
                                        Camera Spec</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Tracking Camera
                                        Spec</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">ToFCamera Hardware User Guide</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">SLM
                                        Camera Hardware User Guide</span></a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Hardware User Guide</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Schematics</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform  STEP Models</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">D845 SOM Datasheet</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">D845 SOM GPIO Pin Assignment</a></td></tr>
                            <tr><td rowspan="4" style="font-weight:550;text-align:center;">Software</td><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Linux User Guide</a></td></tr>
                            <!-- <tr>
                                <td class="doc_td_left">
                                    <a title="docment" rel="nofollow" href="javascript:void(0)" oncl=
                            ick="getDocument('220')">Qualcomm Robotics RB3 LE SDK User Manual</a> 
                                </td>
                            </tr> -->
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow"><span style="color:blue;text-decoration:underline;">Qualcomm Robotics RB3 Platform Release notes</span></a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">SLM Camera ImageViewer.pdf</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">RB3 Robomaker Guide</a></td>
                            </tr>
                            <tr>
                                <td colspan="2" rowspan="2" style="font-weight:550px;text-align:center;">Firmware</td>
                                <!--
                                                <td class="doc_td_left">
                                                    <a title="docment" rel="nofollow" href="javascript:void(0)" oncl=
                                ick="getDocument('166')">Qualcomm Robotics
                                                                RB3 Platform Image_20190222</a> 
                                                </td>
                                --><td class="doc_td_left"><a title="docment" rel="nofollow">Qualcomm Robotics RB3 Platform Image_20191029</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Readme</a></td>
                            </tr>
                            <tr><td rowspan="11" colspan="2" style="font-weight:550;text-align:center;">Samples-apps-codes</td><td class="doc_td_left"><a title="docment" rel="nofollow">button_test.tar</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">can-test.tar</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">bt-app_test.tar</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">aplay_test.tar</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">hal_play_test.tar</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">sns_hal_tests.tar</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">camera_test.tar</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">omx_test.tar</a>
                            </td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">gst_test.tar</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">opengles_test.tar</a>
                            </td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">ros_test.tar</a>
                            </td></tr>
                            <tr><td rowspan="5" colspan="2" style="font-weight:550;text-align:center;">testResource</td><td class="doc_td_left"><a title="docment" rel="nofollow">Audio</a>
                            </td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">FastCV</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">OpenGLES</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">Video</a></td>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">SNPE</a></td></tr>
                            <tr><td rowspan="6" colspan="2" style="font-weight:550;text-align:center;">Tools</td><td class="doc_td_left"><a title="docment" rel="nofollow">SLM
                                        Camera Image
                                        Viewer.exe</a></td></tr><tr>
                            </tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow">App
                                        Toolchain
                                        SDK</a></td></tr><tr><td class="doc_td_left"><a title="docment" rel="nofollow">QTI
                                        USB driver</a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;">TFlash</span> </a></td></tr>
                            <tr><td class="doc_td_left"><a title="docment" rel="nofollow" target="_blank"><span style="color:blue;text-decoration:underline;text-align: left">Thundersoft_Flash_Programmer_Tool_User_Guide</span> </a></td></tr>
                            </tbody>
                            </table>
                        </div>

                        <hr class="all_hr"  >
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
            buy(){
                alert("购买")
            },
           devMan(){
                alert("设备管理")
           }

        },
        mounted:function(){
            window.addEventListener("scroll", this.handleScroll)
        },
    }
</script>
<style scoped lang="less">

 td{
    text-align: left;
 }
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
      width: 85%;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        line-height:1.7em;
        margin-bottom:10px;
        line-height:1.7em;
        font-size:16px;
        font-family:Arial, Helvetica,sansserif;
    }
    ul{
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        line-height:1.7em;
        margin-bottom:10px;
        padding-left: 12px;
        line-height:1.7em;
        font-size:16px;
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
