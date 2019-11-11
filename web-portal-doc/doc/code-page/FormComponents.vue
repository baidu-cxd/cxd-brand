<template>
  <div class="code-page-form article">
    <p><b>表单组件</b>指输入框，选择器等能够向服务器提供信息的组件</p> 
    <p>百度智能云表单组件的设计原则有三个:</p>
    <ul>
      <li><b>可读性好:</b> 遵循对齐原则，符合浏览习惯</li>
      <li><b>状态清晰:</b> 清晰显示各种交互状态，有明确交互提示</li>
      <li><b>品牌渗透:</b> 使用品牌标准颜色，元素，把品牌风格嵌入其中</li>
    </ul>
    <h3>输入框: input</h3>
    <div class="ys-test-buttons">
      <div :class="['ys-test-button',isNormal('input1')?'active':'']" 
        @click="input1.state='normal'; input1.isMust = false">默 认</div>
      <div :class="['ys-test-button',input1.isMust?'active':'']"
        @click="input1.state='normal'; input1.isMust = true">必 填</div>
      <div :class="['ys-test-button',input1.state == 'warn' ?'active':'']"
        @click="input1.state='warn'; input1.isMust = false">出 错</div>
    </div>
    <div class="form-show-box">
      <div class="input-content">
        <YsInput :data='input1'/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: {
        label: '这是是标签',
        placeHolder: '请在这里输入',
        type: 'text',
        isMust: false,
        state: 'normal'
      }
    }
  },
  methods: {
    isNormal(i){
      if(this[i].state=='normal' && !this[i].isMust){
          return true
      }
    }
  }
}
</script>
<style lang="stylus">
.code-page-form
  .form-show-box
    max-width $components-max-width
    margin 2rem 0 4rem
    width 100%
    height 12rem
    border .5rem solid var(--color-bg-light-2)
    padding 3rem
    .input-content
      width 20rem
</style>