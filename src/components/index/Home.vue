<template>
  <el-container>
    <div class="home-container">
<!--      <div class="header">-->
<!--        <img class="img" src="../../assets/images/logo.png" alt />-->
<!--      </div>-->
      <el-header height="80px">
        <div class="nav_layout">
          <img class="logo" src="../../assets/images/logo.png" alt />
          <div class="nav_layout_right">
            <div class="nav_item">
              <a class="nav_a" href="#">
                <span class="nav_font">控制台</span>
              </a>
            </div>

            <div class="nav_item">
              <a class="nav_a" @click="go_orderList" href="#">
                <span class="nav_font">我的订单</span>
              </a>
            </div>
            <div v-if="isLogin" class="nav_item">
              <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            <img class="head_frame" src="../../assets/images/aikit.png" alt/>
                        </span>
                <el-dropdown-menu style="background-color: #0B152E" slot="dropdown">
                  <el-dropdown-item icon="el-icon-user-solid">
                    <a class="nav_a" href="#">
                      <span class="nav_dropdown_font">个人中心</span>
                    </a>
                  </el-dropdown-item>
                  <hr style="opacity: 0.15;background: #FFFFFF;margin-left: 5px">
                  <el-dropdown-item icon="el-icon-switch-button">
                    <a href="#">
                      <span class="nav_dropdown_font">退出登陆</span>
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div v-else class="nav_item">
              <el-button size="small"
                         type="primary"
                         @click="go_login">
                    <span class="button_font">
                        立即登陆
                    </span></el-button>
            </div>
          </div>
        </div>
      </el-header>
      <div class="main">
        <div>
          <!--                <img src="../../assets/images/index6.png" width="100%">-->
          <div class="home_first">
            <img src="../../assets/images/home/first.png" style="width: 100%">
<!--            <div class="home_first_left">-->
<!--              <div class="home_first_left_top">-->
<!--                <div class="first_font">我们追求更灵活便携的嵌入式开发工作</div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <img src="../../assets/images/home1.png" width="100%" />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="home_first_right">-->
<!--              <div>-->
<!--                <img src="../../assets/images/home2.png" width="100%" />-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div style="">
            <div class="advs">
              <div class="adv_title">
                  <span class="adv_content1">硬件分时共享平台
                    <hr style="margin: 0">
                    <span style="font-size:28px;margin:0 auto;width: 60px;letter-spacing:2px">
                        优势
                    </span>
                  </span>

                  <span class="adv_content2">
                      <span class="adv_image">
                      <img src="../../assets/images/home/dichengben.png" alt="">
                          </span>
                    <span class="adv_content_title1"> 低成本</span>
                    <span class="adv_content_title2"> 对于设备，提高资源利用率减少闲置资源的浪费</span>
                  </span>
                  <span class="adv_content2">
                    <span class="adv_image">
                      <img src="../../assets/images/home/xinziyuan.png" alt="">
                    </span>
                        <span class="adv_content_title1"> 新资源</span>
                    <span class="adv_content_title2"> 第一手新设备，随时更新，无需等待</span>
                  </span>
                  <span class="adv_content2">
                      <span class="adv_image">
                    <img src="../../assets/images/home/gengzhuanye.png" alt="">
                          </span>
                    <span class="adv_content_title1"> 更专业</span>
                    <span class="adv_content_title2"> 企业级系统支持和服务</span>
                  </span>
                  <span class="adv_content2">
                      <span class="adv_image">
                    <img src="../../assets/images/home/gongjinbu.png" alt="">
                     </span>
                    <span  class="adv_content_title1"> 共进步</span>
                    <span  class="adv_content_title2"> 在45IOT社区讨论学习进步</span>
                  </span>

              </div>

            </div>
<!--            <div>-->
<!--              <div class="advantages_title">硬件分时共享平台的优势</div>-->
<!--            </div>-->
<!--            <div class="advantages">-->
<!--              <div class="adv_imgs">-->
<!--                <img src="../../assets/images/home/advantages.png" alt class="imgs" />-->
<!--              </div>-->
<!--              <div class="adv_imgs">-->
<!--                <img src="../../assets/images/home/advantages21.png" alt class="imgs" />-->
<!--              </div>-->
<!--              <div class="adv_imgs">-->
<!--                <img src="../../assets/images/home/advantages3.png" alt class="imgs" />-->
<!--              </div>-->
<!--              <div class="adv_imgs">-->
<!--                <img src="../../assets/images/home/advantages4.png" alt class="imgs" />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="adv_imgs_bottom">-->
<!--              <div class="adv_content">-->
<!--                <div style="text-align:left">对比设备，租比买的价格更低</div>-->
<!--              </div>-->
<!--              <div class="adv_content">-->
<!--                <div style="text-align:left">第一手新设备，随时更新 ，无需等待</div>-->
<!--              </div>-->
<!--              <div class="adv_content">-->
<!--                <div style="text-align:left">企业级系统支持和服务</div>-->
<!--              </div>-->
<!--              <div class="adv_content">-->
<!--                <div style="text-align:left">在45IOT社区讨论交流学习</div>-->
<!--              </div>-->
<!--            </div>-->
          </div>

