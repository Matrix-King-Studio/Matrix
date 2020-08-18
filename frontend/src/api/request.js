import axios from 'axios'
import store from '../store'

const service = axios.create({
    baseURL: 'http://alexking.site:8000/',
})

service.interceptors.request.use(
    config => {
        if (store.state.user.token){
            config.headers['Authorization'] = 'Token ' + store.state.user.token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service