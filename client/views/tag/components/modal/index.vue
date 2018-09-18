<template>
  <div class="leemodal">
     <Modal
        v-model="modal"
        :title="title"
        @on-ok="_handleOkClick"
        @on-cancel="_handleCancelClick">
        <!-- 表单模板 -->
        <Form ref="form" :model="form" :rules="rulesForm" :label-width="80" label-position="left" >
          <FormItem label="标签名称" prop="name">
            <!-- 表单数据编辑如何映射？ -->
            <Input type="text" v-model="form['name']"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
            <Button type="primary" @click="_handleOkClick('form')">提交</Button>
            <Button @click="_handleResetClick('form')" style="margin-left: 8px">重置</Button>
          </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'leemodal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Modal'
      },
      edit: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        modal: this.show,
        form: {
          name: ''
        },
        rulesForm: {
          name: [{required: true, message: '标签名称不能为空', trigger: 'change'}]
        }
      }
    },
    watch: {
      show (value) {
        this.modal = value
        if (this.edit) {
          this._initEditForm()
        }
      }
    },
    methods: {
      _handleOkClick (name) {
        // 先校验参数，然后返回
        this.$refs[name].validate((valid) => {
          if (valid) {
            const { edit } = this
            let params
            if (edit) {
              params = {
                _id: this.edit._id,
                ...this.form
              }
            } else {
              params = this.form
            }
            this.$emit('on-ok', params)
          } else {
            this.$Message.error('请输入符合要求的数据！')
          }
        })
      },
      _handleCancelClick () {
        // 重置表单
        this._resetForm('form')
        this.$emit('on-cancel')
      },
      _handleResetClick (name) {
        // 重置表单
        this._resetForm(name)
      },
      _resetForm (name) {
        this.$refs[name].resetFields()
      },
      _initEditForm () {
        const { edit, form } = this
        if (edit !== {}) {
          const formKeys = Object.keys(form)
          formKeys.forEach((item) => {
            form[item] = edit[item]
          })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>

