<template>
	<el-container>
		<el-header>
			<el-button
				type="success"
				round
				style="padding: 15px 400px; color: white; font-size: larger">
				{{ information.name }}
			</el-button>
		</el-header>
		<el-container>
			<el-aside width="25%">
				<div>
					<div class="Section">
						<p class="SectionTitle">简介</p>
						<p class="AboutContent">
							{{ information.brief }}
						</p>
					</div>
					<div class="Technology-Stack">
						<p class="SectionTitle">标签</p>
						<div>
							<el-tag v-for="(tag, i) in information.tags" style="margin-top: 5px; margin-left: 5px;" :key="i">
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
			</el-aside>
			<el-main>
				<h3>成员</h3>
				<el-divider></el-divider>
				<div class="link-box">
					<div v-for="(person, i) in information.members" :key="i">
						<a :href="person.blog">
							<div class="thumb">
								<img width="200"
									 height="200"
									 :src="person.avatar"
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
			</el-main>
		</el-container>
		<el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
	</el-container>
</template>

<script>
    export default {
        name: 'Introduction',
        data() {
            return {
                information: {
                    name: '技术委员会',
                    brief: '由各组组长和工作室M4、M5级别成员组成，为工作室提供技术支持和技术评审。',
                    tags: ['技术大佬', '全栈', '高富帅'],
                    charger: {
                        name: 'Alex',
                        QQ: '2426671397',
						blogName: 'Alex 007',
                        blogURL: 'https://alex007.blog.csdn.net/',
                    },
					members: [
						{
						    name: 'Matrix',
							avatar: '/static/images/MatrixLogo.jpg',
							blog: 'https://alex007.blog.csdn.net/',
						},
						{
						    name: 'Matrix',
							avatar: '/static/images/MatrixLogo.jpg',
							blog: 'https://alex007.blog.csdn.net/',
						},
						{
						    name: 'Matrix',
							avatar: '/static/images/MatrixLogo.jpg',
							blog: 'https://alex007.blog.csdn.net/',
						},
						{
						    name: 'Matrix',
							avatar: '/static/images/MatrixLogo.jpg',
							blog: 'https://alex007.blog.csdn.net/',
						},
						{
						    name: 'Matrix',
							avatar: '/static/images/MatrixLogo.jpg',
							blog: 'https://alex007.blog.csdn.net/',
						},
					]
				}
            }
        }
    }
</script>

<style scoped>
	.el-header {
		margin-top: 50px;
		color: #333;
		text-align: center;
	}

	.el-aside {
		color: #333;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}

	.el-main {
		color: #333;
		padding: 10px;
		margin-left: 10px;
		text-align: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}

	.el-container {
		margin-left: 100px;
		margin-right: 100px;
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.css-1s2hrox-layer1-Container {
		height: fit-content;
		flex: 1 0 auto;
		border-radius: 3px;
	}

	.Section {
		padding: 15px 20px;
	}

	.Technology-Stack {
		padding: 15px 20px 5px;
	}

	.Section:last-of-type {
		border-bottom: 0px;
	}

	.Section {
		padding: 15px 20px;
	}

	.SectionTitle {
		font-size: 12px;
		line-height: 17px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.AboutContent {
		line-height: 23px;
		font-size: 15px;
		word-break: break-word;
		margin: 0;
	}

	.SectionTitle {
		font-size: 17px;
		line-height: 17px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.ChargePerson:not(:last-of-type) {
		margin-bottom: 15px;
	}

	.RowContent {
		margin-left: 10px;
		font-size: 15px;
		line-height: 17px;
		word-break: break-all;
	}

	.link-box {
		overflow: hidden;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.link-box a .thumb {
		overflow: hidden;
		background-color: #fff;
		margin: 0;
	}

	.link-box a .content {
		text-align: center;
		background-color: #fff;
	}

	.link-box a .thumb img {
		width: 200px;
		height: 200px;
		position: relative;
	}

	.post-content img, .comment-content img {
		border: 0;
		display: block;
	}

	.link-box a .content .title {
		text-align: center;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
	}
</style>