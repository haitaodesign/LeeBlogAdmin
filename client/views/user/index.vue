<template>
  <div class="index">
    <div class="index-top">
      <search-form @on-add="_handleOnAddClick" @on-update="_handleOnUpdateClick"></search-form>
    </div>
    <div class="index-table">
      <lee-table :data="data" :columns="columns" @on-select="_handleOnSelect"></lee-table>
    </div>
    <lee-modal :show="isModalShow" :title="title" :edit="form" @on-ok="_handleOnOkClick" @on-cancel="_handleOnCancelClick"></lee-modal>
  </div>
</template>

<script>
import LeeTable from '@com/LeeTable/index.vue'
import SearchForm from './components/searchForm'
import LeeModal from './components/modal'
import UserManager from '@api/UserManager'
const user = new UserManager()
export default {
  name: 'user',
  data () {
    return {
      params: {
        current: 1,
        pageSize: 10
      },
      data: [],
      columns: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: '用户名',
        key: 'username'
      }, {
        title: '电子邮件',
        key: 'email'
      }, {
        title: '头像',
        key: 'avatar'
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
    this._getUserList()
  },
  methods: {
    async _getUserList () {
      const { data: { code, data } } = await user.getUserList(this.params)
      if (code === 0) {
        this.data = data
      }
    },
    _handleOnSelect (selection, row) {
      this.curRow = row
      this.selection = selection
    },
    _handleOnAddClick () {
      this.title = '添加用户'
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
    _handleOnCancelClick () {
      this.isModalShow = false
    },
    async _Add (params) {
      try {
        const { data: { code, msg } } = await user.add(params)
        if (code === 0) {
          this.$Message.success(msg)
          this.isModalShow = false
          this._getUserList()
        } else {
          this.$Message.error(msg)
        }
      } catch (error) {
        this.$Message.error(error)
      }
    },
    async _Update (params) {
      try {
        const { data: { code, msg } } = await user.update(params)
        if (code === 0) {
          this.$Message.success(msg)
          this.isModalShow = false
          this._getUserList()
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
