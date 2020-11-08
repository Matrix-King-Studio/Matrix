import request from '../utils/request'

export default {
    /**
     * 用户登录
     * @param data
     * @returns {AxiosPromise}
     */
    login(data) {
        return request({
            url: '/User/login',
            method: 'POST',
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
            url: '/User/register',
            method: 'post',
            data
        })
    },
    /**
     * 用户注销
     * @param data
     * @returns {AxiosPromise}
     */

    getSelfInfo(data) {
        return request({
            url: '/UserInfo/selectId',
            method: 'get',
            params: data
        })
    },

    setSelfInfo(data) {
        return request({
            url: '/UserInfo/updateUser',
            method: 'get',
            params: data
        })
    },

    changePassword(data) {
        return request({
            url: '',
            method: 'post',
            data
        })
    }
}