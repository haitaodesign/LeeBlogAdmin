<template>
  <div class="lee-login">
    <div class="lee-login-box">
      <h1 class="lee-login-title">LeeAdmin</h1>
      <div class="lee-login-form">
        <Form ref="params" :model="params" :rules="loginRules" >
          <FormItem prop="username">
            <Input v-model="params.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem prop="password">
            <Input v-model="params.password" type="password" placeholder="请输入密码"></Input>
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
import { mapActions } from 'vuex'
import UserManager from '@api/UserManager'
const user = new UserManager()
export default {
  name: 'login',
  data  () {
    return {
      params: {
        username: 'admin0',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '用户名不能为空！', trigger: 'change' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'change' },
          { type: 'string', min: 6, message: '密码长度不能小于6位！', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('Login', ['login']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.getLogin()
        } else {
          this.$Message.error('请输入完整的登录信息!')
        }
      })
    },
    async getLogin () {
      const { data: {code, data: { token }, msg} } = await user.login(this.params)
      if (code === 0) {
        this.$Message.success(msg)
        window.localStorage.setItem('username', this.params.username)
        window.localStorage.setItem('token', token)
        this.$router.push({ path: '/article' })
      } else {
        this.$Message.error(msg)
      }
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

