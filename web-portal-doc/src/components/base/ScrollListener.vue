<template>
  <div class="scroll-listener"></div>
</template>
<style lang="stylus">
.scroll-listener
  display none
</style>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true); 
  },
  methods: {
    handleScroll() {  
      let scrollTop = window.pageYOffset 
                   || document.documentElement.scrollTop 
                   || document.body.scrollTop 
      this.scroll = scrollTop
      this.$store.commit('scroll', scrollTop)
    }
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);  
  }
}
</script>