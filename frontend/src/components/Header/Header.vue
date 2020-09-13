<template>
	<div>
		<div class="head" v-if="screenWidth>=700">
			<div class="selected-block"
				 :style="{ width: `${bubblesAttr.width}px`, height: `${bubblesAttr.height}px`, transform: `translateX(${bubblesAttr.transformX}px)`, backgroundColor: colorList[nowLocation] }"></div>
			<div class="head-left" @mouseleave="goBack">
				<router-link to="/" class="head-logo" tag="div" @click.native="trans(0, true)"></router-link>
				<router-link v-for="(item, i) in headList" :key="i" :to="item.url" class="head-left-menu" tag="a"
							 @mousemove.native="trans(i)" @click.native="routerChange(i)" :style="{color: item.color}">
					{{item.cont}}
				</router-link>
			</div>
			<div class="head-right">
				<el-button size="mini" plain type="success" @click="register">
					注册
				</el-button>
				<el-button size="mini" plain type="primary" @click="login">
					登录
				</el-button>
			</div>
		</div>
		<div class="head" v-else>
			<div class="menu-ui" @mousedown="openMenu" ref="menuUi"
				 :style="{border: `${menuIsOpen ? '3px solid #45CDC6' : 'none'}`}"></div>
			<div class="menu-cont" :style="{transform: `translateX(${menuIsOpen ? 0 : -50}vw)`}" ref="menu">
				<router-link :to="item.url" tag="div" v-for="(item, i) in headList" :key="i"
							 class="menu-leap"
							 @mousedown.native="routerChange(i, true)"
							 :style="{backgroundColor: location === i ? '#a2c1cd' : '#6f6f6f', borderBottom: location === i ? 'none' : '2px solid #4a4a4a', borderLeft: location === i ? 'none' : '2px solid #4a4a4a', color: location === i ? '#403c48': '#d8d8d8'}">
					{{ item.cont }}
				</router-link>
			</div>
		</div>
		<div class="block" v-if="menuIsOpen && screenWidth<700"></div>
		<!--				<el-menu-->
		<!--					:default-active="activeIndex"-->
		<!--					class="el-menu-demo main"-->
		<!--					mode="horizontal"-->
		<!--					style="position: fixed; z-index: 10">-->


		<!--					&lt;!&ndash;		<el-menu-item index="5">资源项目</el-menu-item>&ndash;&gt;-->
		<!--					&lt;!&ndash;		<el-menu-item index="6">智能题库</el-menu-item>&ndash;&gt;-->
		<!--					<el-menu-item index="Recruit">-->
		<!--						<router-link :to="{ name:'Recruit' }">-->
		<!--							招贤纳士-->
		<!--						</router-link>-->
		<!--					</el-menu-item>-->
		<!--		&lt;!&ndash;			<el-menu-item index="Shop">&ndash;&gt;-->
		<!--		&lt;!&ndash;				<router-link :to="{ name:'Shop' }">&ndash;&gt;-->
		<!--		&lt;!&ndash;					Matrix小店&ndash;&gt;-->
		<!--		&lt;!&ndash;				</router-link>&ndash;&gt;-->
		<!--		&lt;!&ndash;			</el-menu-item>&ndash;&gt;-->
		<!--					<el-menu-item-->
		<!--						index="Register"-->
		<!--						style="float: right"-->
		<!--						v-if="!$store.state.user.token">-->
		<!--					</el-menu-item>-->
		<!--					<el-submenu index="8" style="float: right" v-else>-->
		<!--						<template slot="title">-->
		<!--							{{ userInfo.username }}-->
		<!--						</template>-->
		<!--						<el-menu-item index="8-1">公告</el-menu-item>-->
		<!--						<el-menu-item index="8-2">个人中心</el-menu-item>-->
		<!--						<el-menu-item index="8-3" @click="logout()">退出登录</el-menu-item>-->
		<!--					</el-submenu>-->
		<!--				</el-menu>-->
		<el-dialog
			title="登录"
			:close-on-click-modal="false"
			:visible.sync="dialogLoginVisible">
			<el-form :model="formLogin"
					 :rules="loginRules" ref="formLogin">
				<!-- username -->
				<el-form-item label="用户名" prop="username">
					<el-input @keyup.native.enter="loginConfirm"
							  v-model="formLogin.username" clearable
							  prefix-icon="el-icon-user-solid"
							  style="width: 80%; float: right"></el-input>
				</el-form-item>
				<!-- password -->
				<el-form-item label="密码" prop="password">
					<el-input @keyup.native.enter="loginConfirm"
							  v-model="formLogin.password" show-password
							  prefix-icon="el-icon-lock"
							  style="width: 80%; float: right">
					</el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogLoginVisible = false">取 消</el-button>
				<el-button type="primary" @click="loginConfirm">确 定</el-button>
			  </span>
		</el-dialog>
		<el-dialog
			title="注册"
			:close-on-click-modal="false"
			:visible.sync="dialogRegisterVisible">
			<el-form :model="formRegister"
					 :rules="registerRules"
					 ref="formRegister">
				<!-- username -->
				<el-form-item label="用户名" prop="username">
					<el-input @keyup.native.enter="registerConfirm"
							  v-model="formRegister.username" clearable
							  prefix-icon="el-icon-user-solid"
							  style="width: 80%; float: right"></el-input>
				</el-form-item>
				<!-- email -->
				<el-form-item label="邮箱" prop="email">
					<el-input @keyup.native.enter="registerConfirm"
							  v-model="formRegister.email" clearable
							  prefix-icon="el-icon-message"
							  style="width: 80%; float: right"></el-input>
				</el-form-item>
				<!-- password -->
				<el-form-item label="密码" prop="password">
					<el-input @keyup.native.enter="registerConfirm"
							  v-model="formRegister.password"
							  show-password
							  prefix-icon="el-icon-lock"
							  style="width: 80%; float: right">
					</el-input>
				</el-form-item>
				<!-- confirm password -->
				<el-form-item label="确认密码" prop="confirmPassword">
					<el-input @keyup.native.enter="registerConfirm"
							  v-model="formRegister.checkPassword"
							  show-password
							  prefix-icon="el-icon-finished"
							  style="width: 80%; float: right">
					</el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogRegisterVisible = false">取 消</el-button>
				<el-button type="primary" @click="registerConfirm">确 定</el-button>
			  </span>
		</el-dialog>
	</div>
