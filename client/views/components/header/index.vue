<template>
  <div class="lee-header">
    <div class="lee-header-logo">
      leeadmin
    </div>
    <div class="lee-header-nav">
      <Row>
        <Col>
           <Dropdown placement="bottom-end" @on-click="_handleOnClick">
            <a href="javascript:void(0)">
                admin
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem name="安全退出">安全退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leeheader',
    data () {
      return {
      }
    },
    methods: {
      _handleOnClick (name) {
        console.log(name)
        if (name === '安全退出') {
          window.localStorage.removeItem('token')
          this.$router.replace({ path: 'login' })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.lee-header
  position absolute
  width 100%
  height 60px
  line-height 60px
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
