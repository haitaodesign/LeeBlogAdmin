<template>
  <div class="lee-bread">
     <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
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
  width 100%
  height 40px
  line-height 40px
  margin-left 10px
</style>
