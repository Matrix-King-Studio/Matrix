<template>
	<div id="app">
		<el-container >
			<!--在 Markdown 编辑界面不显示导航栏-->
			<el-header v-show="$route.name !== 'Editor'" style="padding: 0">
				<Header></Header>
			</el-header>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import Header from './components/Generic/Header'

    export default{
        components: {
            Header,
        },
        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
            }
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        },
    }

</script>

<style>
	.el-main {
		padding: 0;
	}
</style>