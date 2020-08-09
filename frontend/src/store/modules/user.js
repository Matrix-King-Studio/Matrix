import userApi from '../../api/user'
import { Message } from 'element-ui'

const state = {
    token: null,
    userId: null,
    username: null,
    userInfo: null
}

const mutations = {
    SetToken: (state, token) => {
        state.token = token
    },

    SetUserId: (state, userId) => {
        state.userId = userId
    },

    SetUsername: (state, username) => {
        state.username = username
    },

    SetUserInfo: (state, userInfo) => {
        state.userInfo = userInfo
    }
}

const actions = {
    Login({ commit }, data) {
        return new Promise((resolve, reject) => {
            userApi.login(data).then(res => {
                if (res.data.error) {
                    Message({
                        message: res.data.error,
                        type: 'error',
                        duration: 3000
                    })
                    reject(res.data.error)
                } else {
                    commit('SetToken', res.data.key)
                    resolve()
                }
            }).catch(err => {
                console.log(err)
                Message({
                    message: '用户名或密码错误！',
                    type: 'error',
                    duration: 3000
                })
                reject(err)
            })
        })
    },

    Register({ commit }, data) {
        return new Promise((resolve, reject) => {
            userApi.register(data).then(res => {
                res = res.data
                commit('SetToken', res.token)
                resolve()
            }).catch(err => {
                console.log(err)
                Message({
                    message: '注册出错：' + err.data,
                    type: 'error',
                    duration: 3000
                })
                reject(err)
            })
        })
    },

    Logout({ commit }) {
        return new Promise((resolve, reject) => {
            userApi.logout().then(res => {
                commit('SetToken', null)
                resolve()
            }).catch(err => {
                console.log(err)
                Message({
                    message: '用户名或密码错误！',
                    type: 'error',
                    duration: 3000
                })
                reject(err)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}