<!--          <div class="product_show">-->
<!--            <el-row>-->
<!--              <el-col :offset="2">-->
<!--                <span style="font-weight: 900;font-size: 20px;">产品展示</span>-->
<!--              </el-col>-->
<!--            </el-row>-->

<!--            <el-row>-->
<!--              <el-col :span="6" :offset="2" :xs="{span:20,offset:2}" :lg="{span:5,offset:2}">-->
<!--                <el-card :body-style="{ padding: '0px' }" >-->
<!--                  <img-->
<!--                    src="../../assets/images/home/aikit.png"-->
<!--                    class="image"-->
<!--                    style="height: 300px;width: 100%" @click="go_aikit"-->
<!--                  />-->
<!--                  <div style="padding: 14px;" @click="go_aikit" class="card_div">-->
<!--                    <span style="font-size: 20px;margin:0 0 10px 10px">Thundercomm TurboX™AI套件</span>-->
<!--                    <p style="line-height:25px;margin-left: 20px;margin-right:10px">具有AI视觉功能的边缘设备</p>-->
<!--                    <el-row :gutter="13">-->
<!--                      <el-col :span="15">-->
<!--                        <span class="card_span">Qualcomm SDA845处理器</span>-->
<!--                        <span class="card_span">六核685 DSP</span>-->
<!--                      </el-col>-->
<!--                      <el-col :span="9">-->
<!--                        <span class="card_span">Adreno 630 GPU</span>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                    <div style="background-color: rgba(242, 242, 242, 1)">-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">算法SDK</span>-->
<!--                      </div>-->

<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">强大的计算</span>-->
<!--                      </div>-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">灵活的视觉解决方案</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="bottom clearfix" style="text-align: right;">-->
<!--                      <el-button type="text" class="button" @click.stop="buy_aikit">立即购买</el-button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--              <el-col :span="6" :offset="1" :xs="{span:20,offset:2}" :lg="{span:5,offset:2}">-->
<!--                <el-card :body-style="{ padding: '0px' }" @click="go_edgekit">-->
<!--                  <img-->
<!--                    src="../../assets/images/home/edge.png"-->
<!--                    class="image"-->
<!--                    style="height: 300px;width: 100%" @click="go_edgekit"-->
<!--                  />-->
<!--                  <div style="padding: 14px;" class="card_div"  @click="go_edgekit">-->
<!--                    <span style="font-size: 20px;margin:0 0 10px 10px">TurboX Edge套件</span>-->
<!--                    <p-->
<!--                      style="line-height:25px;margin-left: 20px;margin-right:10px"-->
<!--                    >EdgeKit致力于驱动并实现强大，可靠和智能的通用边缘计算E2E解决方案。</p>-->
<!--                    <el-row :gutter="13">-->
<!--                      <el-col :span="15">-->
<!--                        <span class="card_span">Qualcomm SDA845处理器</span>-->
<!--                        <span class="card_span">六核685 DSP</span>-->
<!--                      </el-col>-->
<!--                      <el-col :span="9">-->
<!--                        <span class="card_span">Adreno 630 GPU</span>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                    <div style="background-color: rgba(242, 242, 242, 1)">-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">QUALCOMM®神经处理SDK</span>-->
<!--                      </div>-->

<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">综合开发套件</span>-->
<!--                      </div>-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">高效节能</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="bottom clearfix" style="text-align: right;">-->
<!--                      <el-button type="text" class="button" @click.stop="buy_edgekit">立即购买</el-button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--              <el-col :span="6" :offset="1" :xs="{span:20,offset:2}" :lg="{span:5,offset:2}">-->
<!--                <el-card :body-style="{ padding: '0px' }" >-->
<!--                  <img-->
<!--                    src="../../assets/images/home/rb3.png"-->
<!--                    class="image"-->
<!--                    style="height: 300px;width: 100%"  @click="go_rb3"-->
<!--                  />-->
<!--                  <div style="padding: 14px;" class="card_div" @click="go_rb3">-->
<!--                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>-->
<!--                    <p-->
<!--                      style="line-height:25px;margin-left: 20px;margin-right:10px"-->
<!--                    >特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>-->
<!--                    <el-row :gutter="13">-->
<!--                      <el-col :span="15">-->
<!--                        <span class="card_span">Qualcomm SDA845处理器</span>-->
<!--                        <span class="card_span">六核685 DSP</span>-->
<!--                      </el-col>-->
<!--                      <el-col :span="9">-->
<!--                        <span class="card_span">Adreno 630 GPU</span>-->
<!--                        <span class="card_span">配件：ToF相机</span>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                    <div style="background-color: rgba(242, 242, 242, 1)">-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">QUALCOMM®神经处理SDK</span>-->
<!--                      </div>-->

