<template>
  <div class="ys-left-nav">
    <!--导航组-->
    <YsLeftNavGroup 
      v-for='(item,i) in list' 
      :key="i" :list='item.children' :url='url + item.url + "/"'/>
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
  padding 0
</style>