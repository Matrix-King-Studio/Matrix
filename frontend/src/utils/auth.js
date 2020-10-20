import Cookies from 'js-cookie'

const inThreeDays = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)

export default {
    // 修改token
    setToken(token) {
        return Cookies.set('token', token, { expires: inThreeDays })
    },

    // 获取token
    getToken() {
        return Cookies.get('token')
    },

    // 退出或注销账号的时候移除token
    removeToken() {
        Cookies.remove('token')
    }
}