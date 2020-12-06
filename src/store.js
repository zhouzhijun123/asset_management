import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'init',
    isLog:false,
    menu:[],
    token:"",
},
  mutations:{
    tokenChange(state,token){
      state.token=token
    },
    usernameChange(state,username){
      state.username=username
    },
    menuChange(state,tmp){
      state.menu=tmp;
      
    },
    isLogChange(state,flag){
      state.isLog=flag;
    }
  },
  getters: {
    
},
  actions: {

  }
})
