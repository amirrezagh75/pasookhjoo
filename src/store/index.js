import { createStore } from 'vuex'
import {apiUrl} from '@/helpers'

export default createStore({
  state: {
    Token : "",
    userRole : "",
    name : ""
  },
  mutations: {
    submiAuth(state, {Token , role , name}){
      state.Token = Token,
      state.userRole = role,
      state.name = name
    }
  },
  actions: {
    async Login({contex},{username,password}){
      let userData = await this.$axios.post(`${apiUrl}/login` , {username , password}).then(res=>{
        return res[0].data
      })
      let Token = userData.Token ,  role = userData.role , name = userData.name;
      contex.commit("submiAuth" , {
        Token,
        role,
        name
      })
    },
    setAuth({contex} , {Token , role , name}){
      contex.commit("submiAuth" , {
        Token, 
        role, 
        name
      })
    }
  },
  getters : {
    isLoggedIn (state){
      return !! state.Token
    }
  },
  modules: {
  }
})
