import axios from 'axios'
import token from './token'

const service = axios.create({
    baseURL: 'http://101.200.196.141:8060',    // 直接写基地址了
    withCredentials: true,              //
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE, PATCH'
    }
})

service.interceptors.request.use(
    config => {
        if (token.getToken()) {
            // 验证token是否过期
            // if (Date.parse(new Date()) / 1000 > jwt.payload_decode(auth.getToken()).exp) {
            //     console.log('身份验证已过期！')
            //     return Promise.reject({
            //         response: { data: 'signature expire' }
            //     })
            // }
            config.headers['Authorization'] = 'JWT ' + token.getToken()
        }
        return config
    },
    error => {
        // 当请求错误的时候报错
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => {
        // code为非200是抛错 可结合自己业务进行修改
        if (res.status === 202 || res.status === 201 || res.status === 200) {
            // Promise.resolve(res.data)
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service