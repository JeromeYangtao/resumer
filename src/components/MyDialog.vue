// 注册页面对话框组件
<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>
          <span class="close" @click="close">X</span>     
          <div class="form-logo"></div>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    // 继承父组件的数据
    props: ['title', 'visible'],
    methods: {
      close(){
        // 触发当前实例上的事件。附加参数都会传给监听器回调。触发父组件中的close事件.$emit(event[,arguments])
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss">

  .dialogWrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("http://i1.piimg.com/588926/5bf2da3a85f10987.jpg");
    background-size: cover;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
    .dialog{
    background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
    min-height: 4em;
    height: 100%;
    min-width: 105vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > header{
      padding-right: 16px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      >.form-logo {
          position: absolute;
          top: -1rem;
          left: 30rem;
          min-width: 18rem;
          height: 3rem;
          background: #fff;
          transform-origin: 0 100%;
          transform: rotate(-45deg);
         }
      >.form-logo:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 100%;
          width: 3rem;
          height: 7rem;
          background: #fff;
          box-shadow: inset -0.2rem -2rem 2rem rgba(0, 0, 0, 0.2);
         }
      >.close{
          cursor: pointer;
          border: 2px solid white;
          min-width: 70px;
          min-height: 60px;
          margin-right: 7rem;
          text-align: center;
          line-height: 70px;
          border-radius: 2px;
          transition: 0.6s;
        }
      > .close:hover{
          background: white;
          color: #0D90F0;
      }
    }
    > main{
      padding: 16px;
      >div{
        margin-top: .5em;
        text-align: center;
      }
    }
  }
  
  @media (min-device-width: 500px){
    .dialog{
    background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
    min-height: 4em;
    height: 100%;
    min-width: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > header{
      padding-right: 16px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      margin-right: 0;
      >.form-logo {
          position: absolute;
          top: 13rem;
          left: 10rem;
          min-width: 12rem;
          height: 2rem;
          background: #fff;
          transform-origin: 0 100%;
          transform: rotate(-45deg);
         }
      >.form-logo:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 100%;
          width: 2rem;
          height: 5.2rem;
          background: #fff;
          box-shadow: inset -0.2rem -2rem 2rem rgba(0, 0, 0, 0.2);
         }
      >.close{
          cursor: pointer;
          border: 2px solid white;
          min-width: 30px;
          min-height: 26px;
          text-align: center;
          vertical-align: middle;
          line-height: 26px;
          border-radius: 2px;
          transition: 0.6s;
          margin-right: 0;
        }
      > .close:hover{
          background: white;
          color: #0D90F0;
      }
    }
    > main{
      padding: 16px;
      >div{
        margin-top: .5em;
        text-align: center;
      }
    }
  }
  }
</style>