</template>

<script>
    import { Message } from 'element-ui'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header',
        props: ['screenWidth'],
        data() {
            let checkUserName = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('用户名不能为空！'))
                } else {
                    cb()
                }
            }

            let checkEmail = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('邮箱不能为空！'))
                } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                    return cb(new Error('请填写正确的邮箱！'))
                } else {
                    cb()
                }
            }

            let checkPassword = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('密码不能为空！'))
                } else if (value.length < 8) {
                    return cb(new Error('密码不能小于8位数！'))
                } else if (/^[0-9]+$/.test(value)) {
                    return cb(new Error('密码不能只包含数字。'))
                } else {
                    cb()
                }
            }

            let checkPasswordAgain = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('密码不能为空！'))
                } else if (value !== this.formRegister.password) {
                    return cb(new Error('密码不匹配！'))
                } else {
                    cb()
                }
            }

            return {
                dialogLoginVisible: false,
                dialogRegisterVisible: false,
                formLogin: {
                    username: '',
                    password: '',
                    checked: false,
                },
                loginRules: {
                    username: [{ validator: checkUserName, trigger: 'change' }],
                    password: [{ validator: checkPassword, trigger: 'change' }],
                },
                formRegister: {
                    username: '123456',
                    email: '2426671397@qq.com',
                    password: '1234qwer.',
                    checkPassword: '1234qwer.',
                },
                registerRules: {
                    username: [{ validator: checkUserName, trigger: 'blur' }],
                    email: [{ validator: checkEmail, trigger: 'blur' }],
                    password: [{ validator: checkPassword, trigger: 'blur' }],
                    checkPassword: [{ validator: checkPasswordAgain, trigger: 'blur' }]
                },
                user: {
                    username: 'Alex',
                },
                headList: [
                    {
                        url: '/',
                        cont: '主页',
                        color: '#788187'
                    },
                    {
                        url: '/learn',
                        cont: '在线学习',
                        color: '#788187'
                    },
                    {
                        url: '/project',
                        cont: '项目广场',
                        color: '#788187'
                    },
                    {
                        url: '/blog',
                        cont: '博客社区',
                        color: '#788187'
                    },
                    {
                        url: '/recruit',
                        cont: '招贤纳士',
                        color: '#788187'
                    }
                ],
                bubblesAttr: {
                    height: 40,
                    width: 70,
                    transformX: 0
                },
                timer: null,
                timer2: null,
                location: null,
                nowLocation: null,
                wordColor: '',
                colorList: ['#60AEF4', '#F45A35', '#a69d26', '#F4A642', '#DD8CFF'],
                width: 1500, // 监控屏幕宽度
                menuIsOpen: false,	// 检测是否打开菜单
            }
        },
        created() {
            for (let i = 0; i < this.headList.length; i++) {
                if (window.location.pathname === this.headList[i].url) {
                    this.location = i
                    this.trans(i)
                }
            }

        },

        mounted() {
            this.width = document.body.clientWidth
            window.onresize = () => {
                console.log(document.body.clientWidth)
                this.width = document.body.clientWidth
            }
        },
        computed: {
            ...mapGetters(['userInfo']),
            activeIndex() {
                return this.$route.name
            }
        },
        watch: {
            menuIsOpen(val) {
                if (val === true) {
                    document.body.addEventListener('mousedown', this.outClickEvent, true)
                } else {
                    document.body.removeEventListener('mousedown', this.outClickEvent, true)
                }
            },
            'document.body.clientWidth': {
                handler(val) {
                    console.log(val)
                },
                immediate: true
            },
        },
        methods: {
            getColor(i) {
                setTimeout(() => {
                    return this.nowLocation === i ? 'white' : '#788187'
                }, 200)
            },

            outClickEvent(e) {
                if (!e.path.includes(this.$refs.menu) && !e.path.includes(this.$refs.menuUi)) {
                    this.menuIsOpen = false
                }
            },

            openMenu() {
                this.menuIsOpen = !this.menuIsOpen

            },

            routerChange(i, flag) {
                this.location = this.nowLocation = i
                if (flag) {
                    this.menuIsOpen = false
                    this.bubblesAttr.transformX = 90 * i
                    for (let j = 0; j < this.headList.length; j++) {
                        this.headList[j].color = '#788187'
                    }
                    this.headList[i].color = 'white'
                }
            },

            goBack() {
                if (this.location !== this.nowLocation) {
                    this.exeBubble(this.nowLocation, this.location)
                    this.nowLocation = this.location
                }
            },
            trans(i, flag) {
                if (i !== this.nowLocation) {
                    let oldLocation = this.nowLocation
                    this.exeBubble(oldLocation, i)
                    this.nowLocation = i
                    if (flag) {
                        this.routerChange(i)
                    }
                }
            },

            exeBubble(oldLocation, newLocation) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (this.timer2) {
                    clearTimeout(this.timer2)
                }
                this.bubblesAttr.width = 20
                this.bubblesAttr.transformX = 90 * (oldLocation + newLocation) / 2
                this.bubblesAttr.height = 20
                for (let j = 0; j < this.headList.length; j++) {
                    this.headList[j].color = '#788187'
                }
                this.timer = setTimeout(() => {
                    this.bubblesAttr.width = 70
                    this.bubblesAttr.transformX = 90 * newLocation
                    this.bubblesAttr.height = 40
                    this.reFreshColor(newLocation)
                }, 200)
            },

            reFreshColor(i) {
                this.timer2 = setTimeout(() => {
                    this.headList[i].color = 'white'
                }, 200)
            },

            /**
             * 用户登录
             */
            login() {
                this.dialogLoginVisible = true
            },

            /**
             * 用户注册
             */
            register() {
                this.dialogRegisterVisible = true
            },

            /**
             * 用户登录确认
             */
            loginConfirm() {
                let loginInfo = this.formLogin
                let formData = {
                    username: loginInfo.username,
                    password: loginInfo.password,
                }
                this.$refs['formLogin'].validate(valid => {
                    if (valid) {
                        this.$store.dispatch('user/Login', formData).then(() => {
                            this.dialogLoginVisible = false
                            Message({
                                message: '登录成功！',
                                type: 'success',
                                duration: 2000
                            })
                        })
                    } else {
                        return false
                    }
                })
            },

            /**
             * 用户注册确认
             */
            registerConfirm() {
                let registerInfo = this.formRegister
                let formData = {
                    username: registerInfo.username,
                    email: registerInfo.email,
                    password1: registerInfo.password,
                    password2: registerInfo.checkPassword,
                }
                this.$refs['formRegister'].validate(valid => {
                    if (valid) {
                        this.$store.dispatch('user/Register', formData).then(() => {
                            this.dialogRegisterVisible = false
                            Message({
                                message: '注册成功！',
                                type: 'success',
                                duration: 2000
                            })
                        })
                    } else {
                        return false
                    }
                })
            },

            /**
             * 用户退出登录
             */
            logout() {
                this.$store.dispatch('user/Logout')
            }
        },

        // 关闭监控事件
        destroyed() {
            console.log('ok')
            window.onresize = null
        }
    }
