// leancloud注册组件
<template>
  <div>
    <!--不重载页面-->
    <form @submit.prevent="signUp" class="form">
      <div class="row">
        <label>用户名</label> 
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
  name:'SignUpForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  created(){
  },
  methods:{
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User()
      user.setUsername(username)
      user.setPassword(password)
      user.signUp().then(() =>{
        this.$emit('success', getAVUser())
      }, (error)=> {
        console.dir(error)
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
      >input{
        min-height: 2em;
        margin: .5em 0;
      }
      >label{
        line-height: 2em;
      }
    }
    >.actions{
      display: flex;
      justify-content: center;
      >input{
        box-sizing: border-box;
        padding: 0.5em 2em;
        background: #1BB8E6;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 15px;
        transition: 1s;
        border:2px solid #1BB8E6;
      }
      >input:hover{
        box-sizing: border-box;
        background: #0D90F0;
        border:2px solid #1BB8E6;
        color: black;
      }
    }
  }
  
</style>