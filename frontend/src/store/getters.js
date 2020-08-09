const getters = {
    token: state => state.user.token,
    userId: state => state.user.userId,
    username: state => state.user.username,
    userInfo: state => state.user.userInfo
}
export default getters