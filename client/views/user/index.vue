<template>
  <div class="index">
    <div class="index-top">
      <search-form></search-form>
    </div>
    <div class="index-table">
      <lee-table :data="data" :columns="columns" @on-select="_handleOnSelect"></lee-table>
    </div>
  </div>
</template>

<script>
import LeeTable from '@com/LeeTable/index.vue'
import SearchForm from './components/searchForm'
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
      }]
    }
  },
  mounted () {
    this._getUserList()
  },
  methods: {
    async _getUserList () {
      const { data: { code, data, msg } } = await user.getUserList(this.params)
      if (code === 0) {
        this.$Message.success(msg)
        this.data = data
      }
    },
    _handleOnSelect (selection, row) {
      console.log(selection, row)
    }
  },
  components: {
    LeeTable,
    SearchForm
  }
}
</script>

<style scoped>

</style>
