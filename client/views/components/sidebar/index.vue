<template>
  <div class="lee-sidebar">
    <Menu active-name="文章管理" @on-select="_handleOnSelect">
        <MenuGroup v-for="item in getMenuList" :key="item.id" :title="item.name">
            <MenuItem v-for="children in item.children" :key="children.id" :name="children.name">
                {{children.name}}
            </MenuItem>
        </MenuGroup>
    </Menu>
  </div>
</template>

<script>
  import { getJsonTree } from '@utils/jsonTree'
  export default {
    name: 'sidebar',
    data () {
      return {
        menu: [
          { id: 1, parent_id: 0, name: '内容管理' },
          { id: 2, parent_id: 1, name: '文章管理' },
          { id: 3, parent_id: 1, name: '分类管理' },
          { id: 4, parent_id: 1, name: '标签管理' },
          { id: 5, parent_id: 0, name: '系统管理' },
          { id: 6, parent_id: 5, name: '用户管理' }
        ]
      }
    },
    computed: {
      getMenuList () {
        return getJsonTree(this.menu, {
          id: 'id',
          pid: 'parent_id',
          children: 'children'
        })
      }
    },
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

