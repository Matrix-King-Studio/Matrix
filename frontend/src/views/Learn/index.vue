<template>
	<div>
		<el-container style="margin: 10px 0; width: 98vw">
			<el-header>
				<el-button
					type="primary"
					round
					style="color: white; font-size: larger; width: 80vw">
					Matrix 工作室学习路线
				</el-button>
			</el-header>
			<el-container class="cont">
				<div class="group"
					 :style="{width: screenWidth > 1400 ? '16vw' : screenWidth <= 1400 && screenWidth >= 1000 ? '26vw' : screenWidth < 1000 && screenWidth > 700 ? '40vw' : '70vw'}"
					 style="margin: 10px 16px" v-for="(item, i) in learnAllInfo.group" :key="i">
					<el-button
						:type="item.type"
						plain
						style="margin-bottom: 22px">
						{{ item.name }}
					</el-button>
					<div class="block">
						<el-timeline>
							<el-timeline-item v-for="(cont, j) in item.route" :key="j"
											  :timestamp="cont.day + '天'"
											  placement="top">
								<el-card :style="{backgroundColor: cont.isProject ? '#ffcfd4' : 'white'}">
									<h3>{{cont.title}}</h3>
									<hr />
									<p>{{ cont.target }}</p>
									<hr />
									<div v-for="(link, k) in cont.link" :key="k">
										<el-link
											type="primary"
											:href="link.website"
											target="_blank">{{ link.name }}
										</el-link>
										<hr>
									</div>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</div>
				</div>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import staticData from '../../utils/staticData'

    export default {
        name: 'Learn',
        props: ['screenWidth'],
        data() {
            return {
                width: 1500,
                learnAllInfo: staticData.learnAllInfo
            }
        },
    }
</script>

<style lang="less" scoped>
	p {
		line-height: 22px;
	}

	.el-header, .el-footer， .el-main {
		color: #333;
		text-align: center;
	}

	.el-aside {
		margin-left: 60px;
	}

	.group {
		display: inline-block;
		height: auto;
		margin: 0 auto;

		.block {
			height: inherit;
		}
	}

	.cont {
		display: flex;
		flex-wrap: wrap;
		width: 90vw;
		margin: 0 auto;
	}
</style>
