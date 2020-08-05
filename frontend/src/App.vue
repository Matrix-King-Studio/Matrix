<template>
	<div id="app">
		<el-container >
			<!--在 Markdown 编辑界面不显示导航栏-->
			<el-header v-show="$route.name !== 'Editor'">
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
        }
    }

</script>

<style>
	.el-main {
		padding: 0;
	}
</style>