</script>

<style lang="less" scoped>
	.main {
		width: 100vw;
	}

	.block {
		z-index: 10;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .3);
	}

	.selected-block {
		transition: 0.2s;
		z-index: 21;
		margin: auto 0 auto 100px;
		border-radius: 12px;
	}

	.head {
		z-index: 20;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 60px;
		background-color: white;
		display: flex;
		justify-content: space-between;

		.menu-ui {
			box-sizing: border-box;
			width: 40px;
			height: 40px;
			margin: auto 20px;
			background-image: url("../../assets/images/top-menu.png");
			background-size: 22px 22px;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			border-radius: 30px;
		}

		.menu-cont {
			z-index: 90;
			transition: 0.4s;
			position: absolute;
			top: 60px;
			left: 0;
			width: 50vw;
			height: 100vh;
			max-width: 400px;
			background-color: #6f6f6f;
			box-sizing: border-box;
			padding: 20px 20px 0 10px;
			transform: translateX(-50vw);
			min-width: 150px;

			.menu-leap {
				border-radius: 15px;
				width: 100%;
				box-sizing: border-box;
				padding: 14px 10px;
				height: 50px;
				color: #d8d8d8;
				font-size: 1em;
				border-bottom: 3px solid #4a4a4a;
				border-left: 3px solid #4a4a4a;
			}
		}

		.head-left {
			position: absolute;
			left: 0;
			display: flex;
			justify-content: left;

			.head-logo {
				position: relative;
				z-index: 22;
				width: 50px;
				height: 50px;
				border-radius: 20px;
				margin: auto 20px;
				background-image: url("/static/images/MatrixLogo_50.jpg");
				background-size: 50px 50px;
				cursor: pointer;
			}

			.head-left-menu {
				position: relative;
				z-index: 22;
				cursor: pointer;
				font-size: 14px;
				color: #788187;
				border-radius: 10px;
				padding: 10px 0;
				text-align: center;
				box-sizing: border-box;
				width: 90px;
				height: 40px;
				margin: 10px 0 0 0;
			}
		}

		.head-right {
			width: auto;
			height: auto;
			margin: auto 30px auto 10px;
		}
	}
</style>
