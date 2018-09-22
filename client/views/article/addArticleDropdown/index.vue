<template>
  <div class="add-article-dropdown">
    <!-- 自定义模态框内容 -->
    <!-- 选择分类 -->
    <!-- 选择标签 -->
    <!-- 发布按钮 -->
    <Dropdown trigger="custom" :visible="showDropdown" placement="bottom-end">
          <div style="text-align: right;width:150px;">
            <Button type="primary" long @click="_handleAddArticleClick">发布</Button>
          </div>
           <DropdownMenu slot="list">
            <div class="add-article-dropdown-container">
              <h1 class="add-article-dropdown-title">发布文章</h1>
              <div class="add-article-dropdown-category">
                <h2>选择分类</h2>
                <!-- 分类选择组件（最快捷方式就是<Select>组件） -->
                <Select v-model="params.categoryId">
                  <Option v-for="item in categoryList" :value="item._id" :key="item._id">{{ item.name }}</Option>
                </Select>
              </div>
              <div class="add-article-dropdown-tag">
                <h2>标签</h2>
                <!-- 搜索多选框，暂时不支持远程搜索 -->
                <Select multiple v-model="params.labelId">
                  <Option v-for="item in tagList"  :value="item._id" :key="item._id">{{ item.name }}</Option>
                </Select>
              </div>
              <div class="add-article-dropdown-button">
                  <Button type="primary" @click="_handleDropdownClose">确定并发布</Button>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'addArticleDropDown',
  props: {
    dropdownParams: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.Category.categoryList,
      tagList: state => state.Tag.tagList
    })
  },
  data () {
    return {
      showDropdown: false,
      params: {
        categoryId: '',
        labelId: []
      }
    }
  },
  mounted () {
    this.getCategoryList()
    this.getTagList()
    // 初始化编辑文章的数据, 这里更严谨的做法应该是等目录分类跟标签的数据都初始化成功之后赋值，需要优化
    // 建议方式：Promise.all
    setTimeout(() => {
      this._initDropdownData(this.dropdownParams)
    }, 100)
  },
  methods: {
    ...mapActions('Category', [
      'getCategoryList'
    ]),
    ...mapActions('Tag', [
      'getTagList'
    ]),
    _handleDropdownClose () {
      this.$emit('on-click-release', this.params)
    },
    _handleAddArticleClick () {
      this.showDropdown = !this.showDropdown
    },
    clearSelectParams () {
      this.params.categoryId = ''
      this.params.labelId = []
    },
    _initDropdownData (params) {
      console.log(params)
      this.params = params
    }
  }
}
</script>
<style lang="stylus">
.add-article-dropdown-container
  padding 20px
  width 300px
  .add-article-dropdown-button
    margin-top 20px
    text-align center
</style>

