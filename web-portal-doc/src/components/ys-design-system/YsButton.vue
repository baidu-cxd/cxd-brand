<template>
  <div class="ys-button ys-action-button" v-if="type === 'action'">
    {{text}}
  </div>
  <div class="ys-button ys-outline-button" v-else-if="type === 'outline'">
    {{text}}
  </div>
  <div v-else>
    没有这种按钮
  </div>
</template>
<style lang="stylus">
.ys-button
  height $button-height
  width 156px
  background-color var(--color-bg-brand)
  border-radius var(--border-radius-button)
  line-height $button-height
  text-align center
  color #fff
  font-size .85rem
  transition $ani
  &:hover
    cursor pointer
    background-color var(--color-bg-brand-hover)
    box-shadow $outline
  &.ys-outline-button
    background-color transparent
    color var(--color-base)
    border 1px solid var(--color-border)
    line-height ($button-height-2px)
    &:hover
      border 1px solid var(--color-border-2)
</style>
<script>
export default {
  props:{
    type: {
      default: 'action'
    },
    text: {
      default: '这是按钮'
    }
  }
}
</script>