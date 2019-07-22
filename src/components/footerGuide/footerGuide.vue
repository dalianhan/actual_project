<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="footer_item" @click="goto('/msite')" :class="{on: $router.path === '/msite'}">
        <span class="item_icon">
            <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/category')" :class="{on: $router.path === '/category'}">
        <span class="item_icon">
            <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/real')" :class="{on: $router.path === '/real'}">
        <span class="item_icon">
            <i class="iconfont icon-shiwutupian"></i>
        </span>
        <span>实物</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/cart')" :class="{on: $router.path === '/cart'}">
        <span class="item_icon">
            <i class="iconfont icon-gouwuche"></i>
        </span>
        <span class="cart">购物车</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/profile')" :class="{on: $router.path === '/profile'}">
        <span class="item_icon">
            <i class="iconfont icon-personnone"></i>
        </span>
        <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'footerGuide',
      methods:{
          goto(path){
              this.$router.replace(path)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl'
    .footer_guide
        display flex
        width 100%
        height 100px
        box-sizing border-box
        padding 12px
        background-color #fff
        top-border-1px(#666)
        position fixed
        left 0
        bottom 0
        align-items center
        z-index 100
        .footer_item
            flex 1
            display flex
            flex-direction column
            align-items center
            text-align center
            color #999999
            &.on
                color #02a774
            .item_icon
                width 100%
                height 40px
                .iconfont
                    width 100%
                    height 40px
            span 
                font-size 24px
                color #666
        
            
 
</style>
