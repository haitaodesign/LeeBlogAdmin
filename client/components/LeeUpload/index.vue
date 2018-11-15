<template>
  <div class="lee-upload">
    <Upload
      :action="action"
      :headers="headers"
      >
      <div class="lee-upload-border">
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
        action: 'http://localhost:3000/api/upload',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        }
      }
    },
    methods: {
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
</style>
