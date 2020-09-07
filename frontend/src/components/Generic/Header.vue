<template>
	<div>
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			style="position: fixed; width: 100%; z-index: 1000">
			<el-menu-item index="0">
				<router-link :to="{ name:'HelloWorld' }">
					<img src="/static/images/MatrixLogo_50.jpg" alt="MatrixLogo">
				</router-link>
			</el-menu-item>
			<el-menu-item index="HelloWorld">
				<router-link :to="{ name:'HelloWorld' }">
					主页
				</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link :to="{ name:'Learn' }">
					在线学习
				</router-link>
			</el-menu-item>
			<el-menu-item index="Project">
				<router-link :to="{ name:'Project' }">
					项目广场
				</router-link>
			</el-menu-item>
			<el-menu-item index="Blog">
				<router-link :to="{ name:'Blog' }">
					博客社区
				</router-link>
			</el-menu-item>
			<!--		<el-menu-item index="5">资源项目</el-menu-item>-->
			<!--		<el-menu-item index="6">智能题库</el-menu-item>-->
			<el-menu-item index="Recruit">
				<router-link :to="{ name:'Recruit' }">
					招贤纳士
				</router-link>
			</el-menu-item>
<!--			<el-menu-item index="Shop">-->
<!--				<router-link :to="{ name:'Shop' }">-->
<!--					Matrix小店-->
<!--				</router-link>-->
<!--			</el-menu-item>-->
			<el-menu-item
				index="Register"
				style="float: right"
				v-if="!$store.state.user.token">
				<el-button
					size="mini"
					plain
					type="success"
					@click="register">
					注册
				</el-button>
			</el-menu-item>
			<el-menu-item
				index="Login"
				style="float: right"
				v-if="!$store.state.user.token">
				<el-button
					size="mini"
					plain
					type="primary"
					@click="login">
					登录
				</el-button>
			</el-menu-item>
			<el-submenu index="8" style="float: right" v-else>
				<template slot="title">
					{{ userInfo.username }}
				</template>
				<el-menu-item index="8-1">公告</el-menu-item>
				<el-menu-item index="8-2">个人中心</el-menu-item>
				<el-menu-item index="8-3" @click="logout()">退出登录</el-menu-item>
			</el-submenu>
		</el-menu>
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
                }
            }
        },
        computed: {
            ...mapGetters(['userInfo']),
            activeIndex() {
                return this.$route.name
            }
        },
        methods: {
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
        }
    }
</script>

<style scoped>

</style>
