<template>
  <div class="ys-header-tip">
    {{tipData}}
  </div>
</template>
<script>
export default {
  props: ['tipData'],
  methods: {
    toggleTip() {
      this.$store.commit('toggleHeaderTip')
    }
  }
}
</script>
<style lang="stylus">
.ys-header-tip
  height $header-tip-height
  background-color var(--color-bg-brand)
</style>