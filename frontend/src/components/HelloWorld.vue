<template>
	<div>
		<!--轮播图-->
		<el-carousel height="400px">
			<el-carousel-item v-for="item in sliderImages" :key="item.id">
				<img :src="item.imgSrc" alt="item.id" style="width: 100%;height: 100%;">
			</el-carousel-item>
		</el-carousel>
		<!--组织架构-->
		<div class="section-title">
			<h3>组织架构</h3>
			<h5> organizational <span> structure </span></h5>
		</div>
		<el-row :gutter="20" style="margin: 0">
			<el-col :span="5" :offset="2">
				<div class="departmental-structure">
					<div class="department">
						<ul>
							<li @click="introductionHandler(1)">
								<i class="el-icon-user"></i>
								<strong>技术委员会</strong>
							</li>
							<li>
								<i class="el-icon-document-checked"></i>
								<strong>项目商谈部</strong>
							</li>
							<li>
								<i class="el-icon-monitor"></i>
								<strong>项目开发部</strong>
							</li>
							<li>
								<i class="el-icon-mouse"></i>
								<strong>UI设计部</strong>
							</li>
							<li>
								<i class="el-icon-headset"></i>
								<strong>学院联系部</strong>
							</li>
							<li>
								<i class="el-icon-bank-card"></i>
								<strong>成员管理部</strong>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :span="5">
				<img src="/static/images/人工智能组.jpg" alt="人工智能组" style="height: 200px; width: 100%">
			</el-col>
			<el-col :span="5">
				<img src="/static/images/前端组.jpg" alt="前端组" style="height: 200px; width: 100%">
			</el-col>
			<el-col :span="5">
				<img src="/static/images/后端组.jpg" alt="后端组" style="height: 200px; width: 100%">
			</el-col>
		</el-row>
		<div class="study-problem">
			<h1>在自学的路上，你是否也遇到了这些问题？</h1>
			<ul>
				<li>
					<img src="/static/images/1@2x_1567483299.734612.png" alt="">
					<p>自学自制力差坚持不下去</p>
					<span>01</span>
				</li>
				<li>
					<img src="/static/images/2@2x_1567483299.815959.png" alt="">
					<p>遇到问题不知道该问谁</p>
					<span>02</span>
				</li>
				<li>
					<img src="/static/images/3@2x_1567483299.9631536.png" alt="">
					<p>没有学习方向</p>
					<span>03</span>
				</li>
				<li>
					<img src="/static/images/4@2x_1567483299.974014.png" alt="">
					<p>浪费大量时间&amp;机会成本</p>
					<span>04</span>
				</li>
				<li>
					<img src="/static/images/5@2x_1567483300.1571927.png" alt="">
					<p>能看懂代码但不会写</p>
					<span>05</span>
				</li>
				<li>
					<img src="/static/images/6@2x_1567483300.1598253.png" alt="">
					<p>没有学习氛围 严重拖延症</p>
					<span>06</span>
				</li>
				<li>
					<img src="/static/images/7@2x_1567483300.3511646.png" alt="">
					<p>不知道该怎么学、学什么</p>
					<span>07</span>
				</li>
				<li>
					<img src="/static/images/8@2x_1567483300.3661962.png" alt="">
					<p>学习进度慢到窒息，慢到放弃</p>
					<span>08</span>
				</li>
			</ul>
		</div>
		<div class="solve-problem">
			<h1 class="problem-title">Matrix工作室帮你解决所有问题！</h1>
			<div class="content">
				<div class="title">
					<h1>更符合企业需求的“学、练、改、管、测”教学模式</h1>
					<p>基于“输入、输出、纠正、练习”的科学方法论，自学失败者的救星，学好IT的正确途径</p>
				</div>
				<div class="content-item">
					<img src="/static/images/line@2x_1567483309.5746026.png" alt="">
					<section class="item1">
						<img src="/static/images/study@2x_1567483310.8556564.png" alt="">
						<p>在线视频学习</p>
						<article>
							历届学长学姐的学习资源链接，<br>
							包括自己制作的教学课程，<br>
							重复观看，碎片化时间系统学习。
						</article>
					</section>
					<section class="item2">
						<img src="/static/images/practice@2x_1567483309.9485178.png" alt="">
						<p>章节作业 + 阶段测试</p>
						<article>
							阶段性组长布置作业，<br>
							组长指导实战演练，<br>
							根据组员情况量身定制学习计划。
						</article>
					</section>
					<section class="item3">
						<img src="/static/images/fix@2x_1567483306.8539662.png" alt="">
						<p>学长学姐帮你纠正方向</p>
						<article>
							7*24h学习群答疑，<br>
							有事问一问，没事聊一聊
						</article>
					</section>
					<section class="item4">
						<img src="/static/images/manage@2x_1567483309.7750795.png" alt="">
						<p>组长 + 成员管理部督学</p>
						<article>
							组长定期跟进学习进度，<br>
							彻底治愈您的拖延症。
						</article>
					</section>
					<section class="item5">
						<img src="/static/images/test@2x_1567483310.9115348.png" alt="">
						<p>能力测验 + 就业推荐</p>
						<article>
							智能题库精准测验，查漏补缺；<br>
							就业学长1V1模拟面试。
						</article>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                sliderImages: [
                    {
                        id: 1,
                        imgSrc: '/static/images/banner1.jpg'
                    },
                    {
                        id: 2,
                        imgSrc: '/static/images/banner2.jpg'
                    },
                    {
                        id: 3,
                        imgSrc: '/static/images/banner3.jpg'
                    }
                ],

            }
        },
		methods: {
            introductionHandler(id) {
                this.$router.push({
                    name:"Introduction",
                    params:{
                        id:id
                    }
                })
			}
		}
    }
