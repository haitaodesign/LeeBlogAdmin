<template>
  <div class="lee-sidebar">
    <Menu active-name="文章管理" @on-select="_handleOnSelect">
        <MenuGroup title="内容管理">
            <MenuItem name="文章管理">
                <Icon type="document-text"></Icon>
                文章管理
            </MenuItem>
            <MenuItem name="分类管理">
                <Icon type="chatbubbles"></Icon>
                分类管理
            </MenuItem>
            <MenuItem name="标签管理">
                <Icon type="chatbubbles"></Icon>
                标签管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="系统管理">
            <MenuItem name="用户管理">
                <Icon type="heart"></Icon>
                用户管理
            </MenuItem>
        </MenuGroup>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    methods: {
      _handleOnSelect (name) {
        this.$emit('on-select', name)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.lee-sidebar
  position absolute
  top 60px
  left 0
  bottom 0
  width 240px
  border-right 1px solid #eee
</style>

