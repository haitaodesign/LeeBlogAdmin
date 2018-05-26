<template>
  <div class="articleListItem">
    <div class="articleListItem-left">
      <div class="articleListItem-icon">
        <Icon type="document-text" size="60"></Icon>
      </div>
    </div>
    <div class="articleListItem-right">
      <h2 class="articleListItem-title">标题标题标题标题标题标题标题标题标题标题239px239px239px</h2>
      <p class="articleListItem-content">内容截取内容截取内容截取内容截取内容截取内容截取内容截取内容截取</p>
    </div>
    <div class="articleListItem-set">
      <div class="articleListItem-set-icon">
        <Icon type="gear-b" size="30"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articleListItem',
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
.articleListItem
  height 100px
  border-bottom 1px solid #eee
  .articleListItem-left
    float left
    width 60px
    height 100%
    .articleListItem-icon
      margin-top 50%
      padding-left 20%
      transform translateY(-25%)
  .articleListItem-right
    padding 20px 10px
    float left
    width 239px
    height 100%
    .articleListItem-title
      margin-bottom 10px
      width 100%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .articleListItem-content
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
  .articleListItem-set
    float left
    width 60px
    height 100%
    cursor pointer
    .articleListItem-set-icon
      margin-top 50%
      padding-left 20%
</style>

