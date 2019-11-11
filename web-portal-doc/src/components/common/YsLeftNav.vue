<template>
  <div class="ys-left-nav">
    <!--导航组-->
    <YsLeftNavGroup 
      v-for='(item,i) in list' 
      :key="i" :list='item.children' :url='url + item.url'/>
  </div>
</template>
<script>
import YsLeftNavGroup from './YsLeftNavGroup.vue'
export default {
  props:['list','url'],
  components: {YsLeftNavGroup},
}
</script>
<style lang="stylus">
.ys-left-nav
  position fixed
  top $header-height
  left 0
  z-index 10
  padding-top 1rem
  width $left-nav
  height 100%
  background-color var(--color-bg-light)
  border-right 1px solid var(--color-border)
</style>