<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">综合开发套件</span>-->
<!--                      </div>-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">高效节能</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="bottom clearfix" style="text-align: right;">-->
<!--                      <el-button type="text" class="button" @click.stop="buy_rb3">立即购买</el-button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="6" :offset="2" :xs="{span:20,offset:2}" :lg="{span:5,offset:2}">-->
<!--                <el-card :body-style="{ padding: '0px' }" @click="go_rb3">-->
<!--                  <img-->
<!--                    src="../../assets/images/home/rb3.png"-->
<!--                    class="image"-->
<!--                    style="height: 300px;width: 100%" @click="go_rb3"-->
<!--                  />-->
<!--                  <div style="padding: 14px;" class="card_div">-->
<!--                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>-->
<!--                    <p-->
<!--                      style="line-height:25px;margin-left: 20px;margin-right:10px"-->
<!--                    >特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>-->
<!--                    <el-row :gutter="13">-->
<!--                      <el-col :span="15">-->
<!--                        <span class="card_span">Qualcomm SDA845处理器</span>-->
<!--                        <span class="card_span">六核685 DSP</span>-->
<!--                      </el-col>-->
<!--                      <el-col :span="9">-->
<!--                        <span class="card_span">Adreno 630 GPU</span>-->
<!--                        <span class="card_span">配件：ToF相机</span>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                    <div style="background-color: rgba(242, 242, 242, 1)">-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">QUALCOMM®神经处理SDK</span>-->
<!--                      </div>-->

<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">综合开发套件</span>-->
<!--                      </div>-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">高效节能</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="bottom clearfix" style="text-align: right;">-->
<!--                      <el-button type="text" class="button">立即购买</el-button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->

<!--              <el-col :span="6" :offset="1" :xs="{span:20,offset:2}" :lg="{span:5,offset:2}">-->
<!--                <el-card :body-style="{ padding: '0px' }">-->
<!--                  <img-->
<!--                    src="../../assets/images/home/rb3.png"-->
<!--                    class="image"-->
<!--                    style="height: 300px;width: 100%"-->
<!--                  />-->
<!--                  <div style="padding: 14px;" class="card_div">-->
<!--                    <span style="font-size:20px;margin:0 0 10px 10px">高通®机器人RB3平台（SDA845）</span>-->
<!--                    <p-->
<!--                      style="line-height:25px;margin-left: 20px;margin-right:10px"-->
<!--                    >特制的机器人为重点的DragonBoard™845的开发板基于高通上® SDA845处理器和符合所述96Boards开放的硬件规范</p>-->
<!--                    <el-row :gutter="13">-->
<!--                      <el-col :span="15">-->
<!--                        <span class="card_span">Qualcomm SDA845处理器</span>-->
<!--                        <span class="card_span">六核685 DSP</span>-->
<!--                      </el-col>-->
<!--                      <el-col :span="9">-->
<!--                        <span class="card_span">Adreno 630 GPU</span>-->
<!--                        <span class="card_span">配件：ToF相机</span>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                    <div style="background-color: rgba(242, 242, 242, 1)">-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">QUALCOMM®神经处理SDK</span>-->
<!--                      </div>-->

