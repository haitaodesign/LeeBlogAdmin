<template>
  <div ref="articleList" class="articleList">
    <Scroll :height="scrollHeight">
      <article-list-item v-for="item in articleList" :title="item.title" :content="item.content" :key="item.id"></article-list-item>
    </Scroll>
  </div>
</template>

<script>
import ArticleListItem from '../articleListItem/index'
export default {
  name: 'articleList',
  data () {
    return {
      articleList: [{
        title: '文字1',
        content: '内容1',
        id: '1'
      }, {
        title: '文字2',
        content: '内容2',
        id: '2'
      }, {
        title: '文字3',
        content: '内容3',
        id: '3'
      }, {
        title: '文字4',
        content: '内容4',
        id: '4'
      }, {
        title: '文字4',
        content: '内容4',
        id: '5'
      }, {
        title: '文字4',
        content: '内容4',
        id: '6'
      }, {
        title: '文字4',
        content: '内容4',
        id: '7'
      }, {
        title: '文字4',
        content: '内容4',
        id: '8'
      }, {
        title: '文字4',
        content: '内容4',
        id: '9'
      }, {
        title: '文字4',
        content: '内容4',
        id: '10'
      }, {
        title: '文字4',
        content: '内容4',
        id: '11'
      }, {
        title: '文字4',
        content: '内容4',
        id: '12'
      }, {
        title: '文字4',
        content: '内容4',
        id: '13'
      }, {
        title: '文字4',
        content: '内容4',
        id: '14'
      }, {
        title: '文字4',
        content: '内容4',
        id: '15'
      }],
      scrollHeight: ''
    }
  },
  created () {
    setTimeout(() => {
      this.scrollHeight = this.$refs.articleList.clientHeight
    }, 0)
  },
  components: {
    ArticleListItem
  }
}
</script>

<style lang="stylus" scoped>
.articleList
  height 100%
</style>
