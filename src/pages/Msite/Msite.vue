<template>
  <div id="MsiteContainer">
    <div class="header_top">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <span class="iconfont icon-sousuo"></span>
      <span class="input">搜索商品 共1000件好物</span>
      <button class="login">登陆</button>
    </div>
    <div class="arrow_open" v-show="isShow">
      <div class="title">全部频道</div>
      <ul class="all">
        <li class="all_item" v-for="(item,index) in labels" :key="index" @click="newIndex=index" :class="index===newIndex? 'active':''">{{item}}</li>
      </ul>
      
    </div>
    <div class="mask" v-show="isShow" @click="handleArrow"></div>
    <div class="nav_bottom">
      <div class="nav_wrapper">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
      </div>
      <div class="nav_arrow" @click="handleArrow">
        <img :class="isArrow? 'downArrow':'upArrow'" class="arrow_down" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/swiper001.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper003.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper004.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper005.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper006.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper007.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="service_policy">
      <ul class="policy_three">
        <li class="policy_item">
          <a class="small_item" href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
            <span class="title">网易自营品牌</span>
          </a>
        </li>
        <li class="policy_item">
          <a class="small_item" href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
            <span class="title">30天无理由退货</span>
          </a>
        </li>
        <li class="policy_item">
          <a class="small_item" href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
            <span class="title">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <section class="advise_content">
      <div class="advise_first"></div>
      <div class="advise_second"></div>
      <div class="advise_third"></div>
      <div class="advise_thirsty"></div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        isArrow:true,
        isShow:false,
        newIndex:0,
        current: '推荐',
        labels: [
          '推荐',
          '居家生活',
          '衣服鞋包',
          '美食酒水',
          '个人洗护',
          '母婴亲子',
          '运动旅行',
          '数码家电',
          '全球特色'
        ]
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      },
      handleArrow(){
        this.isArrow = !this.isArrow
        this.isShow = !this.isShow
      }
    },
    mounted () {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      })
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
  @import '../../common/stylus/mixins.styl'
  #MsiteContainer
    padding-bottom 105px
    position relative
    .header_top
      width 750px
      height 88px
      line-height 72px
      padding 16px 30px
      box-sizing border-box
      position fixed
      left 0
      top 0
      vertical-align middle
      background-color #ffffff
      display flex
      align-items center
      z-index 30
      img 
        height 40px
      .icon-sousuo
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        background-size 28px
        width 28px
        height 28px
        position absolute
        left 220px 
        top 30px
      .input
        width 442px
        height 56px
        line-height 56px
        font-size 28px
        background-color #eeeeee
        margin 0px 20px 0px 20px
        text-align center
        border-radius 8px
        color #666
      button 
        width 78px
        height 40px
        font-size 20px
        border 2px solid red
        border-radius 6px
        color red
        background-color #fff
    .arrow_open
      border-top 1px solid #ccc
      width 750px
      height 371.95px
      background #fff
      z-index 20
      position absolute
      top 10px
      left 0
      .title
        height 60px
        line-height 60px
        padding 0px 0px 0px 30px
        font-size 24px
        z-index 30
      .all
        width 750px
        height 287.95px
        padding 24px 0px 0px 0px
        background #fff
        .all_item
          float left
          width 146px
          height 52px
          line-height 56px
          background-color #FAFAFA
          margin 0px 0px 39.9px 30px
          border 2px solid #ccc
          border-radius 2px
          font-size 24px
          text-align center
        .active
          border-color #b4282d
          color #b4282d
    .mask
      width 750px
      height 1334px
      position absolute
      top 370px
      right 0px
      left 0px
      bottom 0px
      z-index 5
      background-color rgba(0,0,0,.5)
    .nav_bottom
      width 750px
      height 60px 
      margin-top 88px
      color #333 
      display flex
      justify-content center
      vertical-align middle 
      .nav_wrapper
        width 650px
        height 60px
        .cube-scroll-nav-bar
          font-size 35px
          padding 0px 30px
          .cube-scroll-wrapper
            font-size 27.9998px
            width 111.938px
            
            .cube-scroll-content
              font-size 27.9998px
              
              .cube-scroll-list-wrapper
                font-size 27.9998px 
                
                .cube-scroll-nav-bar-items
                  font-size 27.9998px 
                  
                  .cube-scroll-nav-bar-item
                    font-size 27.9998px     
                    margin 0px 10px 
      .nav_arrow
        width 99.98px
        height 60px
        line-height 60px
        text-align center
        z-index 30
        .arrow_down
          width 30px
          height 30px 
          display inline-block
          margin 15px 0px 0px
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
    
    .swiper-container
      width 100%
      height 370px
      .swiper-wrapper
        width 750px
        height 370px
        .swiper-slide
          width 750px 
          height 370px
          img 
            width 750px
            height 370px
          .swiper-pagination-bullet
            border-radius 0
            width 30px
            height 2px
          .swiper-pagination-bullet-active 
            opacity: 1
            background: #333
    .service_policy
      width 750px
      height 72px
       
      .policy_three
        width 690px
        height 72px
        padding 0px 30px
        display flex
        align-items center
        justify-content center
        .policy_item
          width 227.78px
          height 36px
          line-height 36px
          font-size 24px
          color #333
          text-align center
          .small_item
            height 32px
            vertical-align middle
            img 
              float left
              width 32px
              height 32px
            .title
              float left
              height 32px
              font-size 24px
              margin 0px 0px 0px 8px




          
         

      


      


    

    












    
 




</style>
