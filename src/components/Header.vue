<template>
  <div class="header">
    <div class="headbar">
      <div class="inner" >
        <div class="call"><i><img src="http://118.178.242.213:89/img/call.png" style="position:relative;right:5px;"/></i><i class="callphone" style="color:#808080">400-185-5188</i></div>
        <div class="barlogin" v-show="!isShowUser"> 
          <span>你好，</span>
          <router-link to="/user/login" >请登录</router-link>|
          <router-link to="/user/register">立即注册</router-link>
        </div>
        <div class="userInfo"v-show="isShowUser">
          <span>欢迎</span>
          <router-link class="usermanage" to="/user/management">{{name}}</router-link>
          <a class="logout" href="#" @click="quit">注销登录</a>
        </div>
        <a href="http://pro.jwsmed.com/" target="_blank" ><i><img src="http://118.178.242.213:89/img/po.png" /></i> 采购系统</a>
        <a href="http://sup.jwsmed.com/" target="_blank"><i ><img src="http://118.178.242.213:89/img/sup.png" /></i> 供应商系统</a>
        <a href="/user/cart" class="buycar" target="_blank"><i class="shopping-car"><img src="http://118.178.242.213:89/img/shopping-car.png" /></i>采购清单 <span id="cartCnt">0</span></a>
      </div>
    </div>
    <div class="headinfo">
      <div class="inner">
        <div class="search" style="height: 30px;margin:10px auto;border:2px solid skyblue;padding: 0 20px;border-radius: 15px;width: 535px;">
          <input type="search" class="searchtext" placeholder="产品名称、代号" style="height:29px;width:460px;border:0;outline:none;" />
          <input type="submit" class="searchsubmit" value="搜索" >
        </div>
      </div>
    </div>
    <div class="nav">
      <ul class="navUl">
        <li><a href="">齿科材料</a></li>
        <li><a href="">品牌专区</a></li>
        <li><a href="">增值服务</a></li>
        <li><a href="">技术培训</a></li>
        <li><a href="">产品培训</a></li>
        <li><a href="">咨询服务项目</a></li>
        <li><a href="">社区</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'
/*引入公共方法*/
import {setCookie,getCookie,delCookie} from '../assets/cookies.js'
  export default {
    name: 'header',
    data() {
      return {
        name:""
      }
    },
    computed:{
      ...mapState(['isShowUser','userName']),
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      this.showUserInfo();
    },
    updated(){
      this.showUserInfo();
    },
    methods:{ 
      ...mapMutations([
        'falseShowUser',
        'trueShowUser'
      ]),
      quit(){
          /*删除cookie*/
          delCookie('username');
          this.falseShowUser();
      },
      showUserInfo(){
        let uname = getCookie('username')
        this.name = uname;
        /*如果cookie不存在，则跳转到登录页*/
        if(uname == ""){
          this.falseShowUser();
        }else{
          this.trueShowUser();
        }
      }
    },
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header {
    width: 100%;
    height: 150px;
  }
  .headbar{
    position:fixed;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ddd;
    .barlogin,.userInfo{
      margin-left: 500px;
      span{
        color: #555;
      }
      a{
        color:#f22;
        &:hover{
          text-decoration: underline;
        }
      }
      .usermanage{
        color: #2A8FD3;
        font-weight: bold;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    a{
      margin:0 10px;
      color: #555;
    }
  }
  .headbar .inner{
    margin: 0 auto;
    width:1260px;
    height: 30px;
  }
  .headbar .inner>div,
  .headbar .inner>a {
    float: left;
  }
  
  .headbar .inner>.call {
    float: left;
  }
  .headinfo{
    margin-top:60px; 
  }
  .header .nav {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: #2a8fd3;
  }
  
  .header .nav ul {
    width: 1260px;
    height: 100%;
    list-style: none;
  }
  
  .header .nav ul li {
    float: left;
    width: 180px;
    height: 100%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .searchsubmit{
    width:65px;
    height:30px;
    border:0;
    outline:none;
    background: #eee;
    cursor: pointer;
  }
</style>
