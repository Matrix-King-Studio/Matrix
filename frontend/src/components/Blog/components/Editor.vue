<template>
	<el-container style="background-color: rgb(240, 240, 240)">
		<el-header style="margin-top: 10px">
			<el-button
				icon="el-icon-back"
				circle
				@click="goBack"></el-button>
			<el-input
				v-model="title"
				style="display: inline-block; width: 80%"
				placeholder="请输入标题"></el-input>
			<div
				class="button"
				style="float: right">
				<el-button
					type="primary"
					plain>
					保存草稿
				</el-button>
				<el-button
					type="success"
					plain>
					发布文章
				</el-button>
			</div>
			<el-divider></el-divider>
		</el-header>
			<el-main
				style="margin-top: 10px;"
				:style="{height: asideHeight}">
				<div id="editor">
					<label>
						<textarea :value="input" @input="update"></textarea>
					</label>
					<div v-html="compiledMarkdown"></div>
				</div>
			</el-main>
	</el-container>
</template>

<script>
    import marked from 'marked'
    import 'loadsh'

    export default {
        name: 'Editor',
        data() {
            return {
                title: '',					// 博客标题
                input: '# Hello World!',
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.input, { sanitize: true })
            },
            asideHeight() {
                return `${document.documentElement.clientHeight - 80}px`
            }
        },
        methods: {
            /**
			 * 返回前一页
             */
            goBack() {
                this.$router.go(-1)
			},

            update: _.debounce(function (e) {
                this.input = e.target.value
            }, 300)
        }
    }
</script>

<style scoped>
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
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: "Monaco", courier, monospace;
		padding: 20px;
	}

	code {
		color: #f66;
	}
</style>