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
			<el-carousel height="35vw" style="border-radius: 15px">
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
				<!--				<div class="struct-img" >-->
				<img v-for="(item, i) in structImg" :key="i" :src="item.url" :alt="item.cont">
				<!--				</div>-->
			</div>
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
			<div class="solve-problem" v-if="screenWidth > 1000">
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
			<!--移动端-->
			<div class="solve-problem-mobile" v-if="screenWidth <= 1000">
				<h1>Matrix工作室帮你解决所有问题！</h1>
				<div class="cont">
					<div class="title">
						<h2>更符合企业需求的“学、练、改、管、测”教学模式</h2>
						<p>基于“输入、输出、纠正、练习”的科学方法论，<br v-if="screenWidth <=600"/>自学失败者的救星，学好IT的正确途径</p>
					</div>
					<div class="cont-solve" v-for="(item, i) in solveProblemsList" :key="i">
						<img :src="item.url" alt="">
						<div class="inner-title">
							{{ item.title }}
						</div>
						<div class="inner-cont" v-html="item.cont"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import eventBus from '../../utils/eventBus'
    import { mapGetters } from 'vuex'
	import staticData from '../../utils/staticData'

    export default {
        name: 'HelloWorld',
        props: ['screenWidth'],
        computed: {
            ...mapGetters(['welcomePage', 'status', 'dialogIsOpen'])
        },
        data() {
            return {
                timer: null,
                visi: true,
                isEnter: false,

				sliderImages: staticData.homepageSliderImages,
                studyProblems: staticData.homepageStudyProblems,
                solveProblemsList: staticData.homepageSolveProblemsList,
                departmentList: staticData.homepageDepartmentList,
                structImg: staticData.homepageStructImg
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
                            this.$refs['problem-title'].style.color = `rgb(${(top - 790) / 2},${(top - 790) / 2},${(top - 790) / 2})`
                        } else if (top < 790) {
                            this.$refs['pageCont'].style.backgroundColor = 'rgb(249, 249, 249)'
                            this.$refs['problem-title'].style.color = 'rgb(0, 0, 0)'
                        } else if (top > 1190) {
                            this.$refs['pageCont'].style.backgroundColor = 'rgb(49, 49, 49)'
                            this.$refs['problem-title'].style.color = 'rgb(206, 206, 206)'
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
            eventBus.$off('scrollChange')
        }
    }
</script>

<style lang="less" scoped>
	.a {
		overflow-x: hidden;
	}

	.main {
		padding: 4vw;
		transition: 0s;
		background-color: #f9f9f9;
		box-sizing: border-box;
	}

	.el-main {
		margin: 0;
		padding: 0;
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
		/*box-sizing: border-box;*/
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 90vw;
		height: auto;
		margin: 30px auto 30px auto;

		.departmental-structure {
			margin: 10px 20px;
			/*overflow: hidden;*/
			width: auto;
			height: auto;
			border-radius: 5px;

			.department {
				border-radius: 5px;
				float: left;
				font-size: 13px;
				background-color: #5f5750;
				height: 300px;
				width: 400px;
				box-sizing: border-box;
				padding-top: 30px;

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
							user-select: none;
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

		img {
			border-radius: 5px;
			margin: 10px 20px;
			width: 400px;
			height: 300px;
		}

		@media screen and (max-width: 500px) {
			.departmental-structure {
				width: 80vw;
				height: 60vw;

				.department {
					font-size: 13px;
					height: inherit;
					width: inherit;
					padding-top: 2vw;

					ul {
						li {
							width: 26vw;
							height: 22vw;
							/*border: #5e5e5e 1px solid;*/
							margin-bottom: 3vw;

							strong {
								font-size: 3vw;
							}
						}
					}
				}
			}

			img {
				width: 80vw;
				height: 60vw;
			}
		}
	}


	.section-title {
		user-select: none;
		margin-top: 50px;
		text-align: center;

		h3 {
			font-size: 30px;
			color: #002;
			font-weight: 400;
		}

		h5 {
			font-size: 20px;
			color: #cacace;
			text-transform: uppercase;
			font-weight: 400;
			margin-bottom: 10px;
		}

		span {
			color: #e4392a;
		}
	}

	.study-problem {
		width: 100%;
		height: auto;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		padding-bottom: 5vh;

		h1 {
			width: 100vw;
			text-align: center;
			color: #333;
			font-weight: 400;
			font-size: 36px;
			margin-top: 110px;
			margin-bottom: 60px;
		}

		@media screen and (max-width: 800px) {
			h1 {
				font-size: 4vw;
			}
		}

		ul {
			margin: 0 25px 0 40px;
			width: 100vw;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			justify-content: center;

			li {
				text-align: center;
				width: 279px;
				background: #fff;
				margin-right: 21px;
				margin-bottom: 34px;
				padding-bottom: 30px;

				img {
					width: 100px;
					height: 73px;
					margin-top: 30px;
				}

				p {
					font-size: 18px;
					color: #5e5e5e;
					margin-top: 12px;
					margin-bottom: 6px;
				}

				span {
					color: #5e5e5e;
					font-size: 18px;
				}
			}

			li:hover {
				box-shadow: 0 8px 16px 0 #e8e8e8;
			}
		}
	}

	.solve-problem {
		width: 100%;
		height: auto;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		user-select: none;
		/*padding-bottom: 5vh;*/

		.item1 {
			left: 80px;
			top: 0;
		}

		.item2 {
			right: 50px;
			top: 110px;
		}

		.item3 {
			left: 80px;
			top: 207px;
		}

		.item4 {
			right: 50px;
			bottom: 115px;
		}

		.item5 {
			left: 80px;
			bottom: 50px;
		}

		.content-item {
			width: 800px;
			margin-top: 52px;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-direction: column;
			flex-direction: column;
			-ms-flex-align: center;
			align-items: center;
			position: relative;
			padding-bottom: 117px;

			img {
				width: 498px;
				height: auto;
				margin-top: 14px;
			}

			section {
				position: absolute;

				img {
					width: 81px;
					height: auto;
					margin-top: 0;
				}

				article {
					font-size: 14px;
					font-weight: 300;
					color: #9d9d9d;
					margin-top: 3px;
				}
			}
		}


		.content {
			box-shadow: 0 0 20px 0 #fafafa;
			margin-top: -42px;
			width: 800px;
			height: 818px;
			background: #fff;
			padding-top: 73px;

			.title {
				width: 100%;
				text-align: center;

				p {
					margin-top: 14px;
					font-size: 14px;
					font-weight: 300;
					color: #5e5e5e;
				}

				h1 {
					font-size: 24px;
				}
			}
		}
	}

	.solve-problem-mobile {
		margin: 52px auto 0 auto;
		width: 80vw;
		height: auto;
		background-color: white;
		box-shadow: 0 0 20px 0 #fafafa;
		text-align: center;
		padding: 3vw 3vw 6vw 3vw;
		/*box-sizing: border-box;*/
		/*transform: translateX(-6vw);*/

		.cont {
			margin-top: -8vw;
			width: inherit;

			.cont-solve {
				margin-top: 5vw;
				width: inherit;
				height: inherit;

				img {
					width: 20vw;
					height: 9vw;
				}

				.inner-title {
					margin-top: 5px;
					font-size: 2.8vw;
					font-weight: 600;
				}

				.inner-cont {
					margin-top: 10px;
					font-size: 2.6vw;
				}
			}

			.title {
				width: 100%;
				text-align: center;

				p {
					margin-top: 14px;
					font-size: 14px;
					font-weight: 300;
					color: #5e5e5e;
				}

				h2 {
					font-weight: 600;
					font-size: 24px;
				}

				@media screen and (max-width: 1000px) {
					h2 {
						font-weight: 600;
						font-size: 2.8vw;
						text-align: center;
					}

					p {
						line-height: 4.8vw;
						margin-top: 2vw;
						font-size: 2vw;
						color: #5e5e5e;
					}
				}
			}
		}

		h1 {
			background-color: white;
			box-shadow: 0 0 20px 0 #fafafa;
			transform: translateY(-10vw);
			margin: 0 auto;
			width: 60vw;
			height: auto;
			padding: 3vw 4vw;
			box-sizing: border-box;
			font-weight: 400;
		}

		@media screen and (max-width: 1100px) {
			h1 {
				font-size: 3vw;
			}
		}


	}

	.problem-title {
		font-weight: 400;
		text-align: center;
		line-height: 117px;
		width: 552px;
		height: 117px;
		color: #333;
		background: #fff;
		font-size: 30px;
		box-shadow: 0 10px 20px 0 #fff;
		z-index: 1;
	}

	.blur-style {
		-webkit-filter: blur(5px); /* Chrome, Opera */
		-moz-filter: blur(5px);
		-ms-filter: blur(5px);
		filter: blur(5px);
	}
</style>
