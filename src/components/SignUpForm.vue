// leancloud注册组件
<template>
  <div>
    <!--不重载页面-->
    <form @submit.prevent="signUp" class="form">
      <div class="row">
        <svg class="name svg-icon" viewBox="0 0 20 20">
           <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
        </svg>
        <input type="text" v-model="formData.username" required class="name" placeholder="Username">
      </div>
      <div class="row">
        <svg class="pass svg-icon" viewBox="0 0 20 20">
          <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
        </svg>
        <input type="password" v-model="formData.password" required class="pass" placeholder="Password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>



    <!--<p class="login__signup">Don't have an account? &nbsp;<a>Sign up</a></p>-->




</div>
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
  
// svg动画


@keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
            transform: scale(3.5);
    opacity: 0;
  }
}
@keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
</style>