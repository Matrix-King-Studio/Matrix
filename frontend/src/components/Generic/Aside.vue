<template>
	<aside>
		<div class="aside-con">
			<router-link class="aside-edit" :to="{ name:'Editor' }">
				<el-tooltip class="item" effect="dark" content="写博客" placement="top">
					<i class="el-icon-edit"></i>
				</el-tooltip>
			</router-link>
		</div>
	</aside>
</template>

<script>
    export default {
        name: 'Aside'
    }
</script>

<style scoped>
	aside {
		width: 50px;
		position: fixed;
		top: 400px;
		right: 0;
		z-index: 999;
	}

	.aside-con {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.aside-edit {
		display: block;
		width: 50px;
		height: 50px;
		line-height: 50px;
		margin-bottom: 2px;
		background-color: rgb(90, 150, 200);
		border-radius: 5px 0 0 5px;
		position: absolute;
		right: 0;
		color: #fff;
		text-indent: 10px;
		transition: 0.3s;
		overflow: hidden;
	}

	.aside-edit {
		top: 0;
	}
</style>