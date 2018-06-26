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
import ArticleManager from '../../api/ArticleManager'
const newar = new ArticleManager()
export default {
  name: 'leearticle',
  components: {
    LeeTable,
    ArticleToolBar
  },
  data () {
    return {
    }
  },
  mounted () {
    this._initLeeTable()
  },
  methods: {
    async _initLeeTable () {
      const data = await newar.getArticleList()
      console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

