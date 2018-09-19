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
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('System', [
      'getMenuList'
    ])
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

