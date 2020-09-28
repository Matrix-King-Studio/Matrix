import Cookie from 'js-cookie'

// const inSevenDays = new Date(new Date().getTime() + 8 * 60 * 60 * 1000)

export default {
    getToken() {
        Cookie.get('token')
    },

    setToken(token) {
        Cookie.set('token', token, { expires: 7 })
    },

    removeToken() {
        Cookies.remove('token')
    }
}
