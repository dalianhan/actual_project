<template>
  <div id="app">
    <router-view/>
    <footerGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import footerGuide from './components/footerGuide/footerGuide.vue'
  export default {
    name:'App',
    components:{
      footerGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

 
</style>
