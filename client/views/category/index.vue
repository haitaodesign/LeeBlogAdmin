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
import CategoryManager from '@api/CategoryManager'
const category = new CategoryManager()
export default {
  name: 'category',
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
        title: '名称',
        key: 'name'
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
    this._getCategoryList()
  },
  methods: {
    async _getCategoryList () {
      const { data: { code, data, page } } = await category.getCategoryList(this.params)
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
      this._getUserList()
    },
    _handleOnAddClick () {
      this.title = '添加分类'
      this.status = 'add'
      this.form = {}
      this.isModalShow = true
    },
    _handleOnOkClick (params) {
      const { status } = this
      if (status === 'add') {
        this._Add(params)
      } else if (status === 'edit') {
        // 判断是否选中其中一项
        this._Update(params)
      }
    },
    _handleOnUpdateClick () {
      const len = this.selection.length
      const { curRow } = this
      if (len === 1) {
        this.title = '修改用户'
        this.status = 'edit'
        this.isModalShow = true
        this.form = curRow
      } else {
        this.$Message.error('修改数据必须且只能选中一条！')
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
        const { data: { code, msg } } = await category.add(params)
        if (code === 0) {
          this.$Message.success(msg)
          this.isModalShow = false
          this._getCategoryList()
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    async _Update (params) {
      try {
        const { data: { code, msg } } = await category.update(params)
        if (code === 0) {
          this.$Message.success(msg)
          this.isModalShow = false
          this._getCategoryList()
          this.selection = []
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    async _Delete (params) {
      const { data: { code, msg } } = await category._delete(params)
      try {
        if (code === 0) {
          this.$Message.success(msg)
          this._getCategoryList()
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
