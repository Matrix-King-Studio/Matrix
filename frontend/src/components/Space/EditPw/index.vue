<template>
	<div>
		<div class="main">
			<h2>修改密码</h2>
			<div class="cont">
				<label>原密码：</label>
				<el-input v-model="password" placeholder="请输入内容" type="password"
						  style="border: 1px solid rgba(222, 96, 96, 0);width: 300px"
						  :class="[errPlace === 1 ? 'shake' : '']"></el-input>
			</div>
			<div class="cont">
				<label>新密码：</label>
				<el-input v-model="newPassword" placeholder="请输入内容" type="password"
						  style="border: 1px solid rgba(222, 96, 96, 0);width: 300px"
						  :class="[errPlace === 2 ? 'shake' : '']"></el-input>
			</div>
			<div class="cont">
				<label>确认密码：</label>
				<el-input v-model="confirmNewPassword" placeholder="请输入内容" type="password"
						  style="border: 1px solid rgba(222, 96, 96, 0);width: 300px"
						  :class="[errPlace === 3 ? 'shake' : '']"></el-input>
			</div>
			<button class="sub-btn" @click="subPw">确认提交</button>
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'EditPw',
        computed: {
            ...mapGetters(['clickStatus'])
        },
        data() {
            return {
                password: '',
                newPassword: '',
                confirmNewPassword: '',
                errPlace: 0
            }
        },
        methods: {
            subPw() {
                let _this = this

                function errRemind(text, i) {
                    _this.$message({
                        type: 'error',
                        message: text,
                        duration: 1500
                    })
                    setTimeout(() => {
                        _this.$store.commit('app/SET_CLICKSTATUS', true)
                    }, 2000)
                    _this.errPlace = i
                    setTimeout(() => {
                        _this.errPlace = 0
                    }, 1000)
                }

                if (this.clickStatus) {
                    this.$store.commit('app/SET_CLICKSTATUS', false)
                    if (!this.password) {
                        errRemind('请输入原密码', 1)
                        return
                    }

                    if (!this.newPassword) {
                        errRemind('请输入新密码', 2)
                        return
                    } else if (this.newPassword.length < 8 || this.newPassword.length > 20) {
                        errRemind('密码位数不正确(应大于8位并小于20位)', 2)
                        return
                    } else if (/^[0-9]+$/.test(this.newPassword)) {
                        errRemind('密码不能只包含数字', 2)
                        return
                    }

                    if (this.newPassword !== this.confirmNewPassword) {
                        errRemind('密码验证不通过', 3)
                        return
                    }

                    let pwData = {}
                    this.$store.commit('app/SET_CLICKSTATUS', true)
                    console.log('ok')
                }
            }
        }
    }
</script>

<style scoped>
	button:focus {
		border: none;
		outline: 2px solid #a6b3f6;
	}
</style>

<style scoped lang="less" type="text/less">
	.main {
		margin: 0 auto;
		width: 400px;
		text-align: center;

		h2 {
			margin: 20px auto;
		}

		.cont {
			margin: 30px 0;
			display: flex;
			justify-content: space-between;

			label {
				width: 100px;
				margin: auto 0;
			}
		}

		.sub-btn {
			font-size: 16px;
			padding: 9px 20px;
			border-radius: 9px;
			border: 1px solid #65b4f6;
			cursor: pointer;
			background-color: white;
			transition: 0.4s;
		}

		.sub-btn:hover {
			background-color: #65b4f6;
			color: white;
		}
	}

	.shake {
		animation: warnShake infinite 0.5s;
	}

	@keyframes warnShake {
		0% {
			border: 1px solid rgba(222, 96, 96, 0.17);
			transform: rotate3d(0, 0, 1, 0);
		}
		25% {
			border: 1px solid rgba(221, 97, 97, 0.64);
			transform: rotate3d(0, 0, 1, 2.5deg);
		}
		50% {
			border: 1px solid #dd6161;
			transform: rotate3d(0, 0, 1, -2.5deg);
		}
		75% {
			border: 1px solid rgba(222, 96, 96, 0.17);
			transform: rotate3d(0, 0, 1, 2.5deg);
		}
		100% {
			border: 1px solid rgba(221, 97, 97, 0.01);
			transform: rotate3d(0, 0, 1, 0);
		}
	}
</style>