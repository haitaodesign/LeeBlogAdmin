<template>
  <div class="lee-table">
    <div class="lee-table-list">
      <Table :columns="columns" :data="data"></Table>
    </div>
    <div class="lee-table-page clearfix">
      <Page class="lee-table-page-position" :total="pageTotal" @on-change="handleOnChange"></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeeTable',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    pageTotal: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleOnChange (value) {
      this.$emit('on-page-change', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.lee-table-page
  margin-top 10px
  .lee-table-page-position
    float right
</style>

