<template>
	<div>
		<el-aside
			width="300px" style="position: fixed; right: 70px">
			<el-card class="box-card" style="min-height: 200px">
				<div slot="header">
					<h3 class="feed_new_tit">
						<span class="line"></span>
						<span class="txt">活动日历</span>
					</h3>
				</div>
				<div
					v-for="(activity, i) in activities"
					:key="i"
					class="text item"
					style="text-align: center">
					<el-link
						:underline="false">
						{{ activity.title }}
					</el-link>
				</div>
			</el-card>
			<el-card class="box-card">
				<div slot="header">
					<h3 class="feed_new_tit">
						<span class="line"></span>
						<span class="txt">排行榜</span>
					</h3>
				</div>
				<el-table
					:data="rankingList"
					:show-header="false"
					style="width: 100%;">
					<el-table-column
						prop="name"
						label="姓名">
					</el-table-column>
					<el-table-column
						prop="integral"
						label="积分">
					</el-table-column>
				</el-table>
			</el-card>
		</el-aside>
	</div>
</template>

<script>


    export default {
        name: 'BlogAside',
        data() {
            return {
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
        }
    }
</script>

<style lang="less" scoped>
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
</style>