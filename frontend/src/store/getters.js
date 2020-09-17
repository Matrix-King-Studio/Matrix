const getters = {
    token: state => state.user.token,
    userId: state => state.user.userId,
    username: state => state.user.username,
    userInfo: state => state.user.userInfo,

    welcomePage: state => state.app.welcomePage,
    status: state => state.app.status,
    dialogIsOpen: state => state.app.dialogIsOpen,
}

export default getters