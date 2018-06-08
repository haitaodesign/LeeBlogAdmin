<template>
  <div class="lee-article">
    <div class="lee-article-search">
      <article-tool-bar></article-tool-bar>
    </div>
    <div class="lee-article-table">
      <lee-table></lee-table>
    </div>
  </div>
</template>
<script>
import LeeTable from '@com/LeeTable/index.vue'
import ArticleToolBar from './components/articleToolBar'
// import ArticleManager from '../../api/ArticleManager'
export default {
  name: 'leearticle',
  components: {
    LeeTable,
    ArticleToolBar
  },
  mounted () {
    // let newar = new ArticleManager()
    // console.log(newar.getArticleList())
  }
}
</script>

<style lang="stylus" scoped>
</style>

