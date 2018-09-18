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
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </div>
              <div class="add-article-dropdown-tag">
                <h2>标签</h2>
                <!-- 搜索多选框，暂时不支持远程搜索 -->
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
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
import { mapState } from 'vuex'
export default {
  name: 'addArticleDropDown',
  computed: {
    ...mapState({
      categoryList: state => state.Category.categoryList
    })
  },
  data () {
    return {
      showDropdown: false,
      params: {
        category_id: '',
        label_id: ''
      }
    }
  },
  methods: {
    _handleDropdownClose () {
      this.showDropdown = false
      this.$emit('on-click-release')
    },
    _handleAddArticleClick () {
      this.showDropdown = !this.showDropdown
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

