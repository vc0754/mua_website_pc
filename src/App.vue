<template>
  <div id="app">
    <header :class="[ 'header', nav_current === 0 ? '' : 'secondary' ]">
      <div class="container">
        <div class="flex flex-x-between flex-y-center">
          <img :src="logo[nav_current]" alt="" class="logo">
          <nav class="nav-wrap">
            <ul class="nav">
              <li :class="[ nav_current === 0 ? 'active' : '' ]">
                <a href="#">首页</a>
              </li>
              <li :class="[ nav_current === 1 ? 'active' : '' ]">
                <a href="#">创业产品</a>
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
        <div class="swiper-slide" :style="{ backgroundImage: `url('${require('./assets/底部.png')}` }">
          <!-- 第二屏 -->
          <nav class="subnav">
            <div class="container">
              <div class="row">
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/主icon -遇见.png" alt="" class="mb-3">
                  <p class="fs-15">遇见社交</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/主icon 体验馆.png" alt="" class="mb-3">
                  <p class="fs-15">恋爱体验馆</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/主icon 体验馆备份.png" alt="" class="mb-3">
                  <p class="fs-15">校园嗨聊</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/主icon 代办.png" alt="" class="mb-3">
                  <p class="fs-15">跑腿代办</p>
                </div>
                <div class="col flex flex-column flex-y-center">
                  <img src="./assets/主icon 二手闲置.png" alt="" class="mb-3">
                  <p class="fs-15">二手闲置</p>
                </div>
              </div>
            </div>
          </nav>
          
          <div class="container">
            <div class="swiper-container-2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <h3>遇见社交</h3>
                  <h5>基于兴趣的大学生社交小程序</h5>
                  <p>广场分享日常瞬间，随意切换广场与本校发布功能，让更多同学为你点赞 匿名发布树洞，可缓解学习压力，可吐露心事情绪</p>
                </div>
                <div class="swiper-slide">
                  <h3>遇见社交</h3>
                  <h5>识别小程序码，立即体验</h5>
                  <p>设定主页的兴趣标签，大数据匹配你的灵魂校友 私聊功能，让你与校园同学畅聊 发布功能可设置自己可见，记录校园私密日记</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
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
      nav_current: 0,
      nav_left: [
        3.5,
        82.5
      ]
    }
  },
  methods: {
    // nav() {
    //   mySwiper.slideTo(index, speed, runCallbacks);
    // }
  },
  mounted(){
    let _this = this
    new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      // pagination: '.swiper-pagination',
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // scrollbar: '.swiper-scrollbar',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      on: {
        slideChangeTransitionStart() {
          _this.nav_current = this.activeIndex
        },
      },
    });
    new Swiper('.swiper-container-2', {
      // direction: 'vertical',
      loop: false,
      // pagination: '.swiper-pagination',
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // scrollbar: '.swiper-scrollbar',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      on: {
      },
    })
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
    background-position: center bottom;
    background-repeat: repeat-x;
  }
}


.header {
  position: fixed; top: 20px;
  width: 100%;
  z-index: 100;
  .logo { position: relative;}
  a { color: #fff;}
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
}

</style>
