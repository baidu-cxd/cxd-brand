<template>
  <div class="ys-block-chain-html">
    这是区块链
    <div class="ys-block-banner-animation-content">
      <Lottie :path='bannerData' :autoplay='true' :loop='true'/>
    </div>
  </div>
</template>
<style lang="stylus">
.ys-block-banner-animation-content
  width 1120px
  height 640px
  margin auto
  overflow hidden
</style>
<script>
export default {
  data(){
    return {
      bannerData : require('@/assets/jsondata/blockchain1.json')
    }
  }
}
</script>