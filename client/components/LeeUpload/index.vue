<template>
  <div class="lee-upload">
    <div class="lee-upload-preview" v-for="item in uploadList">
      <template v-if="item.status === 'finished'">
        <img v-if="item.status === 'finished'" :src="item.response.data.url" alt="文章封面图片">
        <div class="lee-upload-preview-cover">
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :action="action"
      :headers="headers"
      :accept="accept"
      :show-upload-list="false"
      >
      <div class="lee-upload-border" v-if="uploadList.length === 0">
        <p>点击选择上传图片</p>
      </div>
    </Upload>
  </div>
</template>

<script>
  export default {
    name: 'LeeUpload',
    data () {
      return {
        action: 'http://localhost:3000/api/img/upload',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        },
        accept: 'image/*',
        imgageUrl: '',
        uploadList: []
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList
    },
    methods: {
      handleRemove (item) {
        this.uploadList = []
      }
    }
  }
</script>

<style lang="stylus" scoped>
.lee-upload-border
  width 200px
  height 100px
  color #808695
  border 1px dotted
  text-align center
  line-height 100px
.lee-upload-border:hover
  color #2d8cf0
  cursor pointer
.lee-upload-preview
  position relative
  width 200px
  height 100px
  border 1px solid #eee
  .lee-upload-preview-cover
    display none
    background: rgba(0,0,0,.6)
    line-height 100px
    text-align center
    i
      color #fff
      font-size 20px
      cursor pointer
  img
    width 100%
    height 100%
  &:hover .lee-upload-preview-cover
    display block
    position absolute
    top 0
    right 0
    bottom 0
    left 0
</style>
