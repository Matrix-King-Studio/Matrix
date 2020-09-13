<template>
	<div class="a">
		<div class="top" @click="enterMainPage" v-if="!isEnter" ref="home">
			<div class="logo"></div>
			<div class="top-cont" ref="cont">
				<div class="click-logo"></div>
				<div class="b">点击任意处进入官网</div>
			</div>
		</div>
		<!--轮播图-->
		<div class="main" v-if="isEnter" ref="pageCont">
			<el-carousel height="30vw">
				<el-carousel-item v-for="item in sliderImages" :key="item.id">
					<img :src="item.imgSrc" alt="item.id" style="width: 100%;height: 100%;">
				</el-carousel-item>
			</el-carousel>
			<!--组织架构-->
			<div class="section-title">
				<h3>组织架构</h3>
				<h5> organizational <span> structure </span></h5>
			</div>
			<div class="struct">
				<div class="departmental-structure">
					<div class="department">
						<ul>
							<li @click="introductionHandler(1)" v-for="(item, i) in departmentList" :key="i">
								<i :class="item.className"></i>
								<strong>{{ item.cont }}</strong>
							</li>
						</ul>
					</div>
				</div>
				<div class="struct-img">
					<img src="/static/images/AI_Group.jpg" alt="人工智能组">
				</div>
				<div class="struct-img">
					<img src="/static/images/FrontendGroup.jpg" alt="前端组">
				</div>
				<div class="struct-img">
					<img src="/static/images/BackendGroup.jpg" alt="后端组">
				</div>

			</div>
