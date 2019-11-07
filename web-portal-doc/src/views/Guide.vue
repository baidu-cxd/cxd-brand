<template>
  <div class="ys-index">
    <!--顶部导航栏-->
    <YsHeader/>
    <!--容器-->
    <div class="ys-content-full-page">
      <!--左侧导航栏-->
      <YsLeftNav :list='guideIndex' url='/guide'/>
    </div>
  </div>
</template>
<script>
import guideIndex from '@doc/config/guideIndex.json'
export default {
  computed: {
    guideIndex() {
      const path = this.$route.fullPath
      const nowPage ='/' + path.split('/')[2] + '/'
      let arr = []
      guideIndex.forEach(element => {
         if (element.type == 'index') {
             arr.push(element)
         } else if (element.url == nowPage) {
             arr.push(element)
         }
      });
      return arr
    }
  }
}
</script>