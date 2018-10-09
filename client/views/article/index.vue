<template>
  <div class="index">
    <div class="index-top">
      <search-form @on-add="_handleOnAddClick" @on-update="_handleOnUpdateClick" @on-delete="_handleOnDeleteClick"></search-form>
    </div>
    <div class="index-table">
      <lee-table :data="data" :columns="columns" :pageTotal="page.total" @on-select="_handleOnSelect" @on-page-change="_handlePageChange"></lee-table>
    </div>
    <lee-modal :show="isModalShow" :title="title" :edit="form" @on-ok="_handleOnOkClick" @on-cancel="_handleOnCancelClick"></lee-modal>
  </div>
</template>

<script>
import LeeTable from '@com/LeeTable/index.vue'
import SearchForm from './components/searchForm'
import LeeModal from './components/modal'
import ArticleManager from '@api/ArticleManager'
const article = new ArticleManager()
export default {
  name: 'leearticle',
  data () {
    return {
      params: {
        current: 1,
        pageSize: 10
      },
      data: [],
      page: {},
      columns: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: '标题',
        key: 'title'
      }, {
        title: '分类',
        key: 'categoryId',
        render: (h, params) => {
          const categoryId = params.row.categoryId
          return h('div', categoryId.name)
        }
      }, {
        title: '标签',
        key: 'labelId',
        render: (h, params) => {
          const labelId = params.row.labelId
          let data = []
          labelId.forEach(item => {
            data.push(item.name)
          })
          return h('div', data.join(','))
        }
      }, {
        title: '是否发布',
        key: 'isPublish'
      }],
      isModalShow: false,
      title: '',
      form: {
      },
      selection: [],
      curRow: {},
      status: 'add' // or edit
    }
  },
  mounted () {
    this._getArticleList()
  },
  methods: {
    async _getArticleList () {
      const { data: { code, data, page } } = await article.getArticleList(this.params)
      if (code === 0) {
        this.data = data
        this.page = page
      }
    },
    _handleOnSelect (selection, row) {
      this.curRow = row
      this.selection = selection
    },
    _handlePageChange (value) {
      this.params.current = value
      this._getArticleList()
    },
    _handleOnAddClick () {
      this.$router.push({name: '新建文章', query: {type: 'add'}})
    },
    _handleOnOkClick (params) {

    },
    _handleOnUpdateClick () {
      // 判断是否有选中的数据
      const len = this.selection.length
      if (len > 0) {
        const _id = this.curRow._id
        this.$router.push({name: '新建文章', query: {type: 'edit', id: _id}})
      } else {
        this.$Message.error('目前只支持选择修改一条数据！')
      }
    },
    _handleOnDeleteClick () {
      const len = this.selection.length
      if (len === 1) {
        const { _id } = this.selection[0]
        this._Delete({ _id })
      } else {
        this.$Message.error('目前只支持删除一条数据！')
      }
    },
    _handleOnCancelClick () {
      this.isModalShow = false
    },
    async _Add (params) {
      try {
        const { data: { code, msg } } = await article.add(params)
        if (code === 0) {
          this.$Message.success(msg)
          this.isModalShow = false
          this._getArticleList()
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
          this.isModalShow = false
          this._getArticleList()
          this.selection = []
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    async _Delete (params) {
      const { data: { code, msg } } = await article._delete(params)
      try {
        if (code === 0) {
          this.$Message.success(msg)
          this._getArticleList()
          this.selection = []
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    }
  },
  components: {
    LeeTable,
    SearchForm,
    LeeModal
  }
}
</script>

<style scoped>

</style>
