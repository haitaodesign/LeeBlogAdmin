<template>
  <div class="lee-main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'leemain'
  }
</script>

<style lang="stylus" scoped>
.lee-main
  position absolute
  top 100px
  left 240px
  bottom 0
  right 0
</style>

