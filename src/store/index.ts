import { createStore } from 'vuex'

interface State {
  userName: string,
  dataList: Array<any>,
  roleIds: string,
}

const mutations = {
    setUserInfo( state:any,userInfo:any ) {
        state.dataList = userInfo
    },
    setRoleIds( state:any, roleIds:any ) {
        state.roleIds = roleIds
    }
}

const actions = {
    setRoleId({ commit }, roleIds:any) {
        debugger
        setTimeout(()=>{
            commit('setRoleIds', roleIds) 
        },1000)
    }
}

export default createStore({
  state(): State {
    return {
      userName: "xiaomlm",
      dataList: [],
      roleIds: '',
    };
  },
  mutations,
  actions
});