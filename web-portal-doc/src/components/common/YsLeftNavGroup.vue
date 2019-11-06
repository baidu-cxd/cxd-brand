<template>
  <div class="ya-left-nav-group">
    <!--普通单元-->
    <div class="item" v-for="(item,i) in list" :key="i">
      <router-link 
        class = "ys-link-item"
        :to='url + i' v-if="!item.children">
        {{item}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props:['list', 'url']
}
</script>
<style lang="stylus">
.ya-left-nav-group
  padding 1rem 0 3rem 
  border-bottom 1px solid var(--color-border)
  &:last-child
    border none
.ys-link-item
  width 100%
  padding .5rem 0 .5rem 2rem
  display block
</style>