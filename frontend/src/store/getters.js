const getters = {
    token: state => state.user.token,
    userId: state => state.user.userId,
    username: state => state.user.username,
    userInfo: state => state.user.userInfo,
    isLogin: state => state.user.isLogin,

    clickStatus: state => state.app.clickStatus,
    welcomePage: state => state.app.welcomePage,
    status: state => state.app.status,
    dialogIsOpen: state => state.app.dialogIsOpen,
    screenHeight: state => state.app.screenHeight
}

export default getters