<!--			<el-row :gutter="20" style="margin: 0">-->
<!--				<el-col :span="5" :offset="2">-->
<!--					<div class="departmental-structure">-->
<!--						<div class="department">-->
<!--							<ul>-->
<!--								<li @click="introductionHandler(1)" v-for="(item, i) in departmentList" :key="i">-->
<!--									<i :class="item.className"></i>-->
<!--									<strong>{{ item.cont }}</strong>-->
<!--								</li>-->
<!--							</ul>-->
<!--						</div>-->
<!--					</div>-->
<!--				</el-col>-->
<!--				<el-col :span="5">-->
<!--					<img src="/static/images/AI_Group.jpg" alt="人工智能组" style="height:80%; width:100%">-->
<!--				</el-col>-->
<!--				<el-col :span="5">-->
<!--					<img src="/static/images/FrontendGroup.jpg" alt="前端组" style="height:80%; width:100%">-->
<!--				</el-col>-->
<!--				<el-col :span="5">-->
<!--					<img src="/static/images/BackendGroup.jpg" alt="后端组" style="height:80%; width:100%">-->
<!--				</el-col>-->
<!--			</el-row>-->
			<div class="study-problem">
				<h1 ref="problem-title">在自学的路上，你是否也遇到了这些问题？</h1>
				<ul>
					<li v-for="(item, i) in studyProblems" :key="i">
						<img :src="item.url" alt="">
						<p>{{item.cont}}</p>
						<span>0{{i + 1}}</span>
					</li>
				</ul>
			</div>
			<div class="solve-problem">
				<h1 class="problem-title">Matrix工作室帮你解决所有问题！</h1>
				<div class="content">
					<div class="title">
						<h1>更符合企业需求的“学、练、改、管、测”教学模式</h1>
						<p>基于“输入、输出、纠正、练习”的科学方法论，自学失败者的救星，学好IT的正确途径</p>
					</div>
					<div class="content-item">
						<img src="/static/images/line@2x_1567483309.5746026.png" alt="">
						<section :class="item.className" v-for="(item, i) in solveProblemsList" :key="i">
							<img :src="item.url" alt="">
							<p>{{ item.title }}</p>
							<article v-html="item.cont">
							</article>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import eventBus from '../../utils/eventBus'
    import { mapGetters } from 'vuex'
    import store from '../../store'

    export default {
        name: 'HelloWorld',
        computed: {
            ...mapGetters(['welcomePage', 'status'])
        },
        data() {
            return {
                sliderImages: [
                    {
                        id: 1,
                        imgSrc: '/static/images/banner1.jpg'
                    },
                    {
                        id: 2,
                        imgSrc: '/static/images/banner2.jpg'
                    },
                    {
                        id: 3,
                        imgSrc: '/static/images/banner3.jpg'
                    }
                ],
                timer: null,
                visi: true,
                isEnter: false,
                studyProblems: [
                    {
                        url: '/static/images/1@2x_1567483299.734612.png',
                        cont: '自学自制力差坚持不下去'
                    },
                    {
                        url: '/static/images/2@2x_1567483299.815959.png',
                        cont: '遇到问题不知道该问谁'
                    },
                    {
                        url: '/static/images/3@2x_1567483299.9631536.png',
                        cont: '没有学习方向'
                    },
                    {
                        url: '/static/images/4@2x_1567483299.974014.png',
                        cont: '浪费大量时间&amp;机会成本'
                    },
                    {
                        url: '/static/images/5@2x_1567483300.1571927.png',
                        cont: '能看懂代码但不会写'
                    },
                    {
                        url: '/static/images/6@2x_1567483300.1598253.png',
                        cont: '没有学习氛围 严重拖延症'
                    },
                    {
                        url: '/static/images/7@2x_1567483300.3511646.png',
                        cont: '不知道该怎么学、学什么'
                    },
                    {
                        url: '/static/images/8@2x_1567483300.3661962.png',
                        cont: '学习进度慢到窒息，慢到放弃'
                    },
                ],
                solveProblemsList: [
                    {
                        url: '/static/images/study@2x_1567483310.8556564.png',
                        className: 'item1',
                        title: '在线视频学习',
                        cont: `历届学长学姐的学习资源链接，<br>
								包括自己制作的教学课程，<br>
								重复观看，碎片化时间系统学习。`
                    },
                    {
                        url: '/static/images/practice@2x_1567483309.9485178.png',
                        className: 'item2',
                        title: '章节作业 + 阶段测试',
                        cont: `阶段性组长布置作业，<br />
								组长指导实战演练，<br />
								根据组员情况量身定制学习计划。`
                    },
                    {
                        url: '/static/images/fix@2x_1567483306.8539662.png',
                        className: 'item3',
                        title: '学长学姐帮你纠正方向',
                        cont: `7*24h学习群答疑，<br>
								有事问一问，没事聊一聊`
                    },
                    {
                        url: '/static/images/manage@2x_1567483309.7750795.png',
                        className: 'item4',
                        title: '组长 + 成员管理部督学',
                        cont: `组长定期跟进学习进度，<br>
								彻底治愈您的拖延症。`
                    },
                    {
                        url: '/static/images/test@2x_1567483310.9115348.png',
                        className: 'item5',
                        title: '能力测验 + 就业推荐',
                        cont: `智能题库精准测验，查漏补缺；<br>
								就业学长1V1模拟面试。`
                    }
                ],
                departmentList: [
                    {
                        className: 'el-icon-user',
                        cont: '技术委员会'
                    },
                    {
                        className: 'el-icon-document-checked',
                        cont: '项目商谈部'
                    },
                    {
                        className: 'el-icon-monitor',
                        cont: '项目开发部'
                    },
                    {
                        className: 'el-icon-mouse',
                        cont: 'UI设计部'
                    },
                    {
                        className: 'el-icon-headset',
                        cont: '学院联系部'
                    },
                    {
                        className: 'el-icon-bank-card',
                        cont: '成员管理部'
                    },
                ]
            }
        },
        watch: {
            welcomePage: {
                handler(val) {
                    this.isEnter = val
                    if (val) {
                        this.bindEvent()
                    } else {
                        this.timer = setInterval(() => {
                            this.visi = !this.visi
                            this.$refs.cont.style.opacity = this.visi ? 0 : 1
                        }, 1000)
                    }
                },
                immediate: true
            }
        },

        methods: {
            bindEvent() {
                if (this.welcomePage) {
                    eventBus.$on('scrollChange', top => {
                        if (top >= 790 && top <= 1190) {
                            this.$refs['pageCont'].style.backgroundColor = `rgb(${249 - (top - 790) / 2},${249 - (top - 790) / 2},${249 - (top - 790) / 2})`
                            this.$refs['problem-title'].style.color = `rgb(${55 + (top - 790) / 2},${55 + (top - 790) / 2},${55 + (top - 790) / 2})`
                        } else if (top < 790) {
                            this.$refs['pageCont'].style.backgroundColor = 'rgb(249, 249, 249)'
                            this.$refs['problem-title'].style.color = 'rgb(0, 0, 0)'
                        } else if (top > 1190) {
                            this.$refs['pageCont'].style.backgroundColor = 'rgb(49, 49, 49)'
                            this.$refs['problem-title'].style.color = 'rgb(55, 55, 55)'
                        }
                    })
                }
            },

            introductionHandler(id) {
                this.$router.push({
                    name: 'Introduction',
                    params: {
                        id: id
                    }
                })
            },

            enterMainPage() {
                console.log('dd', store.state)
                this.$refs.home.style.transition = `1s`
                this.$refs.home.style.opacity = 0
                setTimeout(() => {
                    this.$refs.home.style.transition = `0s`
                    this.isEnter = true
                    this.$store.commit('app/SET_WELCOMEPAGE', true)
                    clearInterval(this.timer)
                    setTimeout(() => {
                        this.$refs.pageCont.style.opacity = 1
                        setTimeout(() => {
                            this.$refs.pageCont.style.transition = `0s`
                        }, 1000)
                    }, 500)
                }, 1000)
            },
        },

        created() {
            this.bindEvent()
        },

        mounted() {

        },
        beforeDestroy() {
        }
    }
</script>

