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
            userApi.login(data).then(res => {
                if (res.data.msg === '用户不存在') {
                    Message({
                        message: '用户名不存在，请重试！',
                        type: 'error',
                        duration: 3000
                    })
                    reject(res.data.msg)
                } else if (!res.data.data.userid) {
                    Message({
                        message: '密码错误，请再次确认！',
                        type: 'error',
                        duration: 3000
                    })
                    reject('密码错误，请再次确认！')
                } else {
                    console.log(res.data.data)
                    console.log('ok登陆成功')
                    // 成功处理
                    Message({
                        type: 'success',
                        duration: 2000,
                        message: '登录成功'
                    })
                    commit('SET_USERNAME', res.data.data.username)
                    commit('SET_USERID', res.data.data.userid)
                    commit('SET_ISLOGIN', true)
                    // 测试尝鲜版
                    localStorage.setItem('username', res.data.data.username)
                    localStorage.setItem('userId', res.data.data.userid)
                    resolve()
                }
            }).catch(err => {
                // console.log(err)
                // Message({
                //     message: '用户名或密码错误！',
                //     type: 'error',
                //     duration: 3000
                // })
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
            localStorage.removeItem('username')
            localStorage.removeItem('userId')
            commit('SET_ISLOGIN', false)
        })
        // return new Promise((resolve, reject) => {
        //     userApi.logout().then(res => {
        //         commit('SetToken', null)
        //         Message({
        //             message: '退出成功！',
        //             type: 'success',
        //             duration: 3000
        //         })
        //         resolve()
        //     }).catch(err => {
        //         console.log(err)
        //         Message({
        //             message: '退出失败！',
        //             type: 'error',
        //             duration: 3000
        //         })
        //         reject(err)
        //     })
        // })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}