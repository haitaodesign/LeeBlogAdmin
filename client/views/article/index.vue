<template>
  <div class="lee-article">
    <div class="lee-article-search"></div>
    <div class="lee-article-table">
      <lee-table></lee-table>
    </div>
  </div>
</template>
<script>
import LeeTable from '@com/LeeTable/index.vue'
export default {
  name: 'leearticle',
  components: {
    LeeTable
  }
}
</script>

<style lang="stylus" scoped>
</style>

