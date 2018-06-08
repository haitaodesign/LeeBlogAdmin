<template>
  <div class="lee-login">
    <div class="lee-login-box">
      <h1 class="lee-login-title">LeeAdmin</h1>
      <div class="lee-login-form">
        <Form>
          <FormItem prop="userName">
            <Input v-model="params.userName" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem prop="passWord">
            <Input v-model="params.passWord" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" long @click="handleSubmit('params')">登录</Button>
        </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data  () {
    return {
      params: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    handleSubmit () {
    }
  }
}
</script>
<style lang="stylus" scoped>
.lee-login
  position: relative
  height: 100%
  width: 100%
  background-image: url('../../assets/images/login_bg.jpg')
  background-size: 100% 100%
  background-repeat: no-repeat
  .lee-login-box
    position: absolute
    width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.6)
    .lee-login-title
      height: 100px
      line-height: 100px
      font-size: 32px
      background-color: #fff
      background-color: rgba(255, 255, 255, 0.6)
      text-align: center
      color #000
    .lee-login-form
      margin 60px;
</style>