<style lang="less" scoped>
	.a {
		/*overflow: hidden;*/
		/*min-width: 1000px;*/
	}

	.main {
		transition: 0s;
		background-color: #f9f9f9;
	}

	.el-main {
		margin: 0;
		padding: 0;
	}

	ol, ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}


	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	.top {
		transition: 0s;
		background-color: white;
		z-index: 50;
		position: fixed;
		margin-top: -60px;
		width: 100vw;
		height: 100vh;

		.logo {
			margin: 6% auto;
			width: 40vh;
			height: 40vh;
			background-image: url("../../assets/logo.png");
			background-size: 40vh 40vh;
		}

		.top-cont {
			display: flex;
			justify-content: space-between;
			width: 21vw;
			height: 10vh;
			margin: -1vh auto;
			transition: 1s;

			.click-logo {
				transform: translateY(0.5vw);
				background-image: url("../../assets/images/in.png");
				width: 2vw;
				height: 2vw;
				background-size: 2vw 2vw;
			}

			.b {
				user-select: none;
				color: #666666;
				font-size: 2vw;
			}
		}
	}

	.struct {
		display: flex;
		flex-wrap: wrap;
		margin: 20px auto;
		width: 1760px;
		height: auto;

		.departmental-structure {
			margin: 10px 20px;
			display: inline-block;
			overflow: hidden;
			width: auto;
			height: auto;

			.department {
				float: left;
				font-size: 13px;
				background-color: #5f5750;
				height: 300px;
				width: 400px;
				box-sizing: border-box;
				padding-top: 20px;

				ul {
					li {
						float: left;
						width: 130px;
						height: 110px;
						/*border: #5e5e5e 1px solid;*/
						color: rgba(255, 255, 255, 0.7);
						display: block;
						text-align: center;
						margin-bottom: 20px;
						cursor: pointer;

						strong {
							font-size: 15px;
						}

						i {
							display: block;
							margin-top: 25px;
							margin-bottom: 10px;
							font-size: 20px;
						}
					}

					li:hover {
						font-size: 13px;
						color: rgb(90, 150, 200);
					}
				}
			}
		}

		.struct-img {
			display: inline-block;
			margin: 10px 20px;
			width: 400px;
			height: 300px;

			img {
				width: inherit;
				height: inherit;
			}
		}
	}



	.section-title {
		margin-top: 50px;
		text-align: center;
	}

	.section-title h3 {
		font-size: 30px;
		color: #002;
		font-weight: 400;
	}

	.section-title h5 {
		font-size: 20px;
		color: #cacace;
		text-transform: uppercase;
		font-weight: 400;
		margin-bottom: 10px;
	}

	.section-title h5 span {
		color: #e4392a;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 1vh;
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

	.study-problem {
		width: 100%;
		height: auto;
		/*background: #f9f9f9;*/
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		padding-bottom: 70px;
	}

	.study-problem h1 {
		color: #333;
		font-weight: 400;
		font-size: 36px;
		margin-top: 110px;
		margin-bottom: 60px;
	}

	.study-problem ul {
		width: 1200px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.study-problem ul li {
		text-align: center;
		width: 279px;
		background: #fff;
		margin-right: 21px;
		margin-bottom: 34px;
		padding-bottom: 30px;
	}

	.study-problem ul li:hover {
		box-shadow: 0 8px 16px 0 #e8e8e8;
	}

	.study-problem ul li img {
		width: 100px;
		height: 73px;
		margin-top: 30px;
	}

	.study-problem ul li p {
		font-size: 18px;
		color: #5e5e5e;
		margin-top: 12px;
		margin-bottom: 6px;
	}

	.study-problem ul li span {
		color: #5e5e5e;
		font-size: 18px;
	}

	.solve-problem {
		width: 100%;
		height: auto;
		/*background: #f9f9f9;*/
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		padding-bottom: 60px;
	}

	.solve-problem .problem-title {
		font-weight: 400;
		text-align: center;
		line-height: 117px;
		width: 652px;
		height: 117px;
		color: #333;
		background: #fff;
		font-size: 36px;
		box-shadow: 0 10px 20px 0 #fafafa;
		z-index: 1;
	}

	.solve-problem .content {
		box-shadow: 0 0 20px 0 #fafafa;
		margin-top: -42px;
		width: 1200px;
		height: 818px;
		background: #fff;
		padding-top: 73px;
	}

	.title {
		width: 100%;
		text-align: center;
	}

	.solve-problem .content .title h1 {
		font-size: 24px;
	}

	.title p {
		margin-top: 14px;
		font-size: 14px;
		font-weight: 300;
		color: #5e5e5e;
	}

	.solve-problem .content-item {
		width: 1200px;
		margin-top: 52px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
		padding-bottom: 117px;
	}

	.solve-problem .content-item img {
		width: 498px;
		height: auto;
		margin-top: 14px;
	}

	.solve-problem .content-item section {
		position: absolute;
	}

	.solve-problem .content-item section img {
		width: 81px;
		height: auto;
		margin-top: 0;
	}

	.solve-problem .item1 {
		left: 240px;
		top: 0;
	}

	.solve-problem .item2 {
		right: 200px;
		top: 110px;
	}

	.solve-problem .item3 {
		left: 240px;
		top: 207px;
	}

	.solve-problem .item4 {
		right: 150px;
		bottom: 115px;
	}

	.solve-problem .item5 {
		left: 240px;
		bottom: 50px;
	}

	.solve-problem .content-item section article {
		font-size: 14px;
		font-weight: 300;
		color: #9d9d9d;
		margin-top: 3px;
	}
</style>
