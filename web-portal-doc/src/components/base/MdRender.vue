<template>
  <div class="md-render" v-html="html">
    {{html}}
  </div>
</template>
<script>
import MarkdownIt from 'markdown-it'
export default {
  data(){
    return {html: '缺少 md 文件'}
  },
  created(){
    const md = new MarkdownIt()
    const path = this.$route.path
    const data = require(`../../../doc${path}.md`)
    this.html = md.render(data.default);
    console.log(md.render(data.default))
  }
}
</script>