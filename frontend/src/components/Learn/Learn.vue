<template>
	<el-container style="margin: 10px 50px">
		<el-header>
			<el-button
				type="primary"
				round
				style="padding: 15px 400px; color: white; font-size: larger">
				Matrix 工作室学习路线
			</el-button>
		</el-header>
		<el-container>
			<el-aside width="20%">
				<el-button
					type="primary"
					plain
					style="margin-bottom: 2px">
					AI组
				</el-button>
				<div class="block">
					<el-timeline>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>Python 基础</h4>
								<hr>
								<p>目标：掌握基础Python语法和变量类型。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/124/detail"
									target="_blank">视频：Python入门课程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="7天"
							placement="top">
							<el-card>
								<h4>爬虫入门</h4>
								<hr>
								<p>目标：掌握Python模块request的使用。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/128/detail"
									target="_blank">视频：爬虫开发入门
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>API 调用</h4>
								<hr>
								<p>目标：基于百度AI开放平台完成语音合成、图像识别、文字识别、人脸识别等项目。</p>
								<hr>
								<el-link
									type="primary"
									href="https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjgn3"
									target="_blank">文档：新手指南
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>Numpy & Pandas 基础</h4>
								<hr>
								<p>目标：掌握 Numpy & Pandas 的基本应用，能够处理数据和文件。</p>
								<hr>
								<el-link
									type="primary"
									href="https://mofanpy.com/tutorials/data-manipulation/np-pd/"
									target="_blank">视频：Numpy & Pandas 把玩你的数据
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>Matplotlib 基础</h4>
								<hr>
								<p>目标：掌握 Matplotlib 的基本应用，完成数据可视化。</p>
								<hr>
								<el-link
									type="primary"
									href="https://mofanpy.com/tutorials/data-manipulation/plt/"
									target="_blank">视频：Matplotlib 数据可视化
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="90天"
							placement="top">
							<el-card>
								<h4>机器学习基础</h4>
								<hr>
								<p>目标：熟悉基本的机器学习算法推导和实现。</p>
								<hr>
								<el-link
									type="primary"
									href="https://www.bilibili.com/video/BV1Nb411i7nz?from=search&seid=6072791925897817968"
									target="_blank">视频：唐宇迪机器学习大全-上
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="https://www.bilibili.com/video/BV1Jb411H7qN?from=search&seid=6072791925897817968"
									target="_blank">视频：唐宇迪机器学习大全-上
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>机器学习进阶</h4>
								<hr>
								<p>目标：掌握基本的机器学习算法推导和实现。</p>
								<hr>
								<el-link
									type="primary"
									href="https://www.bilibili.com/video/BV1iK411W7p9?from=search&seid=166087603206127272"
									target="_blank">视频：吴恩达机器学习
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="60天"
							placement="top">
							<el-card>
								<h4>深度学习基础</h4>
								<hr>
								<p>目标：掌握基本的深度学习算法理念和实现。</p>
								<hr>
								<el-link
									type="primary"
									href="https://www.bilibili.com/video/BV1FT4y1E74V?from=search&seid=14259551523607449686"
									target="_blank">视频：吴恩达深度学习
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</div>
			</el-aside>
			<el-aside width="20%">
				<el-button
					type="success"
					plain
					style="margin-bottom: 2px">
					前端组
				</el-button>
				<div class="block">
					<el-timeline>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>Web 前端开发三剑客</h4>
								<hr>
								<p>目标：掌握网站开发三剑客HTML、CSS、JS的基本语法和应用。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/143/detail"
									target="_blank">视频：Web开发之HTML篇
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/133/detail"
									target="_blank">视频：Web开发之CSS篇
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/134/detail"
									target="_blank">视频：JavaScript编程基础
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/135/detail"
									target="_blank">视频：BOM&DOM编程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="14天"
							placement="top">
							<el-card>
								<h4>框架入门：BootStrap</h4>
								<hr>
								<p>目标：掌握强大的CV框架 BootStrap 的使用。</p>
								<hr>
								<el-link
									type="primary"
									href="https://v3.bootcss.com/getting-started/"
									target="_blank">文档：BootStrap中文文档
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>ES6 入门</h4>
								<hr>
								<p>目标：掌握ECMA Script的基本语法。</p>
								<hr>
								<el-link
									type="primary"
									href="https://es6.ruanyifeng.com/"
									target="_blank">文档：ES6 入门教程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>框架入门：Vue</h4>
								<hr>
								<p>目标：掌握渐进式框架 Vue 的使用。</p>
								<hr>
								<el-link
									type="primary"
									href="https://cn.vuejs.org/v2/guide/"
									target="_blank">文档+视频：Vue 教程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>UI组件库Element</h4>
								<hr>
								<p>目标：掌握基于 Vue 2.0 的桌面端组件库Element UI。</p>
								<hr>
								<el-link
									type="primary"
									href="https://element.eleme.cn/#/zh-CN/component/installation"
									target="_blank">文档：Element 组件
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>项目实战：工作室官网</h4>
								<hr>
								<p>目标：独立开发完成Matrix工作室官网前端页面。</p>
								<hr>
								<el-link
									type="primary"
									href="https://github.com/Matrix-King-Studio/Matrix/tree/master/frontend"
									target="_blank">代码：Matrix Frontend
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</div>
			</el-aside>
			<el-aside width="20%">
				<el-button
					type="info"
					plain
					style="margin-bottom: 2px">
					后端组
				</el-button>
				<div class="block">
					<el-timeline>
						<el-timeline-item
							timestamp="说明"
							placement="top">
							<el-card>
								<el-link
									type="primary"
									href="https://www.bilibili.com/read/cv5702420"
									target="_blank">Java路线戳这里
								</el-link>
								<p>以下为Python后端路线</p>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>语言基础</h4>
								<hr>
								<p>目标：掌握开发语言的基本语法和变量类型。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/124/detail"
									target="_blank">
									视频：Python入门课程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>常用模块</h4>
								<hr>
								<p>目标：掌握开发语言的常用模块和常用方法。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/125/detail"
									target="_blank">
									视频：Python常用模块
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>面向对象</h4>
								<hr>
								<p>目标：掌握面向对象的思想，了解封装、继承、多态。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/126/detail"
									target="_blank">
									视频：Python面向对象编程
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="60天"
							placement="top">
							<el-card>
								<h4>框架入门</h4>
								<hr>
								<p>目标：熟悉Web后端开发框架的基本使用。</p>
								<hr>
								<el-link
									type="primary"
									href="http://alpha.luffycity.com:3000/free-course/127/detail"
									target="_blank">
									视频：Django Web开发入门
								</el-link>
								<el-link
									type="primary"
									href="https://docs.djangoproject.com/zh-hans/3.0/contents/"
									target="_blank">
									文档：Django 中文文档
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>Restful 规范</h4>
								<hr>
								<p>目标：熟悉Web后端开发框架的基本使用。</p>
								<hr>
								<el-link
									type="primary"
									href="https://q1mi.github.io/Django-REST-framework-documentation/"
									target="_blank">
									文档：RestFramework 中文文档
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>云服务器使用</h4>
								<hr>
								<p>目标：熟悉阿里云服务器的基本使用，为Web项目部署做铺垫。</p>
								<hr>
								<el-link
									type="primary"
									href="https://help.aliyun.com/product/25365.html"
									target="_blank">
									文档：阿里云文档
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="30天"
							placement="top">
							<el-card>
								<h4>项目实战：工作室官网</h4>
								<hr>
								<p>目标：独立开发完成Matrix工作室官网后端服务。</p>
								<hr>
								<el-link
									type="primary"
									href="https://github.com/Matrix-King-Studio/Matrix/tree/master/backend"
									target="_blank">
									代码：Matrix Backend
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</div>
			</el-aside>
			<el-aside width="20%">
				<el-button
					type="warning"
					plain
					style="margin-bottom: 2px">
					算法组
				</el-button>
				<div class="block">
					<el-timeline>
						<el-timeline-item
							timestamp="90天"
							placement="top">
							<el-card>
								<h4>C 语言入门</h4>
								<p>目标：掌握 C 语言基本语法和变量类型。</p>
								<hr>
								<el-link
									type="primary"
									href="https://detail.tmall.com/item.htm?spm=a230r.1.14.31.38683ba92N6Gd8&id=575784544813&ns=1&abbucket=16"
									target="_blank">
									书籍：《C Primer Plus》
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="60天"
							placement="top">
							<el-card>
								<h4>C++ & 算法入门</h4>
								<p>目标：掌握 C++ 基本语法、string 类型、STL以及基础算法思想。</p>
								<hr>
								<el-link
									type="primary"
									href="https://detail.tmall.com/item.htm?spm=a230r.1.14.16.7317507cMvRPbD&id=43529819152&ns=1&abbucket=16"
									target="_blank">书籍：《信息学奥赛一本通》
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="60天"
							placement="top">
							<el-card>
								<h4>基础算法进阶</h4>
								<p>目标：熟练掌握基础算法的思想和实现。</p>
								<hr>
								<el-link
									type="primary"
									href="https://pan.baidu.com/s/16giRQbcge230UUdatFKehQ"
									target="_blank">视频：左神算法初级班
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="https://pan.baidu.com/s/11-ySZ6_Zd0R8oEgqe9POqA"
									target="_blank">视频：左神算法进阶班
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="120天"
							placement="top">
							<el-card>
								<h4>算法竞赛入门经典</h4>
								<p>目标：浏览《算法竞赛入门经典》，尽量掌握。</p>
								<hr>
								<el-link
									type="primary"
									href="https://detail.tmall.com/item.htm?spm=a230r.1.14.14.46be2e04S0sA7U&id=535662059508&cm_id=140105335569ed55e27b&abbucket=16"
									target="_blank">书籍：《算法竞赛入门经典》
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
						<el-timeline-item
							timestamp="∞"
							placement="top">
							<el-card>
								<h4>刷题</h4>
								<p>目标：各大 OJ 平台刷题练习。</p>
								<hr>
								<el-link
									type="primary"
									href="https://vjudge.net/"
									target="_blank">平台：Virtual Judge
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="https://leetcode-cn.com/"
									target="_blank">平台：LeetCode
								</el-link>
								<hr>
								<el-link
									type="primary"
									href="https://codeforces.com/"
									target="_blank">平台：CodeForce
								</el-link>
								<hr>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</div>
			</el-aside>
		</el-container>
	</el-container>
</template>

<script>
    export default {
        name: 'Learn'
    }
</script>

<style scoped>
	.el-header, .el-footer， .el-main {
		color: #333;
		text-align: center;
	}

	.el-aside {
		margin-left: 60px;
	}
</style>