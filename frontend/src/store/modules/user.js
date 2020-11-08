import userApi from '../../api/user'
import { Message } from 'element-ui'
import store from '../index'

const state = {
    token: null,
    userInfo: null,
    userId: null,
    username: null,
    isLogin: false,
}

let remindMessage = null

const mutations = {
    SetToken: (state, token) => {
        state.token = token
    },

    SetUserInfo: (state, userInfo) => {
        state.userInfo = userInfo
    },

    SET_ISLOGIN: (state, isLogin) => {
        state.isLogin = isLogin
    },

    SET_USERID: (state, userId) => {
        state.userId = userId
    },

    SET_USERNAME: (state, username) => {
        state.username = username
    }
}

const actions = {
    Login({ commit }, data) {
        return new Promise((resolve, reject) => {
            remindMessage = Message({
                message: '发送请求中，请稍后.',
                duration: 0
            })
            userApi.login(data).then(res => {
                remindMessage.close()
                // console.log(res.data)
                if (res.data.msg === '用户不存在') {
                    Message({
                        message: '用户名不存在，请重试！',
                        type: 'error',
                        duration: 3000
                    })
                    reject(res.data.msg)
                } else if (!res.data.data.userId) {
                    Message({
                        message: '密码错误，请再次确认！',
                        type: 'error',
                        duration: 3000
                    })
                    reject('密码错误，请再次确认！')
                } else {
                    // console.log(res.data.data)
                    // console.log('ok登陆成功')
                    // 成功处理
                    Message({
                        type: 'success',
                        duration: 2000,
                        message: '登录成功'
                    })
                    setTimeout(() => {
                        commit('SET_USERNAME', res.data.data.username)
                        commit('SET_USERID', res.data.data.userId)
                        commit('SET_ISLOGIN', true)
                        // 测试尝鲜版
                        localStorage.setItem('username', res.data.data.username)
                        localStorage.setItem('userId', res.data.data.userId)
                        resolve()
                    }, 2400)
                }
            }).catch(err => {
                remindMessage.close()
                Message({
                    message: '网络出错，请再次确认！',
                    type: 'error',
                    duration: 2000
                })
                reject(err)
            })
        })
    },

    Register({ commit }, data) {
        return new Promise((resolve, reject) => {
            remindMessage = Message({
                message: '发送请求中，请稍后.',
                duration: 0
            })
            userApi.register(data).then(res => {
                console.log(res)
                remindMessage.close()
                if (res.data.msg === '用户已经存在') {
                    Message({
                        type: 'error',
                        message: '用户名已存在，请重新修改！',
                        duration: 1000
                    })
                    reject()
                } else {
                    Message({
                        type: 'success',
                        message: '注册成功',
                        duration: 1000
                    })
                }

                setTimeout(() => {
                    resolve()
                }, 1000)
                // this.dialogRegisterVisible = false
            }).catch(err => {
                remindMessage.close()
                Message({
                    type: 'error',
                    message: '注册失败，请检查网络环境',
                    duration: 2000
                })

                console.log(err)
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
            localStorage.removeItem('username')
            localStorage.removeItem('userId')
            commit('SET_ISLOGIN', false)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}