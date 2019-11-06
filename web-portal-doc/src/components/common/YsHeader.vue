<template>
  <div class="ys-header">
    <!--页面顶部tips-->
    <YsHeaderTip v-if="tipData" :tipData = 'tipData'/>
    <!--页面 header 主体-->
    <div class="header-main-content">
      <!--logo-->
      <img  class="logo" src="@/assets/img/logo.svg" alt="">
      <!--导航-->
      <div class="nav">
        <router-link to='/index'>首 页</router-link>
        <router-link to='/guide'>规 范</router-link>
        <router-link to='/resource'>资 源</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import YsHeaderTip from './YsHeaderTip.vue'
export default {
  components: {YsHeaderTip},
  props: {
    tipData: {
      default: null
    }   
  }
}
</script>
<style lang="stylus">
// 配置
$logo-height = 18px
// 样式
.ys-header
  position fixed
  top 0
  left 0
  width 100%
  z-index 100
  .header-main-content
    height $header-height
    background-color var(--color-bg-base)
    box-shadow var(--shadow)
  img.logo
    height $logo-height
    margin (($header-height - $logo-height)/2) 2rem
  .nav
    height $header-height
    margin 0 2rem
    float right
    a
      display block
      padding 0 0 0 1.8rem
      line-height $header-height
      color var(--color-base)
      float left
      &.router-link-active:after
        content ''
        display block
        background-color var(--color-base)
        width 100%
        height 2px
        position relative
        top -2px
</style>