<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">综合开发套件</span>-->
<!--                      </div>-->
<!--                      <div style="display: flex">-->
<!--                        <img class="u242_img" src="../../assets/images/home/u198.png" alt />-->
<!--                        <span class="card_span">高效节能</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="bottom clearfix" style="text-align: right;">-->
<!--                      <el-button type="text" class="button">立即购买</el-button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->

          <div class="product_display">
            <el-row>
              <el-col :offset="4">
                <span class="block_title">产品</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:4}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:1}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:1}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>

            </el-row>
            <el-row>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:4}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:1}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="5" :offset="4" :xs="{span:20,offset:2}" :lg="{span:5,offset:1}">
                <el-card :body-style="{ padding: '0px' }" >
                  <img
                          src="../../assets/images/home/aikit_resize_2.png"
                          class="card_image" @click="go_aikit"
                  />
                  <div style="padding: 14px;" @click="go_aikit" class="card_div">
                    <span class="card_title">TurboX™AI套件</span>
                    <div class="card_content">
                      <p>具有AI视觉功能的边缘设备</p>
                    </div>
                    <div class="card_tags">
                      <el-row :gutter="13">
                        <el-col :span="15">
                          <span class="card_tag">Qualcomm SDA845处理器</span>
                          <span class="card_tag">Adreno 630 GPU</span>
                        </el-col>
                        <el-col :span="9">
                          <span class="card_tag">六核685 DSP</span>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="card_labels">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">算法SDK</span>
                      </div>
                      <hr class="card_hr">

                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">强大的计算</span>
                      </div>
                      <hr class="card_hr">
                      <div style="display: flex">
                        <img src="../../assets/images/home/xuanding.png" alt />
                        <span class="card_label">灵活的视觉解决方案</span>
                      </div>
                    </div>
                    <div class="bottom clearfix" style="text-align: right;margin-top: 20px">
                      <el-button type="primary" size="small" @click.stop="buy_aikit">立即购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>

            </el-row>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
          </div>

          <div class="mid">
            <div class="iblock">多种产品形式，灵活适用各类业务场景</div>
            <div class="blocks">
              <div class="block">
                <img src="../../assets/images/home/编组.png" alt="">
                <span class="block_title_info">按需分配 减少初期投入</span>
                <div class="block_inners">
                  <p class="block_inner">
                    嵌入式设备更新和淘汰的频率远远高于个人电脑。
                    根据项目进度，随时可以增加和减少对于设备的使用量。
                  </p>
                </div>
              </div>
              <div class="block">
                <img src="../../assets/images/home/编组.png" alt="">
                <span class="block_title_info">支持多种操作系统</span>
                <div class="block_inners">
                  <p class="block_inner">随时保存设备镜像，工作进度可保存在云端。主动管理和生命周期服务</p>
                </div>
              </div>
              <div class="block">
                <img src="../../assets/images/home/编组.png" alt="">
                <span class="block_title_info">值得依赖</span>
                <div class="block_inners">
                  <p class="block_inner">我们帮助你解决系统、驱动层面的问题。专注于AI算法的问题处理。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home_reg" >
<!--        <div class="home_reg_bg"><img src="../../../public/logo.png" alt /></div>-->
        <span class="home_reg_title">注册账号</span>
        <span class="home_reg_introduce">免费体验Devices on Cloud 平台所有开放设备</span>
        <div class="home_reg_img">
<!--          <img src="../../assets/images/home/home_reg.png" alt />-->
          <div class="home_reg_img1" >
          <img src="../../assets/images/home/zhuce.png" alt="">
          <img src="../../assets/images/home/lianjie.png" alt="">
          <img src="../../assets/images/home/yuancheng.png" alt="">
         </div>
          <div class="home_reg_img2">
             <span>免费注册</span>
             <span>选择设备</span>
             <span>远程登录设备</span>
          </div>
          <div class="home_reg_icon">
            <el-steps :active="3" align-center >

              <el-step title=""></el-step>
              <el-step title=""></el-step>
              <el-step title=""></el-step>

            </el-steps>
          </div>
        </div>

        <div>
          <el-button class="home_reg_btn" size="small" type="primary">立即注册并试用</el-button>
        </div>
      </div>

      <div style="background-color:#D7D7DB;padding-bottom:10px">
        <div class="service">
          <span class="service_title">常见问题</span>
          <!-- <div class="service_index">注册与登录 注册与收费 其他常见问题</div> -->
          <el-tabs v-model="home_reg_activeName" class="home_question">
            <el-tab-pane label="注册与登录" name="home_reg_first">
              <div class="service_contents">
                <table>
                  <tr>
                    <td>
                      <span class="service_querstion">注册账号都需要那些条件？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向index邮箱或者手机号发送验证码，只有验证通过才能使用我们的设备。</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">收不到邮箱验证码怎么办？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">
                          可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。
                          <br />如果任然无法收到验证码，您可尝试切换手机号进行验证。
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">收不到邮箱验证码怎么办？</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">
                          可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。
                          <br />如果任然无法收到验证码，您可尝试切换手机号进行验证。
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="价格与收费" name="home_reg_second">
              <div class="service_contents">
                <table>
                  <tr>
                    <td>
                      <span class="service_querstion">什么是试用服务？</span>
                      <p>试用服务是我们为使用者提供的免费使用本平台指定设备的服务。</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">试用过后如何计费？</span>
                      <p class="service_querstion_p">
                        30天以下：按日计费
                        <br />30天以上：按月计费
                        <br />可选择：1~29日或者1~12月
                        <br />订单页面选择日期后，费用自动生成
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="其他常见问题" name="home_reg_fourth">
              <div class="service_contents">
                <table>
                  <tr>
                    <td>
                      <span class="service_querstion">支付后实例列表中没有创建新的实例</span>
                      <div style="width:80%;text-align:left">
                        <p class="service_querstion_p"> 稍等几秒，尝试刷新页面。若多次刷新后还没有新的实例，请联系客服人员。</p>
                      </div>
                    </td>
                    <td>
                      <span class="service_querstion">
                        访问控制台出错：403
                      </span>
                      <p class="service_querstion_p">请检查设备租用是否到期，若到期，请前往续费。</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="service_querstion">设备不能访问外网</span>
                      <div style="width:80%">
                        <p class="service_querstion_p">
                          修改/etc/resolv.conf，添加"nameserver 114.114.114.114"
                        </p>
                      </div>
                    </td>
                    <td>
                      <span class="service_querstion"> 若遇到实例中设备宕机，无法访问，请联系客服人员。</span>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>
          </el-tabs>
