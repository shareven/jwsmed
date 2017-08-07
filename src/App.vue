<template>
  <div id="app">
    <header-top></header-top>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <temp-footer></temp-footer>
  </div>
</template>

<script>
import headerTop from '@/components/Header'
import tempFooter from '@/components/TempFooter'
export default {
  name: 'app',
  components:{
    headerTop,
    tempFooter
  }
}

</script>

<style>
body{
  margin: 0;
  margin-top: 70px;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
ul{
  list-style:none;
}
a{
  text-decoration:none;
  color:#000;
}
</style>
