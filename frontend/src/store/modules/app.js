import store from '../index'

const state = {
    clickStatus: true,      // 给点击按钮上一个锁，防滑。
    welcomePage: false,   // 是否打开欢迎页面
    status: 0,
    dialogIsOpen: false,     // 是否打开登录注册界面

    screenHeight: document.documentElement.clientHeight
}

const mutations = {
    SET_WELCOMEPAGE: (state, welcomePage) => {
        state.welcomePage = welcomePage
    },
    SET_STATUS: (state, status) => {
        state.status = status
    },
    SET_DIALOGISOPEN: (state, dialogIsOpen) => {
        state.dialogIsOpen = dialogIsOpen
    },
    SET_CLICKSTATUS: (state, clickStatus) => {
        state.clickStatus = clickStatus
    },
    SET_SCREENHEIGHT: (state, screenHeight) => {
        state.screenHeight = screenHeight
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}