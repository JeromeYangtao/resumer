// 注册页面对话框组件
<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
          <span class="close" @click="close">X</span>     
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
    background: hsla(0, 0%,0%,0.25);
    // 居中
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog{
    background: white;
    min-height: 4em;
    min-width: 10em;
    background: #0D90F0;
    display: flex;
    flex-direction: column;
    // color: white;
    > header{
      padding: 16px;
      display: flex;
      justify-content: space-between;
      > .close{
        cursor: pointer;
        border: 2px solid white;
        min-width: 30px;
        min-height: 26px;
        text-align: center;
        vertical-align: middle;
        line-height: 26px;
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
</style>