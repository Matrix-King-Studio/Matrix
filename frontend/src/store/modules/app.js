import store from '../index'

const state = {
    welcomePage: false,   // 是否打开欢迎页面
    status: 0
}

const mutations = {
    SET_WELCOMEPAGE: (state, welcomePage) => {
        state.welcomePage = welcomePage
    },
    SET_STATUS: (state, status) => {
        state.status = status
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}