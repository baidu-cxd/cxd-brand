<template>
  <div class="ys-right-fix-button">
    <div class="button ys-hover-border" @click="WindowChange(1)">
      <div class="button-inner-text">业务咨询</div>
    </div>
    <div class="button ys-hover-border" @click="WindowClose()">
      <div class="button-inner-text">官网论坛</div>
    </div>
    <div class="button ys-hover-border" @click="WindowChange(3)">
      <div class="button-inner-text">联系我们</div>
    </div>
    <div class="button ys-hover-border" @click="WindowClose()">
      <div class="button-inner-text">建议反馈</div>
    </div>
    <!--卡片-->
    <transition name="fade-scale">
      <div :class="['window', 'window-'+nowWindow]" 
        v-show="isOpen">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nowWindow: 0,
      isOpen: false
    }
  },
  methods: {
    WindowChange(i){
      if(this.nowWindow == i){
        this.isOpen = !this.isOpen
      } else {
        if (this.isOpen) {
          this.nowWindow = i
        } else {
          this.nowWindow = i
          this.isOpen = !this.isOpen
        }
      }
    },
    WindowClose(){
      this.isOpen = false
    }
  }
}
</script>
<style lang="stylus">
.ys-right-fix-button
  width 3rem
  position relative
  .button
    width 3rem
    height 3rem
    background-color var(--color-bg-base)
    border-radius 100px
    box-shadow $shadow
    margin 1.5rem 0 0 0
    position relative
    &:hover
      cursor pointer
      .button-inner-text
        opacity 1
        visibility visible
        transform translateX(-50%) scale(1)
  .window
    width 20rem
    height 28rem
    background-color var(--color-bg-base)
    box-shadow $shadow
    position absolute
    bottom 0
    right 4.5rem
    border-radius $radius
    transition $ani
    overflow hidden
  .window-3
    height 16rem
  .button-inner-text
    position absolute
    top 3rem
    left 50%
    width 3.5rem
    transform translateX(-50%) scale(.95)
    font-size 0.75 rem
    color var(--color-base)
    text-align center
    visibility none
    transition $ani
    opacity 0
</style>