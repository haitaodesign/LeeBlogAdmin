<template>
  <div class="lee-bread">
     <Breadcrumb>
        <BreadcrumbItem v-for="item in data" :key="item.id">{{item.name}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'leebread',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.lee-bread
  position absolute
  top 60px
  left 240px
  right 0
  height 40px
  line-height 40px
  padding-left 10px
  border-bottom 1px solid #eee
</style>
