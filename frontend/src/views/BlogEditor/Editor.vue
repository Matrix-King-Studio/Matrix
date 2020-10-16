<template>
	<div style="background-color: rgb(240, 240, 240); min-width: 1300px">
		<div class="markdown-head">
			<div class="exit" title="返回" @click="goBack"></div>
			<input class="title" placeholder="请输入标题" v-model="title" @click="getHei"/>
			<button class="btn-common a">保存草稿</button>
			<button class="btn-common b" @click="doDialog(true)">发布文章</button>
		</div>
		<div class="markdown-body">
			<vueMarkDown class="editor" :screenHeight="screenHeight" :screenWidth="screenWidth"
						 ref="markdown"></vueMarkDown>
		</div>
		<subDialog v-if="subFormIsOpen" :title="title"></subDialog>
	</div>
</template>

<script>
    import marked from 'marked'
    import 'loadsh'
    import vueMarkDown from '../../components/vueMarkdown/index'
    import subDialog from '../../components/vueMarkdown/subDialog/index'

    import a from '../../components/vueMarkdown/pro/pro'
    import eventBus from '../../utils/eventBus'

    export default {
        name: 'Editor',
        mixins: [a],
        props: ['screenHeight', 'screenWidth'],
        components: {
            vueMarkDown, subDialog
        },
        data() {
            return {
                title: '',					// 博客标题

                iconList: [this.setPath('bold'),
                    this.setPath('italics'), this.setPath('title'), this.setPath('delLine'),],
                subFormIsOpen: false,
            }
        },

        created() {
            this.initEvent()
        },
        computed: {
            compiledMarkdown() {
                return marked(this.input, { sanitize: true })
            },
            asideHeight() {
                return `${document.documentElement.clientHeight - 105}px`
            }
        },
        methods: {
            /**
             * 返回前一页
             */
            initEvent() {
                // eventBus.$on('on-save')
            },

            goBack() {
                this.$router.go(-1)
            },

            // 修改路径
            setPath(name) {
                return 'url(' + require('../../assets/images/' + name + '.png') + ')'
            },

            update: _.debounce(function (e) {
                this.input = e.target.value
            }, 300),

            getHei() {
                console.log(this.screenHeight)
            },

            getArticleCont() {
                return this.$refs.markdown.getArticleCont()
            },

            doDialog(flag) {
                // console.log(this.getArticleCont())
                if (flag) {
                    if (this.title === '') {
                        this.$message({
                            type: 'error',
                            message: '请在提交之前输入标题！',
                            duration: 1500
                        })
						return
                    } else if (this.getArticleCont().replace(/\s/g, '') === '') {
						this.$message({
                            type: 'error',
                            message: '请在提交之前输入文章内容！',
                            duration: 1500
                        })
						return
					}
                }
                this.subFormIsOpen = flag
            }
        },
        beforeDestroy() {
            eventBus.$off('handleSave')
        }
    }
</script>


<style lang="scss" scoped>
	html,
	body,
	#editor {
		margin: 0;
		height: 100%;
		font-family: "Helvetica Neue", Arial, sans-serif;
		color: #333;
	}

	textarea,
	#editor div {
		display: inline-block;
		width: 49%;
		height: 100%;
		vertical-align: top;
		box-sizing: border-box;
		padding: 0 20px;
	}


	textarea {
		width: 50vw;
		min-width: 500px;
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #fcfcfc;
		font-size: 14px;
		font-family: "Monaco", courier, monospace;
		padding: 20px;
	}

	code {
		color: #f66;
	}

	.header {
		min-width: 1200px;
		width: 90vw;
		display: flex;
		justify-content: space-between;
	}

	.tool-bar {
		width: 90vw;
		min-width: 1200px;
		display: flex;
		justify-content: left;
		height: 30px;

		.icon {
			margin-top: 18px;
			width: 30px;
			height: 30px;
			background-position: 8px 8px;
			background-repeat: no-repeat;
			background-size: 15px 15px;
			cursor: pointer;
			border-radius: 15px;
		}

		.icon:hover {
			background-color: #cfcfcf;
		}
	}

	.page {
		width: 100vw;
		height: 80vh;
	}

	.editor {
		width: 100vw;
		min-width: 1300px;
		height: auto;
	}

	.markdown-head {
		height: 50px;
		width: 100vw;
		min-width: 1300px;
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		box-sizing: border-box;

		.exit {
			cursor: pointer;
			width: 40px;
			height: 40px;
			margin: auto 0;
			background-image: url("../../assets/images/left.png");
			background-size: 20px 20px;
			background-repeat: no-repeat;
			border-radius: 20px;
			background-color: #f2ebeb;
			background-position: 7px 10px;
		}

		.exit:hover {
			background-color: #d3cccc;
		}

		.title {
			width: 90%;
			padding: 0 15px;
			font-size: 18px;
			margin: 5px 20px 5px 30px;
			border-radius: 5px;
			outline: none;
			background: white;
			border: 1px solid #c2c2c2;
		}

		input:focus {
			border: 1px solid #c2c2c2;
		}

		.btn-common {
			cursor: pointer;
			border: none;
			background: none;
			width: 150px;
			margin: 5px 15px;
			border-radius: 8px;
			font-size: 17px;
		}

		.a {
			color: #5b77c2;
			background-color: white;
			border: 1px solid #5b77c2;
		}

		.a:hover {
			color: #8498c2;
			border: 1px solid #8498c2;
		}

		.a:focus {
			color: #3354c2;
			border: 1px solid #3354c2;
			outline: none;
		}

		.b {
			color: #c2804c;
			background-color: white;
			border: 1px solid #c2804c;
		}

		.b:hover {
			color: #c29873;
			border: 1px solid #c29873;
		}

		.b:focus {
			color: #c24200;
			border: 1px solid #c24200;
			outline: none;
		}

	}
</style>