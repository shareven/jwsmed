import Vue from 'vue'
import Vuex from 'vuex'
import goodsData from '@/assets/data'

Vue.use(Vuex)

const state={
    products:goodsData.goods, //所有商品数组
    good:[],
    count:1,
    countMoney:21,
    isShowUser:false
}
const mutations={
    getGood(state,id){
        for (var key in state.products) {
            if (key.id==id) {
                var index=key.indexOf(state.products);
            }
        }
        state.good = state.products[index];
    },
    addCount(state){
        state.count++;

    },
    reduceCount(state){
        state.count=state.count<=1?1:state.count-1;
    },
    falseShowUser(state){ //不显示用户信息，显示登录和注册
        state.isShowUser = false; 
    },
    trueShowUser(state){   //显示用户信息
        state.isShowUser = true; 
    }
}
export default new Vuex.Store({
    state,mutations
})