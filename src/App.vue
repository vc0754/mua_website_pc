<template>
  <div id="app">
    <header :class="[ 'header', nav_current === 0 ? '' : 'secondary' ]">
      <div class="container">
        <div class="flex flex-x-between flex-y-center">
          <img :src="logo[nav_current]" alt="" class="logo">
          <nav class="nav-wrap">
            <ul class="nav">
              <li :class="[ nav_current === 0 ? 'active' : '' ]">
                <a href="#" @click="goto(0)">首页</a>
              </li>
              <li :class="[ nav_current === 1 ? 'active' : '' ]">
                <a href="#" @click="goto(1)">创业产品</a>
              </li>
              <li :class="[ nav_current === 2 ? 'active' : '' ]">
                <a href="#">申请代理</a>
              </li>
            </ul>
            <div class="nav-link" :style="{ left: `${ nav_left[nav_current] }px` }"></div>
          </nav>
        </div>
      </div>
    </header>
    
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- 第一屏 -->
          <section class="hero">
            <div class="background" :style="{ backgroundImage: `url('${require('./assets/位图 + 位图 蒙版.png')}')` }"></div>
            <div class="content-layer">
              <p class="fs-72">千校大学生创业扶持计划</p>
            </div>
          </section>

          <section class="features">
            <div class="container">
              <div class="row">
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/icon／创业产品.png" alt="" class="mb-3">
                  <h4 class="fs-20 mb-3">创业产品免费提供</h4>
                  <p class="fs-13">6款产品免费提供，创业不再是梦想</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/icon／产品运营.png" alt="" class="mb-3">
                  <h4 class="fs-20 mb-3">产品运营赋能</h4>
                  <p class="fs-13">专业导师指导，创业运营无压力</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/icon／实习+转正.png" alt="" class="mb-3">
                  <h4 class="fs-20 mb-3">实习 + 转正</h4>
                  <p class="fs-13">经验积累，毕业提供实习与转正机会</p>
                </div>
              </div>
            </div>
            <img src="./assets/icon-下一页.png" alt="" class="next-page">
          </section>
        </div>
        <div class="swiper-slide">
          <div class="bg" :style="{ backgroundImage: `url('${require('./assets/底部.png')}` }"></div>
          <!-- 第二屏 -->
          <nav class="subnav">
            <div class="container">
              <div class="row">
                <div class="col flex flex-column flex-y-center" @click="goto2(0)">
                  <img src="./assets/主icon -遇见.png" alt="" class="mb-3">
                  <p class="fs-15">遇见社交</p>
                </div>
                <div class="col flex flex-column flex-y-center" @click="goto2(2)">
                  <img src="./assets/主icon 体验馆.png" alt="" class="mb-3">
                  <p class="fs-15">恋爱体验馆</p>
                </div>
                <div class="col flex flex-column flex-y-center" @click="goto2(4)">
                  <img src="./assets/主icon 体验馆备份.png" alt="" class="mb-3">
                  <p class="fs-15">校园嗨聊</p>
                </div>
                <div class="col flex flex-column flex-y-center" @click="goto2(6)">
                  <img src="./assets/主icon 代办.png" alt="" class="mb-3">
                  <p class="fs-15">跑腿代办</p>
                </div>
                <div class="col flex flex-column flex-y-center" @click="goto2(8)">
                  <img src="./assets/主icon 二手闲置.png" alt="" class="mb-3">
                  <p class="fs-15">二手闲置</p>
                </div>
              </div>
              <div class="nav-link" :style="{ left: `${ nav2_left[nav2_current] }px` }"></div>
            </div>
          </nav>
          
          <div class="swiper-container-2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6" style="padding-left:50px;">
                      <h3>遇见社交</h3>
                      <h5>基于兴趣的大学生社交小程序</h5>
                      <p>广场分享日常瞬间，随意切换广场与本校发布功能，让更多同学为你点赞<br>匿名发布树洞，可缓解学习压力，可吐露心事情绪</p>
                    </div>
                    <div class="col-6">
                      <img src="./assets/遇见社交-01广场.png" alt="" style="position:relative; top:10px; right:35px;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="./assets/遇见社交-04私聊 + 遇见社交-02发布 + 遇见社交-03我的 蒙版.png" alt="" style="position:relative; top:20px; right:105px;">
                    </div>
                    <div class="col-5" style="padding-left: 50px; white-space: nowrap;">
                      <h3>遇见社交</h3>
                      <h5>识别小程序码，立即体验</h5>
                      <p>设定主页的兴趣标签，大数据匹配你的灵魂校友<br>私聊功能，让你与校园同学畅聊<br>发布功能可设置自己可见，记录校园私密日记</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6" style="padding-left:50px;">
                      <h3>恋爱体验馆</h3>
                      <h5>解救单身狗的大学生恋爱小程序</h5>
                      <p>随意切换同城、同校/异校等定位，匹配最优秀的TA<br>使用「卖室友」功能，有趣好玩，闺蜜/兄弟轻松脱单</p>
                    </div>
                    <div class="col-6">
                      <img src="./assets/恋爱体验馆-01首页.png" alt="" style="position:relative; top:10px; right:35px;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="./assets/恋爱体验馆-02我喜欢谁 + 恋爱体验馆-04被卖了 + 恋爱体验馆-03cp签 蒙版.png" alt="" style="position:relative; top:20px; right:105px;">
                    </div>
                    <div class="col-5" style="padding-left:50px; white-space: nowrap;">
                      <h3>恋爱体验馆</h3>
                      <h5>识别小程序码，立即体验</h5>
                      <p>CP签恋爱小卡片，了解TA，并私聊TA<br>一周CP恋爱体验活动，助你破冰脱单</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6" style="padding-left:50px;">
                      <h3>校园嗨聊</h3>
                      <h5>基于语音社交的大学生小程序</h5>
                      <p>声控福利，与陌生的TA语音畅聊，喜欢就关注TA<br>大数据匹配，与相似的你在线畅聊不停</p>
                    </div>
                    <div class="col-6">
                      <img src="./assets/校园嗨聊-01首页.png" alt="" style="position:relative; top:10px; right:35px;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="./assets/校园嗨聊-02互动房 + 校园嗨聊-04语音匹配 + 校园嗨聊-03语音派对 蒙版.png" alt="" style="position:relative; top:20px; right:105px;">
                    </div>
                    <div class="col-5" style="padding-left:50px; white-space: nowrap;">
                      <h3>校园嗨聊</h3>
                      <h5>识别小程序码，立即体验</h5>
                      <p>互动语音房，兴趣、情感、唠嗑等话题嗨聊不停<br>PK语音房，来主持一场校园趣味辩论、K歌大赛<br>体验一把语音直播主持，嗨玩赚零花</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6" style="padding-left:50px;">
                      <h3>校园代办</h3>
                      <h5>大学生生活服务小程序</h5>
                      <p>悬赏服务费让同学帮忙代取快递<br>通过悬赏让同学代买、代送物品<br>自己不想做或不方便的事都可以找同学帮忙</p>
                    </div>
                    <div class="col-6">
                      <img src="./assets/校园代办-01首页.png" alt="" style="position:relative; top:10px; right:35px;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="./assets/校园代办-02我的 + 校园代办-03发布 + 校园代办-04福利 蒙版.png" alt="" style="position:relative; top:20px; right:105px;">
                    </div>
                    <div class="col-5" style="padding-left:50px;">
                      <h3>校园代办</h3>
                      <h5>识别小程序码，立即体验</h5>
                      <p>校园免费福利、特惠干货早知道<br>注册小骑手还可以赚零花钱</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6" style="padding-left:50px;">
                      <h3>二手闲置</h3>
                      <h5>大学生二手闲置小程序</h5>
                      <p>同校跨校轻松交易二手闲置<br>实名认证，放心淘二手</p>
                    </div>
                    <div class="col-6">
                      <img src="./assets/二手闲置-01首页.png" alt="" style="position:relative; top:10px; right:35px;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="./assets/二手闲置-02担保 + 二手闲置-03商品详情 蒙版.png" alt="" style="position:relative; top:20px; right:105px;">
                    </div>
                    <div class="col-5" style="padding-left:50px;">
                      <h3>二手闲置</h3>
                      <h5>识别小程序码，立即体验</h5>
                      <p>平台担保交易，保障买卖双方物品安全<br>让你的闲置物品不再闲置</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div class="arrs">
            <img src="./assets/箭头-向左.png" alt="" class="arr-left" @click="prev">
            <img src="./assets/箭头-向右.png" alt="" class="arr-right" @click="next">
          </div>

          <div class="point">
            <span :class="[ point === 0 ? 'active' : '']"></span>
            <span :class="[ point === 1 ? 'active' : '']"></span>
          </div>

        </div>
      </div>

      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <div class="swiper-scrollbar"></div>
    </div>
    
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      logo: [
        require('./assets/logo0.png'),
        require('./assets/logo1.png')
      ],
      swiper: null,
      nav_current: 0,
      nav_left: [
        3.5,
        82.5
      ],
      swiper2: null,
      nav2_current: 0,
      nav2_left: [
        23, 23,
        178, 178,
        335, 335,
        485, 485,
        645, 645
      ],
      point: 0
    }
  },
  methods: {
    goto(index) {
      this.swiper.slideTo(index)
      // mySwiper.slideTo(index, speed, runCallbacks);
    },
    goto2(index) {
      this.swiper2.slideTo(index)
    },
    prev() {
      if (this.nav2_current === 0) return
      this.swiper2.slideTo(this.nav2_current - 1)
    },
    next() {
      if (this.nav2_current === 9) return
      this.swiper2.slideTo(this.nav2_current + 1)
    },
    mousewheel() {
      // chrome and ie
      window.addEventListener('mousewheel', this.handleScroll, false)
      // firefox
      // window.addEventListener('DOMMouseScroll', this.handleScroll, false)
    },
    handleScroll(e) {
      if (e.deltaY > 0) {
        this.swiper.slideTo(1)
      } else {
        this.swiper.slideTo(0)
      }
      // console.log(e.deltaY)
    }
  },
  mounted(){
    let _this = this
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      on: {
        slideChangeTransitionStart() {
          _this.nav_current = this.activeIndex
        },
      },
    });
    this.swiper2 = new Swiper('.swiper-container-2', {
      direction: 'horizontal',
      loop: false,
      on: {
        slideChangeTransitionStart() {
          _this.nav2_current = this.activeIndex
          _this.point = this.activeIndex % 2
        },
      },
    });
    this.mousewheel()
  }
}
</script>

