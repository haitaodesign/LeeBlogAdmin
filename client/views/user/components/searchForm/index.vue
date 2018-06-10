<template>
  <div class="searchForm">
    <Row>
      <Col span="4">
        <ButtonGroup>
         <Button type="primary" @click="_handleAddOnClick">新增</Button>
         <Button type="primary" @click="_handleUpdateOnClick">修改</Button>
         <Button type="primary" @click="_handleDeleteOnClick">删除</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'searchForm',
    methods: {
      _handleAddOnClick () {
        this.$emit('on-add')
      },
      _handleUpdateOnClick () {
        this.$emit('on-update')
      },
      _handleDeleteOnClick () {
        this.$emit('on-delete')
      }
    }
  }
</script>

<style lang="stylus" scoped>
.searchForm
  margin-bottom 10px
</style>

