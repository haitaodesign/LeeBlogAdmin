<template>
  <div class="add-article">
    <Row>
      <h3>标题:</h3>
      <Input placeholder="请输入文章标题" />
    </Row>
    <div class="add-editor">
      <i-editor v-model="content" :autosize="{ minRows: 25 }"></i-editor>
    </div>
    <Button type="primary" long>保存</Button>
  </div>
</template>

<script>
  export default {
    name: 'addArticle',
    data () {
      return {
        content: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>

