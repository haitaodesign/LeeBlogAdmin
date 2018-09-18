<template>
  <div class="add-article">
    <Row :gutter="20">
      <Col span="20">
        <Input v-model="params.title" placeholder="请输入文章标题" />
      </Col>
      <Col span="4">
        <add-article-dropdown></add-article-dropdown>
      </Col>
    </Row>
    <div class="add-editor">
      <i-editor v-model="params.content" :autosize="{ minRows: 25 }"></i-editor>
    </div>
    <Modal
      v-model="showModal"
      title="文章发布"
    >
    </Modal>

  </div>
</template>

<script>
import ArticleManager from '@api/ArticleManager'
import addArticleDropdown from '../addArticleDropdown'
const article = new ArticleManager()
export default {
  name: 'addArticle',
  data () {
    return {
      params: {
        _id: '',
        title: '' || window.localStorage.getItem('title'),
        content: '' || window.localStorage.getItem('content'),
        isPublish: false,
        category_id: '',
        label_id: ''
      },
      showModal: false,
      showDropdown: false
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
    _handleAddArticleClick () {
      const { title, content } = this.params
      if (title === '' || content === '') {
        this.$Message.error('标题和内容不难为空！')
      } else {
        this.showDropdown = true
        // this._Add(this.params)
      }
    },
    async _Add (params) {
      try {
        const { data: { code, msg } } = await article.add(params)
        if (code === 0) {
          this.$Message.success(msg)
          // 保存成功返回文章列表页面
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    _handleDropdownClose () {
      this.showDropdown = false
    }
  },
  components: {
    addArticleDropdown
  }
}
</script>

<style lang="stylus" scoped>
</style>

