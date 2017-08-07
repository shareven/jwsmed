<template>
  <div class="list">
    <h1>{{goodsData.goods[0].type }}</h1>
    <div class="goodsMain">
        <div class="leftPart"></div>
        <ul>
            <li v-for="item in goodsData.goods">
                <router-link :to="{name:'show',params:{id:item.id}}" >
                    <h3>{{item.name}}</h3>
                    <h2>￥{{item.price}}</h2>
                </router-link>
            </li>
        </ul>
    </div>
    
  </div>
</template>

<script>
import goodsData from '@/assets/data'
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'list',
  data () {
    return {
      goodsData: goodsData
    }
  },
  methods:mapMutations(['getGood']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list h1{
    padding-left:30px;
}
.goodsBox(@w:227px,@h:316px,@bg:skyblue,@c:#555){
    float:left;
    width:@w;
    height: @h;
    color: @c;
    background:@bg;
}
.goodsMain{
    width:100%;
    .leftPart{
        .goodsBox(227px,640px);
        margin:0 20px;
    }
    ul>li{
        .goodsBox(@bg:pink);
        margin:0 20px 10px;
        a{
            display:block;
            width:100%;
            height:100%;
        }
    }
}
</style>
