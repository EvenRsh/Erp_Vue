<template>
    <div class="login-container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="admin" prop="pass">
          <el-input type="password" v-model="ruleForm.admin" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        data(){
          const validatePass = (rule, value, callback) => {
//            if (value === '') {
//              callback(new Error('请输入用户名'));
//            } else {
//              if (this.ruleForm.checkPass !== '') {
//                this.$refs.ruleForm.validateField('pass');
//              }
//              callback();
//            }
          };
          const validatePass2 = (rule, value, callback) => {
//            if (value === '') {
//              callback(new Error('请再次输入密码'));
//            } else {
//              callback();
//            }
          };
            return {
              ruleForm: {
                admin: '',
                pass: '',
              },
              rules: {
                admin: [
                  { validator: validatePass, trigger: 'blur' }
                ],
                pass: [
                  { validator: validatePass2, trigger: 'blur' }
                ],
              }
            }
        },
        components: {},
        computed: {},
        methods: {
          submitForm() {
            var name = this.ruleForm
            console.log(localStorage)
//           localStorage.setItem('name')
            localStorage.setItem('token', JSON.stringify(name));
            console.log(1231)
            this.$router.push({
              path:'/index'
            });
          },
        },
    }
</script>

<style lang="scss">
  .login-container{
    margin: 80px auto;
  }
</style>
