<template>
  <div class="lee-article">
    <div class="lee-article-left">
      <article-tool-bar></article-tool-bar>
      <article-list></article-list>
    </div>
    <div class="lee-article-right">
      文章编辑
    </div>
  </div>
</template>

<script>
import ArticleToolBar from './components/articleToolBar/index'
import ArticleList from './components/articleList/index'

export default {
  name: 'leearticle',
  components: {
    ArticleToolBar,
    ArticleList
  }
}
</script>

<style lang="stylus" scoped>
.lee-article
  position relative
  height 100%
  .lee-article-left
    position absolute
    width 360px
    height 100%
    border-right 1px solid #eee
  .lee-article-right
    position absolute
    height 100%
    left 360px
    bottom 0
    right 0
</style>

