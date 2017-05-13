// leancloud登陆组件
<template>
  <div>
    <form @submit.prevent="signIn" class="form">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn(){
      let {username, password} = this.formData
      
      AV.User.logIn(username,password).then(()=> {
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{
    >.row{
      display: flex;
      justify-content: space-between;
      padding: 0.3em 0;
    }
    >.actions{
      display: flex;
      justify-content: center;
      >input{
        padding: 0.5em 2em;
        background: #1BB8E6;
        border: none;
        color: white;
        cursor: pointer;
      }
    }
  }
  
</style>
