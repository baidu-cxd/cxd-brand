<template>
  <div class="ys-guide-main-content">
    <div class="title">
      {{$store.state.pageData.text || $store.state.pageData}}
    </div>
    <div class="md" v-if="isMarkDown()">缺少 markdown 文件</div>
    <component v-bind:is="currentComponent" v-else></component>
  </div>
</template>
<style lang="stylus">
.ys-guide-main-content
  margin-left $left-nav
  margin-right $right-fix-width 
</style>
<script>
import rightFix from '@doc/code-page/rightFix.vue'
import guideIndex from '@doc/config/guideIndex.json'
export default {
  data(){
    return {
      currentComponent: null
    }
  },
  components:{rightFix},
  created() {
    this.routeTest()   
  },
  methods: {
    isMarkDown(){
      if (this.$store.state.pageData.component) {
        this.currentComponent = this.$store.state.pageData.component
        return false
      } else {
        return true
      }
    },
    routeTest(){
      const path = this.$route.fullPath.split('/')
      const pageData = findePageDataInJson(path,guideIndex)
      this.$store.commit('changePageData', pageData)
    }
  }
}
function findePageDataInJson(path, guideIndex){
   let dataPage = "页面不存在"
   guideIndex.forEach(data => {
     // 二级url测试
     if (path.length === 3 && data.type === "index") {
        const key = path[2]
        dataPage = data.children[key]
     } 
     // 三级url测试
     if (path.length === 4 
         && data.type === "inner" 
         && path[2] === data.url.split('/')[1]
         ) {
           const key = path[3]
           dataPage = data.children[key]
     }
   });
   return dataPage
}
</script>
<style lang="stylus">
.ys-guide-main-content
  padding 2rem
</style>