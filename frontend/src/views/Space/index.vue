<template>
	<div class="main">
		<!--		电脑端header-->
		<div class="header">
			<div class="avatar" @mouseenter="changeAvatar(true)" @mouseleave="changeAvatar(false)">
				<div class="changeAvatar" v-if="changeAvatarIsOpen">
					<p>更换头像</p>
				</div>
				<img src="../../assets/logo.png">
			</div>
			<p>{{ username }}</p>
		</div>
		<!--		电脑端header-->
		<div class="menu" v-if="screenWidth >= 700">
			<router-link :to="{ name: item.name, params: {id: userId} }" class="link"
						 :style="{backgroundColor: locate === i ? '#bab2b8' : ''}" @click.native="goMenu(i)"
						 v-for="(item, i) in menuList" :key="i">
				<i class="icon" :class="item.className"></i>
				<p>{{ item.cont }}</p>
			</router-link>
		</div>
		<!--		移动端header-->
		<div class="menu-mobile" v-if="screenWidth < 700">
			<router-link class="cont" v-for="(item, i) in menuList" :key="i"
						 :style="{color: locate === i ? '#41A8DF' : ''}"
			:to="{ name: item.name, params: {id: userId} }">
				<i class="iconfont" :class="item.className" :style="{fontWeight: locate === i ? 'bold' : 'normal'}"></i>
				<p>{{ item.cont }}</p>
			</router-link>
		</div>
		<div class="body" :style="{marginBottom: screenWidth <= 700 ? '80px' : '0'}">            <!-- 二级菜单 -->
			<router-view :screenWidth="screenWidth"></router-view>
		</div>
	</div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'space',
        props: ['screenWidth'],
        components: {},
        computed: { ...mapGetters(['userId', 'username']) },
        data() {
            return {
                locate: 0,
                changeAvatarIsOpen: false,
                menuList: [
                    {
                        name: 'Info',
                        className: 'info',
                        cont: '个人资料'
                    },
                    {
                        name: 'MyBlog',
                        className: 'blog',
                        cont: '我的博客'
                    },
                    {
                        name: 'EditPw',
                        className: 'edit',
                        cont: '修改密码'
                    },
                    {
                        name: 'Cancel',
                        className: 'cancel',
                        cont: '注销账号'
                    }
                ]
            }
        },
        watch: {
            '$route': {
                handler(val) {
                    switch (val.name) {
                        case 'Info': {
                            this.locate = 0
                            break
                        }
                        case 'MyBlog': {
                            this.locate = 1
                            break
                        }
                        case 'EditPw': {
                            this.locate = 2
                            break
                        }
                        case 'Cancel': {
                            this.locate = 3
                            break
                        }
                    }
                },
                immediate: true
            }
        },
        methods: {
            goMenu(i) {
                if (this.locate !== i) {
                    this.locate = i
                }
            },

            changeAvatar(flag) {
                this.changeAvatarIsOpen = flag
            }
        },
        created() {
        }
    }
</script>
<style scoped></style>
<style lang="less" scoped type="text/less">
	@import "../../assets/font/space/iconfont.css";

	.main {
		overflow-x: hidden;
		width: 100%;
		min-height: 100vh;
		/*min-width: 600px;*/
		background-color: rgb(249, 249, 249);
	}

	.header {
		width: 90vw;
		/*min-width: 600px;*/
		max-width: 1400px;
		height: 12.8vw;
		max-height: 240px;
		background-image: url("../../assets/images/space-banner.jpg");
		background-size: 90vw 240px;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 140px 25px 10px 25px;
		display: flex;
		flex-wrap: wrap-reverse;

		.avatar {
			cursor: pointer;
			background-color: #b6b6b6;
			width: 80px;
			height: 80px;
			border-radius: 40px;
			overflow: hidden;
			padding: 5px 0 0 5px;
			box-sizing: border-box;
			position: relative;

			.changeAvatar {
				position: absolute;
				left: 0;
				top: 0;
				background-color: rgba(52, 52, 52, 0.6);
				width: 80px;
				height: 80px;
				z-index: 5;
				border-radius: 35px;
				box-sizing: border-box;

				p {
					margin: 30px auto 0 auto;
					width: 56px;
					font-size: 14px;
					color: white;
					line-height: 20px;
					background: none;
				}
			}

			img {
				position: absolute;
				left: 5px;
				top: 5px;
				z-index: 4;
				border-radius: 35px;
				width: 70px;
				height: 70px;
			}
		}

		p {
			margin: auto 15px;
			font-size: 25px;
			font-weight: 900;
			color: #ffffff;
			border-radius: 15px;
			padding: 0 10px;
			background-color: rgba(246, 161, 125, 0.57);
		}
	}

	.menu-mobile {
		box-sizing: border-box;
		border-top: 1px solid #bfbfbf;
		width: 100%;
		height: 60px;
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		z-index: 100;

		.cont {
			width: 50px;
			height: 40px;
			margin-top: 10px;
			text-align: center;
			color: #878787;
		}

		i {
			margin: 0 auto;
			font-size: 20px;
		}

		p {
			line-height: 16px;
			font-size: 11px;
		}
	}

	.menu {
		width: 90vw;
		/*min-width: 600px;*/
		max-width: 1400px;
		height: 50px;
		background-color: white;
		margin: 15px auto;
		display: flex;
		justify-content: left;
		padding: 0 10px;
		box-sizing: border-box;

		i:before {
			content: '';
		}

		.link {
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 15px 15px 0 15px;
			height: inherit;
			margin: auto 0;
			color: #3a3a3a;
			font-size: 14px;

			.icon {
				display: block;
				width: 22px;
				height: 22px;
				background-size: 22px 22px;
			}

			.info {
				background-image: url("../../assets/images/space-info.png");
			}

			.blog {
				background-image: url("../../assets/images/space-blog.png");
			}

			.cancel {
				background-image: url("../../assets/images/space-cancel.png");
			}

			.edit {
				background-image: url("../../assets/images/edit.png");
			}

			p {
				line-height: 20px;
				margin: 0 5px;
			}
		}

		.link:hover {
			background-color: #e3e3e3;
		}
	}

	.body {
		width: 90vw;
		max-width: 1400px;
		height: auto;
		/*padding: 2vw 2vw;*/
		/*box-sizing: border-box;*/
		background-color: white;
		margin: 15px auto;
	}
</style>