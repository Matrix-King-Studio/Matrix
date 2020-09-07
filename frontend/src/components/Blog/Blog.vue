<template>
	<div>
		<el-container style="margin: 20px 70px">
			<el-aside
				width="120px"
				class="out"
				style="height: 570px; position: fixed">
				<el-tabs
					tab-position="left"
					style="text-align: center">
					<el-tab-pane
						v-for="tab in tabPanes"
						:id="tab.id"
						:label="tab.name"></el-tab-pane>
				</el-tabs>
			</el-aside>
			<el-container style="margin-left: 120px; margin-right: 300px">
				<el-header
					class="out"
					height="220px" style="padding: 10px 0">
					<el-carousel
						:interval="4000"
						type="card"
						height="200px"
						indicator-position="none">
						<el-carousel-item
							v-for="topArticle in topArticles"
							:key="topArticle.id">
							<img
								:src="topArticle.image"
								alt="item.id"
								style="width: 100%;height: 100%;">
						</el-carousel-item>
					</el-carousel>
				</el-header>
				<el-main class="out">
					<el-container
						v-for="article in articles"
						:id="article.id">
						<router-link
							:to="{ name:'BlogDetail', params: {id: article.id} }">
							<el-header
								style="margin: 0; line-height: 40px">
								<el-link
									:underline="false"
									style="font-size: larger">
									{{ article.title }}
								</el-link>
								<i
									class="el-icon-trophy"
									style="font-size: smaller; float: right; margin-right: 10px">
									{{ article.upCount }}
								</i>
								<i
									class="el-icon-view"
									style="font-size: smaller; float: right; margin-right: 10px">
									{{ article.viewCount }}
								</i>
							</el-header>
							<el-container>
								<el-main
									style="margin: 0; font-size: small; padding: 5px 20px; text-align: left">
									{{ article.abstract }}
								</el-main>
							</el-container>
							<el-divider></el-divider>
						</router-link>
					</el-container>
				</el-main>
			</el-container>
			<el-aside
				width="300px" style="position: fixed; right: 70px">
				<el-card class="box-card" style="min-height: 200px">
					<div slot="header">
						<h3 class="feed_new_tit">
							<span class="line"></span>
							<span class="txt">活动日历</span>
						</h3>
					</div>
					<div
						v-for="activity in activities"
						:key="articles.id"
						class="text item"
						style="text-align: center">
						<el-link
							:underline="false">
							{{ activity.title }}
						</el-link>
					</div>
				</el-card>
				<el-card class="box-card">
					<div slot="header">
						<h3 class="feed_new_tit">
							<span class="line"></span>
							<span class="txt">排行榜</span>
						</h3>
					</div>
					<el-table
						:data="rankingList"
						:show-header="false"
						style="width: 100%;">
						<el-table-column
							prop="name"
							label="姓名">
						</el-table-column>
						<el-table-column
							prop="integral"
							label="积分">
						</el-table-column>
					</el-table>
				</el-card>
			</el-aside>
		</el-container>
		<Aside></Aside>
	</div>
</template>

<script>
    import Aside from '../Generic/Aside'
    import blogApi from '../../api/blog'
    import { Message } from 'element-ui'

    export default {
        name: 'Blog',
        components: {
            Aside
        },
        data() {
            return {
                tabPanes: [
                    { id: 0, name: '推荐' },
                    { id: 1, name: '动态' },
                    { id: 2, name: 'AI' },
                    { id: 3, name: '前端' },
                    { id: 4, name: '后端' },
                    { id: 5, name: '算法' },
                    { id: 6, name: 'Python' },
                    { id: 7, name: 'Java' },
                    { id: 8, name: 'Django' },
                    { id: 9, name: 'Vue' },
                    { id: 10, name: 'React' },
                    { id: 11, name: '数据库' },
                    { id: 12, name: '计算机基础' },
                    { id: 13, name: '程序人生' },
                ],
                topArticles: [
                    {
                        id: 0,
                        title: 'Matrix工作室人事管理规章',
                        image: '/static/images/banner1.jpg',
                        user: {
                            id: 0,
                            name: 'Alex',
                            avatar: '/static/images/MatrixLogo_50.jpg',
                            blog: 'https://alex007.blog.csdn.net/'
                        }
                    },
                    {
                        id: 1,
                        title: 'Matrix工作室纳新管理规章',
                        image: '/static/images/banner2.jpg',
                        user: {
                            id: 0,
                            name: 'Alex',
                            avatar: '/static/images/MatrixLogo_50.jpg',
                            blog: 'https://alex007.blog.csdn.net/'
                        }
                    },
                    {
                        id: 2,
                        title: 'Matrix工作室考核管理规章',
                        image: '/static/images/banner3.jpg',
                        user: {
                            id: 0,
                            name: 'Alex',
                            avatar: '/static/images/MatrixLogo_50.jpg',
                            blog: 'https://alex007.blog.csdn.net/'
                        }
                    },
                ],
                articles: [],
                activities: [
                    { id: 0, title: '全体大会' },
                    { id: 1, title: '欢乐谷团建' },
                    { id: 2, title: '前端组会' },
                    { id: 3, title: '周末团建' },
                    { id: 4, title: 'AI组考核' },
                ],
                rankingList: [
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 1000,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 453245,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 452,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 43,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 44546,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                    {
                        id: 0,
                        name: 'Alex',
                        integral: 453,
                        avatar: '/static/images/MatrixLogo_50.jpg',
                        blog: 'https://alex007.blog.csdn.net/'
                    },
                ],
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                blogApi.blogList().then(res => {
                    this.articles = res.data
                    console.log(this.articles)
                }).catch(err => {
                    console.log(err)
                    Message({
                        message: '获取博客文章列表出错！',
                        type: 'error',
                        duration: 3000
                    })
                })
            }
        }
    }
</script>

<style scoped>
	.out {
		color: #333;
		text-align: center;
		margin: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	h3.feed_new_tit {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 16px;
		color: #4a4a4a;
		height: 24px;
		line-height: 24px;
		position: relative;
	}

	h3.feed_new_tit .line {
		display: block;
		float: left;
		width: 3px;
		height: 16px;
		background: dodgerblue;
		overflow: hidden;
		margin-right: 5px;
	}

	h3.feed_new_tit .txt {
		display: block;
		font-size: 16px;
		color: #2c3033;
	}

	.box-card {
		margin-top: 10px;
	}
</style>