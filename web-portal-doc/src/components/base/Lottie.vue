<template>
  <div class="ys-lottie" ref="lottie">
  </div>
</template>
<script>
import lottie from 'lottie-web'
export default {
  props:{
    path: { 
            default: ''
          },
    loop: { type: Boolean, default: false },
    autoplay: { type: Boolean, default: false },
    speed: {type: Number, default: 1 },
    lastFrame: {type: Number, default: 23 }
  },
  mounted(){
    this.addAnimation()
  },
  methods:{
    addAnimation(){
      this.animation = lottie.loadAnimation({
        container: this.$refs.lottie, 
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.path,
      });
    },
    play() {
      this.animation.setSpeed(this.speed)
      this.animation.setDirection(1)
      this.animation.goToAndPlay(0, true) 
    },
    antiPlay() {
      this.animation.setSpeed(this.speed)
      this.animation.setDirection(-1)
      this.animation.goToAndPlay(this.lastFrame, true) 
    },
    go(value) {
      this.animation.goToAndStop(value, true) 
    }
  }  
}
</script>