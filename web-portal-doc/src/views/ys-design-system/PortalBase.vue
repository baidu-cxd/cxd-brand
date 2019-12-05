<template>
  <div class="ys-portal-base">
    <YsTopHeader/>
    <YsTopSubHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
import YsTopHeader from '@/components/ys-design-system/portal-base/YsTopHeader.vue'
import YsTopSubHeader from '@/components/ys-design-system/portal-base/YsTopSubHeader.vue'
export default {
  components: {YsTopHeader, YsTopSubHeader}
}
</script>