<!--          <hr style="margin-bottom:1px" />-->
        </div>
        <!-- <div class="service_contents">
                    <table>
                        <tr>
                            <td><span class="service_querstion">注册账号都需要那些条件？</span>
                                <div style="width:80%"><p>
                                    注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向index邮箱或者手机号发送验证码，只有验证通过才能使用我们的设备。</p></div>
                            </td>
                            <td><span class="service_querstion">什么是使用服务？</span>
                                <p>适用服务是我们为使用者提供的免费使用本平台指定设备的服务。</p></td>
                        </tr>
                        <tr>
                            <td><span class="service_querstion">收不到邮箱验证码怎么办？</span>
                                <div style="width:80%"><p>可能被邮箱判断为垃圾邮件，请您打开垃圾邮箱所在文件夹查看是否收到。<br>
                                    如果任然无法收到验证码，您可尝试切换手机号进行验证。</p></div>
                            </td>
                            <td><span class="service_querstion">试用过后如何计费？</span>
                                <p>30天以下：按日计费<br>
                                    30天以上：按月计费<br>
                                    可选择：1~29日或者1~12月<br>
                                    订单页面选择日期后，费用自动生成</p></td>
                        </tr>
                        <tr>
                            <td><span class="service_querstion">收不到短信验证码怎么办？</span>
                                <div style="width:80%"><p>
                                    可能会由于手机停机、存储信息已满、网络延迟等原因没有及时收到验证码，这时请检查您的手机，保证手机可正常接收短信后，尝试重新获取验证码。<br>
                                    如果仍然无法收到验证码您可尝试邮箱进行验证。</p></div>
                            </td>
                            <td></td>
                        </tr>
                    </table>

        </div>-->
      </div>
      <el-footer height="600px">
        <el-row :offset="3"><img  class="footer_img" src="../../../public/logo.png" alt=""></el-row>
        <el-row>
        <el-col :span="3" :offset="3">
          <div class="footer_block">
            <span class="footer_block_title" >产品</span>
            <span class="footer_block_content"> <a href=""> AIKIT </a> </span>
            <span class="footer_block_content"><a href="">RB3 </a></span>
            <span class="footer_block_content"><a href="">Rasybarry Pie </a></span>
            <span class="footer_block_content"><a href="">Intel Nuc </a></span>
          </div>
        </el-col>
        <el-col :span="3">

          <div class="footer_block">
            <span class="footer_block_title">社区</span>
            <span class="footer_block_content"> <a href=""> 5G</a> </span>
            <span class="footer_block_content"><a href="">消费电子产品</a></span>
            <span class="footer_block_content"><a href="">智能汽车</a></span>
            <span class="footer_block_content"><a href="">智慧家居</a></span>
            <span class="footer_block_content"><a href="">智慧城市 </a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block">
            <span class="footer_block_title">教程</span>
            <span class="footer_block_content"> <a href=""> AI解决方案</a> </span>
            <span class="footer_block_content"><a href="">AI服务</a></span>
            <span class="footer_block_content"><a href="">AI模块</a></span>
            <span class="footer_block_content"><a href="">AI工具</a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block">
            <span class="footer_block_title">关于我们 </span>
            <span class="footer_block_content"> <a href="" > 关于我们</a> </span>
            <span class="footer_block_content"><a href="">关于我们</a></span>
            <span class="footer_block_content"><a href="">关于我们</a></span>
            <span class="footer_block_content"><a href="">关于我们</a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="footer_block">
            <span class="footer_block_title">其他</span>
            <span class="footer_block_content"> <a href=""> AI解决方案</a> </span>
            <span class="footer_block_content"><a href="">AI服务</a></span>
            <span class="footer_block_content"><a href="">AI模块</a></span>
            <span class="footer_block_content"><a href="">AI工具</a></span>
          </div>
        </el-col>
        </el-row>
        <el-row ><span class="footer_title_ours">联系我们</span></el-row>


          <span class="footer_title_email">邮箱联系</span>
          <span class="footer_title_email2">其他联系</span>


        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button-group>
              <el-tooltip class="item" effect="dark" content="复制内容" placement="top">
                <el-button type="warning" size="mini" v-clipboard:copy="scope.row.content" v-clipboard:success="onCopy" v-clipboard:error="onError">
                  <i class="fa fa-copy"></i>
                </el-button>
              </el-tooltip>
            </el-button-group>
          </template>
        </el-table-column>
        <div class="item">
        <el-input  v-model="email" class="footer_input" size="mini"></el-input>
