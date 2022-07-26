import {
  login as loginFun,
  getInfo,
  logout
} from '@/api/user'

const state = {
  adminInfo: {
    avatar: 'default.jpg'
  }
}

const actions = {
  async login({
    commit
  }, data) {
    const res = await loginFun(data)
    if (res.status == 1) {
      const userInfo = await getInfo()
      commit('SAVEINFO', userInfo.data)
    }
  },
  async getAdminInfo({
    commit
  }) {
    const res = await getInfo()
    if (res.status == 1) {
      return commit('SAVEINFO', res.data)
    }
    return
  },
  async logout({
    commit
  }) {
    await logout()
    commit('RESETINFO')
  }
}
const mutations = {
  SAVEINFO: (state, data) => {
    state.adminInfo = data
  },
  RESETINFO: (state) => {
    state.adminInfo = {
      avatar: 'default.jpg'
    }
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