</script>

<style scoped>
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	ol, ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.section-title {
		margin-top: 50px;
		text-align: center;
	}

	.section-title h3 {
		font-size: 30px;
		color: #002;
		font-weight: 400;
	}

	.section-title h5 {
		font-size: 20px;
		color: #cacace;
		text-transform: uppercase;
		font-weight: 400;
		margin-bottom: 10px;
	}

	.section-title h5 span {
		color: #e4392a;
	}

	.departmental-structure {
		overflow: hidden;
	}

	.departmental-structure .department {
		float: left;
		font-size: 13px;
		background-color: #5f5750;
	}

	.department ul li {
		float: left;
		width: 32%;
		height: 98px;
		border: #5e5e5e 1px solid;
		color: rgba(255, 255, 255, 0.7);
		display: block;
		text-align: center;
	}

	.department ul li i {
		display: block;
		margin-top: 25px;
		margin-bottom: 10px;
		font-size: 30px;
	}

	.department ul li:hover {
		font-size: 13px;
		color: rgb(90, 150, 200);
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.study-problem {
		width: 100%;
		height: auto;
		background: #f9f9f9;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		padding-bottom: 70px;
	}

	.study-problem h1 {
		color: #333;
		font-weight: 400;
		font-size: 36px;
		margin-top: 110px;
		margin-bottom: 60px;
	}

	.study-problem ul {
		width: 1200px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.study-problem ul li {
		text-align: center;
		width: 279px;
		background: #fff;
		margin-right: 21px;
		margin-bottom: 34px;
		padding-bottom: 30px;
	}

	.study-problem ul li:hover {
		box-shadow: 0 8px 16px 0 #e8e8e8;
	}

	.study-problem ul li img {
		width: 100px;
		height: 73px;
		margin-top: 30px;
	}

	.study-problem ul li p {
		font-size: 18px;
		color: #5e5e5e;
		margin-top: 12px;
		margin-bottom: 6px;
	}

	.study-problem ul li span {
		color: #5e5e5e;
		font-size: 18px;
	}

	.solve-problem {
		width: 100%;
		height: auto;
		background: #f9f9f9;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		padding-bottom: 60px;
	}

	.solve-problem .problem-title {
		font-weight: 400;
		text-align: center;
		line-height: 117px;
		width: 652px;
		height: 117px;
		color: #333;
		background: #fff;
		font-size: 36px;
		box-shadow: 0 10px 20px 0 #fafafa;
		z-index: 1;
	}

	.solve-problem .content {
		margin-top: -42px;
		width: 1200px;
		height: 818px;
		background: #fff;
		padding-top: 73px;
	}

	.title {
		width: 100%;
		text-align: center;
	}

	.solve-problem .content .title h1 {
		font-size: 24px;
	}

	.title p {
		margin-top: 14px;
		font-size: 14px;
		font-weight: 300;
		color: #5e5e5e;
	}

	.solve-problem .content-item {
		width: 1200px;
		margin-top: 52px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
		padding-bottom: 117px;
	}

	.solve-problem .content-item img {
		width: 498px;
		height: auto;
		margin-top: 14px;
	}

	.solve-problem .content-item section {
		position: absolute;
	}

	.solve-problem .content-item section img {
		width: 81px;
		height: auto;
		margin-top: 0;
	}

	.solve-problem .item1 {
		left: 240px;
		top: 0;
	}

	.solve-problem .item2 {
		right: 200px;
		top: 110px;
	}

	.solve-problem .item3 {
		left: 240px;
		top: 207px;
	}

	.solve-problem .item4 {
		right: 150px;
		bottom: 115px;
	}

	.solve-problem .item5 {
		left: 240px;
		bottom: 50px;
	}

	.solve-problem .content-item section article {
		font-size: 14px;
		font-weight: 300;
		color: #9d9d9d;
		margin-top: 3px;
	}
</style>