<!--          <span class="footer_input"> {{email}}</span>-->
          <el-button
                  type="primary"
                  class="btn"
                  size="mini"
                  :data-clipboard-text="email"
                  @click="copy"
          >复制</el-button>
          <span>
          <img src="../../assets/images/home/Twitter.png" alt="">
          <img src="../../assets/images/home/Facebook.png" alt="">
          <img src="../../assets/images/home/weixin.png" alt="">
            </span>

        </div>

        <!--        <el-col :span="3">-->
<!--          <div class="footer_block_final">-->
<!--            <span style="margin-left:10%;padding-top:10px">联系我们</span>-->
<!--            <p style="margin:10% 0 0 10%;font-size:16px">Email</p>-->
<!--            <p style="margin-left:10%;font-size:16px">service@45iot.com</p>-->
<!--          </div>-->
<!--        </el-col>-->

      </el-footer>
      <span class="footer_footer"> Copyright &copy; 2018~2020.Rescord license ICP备案号：181470003号 All rights reserved. </span>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      home_reg_activeName: "home_reg_first",
      email:"E-mail:service@45iot.com"
    };
  },
  methods: {
    buy_aikit() {
      this.$router.push(
              { path: '/buy',
                query:{
                  name:'AI KIT',
                  good_id: 1682320,
                }
              }
      );

    },
      buy_edgekit(){

          this.$router.push(
                { path: '/buy',
                  query:{
                    name:'Edge KIT',
                    good_id: 1682320,
                  }
                }
        );
      },
      buy_rb3(){
        this.$router.push(
                { path: '/buy',
                  query:{
                    name:'RB 3',
                    good_id: 1682320,
                  }
                }
        );
      },
      go_aikit(){
      this.$router.push({path:'/aikitdetails'});
      },
      go_edgekit(){
       this.$router.push({path:'/edgekitdetails'});
      },
      go_rb3(){
       this.$router.push({path:'/rb3details'});
      },
     copy() {
     // var _this = this;
     // var clipboard = new Clipboard(".btn"); //单页面引用
      var clipboard = new this.Clipboard(".btn"); //在main.js中引用
      clipboard.on("success", e => {
        // 释放内存
        clipboard.destroy();
        window.console.log(e)
      });
      clipboard.on("error", e => {
        // 不支持复制
        window.console.log(e)
        this.Message({
          message: "该浏览器不支持自动复制",
          type: "warning"
        });
        // 释放内存
        clipboard.destroy();
      });
    },
  }
};
</script>
<style scoped>
div {
  /*margin: 0;*/
  /* padding: 0; */
}

.mid {
  /*margin-left: 2px;*/
  /*margin-right: 2px;*/
  border: 1px solid;
  text-align: center;
  /*background-color: #f5f5f5;*/
  background-image: url("../../assets/images/home/bj_pic.png");
  background-size: 100% 100%;
  height: 400px;

}

.block {
  display: inline-block;
  justify-content: space-between;
  width: 27%;
  margin-top: 15px;
  color: white;
}

.iblock {

  color: white;
  margin-top: 35px;
  font-size: 23px;
  width: 50%;
  margin-left: 16%;
  text-align: left;
}

.blocks {
  text-align: center;
  display: inline-flex;
  justify-content: space-around;
  width: 68%;
  margin-top: 70px;
}

.block_title_info {
  margin-top: 10px;
  display: block;
  font-size: 20px;
}

.block_inner {
  display: block;
  margin: 0 auto 10px auto;
  width: 50%;
  text-align: center;
  font-weight: 400;
  font-size: 9px;
  color: white;
}

