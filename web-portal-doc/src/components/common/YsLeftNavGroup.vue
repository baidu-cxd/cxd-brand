<template>
  <div class="ya-left-nav-group">
    <!--普通单元-->
    <div class="item" v-for="(item,i) in list" :key="i">
      <YsLinkItem v-if="!item.children" :link="url + i" :item="item"/>
    </div>
  </div>
</template>
<script>
import YsLinkItem from './YsLinkItem.vue'
export default {
  props:['list', 'url'],
  components: {YsLinkItem}
}
</script>
<style lang="stylus">
.ya-left-nav-group
  padding 1rem 0 2rem 
  border-bottom 1px solid var(--color-border)
  &:last-child
    border none
</style>