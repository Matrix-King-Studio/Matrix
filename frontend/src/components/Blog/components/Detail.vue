<template>
	<div>
		<el-container style="margin: 10px 100px">
			<el-aside width="300px">Aside</el-aside>
			<el-container>
				<el-header height="100px">
					<p style="font-size: 25px; margin-bottom: 10px">
						{{ article ? article.title : '' }}
					</p>
					<div style="float: right">
						<el-tooltip class="item" effect="dark" content="浏览" placement="top">
							<el-tag type="success" style="margin-left: 10px">
								<i class="el-icon-view"> {{ article ? article.viewCount : '' }}</i>
							</el-tag>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="好评" placement="top">
							<el-tag type="info" style="margin-left: 10px">
								<i class="el-icon-top"> {{ article ? article.upCount : '' }}</i>
							</el-tag>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="差评" placement="top">
							<el-tag type="warning" style="margin-left: 10px">
								<i class="el-icon-bottom"> {{ article ? article.downCount : '' }}</i>
							</el-tag>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="发布时间" placement="top">
							<el-tag type="danger" style="margin-left: 10px">
								<i class="el-icon-date"> {{ article ? article.createTime : '' }}</i>
							</el-tag>
						</el-tooltip>
					</div>
				</el-header>
				<el-main>
					<div v-html="article ? article.content : ''"></div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
    import blogApi from '../../../api/blog'
    import { Message } from 'element-ui'
    import marked from 'marked'

    export default {
        name: 'Detail',
        data() {
            return {
                article: null,
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                blogApi.blogDetail({
                    id: this.$route.params.id
                }).then(res => {
                    this.article = res.data
                    this.article.content = marked(this.article.content, {
                        sanitize: true,
                        breaks: true,
                        gfm: true,
                        headerIds: true,
                    })
                    this.article.createTime = new Date(this.article.createTime).toLocaleString()
                    console.log(this.article)
                }).catch(err => {
                    console.log(err)
                    Message({
                        message: '获取博客文章详情出错！',
                        type: 'error',
                        duration: 3000
                    })
                })
            }
        }
    }
</script>

<style scoped>
	.el-header, .el-footer, .el-aside, .el-main {
		margin: 10px;
		padding: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}
</style>