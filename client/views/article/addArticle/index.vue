<template>
  <div class="add-article">
    <Row :gutter="20">
      <Col span="20">
        <Input v-model="params.title" placeholder="请输入文章标题" />
      </Col>
      <Col span="4">
        <add-article-dropdown ref="addArticleDropdown" :dropdownParams="dropdownParams" @on-click-release="_handleOnClickRelease"></add-article-dropdown>
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
        labelId: []
      },
      dropdownParams: {
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
  mounted () {
    // 获取修改内容
    this._initUpdateArticle()
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
    async _Update (params) {
      try {
        const { data: { code, msg } } = await article.update(params)
        if (code === 0) {
          this.$Message.success(msg)
          // 修改成功返回文章列表页面
          this.clearParams()
          this.$router.go(-1)
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {

      }
    },
    async _getArticleById (params) {
      try {
        const { data: { code, data: { _id, title, content, labelId, categoryId }, msg } } = await article.getArticleById(params)
        if (code === 0) {
          // 文章修改数据初始化
          this.params = {
            _id,
            title,
            content,
            labelId: [],
            categoryId: ''
          }
          // 给组件传入参数时，尽量处理好数据再传递
          this.dropdownParams = {
            labelId,
            categoryId
          }
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    _handleOnClickRelease (data) {
      const { categoryId, labelId } = data
      this.params.categoryId = categoryId
      this.params.labelId = labelId
      const msg = this.validateParams(this.params)
      if (msg === true) {
        // 验证通过进行请求
        const type = this.$route.query.type
        if (type === 'add') {
          this._Add(this.params)
          this.$refs.addArticleDropdown.showDropdown = false
        } else if (type === 'edit') {
          this._Update(this.params)
        }
      } else {
        // 提示错误信息
        this.$Message.warning(msg)
      }
    },
    _initUpdateArticle () {
      // 获取_id
      const _id = this.$route.query.id
      this._getArticleById({_id})
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

