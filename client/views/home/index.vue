<template>
  <div>
    <lee-header></lee-header>
    <lee-side-bar :list="initSideBarList()" @on-select="handleOnSelect"></lee-side-bar>
    <lee-bread :data="breadList"></lee-bread>
    <lee-main></lee-main>
    <!-- <lee-footer></lee-footer> -->
  </div>
</template>

<script>
import LeeHeader from '@views/header/index'
import LeeSideBar from '@views/sidebar/index'
import LeeMain from '@views/main/index'
import LeeFooter from '@views/footer/index'
import LeeBread from '@views/bread/index'
import { getJsonTree } from '@utils/jsonTree'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState('System', [
      'menuList',
      'breadList'
    ])
  },
  mounted () {
    this.SET_BREADLIST(this.getBreadList(this.menuList, '文章管理'))
  },
  methods: {
    ...mapMutations('System', [
      'SET_BREADLIST'
    ]),
    handleOnSelect (name) {
      // 通过name查找当前数据，得到之后再查找上级数据
      this.SET_BREADLIST(this.getBreadList(this.menuList, name))
      this.$router.push({name})
    },
    getParentObjectByName (list, name) {
      let obj = {}
      list.forEach((item, index) => {
        if (item.name === name) {
          obj = list[index]
        }
      })
      return obj
    },
    getParentObjectByParentId (list, id) {
      let obj = {}
      list.forEach((item, index) => {
        if (item.id === id) {
          obj = list[index]
        }
      })
      return obj
    },
    getBreadList (list, name) {
      const cobj = this.getParentObjectByName(list, name)
      const pobj = this.getParentObjectByParentId(list, cobj.parent_id)
      return [ pobj, cobj ]
    },
    initSideBarList () {
      const list = [
        { id: 1, parent_id: 0, name: '内容管理' },
        { id: 2, parent_id: 1, name: '文章管理' },
        { id: 3, parent_id: 1, name: '分类管理' },
        { id: 4, parent_id: 1, name: '标签管理' },
        { id: 5, parent_id: 0, name: '系统管理' },
        { id: 6, parent_id: 5, name: '用户管理' }
      ]
      return getJsonTree(list, {
        id: 'id',
        pid: 'parent_id',
        children: 'children'
      })
    }
  },
  components: {
    LeeHeader,
    LeeSideBar,
    LeeMain,
    LeeFooter,
    LeeBread
  }
}
</script>

<style scoped>

</style>
