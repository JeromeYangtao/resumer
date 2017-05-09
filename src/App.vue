<template>
  <div class="page" id="app">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'

import store from './store/index'

export default {
  name: 'app',
  store,
  components: {Topbar, ResumeEditor, ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons) 
  }
}
</script>

<style>
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }

  .page>main{
    flex-grow: 1;  
  }

  .page>main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 100%;
  }
  
  #resumeEditor{
    width: 35%;
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  #resumePreview{
    flex-grow: 1;
    background:#ffffff;
    margin-left: 16px;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    /*vertical-align: -0.1em;*/
    font-size:16px;
  }
  
</style>
