<template>
  <div class="ys-guide-main-content">
    <div class="guide-title">
      <h2>
        {{$store.state.pageData.text || $store.state.pageData}}
      </h2>
    </div>
    <div class="main-content" v-if="isMarkDown()"><MdRender/></div>
    <div class="main-content" v-else>
      <component v-bind:is="currentComponent"></component>
    </div>
  </div>
</template>

<style lang="stylus">
.ys-guide-main-content
  margin-left $left-nav
  margin-right $right-fix-width - 16px
  height 100%
  overflow-y scroll
  .guide-title
    padding 6rem 4rem 4rem 4rem
    background-color var(--color-base-2)
    overflow hidden
    h2
      color var(--color-bg-base)
  .main-content
    padding 3rem 4rem 3rem 4rem
</style>

<script>
import FixComponents from '@doc/code-page/FixComponents.vue'
import FormComponents from '@doc/code-page/FormComponents.vue'
import guideIndex from '@doc/config/guideIndex.json'
import MdRender from '@/components/base/MdRender.vue'
export default {
  data(){
    return {
      currentComponent: null
    }
  },
  components:{FixComponents, FormComponents, MdRender},
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