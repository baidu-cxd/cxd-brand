<template>
    <router-link 
      class = "ys-link-item"
      :to='link' @click.native="changePageData()">
      {{item.text || item}}
    </router-link>
</template>
<script>
export default {
  props: ['link','item'],
  methods: {
    changePageData(){
      this.$store.commit('changePageData', this.item)
    }
  }
}
</script>
<style lang="stylus">
.ys-link-item
  width 100%
  padding .5rem 0 .5rem 2rem
  display block
  color var(--color-base)
  position relative
  transition $ani
  &:hover
    background-color var(--color-bg-light-2)
  &.router-link-exact-active
    background-color var(--color-bg-light-2)
    &:after
      content ''
      width 5px
      height 100%
      display block
      background-color var(--color-bg-brand)
      position absolute
      left 0
      top 50%
      transform translateY(-50%)
</style>