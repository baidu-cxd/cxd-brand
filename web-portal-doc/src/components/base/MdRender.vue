<template>
  <div class="md-render">
    md 渲染器
  </div>
</template>
<script>
export default {
  created(){
    md = require('@doc/guide/test.md')
  }
}
</script>