<template>
  <div class="add-article">
    <Row :gutter="20">
      <Col span="18">
        <Input v-model="params.title" placeholder="请输入文章标题" />
      </Col>
      <Col span="2">
        <Poptip placement="bottom">
          <div class="add-article-headerImg">
            <Icon type="md-image" size="32"/>
          </div>
          <div slot="content">
            <h3>文章封面图片上传</h3>
            <LeeUpload @on-remove-img="handleOnRemoveImgClick"></LeeUpload>
          </div>
        </Poptip>
      </Col>
      <Col span="4">
        <add-article-dropdown ref="addArticleDropdown" :dropdownParams="dropdownParams" @on-click-release="_handleOnClickRelease"></add-article-dropdown>
      </Col>
    </Row>
    <div class="add-editor">
      <i-editor v-model="params.content" :autosize="{ minRows: 25 }" :config="config" :img-url="handleReturnImgUrl"></i-editor>
    </div>
  </div>
</template>

<script>
import addArticleDropdown from '../addArticleDropdown'
import LeeUpload from '@com/LeeUpload/index.vue'
import { getBaseUrl } from '@utils'
import ArticleManager from '@api/ArticleManager'
import UploadManager from '@api/UploadManager'
const article = new ArticleManager()
const upload = new UploadManager()
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
      },
      config: {
        action: getBaseUrl() + '/img/upload',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        }
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
    const type = this.$route.query.type
    if (type === 'edit') {
      this._initUpdateArticle()
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
            labelId: this.initLabelIds(labelId),
            categoryId: categoryId._id
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
      this._getArticleById({_id, isEdit: true})
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
    },
    /**
     * 删除文章封面图片
    */
    handleOnRemoveImgClick (item) {
      const { key } = item.response.data
      this._deleteImg({key})
    },
    async _deleteImg (key) {
      const { data: { code, msg } } = await upload._delete(key)
      if (code === 0) {
        this.$Message.success(msg)
      } else {
        this.$Message.error(msg)
      }
    },
    initLabelIds (labelId) {
      let array = []
      labelId.forEach(element => {
        array.push(element._id)
      })
      return array
    },
    handleReturnImgUrl (res) {
      return res.data.url
    }
  },
  components: {
    addArticleDropdown,
    LeeUpload
  }
}
</script>

<style lang="stylus" scoped>
.add-article-headerImg:hover
  color #2d8cf0
  cursor pointer
</style>

