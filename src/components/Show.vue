<template>
  <div class="show">
    <h1>{{$route.params.id }}</h1>
    <h3>{{product.name}}</h3>
    <h2 class="price">￥{{product.price}}</h2>
    <h3>
      <button @click='reduceCount'>-</button>
      <i>数量:{{count}}</i>
      <button @click='addCount'>+</button>
    </h3>
    <h2 class="price">总金额：￥{{countMoney}}</h2>
    <button>下单</button>
  </div>
</template>

<script>
  // import myFn from '@/assets/myFun'
  // import axios from 'axios'
  import store from '@/vuex/store'
  import {
    mapState,
    mapMutations
  } from 'vuex'
  
  export default {
    name: 'show',
    data() {
      return {
        products: this.$store.state.products
      }
    },
    computed: {
      ...mapState(['count']),
      product() {
        for (var i = 0; i < this.products.length; i++) {
          if (this.$route.params.id == this.products[i].id) {
            return this.products[i];
          }
        }
      },
      countMoney(){
        return this.product.price*this.count;
      }
    },
    methods: { ...mapMutations([
        'addCount',
        'reduceCount'
      ])
    },
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .show {
    h2 {
      color: green;
    }
    h3 {
      color: #456;
    }
  }
</style>
