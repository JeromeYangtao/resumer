// 编辑区组件
<template>
   <div id="resumeEditor">
    <nav>
      <ol>
       <li v-for="(item,index) in resume.config" 
       :class="{active: item.field === selected}" 
       @click="selected = item.field" @mouseenter="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>

    <ol class="panels">
      <!--兼容数组和对象-->
      <li v-for="item in resume.config" v-show="item.field === selected">
        <!--内容以数组形式储存时-->
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,index) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <!--存疑，虽然是数组，但是插值中[]不起作用，要像对象一样用.才能正常使用-->
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${index}.${key}`,$event.target.value)">
            </div>
            <hr>
          </div>
        </div>

        <!--内容以对象形式储存时-->
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
   
      </li>
    </ol>   
   </div>
</template>
 
<script>
  export default {
   name: 'ResumeEditor',
  // getters and setters
  computed: {
    selected:{
        get:function(){
          return this.$store.state.selected
        },
        set:function(value){
          return this.$store.commit('switchTab', value)
        }
    },
    resume (){
      return this.$store.state.resume
    }
  },
  // Mutations
  methods: {
    changeResumeField(path,value){
      this.$store.commit('updateResume',{
        path,
        value
      })
    }
  }
}
</script>
 
<style scoped lang="scss">
  #resumeEditor{ 
    min-width: 35%;
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    >nav{
      width: 80px;
      background: black;
      color: white;
      >ol{
        >li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          cursor: pointer;
          &.active{
            background: white;
            color: black;
          }
        }
      }
    }
    >.panels{
      flex-grow: 1;
      > li {
        padding: 24px;
      }
    }
  }
  svg.icon{
      width: 24px; 
      height: 24px;
  }
  ol{
    list-style: none;
  }
  .resumeField{
    > label{
      display: block;
    }
    input[type=text]{
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }
  hr{
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
</style>