.block_inners {
  margin-top: 15px;
  margin-bottom: 45px;
  color: white;
}

span {
  display: block;
}
.home_reg_icon .el-step__head.is-finish{
 color:white;

}
.home_reg_icon >>> .el-step__icon{
   background: #F0BD2E;
  color: white;
  width: 16px;
  height: 16px;
  font-size: 8px;
}
.home_reg_icon >>> .el-step__head.is-finish{
  border-color: grey;
}
img {
  /*height: 100%;*/
}

.home_first {
  display: flex;
  background-color: #e9f1f2;
  width: 100%;

}

.home_first_left {
  width: 50%;
}

.home_first_left_top {
  height: 10%;
  display: inline;
}

.home_first_right {
  width: 50%;
}

.first_font {
  font-size: 35px;
  color: #6173c4;
  margin: 10px auto;
  width: 75%;
}

.advantages_title {
  width: 50%;
  margin: 40px auto 0 auto;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.advs{
    box-shadow: #666 0px 0px 5px;
    height: 140px;

}
.adv_title{
  width: 70%;
  margin: 0 auto;
  display: flex;
}
.adv_content1{
  background-color: #3254DC;
  width: 140px;
  height: 140px;
  color: white;
  padding: 30px  ;
  display:inline-block;
    font-size: 18px;
}
.adv_content2{
    display:inline-block;
    width: 20%;
  margin-left: 13px;
}
.adv_content2 img{
    width: 50px;

}
.adv_content_title1{
     text-align: center;
    font-size: 16px;
}
.adv_content_title2{
    text-align: center;
    margin: 0 17px;
    font-size: 13px;
}
.adv_image{
    width: 50px;
    margin: 10px auto;
}
.advantages {
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.adv_imgs_bottom {
  /* align-items: center; */

  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.adv_imgs {
  /*align-items: center;*/
  /*width: 20%;*/
  /*position: relative;*/
  text-align: center;
  vertical-align: middle;
}

.imgs {
  margin: 20px;
  height: 65px;
  /*position: absolute;*/
  /*left:25%;*/
  vertical-align: middle;
}

.adv_content {
  font-size: 25px;
  margin: 10px 50px 60px 50px;
  width: 20%;
  /* text-align: center; */
  justify-content: space-around;
}

.product_show {
  background-color: #d0e2f2;
  padding-top: 20px;
  padding-bottom: 20px;
}

.el-col {
  margin-bottom: 20px;
}

.u242_img {
  border-width: 0px;
  left: 0px;
  top: 0px;
  width: 26px;
  height: 26px;
}

.card_span {
  margin-left: 10px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  color: rgba(102, 102, 102, 0.874509803921569);
}

.el-card {
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04) !important;
}

.el-footer {
  /*background-color: rgb(58, 58, 58);*/
  background-color: #101C3D;

}

.el-col {
  height: 100%;
}

.footer_block {
  margin-top: 60px;
  height: 60%;
  width: 100%;
  color: white;
  /*border-left: 2px solid grey;*/
  font-size: 21px;
}
.footer_block_title{
  margin-left:30%
}
.footer_block_content{
  margin-left:30%;
  font-size:15px;
  color:white;
  margin-top: 8%;
}
.footer_img{
  margin-top: 50px;
   margin-left: 15%;
}
.footer_title_ours{
  color: white;
  margin-left: 16%;
  margin-top: 60px;
}
.footer_title_email{
  color: #7785AC;
  display: inline;
  font-size: 12px;
  margin-left: 16%;
  margin-right: 0;
  margin-top: 10px;
 width: 40%;
}
.footer_title_email2{
  color: #7785AC;
  display: inline-block;
  font-size: 12px;
  margin-left: 32%;
  margin-right: 0;
  margin-top: 10px;
  width: 40%;
}
.footer_footer{
   color: white;
  font-size: 10px;
  background-color: #0B152E;
  height: 90px;
  line-height: 90px;
  padding-left: 16%;
}
.el-cols{
  width: 40%;
}
a:link{
  color: #dddddd;
  text-decoration: none;
}
.footer_input{
  width: 20%;
  margin-left: 16%;
  margin-top: 5px;
  background-color: #0aa0e8;
}
.footer_input >>> .el-input__inner{
  background-color: #0B152E;
  border: none;
  border-radius: 0px;
  color: white;
}
.item >>> span{
  display: inline-block;
  margin-left: 12%;
}
.item >>> img{
  width: 25px;
  margin-left: 8px;
}

.service {
  background-color: #d7d7db;
  text-align: center;
  padding-bottom: 1%;
  padding-top: 2%;
}

.service_title {

  text-align: left;
  width: 100%;
    margin-left: 16%;
    font-size: 23px;
}
.home_question{
    margin-left: 14%;
}
.service_index {
  text-align: left;
  font-size: 21px;
  padding-left: 6%;
  margin-top: 3%;
  margin-bottom: 1%;
}

.service_contents {
  width: 85%;
  margin: 0 3%;
  background-color: #d7d7db;
    height: 200px;
}

.service_querstion {
  font-weight: bold;
  text-align: left;
}
.service_querstion_p{
    text-align: left
}

.home_reg {
  text-align: center;
  background-color: #404964;
  font-size: 18px;
  padding-top: 2%;
  padding-bottom: 5%;
  background-image: url("../../assets/images/home/bg_logo.png");
  background-size: 310px 260px;
  background-repeat: no-repeat;
  /*opacity: 0.9;*/
  background-position: 78%;

}



.home_reg_img {
  align-content: center;
  margin: 0 auto;
  width: 26%;
  /*opacity: 0.5;*/
  text-align: center;

  background-color: #404964;
}
.home_reg_img1 {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;

}
.home_reg_img2 {
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
  justify-content: space-around;
  color: white;
  font-size: 11px;
}

.home_reg_title{
  font-size: 23px;
  color: white;
  width:20%;
  margin-left: 9%;
}
.home_reg_introduce  {
  margin-top: 20px;
  color: white;
  font-size: 18px;
}

.home_reg_btn {
  margin-top:45px;
  background-color: #3254DC;
  border: 1px solid #3254DC;
  /*color: white;*/
  /*cursor: pointer;*/
}
.image{
   cursor: pointer;
 }
.card_div{
  cursor: pointer;
}
  .btn{
    font-size: 8px;
  }
</style>
<!--<style>-->
<!--  .el-input__inner{-->
<!--    background-color: #0aa0e8;-->
<!--  }-->
<!--</style>-->
<style  scoped>
  /*导航栏*/
  .el-header {
    background-color: #101c3d;
    color: white;
    line-height: 60px;

  }
  .logo{
    width: 64px;
    height:64px;
    margin-top: 15px;
    /*margin: auto auto auto 0;*/
  }
  .nav_layout{
    display: flex;
    justify-content: space-between;
    line-height: 6;
    /*padding-left: 100px;*/
    /*padding-right: 150px;*/

  }
  .nav_layout_right{
    display: flex;
    align-items: center;
  }
  .nav_font{
    opacity: 0.8;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
  }
  .nav_font:hover{
    opacity: 1;

  }
  .nav_dropdown_font{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    opacity: 0.8;
    color: #FFFFFF;
  }
  .nav_dropdown_font:hover{
    opacity: 1;
  }
  .nav_a{
    text-decoration:none;
    color:white;
  }
  .button_font{
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
  }

  .nav_item{
    margin-left:20px ;

  }
  .head_frame {
    border: 1px solid rgba(228, 231, 235, 0.2);
    height: 44px;
    width: 44px;
    border-radius: 22px;
    border-radius: 22px;
  }
  .el-button--primary{
    background-color: #3254DC;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background-color: #5171F0;
  }
  .el-dropdown-menu__item{
    line-height: 0;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    /* background-color: #ecf5ff; */
    color: #66b1ff;
  }

  /*产品展示区*/
  .block_title{
    font-family: PingFangSC-Semibold;
    font-size: 23px;
    color: #16161D;
    font-width: bold;

  }
  .product_display{
    background-color: #F0F1F3;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .el-col {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .el-card{
    margin-top: 20px;
    margin-bottom:10px ;
  }
  .card_image{
    height: auto;
    width: 100%;
    cursor: pointer;
  }
  .card_title{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #16161D;
    line-height: 20px;
  }
  .card_content{
    margin-top: 20px;
    height: 40px;
    width: 90%;
    font-family: PingFangSC-Regular;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow:ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #16161D;
    line-height: 20px;
  }
  .card_tags{
    margin-top: 20px;
    height: 55px;
  }
  .card_tag{

    background: #F0F1F3;
    border-radius: 3px;
    border-radius: 3px;

    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #606879;
  }
  .card_labels{
    margin-top: 20px;
  }
  .card_label{
    margin-left: 5px;

    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #16161D;
    line-height: 14px;
  }
  .card_hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card_div{
    cursor: pointer;
  }
  .el-pagination {
    text-align: center;

  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #F0F1F3;
  }
  @media (min-width: 768px) {
    .nav_layout{
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*line-height: 6;*/
      padding-left: 16%;
      padding-right: 150px;

    }
  }
</style>
