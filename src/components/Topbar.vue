// 导航区组件
<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">

        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a href="#" class="button" @click.prevent="signOut">退出</a>
        </div>

        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
        </div>
        
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <!--命名问题-->
          <SignUpForm @success="signIn($event)"/>
        </MyDialog>
        <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
          <SignInForm @success="signIn($event)"/>
        </MyDialog>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog.vue'
import SignUpForm from './SignUpForm.vue'
import SignInForm from './SignInForm.vue'

import AV from '../lib/leancloud.js'

export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false,
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  components: {
    MyDialog,SignUpForm,SignInForm
  },
  methods: {
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    },

    signIn(user){
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    }
  }
}
</script>

<style scoped lang="scss">
  #topbar{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height:64px;
      padding: 0 16px;    
    }
    .wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
    .logo{
      font-size:24px;
      color:#000000;
    }  
  }
  .button{ 
    width:72px;
    height:32px;
    border: none;
    cursor: pointer;
    font-size: 18px; 
    background:#ddd;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
    }
    &.primary{
      background:#02af5f;
      color: white;
    }
  }
  .actions > a{
    display: flex;
    > .userActions{ 
      >.welcome{
        margin-right: 0.5em;
      }
    }
  }
</style>