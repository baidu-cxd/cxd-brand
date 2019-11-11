<template>
  <div class="code-page-fix article">
    <p><b>悬浮组件</b>指固定在页面位置，不会随着屏幕滚动而运动的组件</p> 
    <h3>右侧悬浮组件</h3>
    <p>设计实例: 百度智能云官网悬浮组件</p>
    <div class="right-fix">
      <div class="right-fix-group">
        <YsRightFixButton/>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.right-fix
  width 100%
  height 37rem
  background-color var(--color-bg-light)
  margin 2rem 0 4rem
  position relative
  border .5rem solid var(--color-bg-light-2)
  max-width $components-max-width
  .right-fix-group
    position absolute
    right 0
    bottom 0
    width 6rem
    padding 4rem 1.5rem
</style>