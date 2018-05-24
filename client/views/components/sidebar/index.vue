<template>
  <div class="lee-sidebar">
    <Menu active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="document-text"></Icon>
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="chatbubbles"></Icon>
                分类管理
            </MenuItem>
            <MenuItem name="3">
                <Icon type="chatbubbles"></Icon>
                标签管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="系统管理">
            <MenuItem name="4">
                <Icon type="heart"></Icon>
                用户管理
            </MenuItem>
            <MenuItem name="5">
                <Icon type="heart-broken"></Icon>
                个人信息
            </MenuItem>
        </MenuGroup>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'sidebar'
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

