<template>
  <div :class="['ys-input',data.state]" v-if="data.type == 'text'">
    <p class="label">{{data.label}}</p>
    <img src="@/assets/icon/must-start.svg" alt="" v-if="data.isMust">
    <input :type="data.type" :placeholder="data.placeHolder">
    <p class="warn" v-if="data.state == 'warn'">这里有错误</p>
  </div>
  <div v-else>
    还没有这个样式
  </div>
</template>
<script>
export default {
  props: {
    data: {
      default: {
        label: '请在这里输入',
        placeHolder: '请在这里输入',
        type: 'text',
        isMust: false
      }
    }   
  }
}
</script>
<style lang="stylus">
.ys-input
  position relative
  .label
    font-size .875rem
    line-height 1.5rem
    margin 0 0 .5rem 0
    display inline-block
  img 
    display inline-block
    width .5rem
    vertical-align middle
    margin-left .25rem
    position relative
    top -1px
  input 
    display block
    height 100%
    box-sizing border-box
    line-height 1rem
    padding .5rem
    width 100%
    border-radius $radius
    border none
    position relative
    border 1px solid var(--color-border)
    transition $ani
    background transparent
    color var(--color-base-2)
    font-size (13/16)rem
    &:hover
      box-shadow $outline
    &:focus
      border 1px solid var(--color-border-2)
      box-shadow 0 0 0 3px var(--color-bg-light-2)
      outline none
    &::-webkit-input-placeholder
      color var(--color-base-4)
.ys-input.warn
  input
    border 1px solid var(--color-warn)
    background-color var(--color-warn-0point1)
    &:focus
      border 1px solid var(--color-border-2)
      background-color transparent   
  p.warn
    font-size .085rem   
    color var(--color-warn)
    margin .25rem 0 0 0
    position absolute
    bottom -1.5rem
    opacity 1
</style>