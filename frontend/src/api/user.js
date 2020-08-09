import request from './request'

export default {
    /**
     * 用户登录
     * @param data
     * @returns {AxiosPromise}
     */
    login(data) {
        return request({
            url: '/auth/rest-auth/login/',
            method: 'post',
            data
        })
    },
    /**
     * 用户信息
     * @param data
     * @returns {AxiosPromise}
     */
    user(data) {
        return request({
            url: '/auth/rest-auth/user',
            method: 'post',
            data
        })
    },
    /**
     * 用户注册
     * @param data
     * @returns {AxiosPromise}
     */
    register(data) {
        return request({
            url: '/auth/rest-auth/registration',
            method: 'post',
            data
        })
    },
    /**
     * 用户注销
     * @param data
     * @returns {AxiosPromise}
     */
    logout() {
        return request({
            url: '/auth/rest-auth/logout',
            method: 'post',
        })
    },
    /**
     * 用户修改密码
     * @param data
     * @returns {AxiosPromise}
     */
    passwordChange(data) {
        return request({
            url: '/auth/rest-auth/password/change',
            method: 'post',
            data
        })
    },
    /**
     * 用户重置密码
     * @param data
     * @returns {AxiosPromise}
     */
    passwordReset(data) {
        return request({
            url: '/auth/rest-auth/password/reset',
            method: 'post',
            data
        })
    },
    /**
     * 用户确认重置密码
     * @param data
     * @returns {AxiosPromise}
     */
    passwordResetConfirm(data) {
        return request({
            url: '/auth/rest-auth/password/reset/confirm',
            method: 'post',
            data
        })
    }
}