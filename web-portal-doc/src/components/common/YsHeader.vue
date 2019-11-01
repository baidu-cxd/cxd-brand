<template>
  <div class="ys-header">
    <!--页面顶部tips-->
    <YsHeaderTip v-if="tipData" :tipData = 'tipData'/>
    <!--页面 header 主体-->
    <div class="header-main-content">
      <img  class="logo" src="@/assets/img/logo.svg" alt="">
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
  .header-main-content
    height $header-height
    background-color var(--color-bg-base)
    border-bottom 1px solid var(--color-border)
  img.logo
    height $logo-height
    margin (($header-height - $logo-height)/2) 2rem
</style>