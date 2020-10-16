<template>
	<div>
		<!-- 写博客 -->
		<aside>
			<div class="aside-con">
				<router-link class="aside-edit a" :to="{ name:'Editor' }"
							 :class="[screenWidth > 700 ? 'aside-edit-pc' : 'aside-edit-mobile']">
					<el-tooltip class="item" effect="dark" content="写博客" placement="left">
						<i class="el-icon-edit" style="margin: auto 0"
						   :style="{ fontSize: screenWidth > 700 ? '15px' : '3vw' }"></i>
					</el-tooltip>
				</router-link>
			</div>
		</aside>
		<!-- 文章分类移动端 -->
		<aside class="aside-cont-mobile" v-if="screenWidth<700" ref="asideMenu">
			<div class="aside-con">
				<div class="aside-edit c" :class="[screenWidth > 700 ? 'aside-edit-pc' : 'aside-edit-mobile']"
					 @mousedown="openAsideMobile(2)"
				:style="{transform: `translateX(${isOpenedMenu === 2 ? -50 : 0}vw)`}"
					 >
					<el-tooltip class="item" effect="dark" content="分类" placement="left">
						<i class="el-icon-menu" style="margin: auto 0"
						   :style="{ fontSize: screenWidth > 700 ? '15px' : '3vw' }"></i>
					</el-tooltip>
				</div>
			</div>
			<!--			:style="{transform: `translateX(${isOpenedMenu === 2 ? -9.35 : 40.65}vw)`}"-->
			<div class="aside-cont" :style="{transform: `translateX(${isOpenedMenu === 2 ? 0 : 50}vw)`}">
				<div class="menu-mobile" >
					<div class="menu-list" v-for="(item, i) in tabPanes" :key="i" @click="goTag(i)">
						<div>{{item.name}}</div>
					</div>
				</div>
			</div>
		</aside>
		<!-- 右侧详情栏手机端 -->
<!--																		问题在这个style里面，洗完澡再来看！-->
		<aside class="aside-cont-mobile" v-if="screenWidth<1000" ref="aside" :style="{zIndex: isOpenedMenu !== 2 ? 8 : 0}">
			<div class="aside-con">
				<div class="aside-edit b" v-if="screenWidth<1000" @mousedown="openAsideMobile(1)"
					 :style="{transform: `translateX(${isOpenedMenu === 1 ? -50 : 0}vw)`}"
					 :class="[screenWidth > 700 ? 'aside-edit-pc' : 'aside-edit-mobile']">
					<el-tooltip class="item" effect="dark" content="详情" placement="left">
						<i class="el-icon-caret-left" v-if="isOpenedMenu !== 1"
						   :style="{ fontSize: screenWidth > 700 ? '15px' : '3vw' }"></i>
						<i class="el-icon-caret-right" v-else
						   :style="{ fontSize: screenWidth > 700 ? '15px' : '3vw' }"></i>
					</el-tooltip>
				</div>
			</div>
			<div class="aside-cont" :style="{transform: `translateX(${isOpenedMenu === 1 ? -9.35 : 40.65}vw)`}">
				<BlogAside></BlogAside>
			</div>
		</aside>

	</div>
</template>

<script>
    import staticData from '../../utils/staticData'
    import BlogAside from '../../components/Blog/BlogAside/index'

    export default {
        name: 'Aside',
        props: ['screenWidth'],
        components: {
            BlogAside
        },
        watch: {
            isOpenedMenu(val) {
                if (val !== 0) {
                    window.addEventListener('click', this.isOutside, true)
                } else {
                    window.removeEventListener('click', this.isOutside, true)
                }
            }
        },
        data() {
            return {
                tabPanes: staticData.tabPanes,
                isOpenedMenu: 0,
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
        methods: {
            openAsideMobile(i) {
                if (this.isOpenedMenu !== 0) {
                    this.isOpenedMenu = 0
                } else {
                    this.isOpenedMenu = i
                }

            },

            isOutside(e) {
                if (this.isOpenedMenu === 1) {
                    if (!e.path.includes(this.$refs.aside)) {
                        this.isOpenedMenu = 0
                    }
                } else if (this.isOpenedMenu === 2) {
					if (!e.path.includes(this.$refs.asideMenu)) {
                        this.isOpenedMenu = 0
                    }
				}
            },

			goTag(i) {
                this.isOpenedMenu = 0
			}
        }
    }
</script>

<style lang="less" scoped>
	aside {
		width: 50px;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 4;
	}

	.aside-con {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.aside-edit {
		cursor: pointer;
		display: block;
		line-height: 50px;
		margin-bottom: 2px;
		background-color: rgb(90, 150, 200);
		border-radius: 5px 0 0 5px;
		position: absolute;
		right: 0;
		color: #fff;
		transition: 0.3s;
		overflow: hidden;
	}

	.aside-edit-pc {
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-indent: 10px;
	}

	.aside-edit-mobile {
		width: 8vw;
		height: 8vw;
		line-height: 8vw;
		text-indent: 1.4vw;
	}

	.a {
		margin-top: 400px;
	}

	.b {
		transition: 0.4s;
		margin-top: 200px;
	}

	.c {
		transition: 0.4s;
		margin-top: 334px;
	}

	.aside-edit {
		top: 0;
	}

	.box-card {
		margin-top: 10px;
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

	.aside-cont-mobile {
		margin-top: 70px;
		transition: 0.4s;

		.c {
			position: fixed;
		}

		.aside-cont {
			transition: 0.4s;
		}
	}

	.menu-mobile {
		box-shadow: 4px 2px 8px #9d9d9d;
		border: 1px solid #dbdbdb;
		border-radius: 5px;
		background-color: white;
		width: 50vw;
		height: 80vh;
		overflow-y: auto;
		position: fixed;
		right: 0;
		top: 10px;
		padding-top: 5px;
		box-sizing: border-box;

		.menu-list {
			box-sizing: border-box;
			padding: 14px 15px 10px 15px;
			height: 50px;
			cursor: pointer;
			;
		}

		.menu-list:hover {
			animation: article 10s infinite
		}

	}

	.menu-mobile::-webkit-scrollbar {
		width: 3px;
	}

	.menu-mobile::-webkit-scrollbar-track {
		background-color: #fff8f8;
		-webkit-border-radius: 2em;
		-moz-border-radius: 2em;
		border-radius: 2em;
	}

	.menu-mobile::-webkit-scrollbar-thumb {
		background-color: #898989;
		-webkit-border-radius: 2em;
		-moz-border-radius: 2em;
		border-radius: 2em;
	}

	@keyframes article {
		0% {background-color: white;}
		5% {background-color: rgba(239, 191, 167, 0.2);}
		50% {background-color: rgba(174, 193, 255, 0.2);}
		75% {background-color: rgba(164, 255, 156, 0.2);}
		100% {background-color: white;}
	}
</style>