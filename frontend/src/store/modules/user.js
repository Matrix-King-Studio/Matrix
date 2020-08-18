import userApi from '../../api/user'
import { Message } from 'element-ui'
import store from '../index'

const state = {
    token: null,
    userInfo: null
}

const mutations = {
    SetToken: (state, token) => {
        state.token = token
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
                    store.dispatch('user/UserInfo')
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
                if (res.data.error) {
                    Object.keys(res.data.error).forEach(item => {
                        res.data.error[item].forEach(value => {
                            Message({
                                message: value,
                                type: 'error',
                                duration: 2000
                            })
                        })
                        reject(res.data.error[item])
                    })
                } else {
                    commit('SetToken', res.data.key)
                    store.dispatch('user/UserInfo')
                    resolve()
                }
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

    UserInfo({ commit }) {
        return new Promise((resolve, reject) => {
            userApi.user().then(res => {
                if (res.data.error) {
                    Message({
                        message: res.data.error,
                        type: 'error',
                        duration: 3000
                    })
                    reject(res.data.error)
                } else {
                    commit('SetUserInfo', res.data)
                }
            })
        })
    },

    Logout({ commit }) {
        return new Promise((resolve, reject) => {
            userApi.logout().then(res => {
                commit('SetToken', null)
                Message({
                    message: '退出成功！',
                    type: 'success',
                    duration: 3000
                })
                resolve()
            }).catch(err => {
                console.log(err)
                Message({
                    message: '退出失败！',
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