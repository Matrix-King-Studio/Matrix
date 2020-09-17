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
		<div class="head" :class="{'blur-style': dialogIsOpen && screenWidth < 700}" v-else>
			<div class="menu-ui" @mousedown="openMenu" ref="menuUi"
				 :style="{border: `${menuIsOpen ? '3px solid #45CDC6' : '3px solid white'}`}"></div>
			<div class="login-ui">
				<div class="login" @mousedown="login">登录</div>
				<div class="login" @mousedown="register">注册</div>
			</div>
			<div class="menu-cont" ref="menu" :style="{transform: `translateX(${menuIsOpen ? 0 : -50}vw)`}">
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
			:visible.sync="dialogLoginVisible"
			:modal-append-to-body="false"
			v-if="screenWidth>=700"
		>
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
			:visible.sync="dialogRegisterVisible "
			:modal-append-to-body="false"
			v-if="screenWidth>=700">
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
		<!--		移动端登录 -->
		<div class="login-mobile" v-if="screenWidth<700 && dialogLoginVisible">
			<h1>登录</h1>
			<div class="user-name" :style="{transition: loginAttrs[0].transition, transform: loginAttrs[0].transform}">
				<p>用户名：</p>
				<input v-model="formLogin.username" class="user-name-input " :class="{animation: errPlace === 0}" type="text" placeholder="请输入用户名"/>
			</div>
			<div class="warning-info a">{{ warningCont }}提示信息</div>
			<div class="user-name" :style="{transition: loginAttrs[1].transition, transform: loginAttrs[1].transform}">
				<p>密码：</p>
				<input v-model="formLogin.password" class="user-name-input" type="password" placeholder="请输入密码"/>
			</div>
			<div class="warning-info b">{{ warningCont }}提示信息</div>
			<div class="login-footer">
				<div class="check-btn" @click="loginMobile">登录</div>
				<div class="check-btn" @click="dialogLoginVisible = false">取消</div>
			</div>

		</div>

		<div class="login-mobile" v-if="screenWidth<700 && dialogRegisterVisible">
			<h1>注册</h1>
			<div class="user-name" :style="{transition: loginAttrs[2].transition, transform: loginAttrs[2].transform}">
				<p>用户名：</p>
				<input class="user-name-input" type="text" placeholder="请输入用户名"/>
			</div>
			<div class="user-name" :style="{transition: loginAttrs[3].transition, transform: loginAttrs[3].transform}">
				<p>邮箱：</p>
				<input class="user-name-input" type="email" placeholder="请输入邮箱"/>
			</div>
			<div class="user-name" :style="{transition: loginAttrs[4].transition, transform: loginAttrs[4].transform}">
				<p>密码：</p>
				<input class="user-name-input" type="password" placeholder="请输入密码"/>
			</div>
			<div class="user-name" :style="{transition: loginAttrs[5].transition, transform: loginAttrs[5].transform}">
				<p>确认密码：</p>
				<input class="user-name-input" type="password" placeholder="请确认密码"/>
			</div>
			<div class="login-footer">
				<div class="check-btn" @click="registerConfirm">注册</div>
				<div class="check-btn" @click="dialogRegisterVisible = false">取消</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { Message } from 'element-ui'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header',
        props: ['screenWidth'],
        computed: {
            ...mapGetters(['userInfo', 'dialogIsOpen']),
            activeIndex() {
                return this.$route.name
            }
        },
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
                timer3: [null, null, null, null],	// 给手机端登录特效添加的计时器
                location: null,
                nowLocation: null,
                wordColor: '',
                colorList: ['#60AEF4', '#F45A35', '#a69d26', '#F4A642', '#DD8CFF'],
                width: 1500, // 监控屏幕宽度
                menuIsOpen: false,	// 检测是否打开菜单
                loginAttrs: [
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    },
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    },
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    },
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    },
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    },
                    {
                        transition: '0s',
                        transform: 'rotate3d(1, 1, 0, 90deg)'
                    }
                ],
				warningCont: '',	// 输入信息非法的提示信息
				errPlace: 0			// 定位到发生错误的地方
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
                this.width = document.body.clientWidth
            }
        },

        watch: {
            menuIsOpen(val) {
                if (val === true) {
                    document.body.addEventListener('mousedown', this.outClickEvent, true)
                } else {
                    document.body.removeEventListener('mousedown', this.outClickEvent, true)
                }
                if (this.timer2) {
                    clearTimeout(this.timer2)
                }
                this.$refs.menu.style.transition = '0.4s'
                this.timer2 = setTimeout(() => {
                    this.$refs.menu.style.transition = '0s'
                }, 400)
            },
            dialogLoginVisible(val) {
                this.$store.commit('app/SET_DIALOGISOPEN', val)
                if (!val) {
                    this.loginAttrs[0].transform = 'rotate3d(1, 1, 0, 90deg)'
                    this.loginAttrs[1].transform = 'rotate3d(1, 1, 0, 90deg)'
                    this.recover(0, 1)
                }

            },

            dialogRegisterVisible(val) {
                this.$store.commit('app/SET_DIALOGISOPEN', val)
                if (!val) {
                    for (let i = 0; i < 4; i++) {
                        this.loginAttrs[i + 2].transform = 'rotate3d(1, 1, 0, 90deg)'
                    }
                    this.recover(2, 5)
                }
            },

            dialogIsOpen: {
                handler(val) {
                    // console.log(val)
                },
                immediate: true
            }
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
                this.$store.commit('app/SET_DIALOGISOPEN', true)
                this.dialogLoginVisible = true
                if (this.screenWidth < 700) {
                    this.startAnimation(0, 1)
                } else {
                    this.loginAttrs[0].transform = 'rotate3d(0, 0, 0, 90deg)'
                    this.loginAttrs[1].transform = 'rotate3d(0, 0, 0, 90deg)'
                }
            },

            /**
             * 用户注册
             */
            register() {
                this.$store.commit('app/SET_DIALOGISOPEN', true)
                this.dialogRegisterVisible = true
                if (this.screenWidth < 700) {
                    this.startAnimation(2, 5)
                } else {
                    for (let i = 0; i < 4; i++) {
                        this.loginAttrs[i + 2].transform = 'rotate3d(0, 0, 0, 90deg)'
                    }
                }
            },

            startAnimation(start, end) {
                for (let i = start; i <= end; i++) {
                    this.loginAttrs[i].transition = '0.5s'
                    setTimeout(() => {
                        this.timer3[i - start] = setTimeout(() => {
                            this.loginAttrs[i].transform = 'rotate3d(0, 0, 0, 90deg)'
                            setTimeout(() => {
                                this.loginAttrs[i].transition = '0s'
                            }, 500)
                        }, 500 * (i - start + 1))
                    }, 0)

                }
            },

            // 针对移动端的在登录注册动画未结束的时候的提前退出
            recover(start, end) {
                for (let i = start; i < end; i++) {
                    this.loginAttrs[i].transition = '0s'
                }

                for (let i = 0; i < this.timer3.length; i++) {
                    if (this.timer3[i]) {
                        clearTimeout(this.timer3[i])
                    }

                }
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

			// 手机端的登录验证
            loginMobile() {
                if (!this.formLogin.username) {

                    return false
                } else if (!this.formLogin.username.replace(/\s/g, '')) {

                    return false
                } else if (!this.formLogin.password) {

                    return false
				} else {
                    return true
				}
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
            },

			doErrAnimation() {

			}
        },

        // 关闭监控事件
        beforeDestroy() {

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

		.login-ui {
			display: flex;
			justify-content: right;

			.login {
				font-size: 14px;
				border-radius: 10px;
				box-sizing: border-box;
				padding: 7px 21px;
				border: 2px solid #1a1a1a;
				margin: auto 10px;
				width: 75px;
				height: 37px;
				cursor: pointer;
				transition: 0.4s;
			}

			.login:nth-child(2) {
				margin-right: 25px;
			}

			.login:hover {
				color: #eeeeee;
				background-color: #386fea;
			}
		}

		.menu-ui {
			cursor: pointer;
			transition: 0.4s;
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
			transition: 0s;
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
			/*min-width: 150px;*/

			.menu-leap {
				margin: 3px 0;
				cursor: pointer;
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

	.login-mobile {
		overflow-y: auto;
		box-sizing: border-box;
		padding: 20vw 8vw 10vw 8vw;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 20;
		text-align: center;

		.warning-info {
			margin-left: 26vw;
			text-align: left;
			height: 4vw;
			font-size: 3vw;
			color: #ff8582;
		}

		.login-footer {
			width: 70vw;
			box-sizing: border-box;
			padding: 0;
			margin: 5vw auto;
			display: flex;
			justify-content: space-between;

			.check-btn {
				font-size: 2.8vw;
				cursor: pointer;
				width: 25vw;
				padding: 2.5vw 0;
				background-color: white;
				border-radius: 3vw;
			}
		}

		h1 {
			margin-bottom: 9vw;
			font-size: 5vw;
			color: white;
		}

		.user-name {
			transform: rotate3d(1, 1, 0, 90deg);
			/*transition: 0.5s;*/
			width: 75vw;
			margin: 3vw auto;
			display: flex;
			justify-content: right;

			.user-name-input {
				height: auto;
				font-size: 3vw;
				box-sizing: border-box;
				/*border: 3px solid #6b95ea;*/
				padding: 2vw 3vw;
				border-radius: 2.5vw;
				width: 50vw;
				outline: none;
				background: #fff;
				border: none;
			}

			p {
				text-align: right;
				width: 20vw;
				font-size: 4vw;
				margin: auto 0;
				color: white;
			}
		}


	}

	.blur-style {
		-webkit-filter: blur(3px); /* Chrome, Opera */
		-moz-filter: blur(3px);
		-ms-filter: blur(3px);
		filter: blur(3px);
	}

	.animation {
		animation: errAnime 0.5s infinite;
	}

	@keyframes errAnime {
		0% {
			transform: rotate3d(0, 0, 1, -2.5deg);
		}
		25% {
			transform: rotate3d(0, 0, 1, 2.5deg);
		}
		50% {
			transform: rotate3d(0, 0, 1, -2.5deg);
		}
		75% {
			transform: rotate3d(0, 0, 1, 2.5deg);
		}
	}
</style>
