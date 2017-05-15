// leancloud登陆组件
<template>
  <div class="wrapper">
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
      <!--<div id="advertising">插一条广告</div>-->
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
  },
  created(){
    // var string = `
    //   让我插入一条广告
    //  `
    // var n = 0
    // var advertising = document.querySelector('#advertising')
    // console.log(advertising)
    // var time = setInterval(function() {
    //      n = n + 1
    //      console.log(string.length)
    //     if (n = string.length) {
    //         clearInterval(time)
    //     }
    //     advertising.innerHTML = string.substring(0, n);
    //  }, 60)
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  background: #0D90F0;
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
}
  
  
</style>
