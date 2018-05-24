<template>
  <div class="lee-header">
    <div class="lee-header-logo">
      leeadmin
    </div>
    <div class="lee-header-nav">
      <Menu mode="horizontal" active-name="">
        <Submenu name="3">
            <template slot="title">
                admin
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leeheader'
  }
</script>

<style lang="stylus" scoped>
.lee-header
  position absolute
  width 100%
  height 60px
  border-bottom 1px solid #eee
  .lee-header-logo
    float left
    width 200px
    height 60px
    line-height 60px
    text-align center
  .lee-header-nav
    float right
    margin-right 10px
</style>
