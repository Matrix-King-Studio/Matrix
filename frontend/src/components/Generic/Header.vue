<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect">
		<el-menu-item index="HelloWorld">
			<router-link :to="{ name:'HelloWorld' }">
				<img src="/static/images/MatrixLogo_50.jpg" alt="MatrixLogo">
			</router-link>
		</el-menu-item>
		<el-menu-item index="2">
			<router-link :to="{ name:'HelloWorld' }">
				主页
			</router-link>
		</el-menu-item>
		<el-menu-item index="3">在线学习</el-menu-item>
		<el-menu-item index="4">
			<router-link :to="{ name:'HelloWorld' }">
				博客社区
			</router-link>
		</el-menu-item>
		<el-menu-item index="5">资源项目</el-menu-item>
		<el-menu-item index="6">智能题库</el-menu-item>
		<el-menu-item index="Recruit">
			<router-link :to="{ name:'Recruit' }">
				招贤纳士
			</router-link>
		</el-menu-item>
		<el-submenu index="8" style="float: right">
			<template slot="title">
				<el-avatar
					size="medium"
					:src="user.avatar"></el-avatar>
			</template>
			<el-menu-item index="7-1">公告</el-menu-item>
			<el-menu-item index="7-2">个人中心</el-menu-item>
			<el-menu-item index="7-3">退出登录</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
				user: {
				    username: '',
					avatar: '/static/images/MatrixLogo_50.jpg'
				}
            }
        },
		computed: {
            activeIndex() {
                return this.$route.name
			}
		},
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped>

</style>
