<template>
  <div class="add-article">
    <Row :gutter="20">
      <Col span="20">
        <Input v-model="params.title" placeholder="请输入文章标题" />
      </Col>
      <Col span="4">
        <add-article-dropdown ref="addArticleDropdown" @on-click-release="_handleOnClickRelease"></add-article-dropdown>
      </Col>
    </Row>
    <div class="add-editor">
      <i-editor v-model="params.content" :autosize="{ minRows: 25 }"></i-editor>
    </div>
  </div>
</template>

<script>
import addArticleDropdown from '../addArticleDropdown'
import ArticleManager from '@api/ArticleManager'
const article = new ArticleManager()
export default {
  name: 'addArticle',
  data () {
    return {
      params: {
        _id: '',
        title: '' || window.localStorage.getItem('title'),
        content: '' || window.localStorage.getItem('content'),
        isPublish: true,
        categoryId: '',
        labelId: ''
      }
    }
  },
  watch: {
    'params.content': (val, oldVal) => {
      if (val !== oldVal) {
        window.localStorage.setItem('content', val)
      }
    },
    'params.title': (val, oldVal) => {
      if (val !== oldVal) {
        window.localStorage.setItem('title', val)
      }
    }
  },
  methods: {
    async _Add (params) {
      try {
        const { data: { code, msg } } = await article.add(params)
        if (code === 0) {
          this.$Message.success(msg)
          // 保存成功返回文章列表页面
          this.clearParams()
          this.$refs.addArticleDropdown.showDropdown = false
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    _handleOnClickRelease (data) {
      const { categoryId, labelId } = data
      this.params.categoryId = categoryId
      this.params.labelId = labelId.join(',')
      const msg = this.validateParams(this.params)
      if (msg === true) {
        // 验证通过进行请求
        this._Add(this.params)
        this.$refs.addArticleDropdown.showDropdown = false
      } else {
        // 提示错误信息
        this.$Message.warning(msg)
      }
    },
    /**
     * 验证输入参数
    */
    validateParams (data) {
      const { title, content, categoryId, labelId } = data
      let msg = ''
      if (title === '') {
        msg = '文章标题不能为空!'
      } else if (content === '') {
        msg = '内容不能为空!'
      } else if (categoryId === '') {
        msg = '选择分类不能为空!'
      } else if (labelId === '') {
        msg = '选择标签不难为空!'
      } else {
        msg = true
      }
      return msg
    },
    /**
     * 文章发布成功之后清空参数
    */
    clearParams () {
      this.params.title = ''
      this.params.content = ''
      window.localStorage.removeItem('title')
      window.localStorage.removeItem('content')
      this.$refs.addArticleDropdown.clearSelectParams()
    }
  },
  components: {
    addArticleDropdown
  }
}
</script>

<style lang="stylus" scoped>
</style>

