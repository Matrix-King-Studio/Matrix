<template>
	<div class="information"
		 :class="screenWidth > 1400 ? 'information-big' : screenWidth >= 700 ? 'information-small' : 'information-mini'">
		<div class="info-computer" v-if="screenWidth >= 700">
			<h2>个人信息，一定要好好保管嚛</h2>
			<div :class="[screenWidth >1400 ? 'inner-information' : 'inner-information-mobile']">
				<div class="info-left">
					<div class="cont">
						<label>用户ID:</label>
						<el-input
							v-if="editMode"
							v-model="editSelfInfo.userId"
							:disabled="true"
							style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);">
						</el-input>
						<p v-else>{{ selfInfo.userId }}</p>
						<span v-if="editMode">*妥善保存，不可修改</span>
					</div>
					<div class="cont">
						<label>昵称:</label>
						<el-input
							v-if="editMode"
							:class="[errPlace === 1 ? 'shake' : '']"
							:disabled="true"
							v-model="editSelfInfo.nick"
							style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);">
						</el-input>
						<p v-else>{{ selfInfo.nick }}</p>
						<span v-if="editMode">*妥善保存，不可修改</span>
					</div>
					<div class="cont">
						<label>学号:</label>
						<el-input
							v-if="editMode"
							placeholder="请输入内容"
							:class="[errPlace === 2 ? 'shake' : '']"
							v-model="editSelfInfo.studentNumber"
							style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);">
						</el-input>
						<p v-else>{{ selfInfo.studentNumber }}</p>
						<span v-if="editMode">*必填</span>
					</div>
					<div class="cont">
						<label>真实姓名:</label>
						<el-input
							v-if="editMode"
							placeholder="请输入内容"
							:class="[errPlace === 3 ? 'shake' : '']"
							v-model="editSelfInfo.username"
							style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);">
						</el-input>
						<p v-else>{{ selfInfo.username }}</p>
						<span v-if="editMode">*必填</span>
					</div>
					<div class="cont">
						<label>学校:</label>
						<el-input
							v-if="editMode"
							placeholder="请输入内容"
							:class="[errPlace === 4 ? 'shake' : '']"
							v-model="editSelfInfo.school"
							style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);">
						</el-input>
						<p v-else>{{ selfInfo.school }}</p>
						<span v-if="editMode">*必填</span>
					</div>

					<div class="cont">
						<label>性别:</label>
						<el-select v-if="editMode"
								   v-model="editSelfInfo.sexual"
								   placeholder="请选择"
								   style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);"
								   :class="[errPlace === 5 ? 'shake' : '']">
							<el-option
								label="男"
								value="男">
							</el-option>
							<el-option
								label="女"
								value="女">
							</el-option>
							<el-option
								label="保密"
								value="保密">
							</el-option>
						</el-select>
						<p v-else>{{ selfInfo.sexual }}</p>
						<span v-if="editMode"></span>
					</div>
					<div class="cont">
						<label>部门:</label>
						<el-select v-if="editMode" v-model="editSelfInfo.department" placeholder="请选择"
								   style="width: 300px; border: 1px solid rgba(222, 96, 96, 0);"
								   :class="[errPlace === 6 ? 'shake' : '']">
							<el-option
								label="前端组"
								value="前端组">
							</el-option>
							<el-option
								label="后端组"
								value="后端组">
							</el-option>
							<el-option
								label="AI组"
								value="AI组">
							</el-option>
							<el-option
								label="算法组"
								value="算法组">
							</el-option>
						</el-select>
						<p v-else>{{ selfInfo.department }}</p>
						<span v-if="editMode"></span>
					</div>
				</div>
				<div class="info-right" style="text-align: left">
					<label>个性签名:</label>
					<el-input
						v-if="editMode"
						style="border: 1px solid rgba(222, 96, 96, 0);"
						:style="{width: screenWidth >= 1400 ? '500px' : '300px'}"
						type="textarea"
						maxlength="200"
						rows="13"
						resize="none"
						show-word-limit
						placeholder="请输入内容"
						v-model="editSelfInfo.signature">
					</el-input>
					<p v-else>{{ selfInfo.signature ? selfInfo.signature : '这个人很懒，他什么也没有留下' }}</p>
					<span v-if="editMode"></span>
				</div>
			</div>
			<div class="options">
				<button class="btn back" v-if="editMode" @click="goEditMode(false)">算了</button>
				<button class="btn submit" v-if="editMode" @click="confirmSub">提交</button>
				<button class="btn back" v-if="!editMode" @click="goEditMode(true)">编辑</button>
			</div>
		</div>
		<div class="info-mobile" v-else>
			<h3>个人信息，一定要好好保管嚛</h3>
			<div class="cont">
				<label>用户id</label>
				<input class="input-cont" v-model="editSelfInfo.userId" disabled/>
			</div>
			<div class="cont">
				<label>昵称</label>
				<input class="input-cont" v-model="editSelfInfo.nick" disabled/>
			</div>
			<div class="cont">
				<label>学号</label>
				<input class="input-cont" v-model="editSelfInfo.studentNumber" placeholder="请输入学号"/>
			</div>
			<div class="cont">
				<label>真实姓名</label>
				<input class="input-cont" v-model="editSelfInfo.username" placeholder="请输入真实姓名"/>
			</div>
			<div class="cont">
				<label>学校</label>
				<input class="input-cont" v-model="editSelfInfo.school" placeholder="请输入真实姓名"/>
			</div>
			<div class="cont">
				<label>性别</label>
				<p class="input-cont">请选择性别</p>
				<p>></p>
			</div>
			<div class="cont">
				<label>部门</label>
				<input class="input-cont" v-model="editSelfInfo.department" placeholder="请选择所在部门"/>
			</div>
			<div class="cont">
				<label>个性签名</label>
				<textarea class="input-cont" v-model="editSelfInfo.signature" placeholder="请遵守互联网文明用语"
						  maxlength="200"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import userApi from '../../../api/user'

    export default {
        name: 'Info',
        props: ['screenWidth'],
        computed: {
            ...mapGetters(['userId', 'username', 'clickStatus'])
        },
        data() {
            return {
                selfInfo: {
                    userId: localStorage.getItem('userId'),
                    studentNumber: '',
                    nick: localStorage.getItem('username'),
                    sexual: '',
                    department: '',
                    signature: '',
                    username: '',
                    school: ''
                },
                editSelfInfo: {
                    userId: '',
                    studentNumber: '',
                    nick: '',
                    sexual: '',
                    department: '',
                    signature: '',
                    username: '',
                    school: ''
                },
                editMode: false,
                remindMessage: null,
                errPlace: 0,
                timer: null
            }
        },
        created() {
            for (let attr in this.selfInfo) {
                if (this.selfInfo.hasOwnProperty(attr)) {
                    this.editSelfInfo[attr] = this.selfInfo[attr]
                }
            }
        },
        methods: {
            goEditMode(flag) {
                this.editMode = flag
                if (flag) {

                }
            },

            confirmSub() {
                let _this = this

                function warning(text, i) {
                    if (_this.timer) {
                        clearTimeout(_this.timer)
                    }
                    _this.errPlace = i
                    _this.timer = setTimeout(() => {
                        _this.errPlace = 0
                    }, 1000)
                    _this.remindMessage = _this.$message({
                        type: 'error',
                        message: text,
                        duration: 1500
                    })
                    setTimeout(() => {
                        _this.$store.commit('app/SET_CLICKSTATUS', true)
                    }, 2000)
                }

                function isSame() {
                    for (let i in _this.selfInfo) {
                        if (_this.selfInfo.hasOwnProperty(i)) {
                            if (_this.selfInfo[i] !== _this.editSelfInfo[i]) {
                                return false
                            }
                        }
                    }
                    return true
                }

                if (this.clickStatus) {
                    this.$store.commit('app/SET_CLICKSTATUS', false)

                    // 检查信息
                    // if (st)
                    // TODO:更新验证规则

                    if (isSame()) {
                        this.$store.commit('app/SET_CLICKSTATUS', true)
                        this.editMode = false
                        return
                    }

                    // if (!this.editSelfInfo.nick) {
                    //     warning('请输入昵称', 1)
                    //     return
                    // } else if (/\s/g.test(this.editSelfInfo.nick)) {
                    //     warning('请正确输入昵称（不准输入空格）', 1)
                    //     return
                    // } else if (this.editSelfInfo.nick.length >= 10) {
                    //     warning('昵称不可过长（最大10位）', 1)
                    //     return
                    // }

                    if (this.editSelfInfo.studentNumber) {
                        if (!/^[0-9]*$/g.test(this.editSelfInfo.studentNumber)) {
                            warning('学号只可输入数字哦！', 2)
                            return
                        } else if (this.editSelfInfo.studentNumber.length >= 18) {
                            warning('学号过长，请重试（最长18位）', 2)
                            return
                        }
                    }

                    if (!this.editSelfInfo.username) {
                        warning('请输入真实姓名', 3)
                        return
                    } else if (/\s/g.test(this.editSelfInfo.username)) {
                        warning('请正确输入姓名哦！（不可输入空格）', 3)
                        return
                    } else if (!/^[\u4e00-\u9fa5]+$/.test(this.editSelfInfo.username)) {
                        warning('请正确输入姓名哦！（不可输入非汉字）', 3)
                        return
                    } else if (this.editSelfInfo.username.length > 4) {
                        warning('请正确输入姓名哦！（不可超过四个字）', 3)
                        return
                    }

                    this.remindMessage = this.$message({
                        message: '提交信息中，请稍后...',
                        duration: 0
                    })
                    userApi.setSelfInfo({
                        id: this.userId,
                        studentnumber: this.editSelfInfo.studentNumber,
                        studentname: this.editSelfInfo.username,
                        nickname: this.editSelfInfo.nick
                    }).then(() => {
                        this.remindMessage.close()
                        this.remindMessage = this.$message({
                            type: 'success',
                            message: '提交成功',
                            duration: 1500
                        })
                        this.editMode = false
                        for (let attr in this.editSelfInfo) {
                            if (this.editSelfInfo.hasOwnProperty(attr)) {
                                this.selfInfo[attr] = this.editSelfInfo[attr]
                            }
                        }
                        this.$store.commit('app/SET_CLICKSTATUS', true)
                    }).catch(() => {
                        this.remindMessage.close()
                        this.remindMessage = this.$message({
                            type: 'error',
                            message: '提交失败，请检查网络情况',
                            duration: 1500
                        })
                        setTimeout(() => {
                            this.$store.commit('app/SET_CLICKSTATUS', true)
                        }, 2000)
                    })
                }

            }
        },
        mounted() {
            // 接口ok
            userApi.getSelfInfo({ id: this.userId }).then(res => {
                let data = res.data.data
                console.log(data)
                // 待更新！
                this.selfInfo.nick = data.nickname
                this.selfInfo.studentNumber = data.studentnumber
                this.selfInfo.username = data.studentname

            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
	.el-input__inner {
		box-sizing: border-box;
	}
</style>

<style lang="less" type="text/less" scoped>
	.info-computer {
		background-color: white;
	}

	.information-mini {
		width: 90%;
		margin: 0 auto;
	}

	.information-small {
		/*width: 580px;*/
		margin: 0 auto;
	}

	.information-big {
		width: 100%;
	}

	.info-mobile {
		width: 100%;
		text-align: left;

		h3 {
			font-size: 4.9vw;
			margin-bottom: 20px;
		}

		.cont {
			box-sizing: border-box;
			margin: 0 0 10px 0;
			padding: 5px 0 13px 0;
			width: inherit;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #d5d5d5;

			p {
				line-height: 15px;
				text-align: right;
			}

			.input-cont {
				font-size: 15px;
				color: #4b4b4b;

				border: none;
				transition: 0.2s;
				border-radius: 7px;
				padding: 9px 9px;
				margin: auto 0;
				width: calc(100% - 100px);
			}

			input {
				text-align: right;
			}

			input[disabled] {
				color: #7e7e7e;
				background-color: #f3f3f3;
			}

			::-webkit-input-placeholder { /* WebKit browsers */
				color: #c5c5c5;
			}

			:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
				color: #c5c5c5;
			}

			::-moz-placeholder { /* Mozilla Firefox 19+ */
				color: #c5c5c5;
			}

			:-ms-input-placeholder { /* Internet Explorer 10+ */
				color: #c5c5c5;
			}

			input:focus, textarea:focus {
				border: none;
				outline: none;
				box-shadow: 0 0 4px #8993ff;
			}

			textarea {
				text-align: left;
				resize: none;
			}

		}
	}

	.information {
		/*margin: 0 auto;*/
		text-align: center;

		h2 {
			margin: 20px auto;
		}

		.options {
			display: flex;
			justify-content: center;
			width: 500px;
			height: auto;
			margin: 0 auto 20px auto;

			.btn {
				margin: 10px 50px;
				background-color: white;
				border-radius: 8px;
				padding: 7px 25px;
				cursor: pointer;
				user-select: none;
			}

			.back {
				color: #2c76b5;
				border: 2px solid #2c76b5;
			}

			.submit {
				color: #bc72ea;
				border: 2px solid #bc72ea;
			}

			.btn:focus {
				outline: #6b95ea;
				background-color: rgba(175, 234, 205, 0.33);
			}
		}

		.inner-information {
			display: flex;
			justify-content: center;
			width: auto;
			margin: 50px 0;
		}

		.inner-information-mobile {
			margin: 0 auto;
			width: 90vw;
		}

		/*   方便切换，就不放在这里面了 */

		.info-left {
			width: auto;
			/*margin: 0 auto;*/

			span {
				display: block;
				margin: auto 10px;
				color: #c64c48;
				font-size: 13px;
			}

			.cont {
				margin: 15px 0;
				width: 100%;
				display: flex;
				justify-content: left;

				p {
					color: #313131;
					line-height: 25px;
					margin: auto 0;
				}

				label {
					line-height: 39px;
				}
			}

			label {
				width: 100px;
				text-align: right;
				font-size: 22px;
				margin: auto 10px;
			}

		}

		.info-right {
			padding: 10px 0;
			display: flex;
			justify-content: left;
			width: 580px;
			margin-left: 20px;

			label {
				width: 100px;
				font-size: 22px;
			}

			p {
				margin-top: 3px;
				word-break: break-all;
				line-height: 24px;
				width: 300px;
				color: #313131;
			}
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