<style lang="less">
html, body, #app { height: 100%;}

.fs-13 { font-size: 13px;}
.fs-15 { font-size: 15px;}
.fs-20 { font-size: 20px;}
.fs-70 { font-size: 70px;}
.fs-72 { font-size: 72px;}

.flex { display: flex;}
.flex-x-between { justify-content: space-between;}
.flex-x-center { justify-content: center;}
.flex-y-center { align-items: center;}
.flex-column { flex-direction: column;}

.swiper-container {
  width: 100%; height: 100%;
  .swiper-slide {
    position: relative;
    .bg {
      width: 150%; height: 100%;
      position: absolute; top: 0; left: 0;
      background-position: center bottom;
      background-repeat: repeat-x;
      animation: slide 3s ease-in-out infinite alternate;
    }
  }
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    // transform: translateX(25%);
  }
}

.header {
  position: fixed; top: 20px;
  width: 100%;
  z-index: 100;
  .logo { position: relative;}
  a {
    color: #fff; text-decoration: none;
    &:hover { color: #fff; text-decoration: none;}
  }
  .nav-wrap {
    position: relative;
    .nav {
      color: #fff;
      font-size: 14px;
      display: flex;
      li {
        padding: 4px 0; margin-left: 36px;
        position: relative;
        &:first-child { margin-left: 0;}
      }
    }
    .nav-link {
      display: block; content: '';
      width: 20px; height: 3px; padding: 0;
      background: #24D9BA;
      border-radius: 2px;
      position: absolute; bottom: 0;
    }
  }
  
  &.secondary {
    a { color: #A3A3A3; }
    li.active {
      a { color: #000;}
    }
  }
}

.hero {
  background-color: #eee;
  height: 54%;
  position: relative;
  .background {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%; height: 100%;
    position: relative;
    &::after {
      display: block; content: ''; width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .content-layer {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    color: #fff;
    display: flex; justify-content: center; align-items: center;
    padding-top: 115px;
  }
}

.features {
  height: 46%;
  padding: 58px;
  .next-page { position: absolute; left: 50%; bottom: 25px;
    transform: translate3d(-50%, 0, 0);
  }
}

.subnav {
  width: 774px; margin: 140px auto 0;
  color: #808080;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  .container { position: relative;}
  .nav-link {
    display: block; content: '';
    width: 107px; height: 3px; padding: 0;
    background: #24D9BA;
    border-radius: 2px;
    position: absolute; bottom: 0;
  }
}

@media (min-height: 800px) {
  .subnav { margin-bottom: 20px; }
}
@media (min-height: 820px) {
  .subnav { margin-bottom: 40px; }
}
@media (min-height: 850px) {
  .subnav { margin-bottom: 60px; }
}

.swiper-container-2 {
  .container {
    width: 774px; height: 380px; margin: 0 auto; position: relative;
  }
  .row { height: 100%;}
  h3 { color: #333; font-size: 20px; margin-bottom: 12px;}
  h5 { color: #333; font-size: 15px; margin-bottom: 16px;}
  p { color: #7D7D7E; font-size: 13px; line-height: 20px;}
}

.arrs {
  width: 920px;
  position:absolute; top:50%; left:50%; z-index:100;
  transform: translate3d(-50%, 0, 0);
  .arr-left { position: absolute; left: 0;}
  .arr-right { position: absolute; right: 0;}
}

.point {
  position: absolute; bottom: 67px; left: 50%; z-index: 100;
  transform: translate3d(-50%, 0, 0);
  display: flex;
  span {
    display: block; margin: 0 6px;
    background: rgba(0, 0, 0, 0.3);
    width: 10px; height: 10px; border-radius: 5px;
    &.active { background: #fff; width: 16px;}
  }
}

</style>
