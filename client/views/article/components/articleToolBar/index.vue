<template>
  <div class="articleToolBar">
    <Row>
      <Col span="4">
        <Button type="primary" shape="circle" long>新建文章</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'articleToolBar'
  }
</script>

<style lang="stylus" scoped>
.articleToolBar
  padding 10px
  border-bottom 1px solid #eee
</style>
