<template>
	<div class="main">
		<el-container style="margin: 20px 10px 20px 10px">
			<!-- 轮播 -->
			<el-header
				class="out"
				height="18vw" style="padding: 1vw 0">
				<el-carousel
					:interval="4000"
					type="card"
					height="17vw"
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

			<el-container
				style="margin: 0 10px">
				<!-- 左边的标签 -->
				<el-aside
					width="120px"
					class="out"
					style="height: 570px; background-color: white"
					:style="isScrolled ? styleListLeft : ''"
					v-if="screenWidth >= 700">
					<el-tabs
						tab-position="left"
						style="text-align: center">
						<el-tab-pane
							v-for="(tab, i) in tabPanes"
							:id="i"
							:label="tab.name" :key="i"></el-tab-pane>
					</el-tabs>
				</el-aside>

				<el-aside width="120px" v-if="screenWidth >= 700 && isScrolled" style="margin-right: 20px">

				</el-aside>

				<!-- 写博客 -->
				<el-main class="out" style="margin: 10px 40px 10px 10px"
						 :style="{marginRight: screenWidth >= 700 ? '40px' : '10px'}">
					<el-container style="width: inherit; display: flex; flex-direction: column;overflow-y: hidden">
						<div v-for="(article, i) in articles"
							 :id="article.id" :key="i" class="list">
							<router-link target="_blank" :to="{ name:'BlogDetail', params: {id: article.id} }"
										 class="blog-link">
								<h1 class="article-title" :title="article.title">{{ article.title }}</h1>
								<div class="article-info">
									<div class="info-cont">
										<div class="info-ui like"></div>
										<span>{{ article.upCount ? article.upCount : 0}}</span>
									</div>
									<div class="info-cont">
										<div class="info-ui view"></div>
										<span>{{ article.viewCount ? article.viewCount : 0}}</span>
									</div>
								</div>
								<div class="article-cont">
									<p><b>作者：{{ article.author }}</b>{{ article.abstract }}</p>
								</div>
							</router-link>
						</div>
					</el-container>
				</el-main>
				<!-- 右边的标签 -->
				<BlogAside v-if="screenWidth >=1000" :screenWidth="screenWidth"
						   :style="isScrolled ? styleListRight : ''"></BlogAside>
				<el-aside v-if="isScrolled && screenWidth >=1000">
				</el-aside>
			</el-container>
		</el-container>
		<Aside :screenWidth="screenWidth"></Aside>
	</div>
</template>

<script>
    import eventBus from '../../utils/eventBus'
    import Aside from '../../components/Generic/Aside'
    import BlogAside from '../../components/Blog/BlogAside/index'
    import blogApi from '../../api/blog'
	import staticData from '../../utils/staticData'

    export default {
        name: 'Blog',
        props: ['screenWidth'],
        components: {
            Aside,
            BlogAside
        },
        data() {
            return {
                tabPanes: staticData.tabPanes,
                topArticles: staticData.blogTopArticles,
                articles: [{
                    id: 1001,
                    title: '测试标题'.repeat(100),
                    upCount: 100,
                    viewCount: 10000,
                    author: 'Kaiqisan',
                    abstract: '这是内容'.repeat(100)
                }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {
                    id: 1001,
                    title: '测试标题'.repeat(100),
                    upCount: 100,
                    viewCount: 10000,
                    author: 'Kaiqisan',
                    abstract: '这是内容'.repeat(100)
                }],
                activities: staticData.blogActivities,
                rankingList: staticData.blogRankingList,
                isScrolled: false,
                styleListLeft: {
                    position: 'fixed',
                    left: '20px',
                    top: '80px'
                },
                styleListRight: {
                    position: 'fixed',
                    right: '25px',
                    top: '80px'
                }
            }
        },
        created() {
            this.init()
            this.bindEvent()
        },
        methods: {
            init() {
                blogApi.blogList().then(res => {
                    this.articles = res.data
                    console.log(this.articles)
                }).catch(err => {
                    console.log(err)
                })
            },

            bindEvent() {
                eventBus.$on('scrollChange', top => {
                    this.isScrolled = top >= 60 + document.body.clientWidth * 0.18
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
	.main {
		overflow-x: hidden;
	}

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

	.list {
		width: inherit;
		padding: 20px 20px;
		transition: 0.2s;border-bottom: 1px solid #ebebeb;


		.blog-link {
			width: 96%;
			cursor: pointer;
			height: 100px;
			color: black;

			.article-title {
				text-align: left;
				font-size: 24px;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.article-title:hover {
				color: rgb(30, 144, 255);
			}

			.article-info {
				margin-top: 10px;
				display: flex;
				justify-content: left;

				.info-cont {
					display: flex;
					justify-content: left;
					margin: 0 6px;

					.info-ui {
						margin: 0 3px 0 0;
						width: 20px;
						height: 20px;
						background-size: 20px 20px;
					}

					.like {
						background-image: url("../../assets/images/like.png");
					}

					.view {
						background-image: url("../../assets/images/view.png");
					}

					span {
						height: 30px;
						margin: auto 0;
						font-size: 14px;
						color: rgb(191, 191, 191);
					}
				}
			}

			.article-cont {
				text-align: left;

				p {
					color: #474747;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

					b {
						font-size: 18px;
						color: black;
						margin-right: 10px;
					}
				}
			}
		}
	}

	.list:hover {
		animation: article 10s infinite;
		background-color: #efefef;
	}

	@keyframes article {
		0% {background-color: white;}
		5% {background-color: rgba(239, 191, 167, 0.2);}
		50% {background-color: rgba(174, 193, 255, 0.2);}
		75% {background-color: rgba(164, 255, 156, 0.2);}
		100% {background-color: white;}
	}


</style>
