<template>
	<div>
		<div class="block"></div>
		<div class="dialog-body">
			<div class="head">
				<h3>提交</h3>
				<div class="exit" @click="doCancel">×</div>
			</div>
			<div class="body">
				<div class="list">
					<label>文章标题:</label>
					<p>
						{{ article.title }}</p>
				</div>
				<div class="list">
					<label>文章专栏:</label>
					<el-select v-model="article.kind" placeholder="请选择" style="margin-left: 10px; margin-top: -5px">
						<el-option
							v-for="item in articleKind"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="list">
					<label>文章概述:</label>
					<el-input
						style="width: 300px;margin-left: 10px; margin-top: -5px"
						type="textarea"
						maxlength="50"
						rows="4"
						resize="none"
						show-word-limit
						placeholder="请输入内容"
						v-model="article.description">
					</el-input>
				</div>
				<div class="list">
					<label>文章类别:</label>
					<el-select v-model="article.type" placeholder="请选择" style="margin-left: 10px; margin-top: -5px">
						<el-option
							v-for="item in articleType"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="remind">{{article.type === '转载' ? '提示：请在转载时添加源文章出处' : ''}}</div>
			</div>
			<div class="foot">
				<button class="foot-btn a" @click="doCancel">取消</button>
				<button class="foot-btn b" @click="doPublish">提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	import eventBus from '../../../utils/eventBus'

    export default {
        name: 'subDialog',
		props: ['title'],
        data() {
            return {
                articleKind: [{
                    value: '前端',
                    label: '前端'
                }, {
                    value: '后端',
                    label: '后端'
                }, {
                    value: 'AI',
                    label: 'AI'
                }, {
                    value: '算法',
                    label: '算法'
                }, {
                    value: '杂谈',
                    label: '杂谈'
                }],

                articleType: [
                    {
                        value: '原创',
                        label: '原创'
                    },
                    {
                        value: '转载',
                        label: '转载'
                    },
                    {
                        value: '翻译',
                        label: '翻译'
                    }
                ],

                article: {
                    kind: '',
                    cont: '',
                    title: this.title,
                    type: '',
                    description: ''
                }
            }
        },
		methods: {
            doCancel() {
                this.$parent.doDialog(false)
			},
			doPublish() {
                eventBus.$emit('handleSave', this.article)
			}
		},
		created() {

        }
    }
</script>

<style scoped>
	button {
		background-color: white;
		border: none;

	}

	button:focus {
		outline: none;
	}
</style>

<style lang="less" scoped>


	.block {
		left: 0;
		top: 0;
		z-index: 10;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background-color: rgba(0, 0, 0, .4);
	}

	.dialog-body {
		left: 50%;
		top: 45%;
		z-index: 11;
		width: 600px;
		height: auto;
		position: fixed;
		background-color: white;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		padding: 15px 20px;

		.head {
			display: flex;
			justify-content: space-between;

			.exit {
				margin-top: -10px;
				font-size: 30px;
				cursor: pointer;
			}
		}

		.body {
			width: 500px;
			height: auto;
			margin: 50px auto;

			.list {
				margin: 24px 0;
				width: inherit;
				display: flex;
				justify-content: left;
			}

			p {
				color: #858585;
				margin-left: 10px;
				width: 370px;
				height: 70px;
				line-height: 23px;
				display: -webkit-box;
				-webkit-box-orient: vertical; /* 如果浏览器内核不是WebKit的话就无法支持该方法 */
				-webkit-line-clamp: 3; /* 希望三行后溢出显示省略号 */
				overflow: hidden;
			}

			label {
				color: #516685;
				font-size: 18px;
				font-weight: 900;
			}

			.remind {
				font-size: 14px;
				height: 25px;
				color: #e24035;
				line-height: 10px;
				margin-top: -5px;
				margin-left: 90px;
			}
		}

		.foot {
			margin: -10px auto 10px auto;
			width: 400px;
			display: flex;
			justify-content: space-between;

			.foot-btn {
				border-radius: 10px;
				padding: 9px 27px;
				font-size: 15px;
				cursor: pointer;
				font-weight: 900;
				user-select: none;
				transition: 0.4s;
			}

			.a {
				color: #4f669e;
				border: 1px solid #4f669e;
			}

			.b {
				color: #c85753;
				border: 1px solid #c85753;
			}

			.a:hover {
				background-color: #4f669e;
				color: white;
			}

			.b:hover {
				background-color: #c85753;
				color: white;
			}
		}
	}
</style>