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
			<el-menu-item index="4">
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
					{{ user.username }}
				</template>
				<el-menu-item index="8-1">公告</el-menu-item>
				<el-menu-item index="8-2">个人中心</el-menu-item>
				<el-menu-item index="8-3" @click="logout()">退出登录</el-menu-item>
			</el-submenu>
		</el-menu>
		<el-dialog
			title="登录"
			:visible.sync="dialogLoginVisible">
			<el-form :model="formLogin"
					 :rules="rules" ref="formLogin">
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
			:visible.sync="dialogRegisterVisible">
			  <span slot="footer" class="dialog-footer">
				<el-button @click="dialogRegisterVisible = false">取 消</el-button>
				<el-button type="primary" @click="registerConfirm">确 定</el-button>
			  </span>
		</el-dialog>
	</div>
</template>

<script>
    import { Message } from 'element-ui'

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

            let checkPassword = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('密码不能为空！'))
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
                rules: {
                    username: [{ validator: checkUserName, trigger: 'change' }],
                    password: [{ validator: checkPassword, trigger: 'change' }],
                },
                user: {
                    username: 'Alex',
                }
            }
        },
        computed: {
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
                let user = this.formLogin
                let formData = {
                    username: user.username,
                    password: user.password,
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
                        this.$message.error('还有没有填写的表单，请检查!')
                        return false
                    }
                })
            },

            /**
             * 用户注册确认
             */
            registerConfirm() {
                this.dialogRegisterVisible = false
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
