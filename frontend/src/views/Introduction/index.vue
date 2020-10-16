<template>
	<div class="main">
		<div class="header">
			<div class="header-cont">{{ information.name }}</div>
		</div>
		<div :class="[screenWidth >= 1000 ? 'container' : 'container-mobile']">
			<div class="introduction" :style="{width: screenWidth >= 1000 ? '25%' : '80vw'}">
				<div class="Section">
					<p class="SectionTitle">简介</p>
					<p class="AboutContent">
						{{ information.brief }}
					</p>
				</div>
				<div class="Technology-Stack">
					<p class="SectionTitle">标签</p>
					<div>
						<el-tag v-for="(tag, i) in information.tags" style="margin-top: 5px; margin-left: 5px;"
								:key="i">
							{{ tag }}
						</el-tag>
					</div>
				</div>
				<div class="Section">
					<p class="SectionTitle">负责人</p>
					<div class="ChargePerson">
						<div>
							<div class="RowContent">
								<p>姓名：{{ information.charger.name }}</p><br>
								<p>QQ：{{ information.charger.QQ }}</p><br>
								<a :href="information.charger.blogURL" target="_blank">
									Blog：{{ information.charger.blogName }}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="member" :style="{width: screenWidth >= 1000 ? '70%' : '80vw'}">
				<h3>成员</h3>
				<el-divider></el-divider>
				<div class="link-box">
					<div v-for="(person, i) in information.members" :key="i" class="a">
						<a :href="person.blog">
							<div class="thumb">
								<img width="200"
									 height="200"
									 :src='person.avatar'
									 :alt="person.name">
							</div>
							<div class="content">
								<p class="title">
									{{ person.name }}
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="foot">
			<button class="menu b" @click="goBack" @mousemove="hoverBtn" ref="btn">我知道了!</button>
		</div>
	</div>
</template>

<script>
	import staticData from '../../utils/staticData'

    export default {
        name: 'Introduction',
        props: ['screenWidth'],
        data() {
            return {
                information: staticData.memberInformation
            }
        },

        methods: {
            goBack() {
                this.$router.back()
            },

            hoverBtn() {
                // this.$refs.btn.bind()
            }
        }
    }
</script>

<style lang="less" scoped>
	.main {
		overflow-x: hidden;
		width: 100vw;
		height: 100vh;
	}

	.foot {
		width: inherit;
		height: 200px;

		.menu {
			display: block;
			text-align: center;
			width: 300px;
			margin: 50px auto;
			font-size: 30px;
			background-color: #6cb6ea;
			padding: 15px 10px;
			border-radius: 15px;
			color: white;
			font-weight: 900;
			border: none;
			cursor: pointer;
		}

		.menu:focus {
			outline: none;
			background-color: #7793ff;
		}

		.menu:hover {
			animation: shake 0.5s infinite linear;
		}


		@keyframes shake {
			0% {
				transform: rotate3d(0, 1, 1, 10deg);
			}

			25% {
				transform: rotate3d(0, 1, 1, -10deg);
			}

			50% {
				transform: rotate3d(0, 1, 1, 10deg);
			}

			75% {
				transform: rotate3d(0, 1, 1, -10deg);
			}

			100% {
				transform: rotate3d(0, 1, 1, 10deg);
			}
		}
	}

	.header {
		margin-top: 30px;
		text-align: center;
		width: 100vw;
		height: 100px;

		.header-cont {
			border-radius: 15px;
			width: 80vw;
			margin: 0 auto;
			padding: 20px 0;
			background-color: #c6e7e9;
			color: white;
			font-weight: 900;
			font-size: 35px;
			user-select: none;
			cursor: pointer;

		}
	}

	.container-mobile {
		margin: 0 auto;
		width: 80vw;
	}

	.container {
		margin: 0 auto;
		width: 80vw;
		display: flex;
		justify-content: space-between;


	}

	.RowContent {
		margin-left: 10px;
		font-size: 15px;
		line-height: 17px;
		word-break: break-all;
	}

	.SectionTitle {
		font-size: 17px;
		line-height: 17px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.introduction {
		height: auto;
		width: 25%;
		box-shadow: 0 0 8px #eaeaea;

		.Technology-Stack {
			padding: 15px 20px 5px;
		}

		.Section {
			padding: 15px 20px;

			.ChargePerson:not(:last-of-type) {
				margin-bottom: 15px;
			}

			.AboutContent {
				line-height: 23px;
				font-size: 15px;
				word-break: break-word;
				margin: 0;
			}
		}
	}

	.member {
		width: 70%;
		box-shadow: 0 0 8px #eaeaea;

		h3 {
			padding: 10px 0 0 0;
			margin: 0 0 0 20px;
		}

		.link-box {
			margin: 0 auto;
			width: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.a {
				/*width: auto;*/
				/*display: inline-block;*/

				a {
					width: auto;

					.thumb {
						overflow: hidden;
						background-color: #fff;
						margin: 0;

						img {
							width: 200px;
							height: 200px;
							position: relative;
						}
					}

					.content {
						text-align: center;
						background-color: #fff;

						.title {
							text-align: center;
							color: #333;
							white-space: nowrap;
							overflow: hidden;
						}
					}
				}
			}
		}
	}
</style>