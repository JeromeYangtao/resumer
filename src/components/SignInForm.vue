// leancloud登陆组件
<template>
  <form @submit.prevent="signIn" class="form">
    <div class="row">
      <svg class="name svg-icon" viewBox="0 0 20 20">
         <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
      </svg>
      <input type="text" required v-model="formData.username" placeholder="Username">
    </div>
    <div class="row">
      <svg class="pass svg-icon" viewBox="0 0 20 20">
        <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
      </svg>
      <input type="password" required v-model="formData.password" placeholder="Password">
    </div>
    <div class="actions">
      <input type="submit" value="提交">
      <span>{{errorMessage}}</span>
    </div>
  </form>
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

  }
}
</script>

<style lang="scss" scoped>
  .form{
     position: relative;
     height: 100%;
     transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
     margin-top: 15rem;
    >.row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3em 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      >input{
        min-height: 2em;
        margin: .5em 0;

        height: 100%;
        padding-left: 1.5rem;
        font-size: 1.5rem;
        background: transparent;
        color: #FDFCFD;
      }
      >label{
        line-height: 2em;
      }

      >.svg-icon{
        >path{
          stroke: rgba(255, 255, 255, 0.9);
          fill: none;
          stroke-width: 1;
        }
      }

      >svg {
          margin-right: 0.5rem;
      }
      >svg.name path {
          stroke-dasharray: 73.50196075439453;
          stroke-dashoffset: 73.50196075439453;
          animation: animatePath 2s 0.5s forwards;
      }
      >svg.pass path {
          stroke-dasharray: 92.10662841796875;
          stroke-dashoffset: 92.10662841796875;
          animation: animatePath 2s 0.5s forwards;
      }  
    }
    >.actions{
      display: flex;
      justify-content: center;
      >input{
        width: 75%;
        height: 3rem;
        line-height: 1.5rem;
        // vertical-align: middle;
        padding: 0.5em 2em;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        background: #FF3366;
        font-size: 1.5rem;
        border-radius: 3rem;
        margin-top: 3rem;
      }
  }
}

  @media (max-device-width:500px){
    .form{
      .row{
        justify-content: center;
        margin-left: -6rem;
        >input{

        }
        >.svg-icon{
          margin-right: 5rem;
        }
      }
      .actions{
      >input{
        width: 20rem;
        margin-top: 10rem;
      }
    }
    }
    
  }
  
  
</style>
