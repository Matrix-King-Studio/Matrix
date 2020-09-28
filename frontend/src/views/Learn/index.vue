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
                     :style="{width: screenWidth > 1400 ? '20vw' : screenWidth <= 1400 && screenWidth >= 1000 ? '26vw' : screenWidth < 1000 && screenWidth > 700 ? '40vw' : '70vw'}"
                     style="margin: 10px 15px">
                    <el-button
                        type="primary"
                        plain
                        style="margin-bottom: 22px">
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
                </div>
                <div class="group"
                     :style="{width: screenWidth > 1400 ? '20vw' : screenWidth <= 1400 && screenWidth >= 1000 ? '26vw' : screenWidth < 1000 && screenWidth > 700 ? '40vw' : '70vw'}">
                    <el-button
                        type="success"
                        plain
                        style="margin-bottom: 22px">
                        前端组
                    </el-button>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>语言基础</h4>
                                    <hr>
                                    <p>适合Java 0基础，Java初学入门。聊聊Java这条路该如何走，如何能够系统的学习这门编程语言!</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV12J41137hu"
                                        target="_blank">
                                        视频：Java零基础学习
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>HTML5 CSS3 --- 最新的前端页面技术</h4>
                                    <hr>
                                    <p>需要掌握新的html标签 video audio canvas（这个简单学习），然后是BootStrap开源工具包--教你一步快速构建网页！</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV14J4114768"
                                        target="_blank">
                                        视频：Web开发之HTML+CSS+BootStrap篇
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.sojson.com/web/panel.html"
                                        target="_blank">网站：配色网站
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://v3.bootcss.com/"
                                        target="_blank">网站：BootStrap中文网
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="14天"
                                placement="top">
                                <el-card>
                                    <h4>JAVASCRIPT</h4>
                                    <hr>
                                    <p>脚本语言，解释语言，临时编译，能够实现页面与用户的交互，实现信息的提交与后端的接轨。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1ux411d75J"
                                        target="_blank">视频：js基础
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1k4411w7sV"
                                        target="_blank">视频：js DOM BOM
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1xW411x7sw"
                                        target="_blank">视频：ES6
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://es6.ruanyifeng.com/"
                                        target="_blank">文档：ES6 入门教程
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="http://www.axios-js.com/"
                                        target="_blank">网站：axios官网
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://developer.mozilla.org/zh-CN/"
                                        target="_blank">网站：MDN官网
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>框架学习之 VUE全家桶</h4>
                                    <hr>
                                    <p>目标：掌握渐进式框架 Vue 的使用。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1m741137Q5"
                                        target="_blank">视频：vue
                                    </el-link>
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
                </div>
                <div class="group"
                     :style="{width: screenWidth > 1400 ? '20vw' : screenWidth <= 1400 && screenWidth >= 1000 ? '26vw' : screenWidth < 1000 && screenWidth > 700 ? '40vw' : '70vw'}">
                    <el-button
                        type="info"
                        plain
                        style="margin-bottom: 22px">
                        后端组
                    </el-button>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>语言基础</h4>
                                    <hr>
                                    <p>适合Java 0基础，Java初学入门。聊聊Java这条路该如何走，如何能够系统的学习这门编程语言!</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV12J41137hu"
                                        target="_blank">
                                        视频：Java零基础学习
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>GUI编程</h4>
                                    <hr>
                                    <p>什么是GUI编程，AWT 和 Swing怎么学？什么是事件监听？什么是定时器？
                                        如何使用Java编写游戏客户端？从入门到游戏实战，一步步带你走进Java世界</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1DJ411B75F"
                                        target="_blank">
                                        视频：GUI编程入门到游戏实战
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="30天"
                                placement="top">
                                <el-card>
                                    <h4>《一小时开发贪吃蛇游戏》</h4>
                                    <hr>
                                    <p>很多人说Java入门很难，学了很久都做不出来东西，那么给大家带来一个快速上手的小项目《一小时开发贪吃蛇游戏》</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1HE41127CV"
                                        target="_blank">
                                        视频：一小时开发贪吃蛇游戏
                                    </el-link>
                                    <hr>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>网络编程</h4>
                                    <hr>
                                    <p>什么是网络？何为网络协议？IP和端口是干嘛的？TCP和UDP协议、URL能干嘛？
                                        如何通过Java实现这一切，如何通过Java写聊天程序，如何下载网络资源</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1LJ411z7vY"
                                        target="_blank">
                                        视频：网络编程实战讲解
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>多线程详解</h4>
                                    <hr>
                                    <p>课程主线：线程简介->线程创建->线程实现->并发问题->死锁,生产者消费者等高级问题</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1V4411p7EF"
                                        target="_blank">
                                        视频：多线程详解
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>注解和反射</h4>
                                    <hr>
                                    <p>课程主线：注解->自定义注解->Class类->类加载机制->反射的实际应用</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1p4411P7V3"
                                        target="_blank">
                                        视频：注解和反射
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>JVM快速入门篇</h4>
                                    <hr>
                                    <p>什么是jvm？类加载器？栈、堆区别、jdk1.8干了什么？新生代，老年代，干嘛的？
                                        From 和 to 区什么东西？ 如何排错OOM。垃圾回收的算法是什么样子的？JMM等等问题都会在这里面解答</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1iJ411d7jS"
                                        target="_blank">
                                        视频：JVM快速入门篇
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>MySQL最新教程通俗易懂</h4>
                                    <hr>
                                    <p>SQL基础语法、函数、索引、sql编程、事务、事务原则、备份恢复，权限
                                        数据库设计、三大范式、JDBC、SQL注入、数据库连接池。等所有知识都在这里了</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1NJ411J79W"
                                        target="_blank">
                                        视频：MySQL最新教程通俗易懂
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>JavaWeb入门到实战</h4>
                                    <hr>
                                    <p>从生活到代码，从简单到深入。
                                        源码级别讲解，风趣幽默,通俗易懂。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV12J411M7Sj"
                                        target="_blank">
                                        视频：JavaWeb入门到实战
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>Mybatis最新完整教程</h4>
                                    <hr>
                                    <p>从生活到代码，从简单到深入。
                                        源码级别讲解，风趣幽默,通俗易懂。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1NE411Q7Nx"
                                        target="_blank">
                                        视频：Mybatis最新完整教程
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>Spring5最新完整教程</h4>
                                    <hr>
                                    <p>从生活到代码，从简单到深入。
                                        源码级别讲解，风趣幽默,通俗易懂。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1WE411d7Dv"
                                        target="_blank">
                                        视频：Spring5最新完整教程
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>SpringMVC最新教程</h4>
                                    <hr>
                                    <p>从生活到代码，从简单到深入。
                                        源码级别讲解，风趣幽默,通俗易懂。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1aE41167Tu"
                                        target="_blank">
                                        视频：SpringMVC最新教程
                                    </el-link>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="60天"
                                placement="top">
                                <el-card>
                                    <h4>SSM框架最新整合教学</h4>
                                    <hr>
                                    <p>从生活到代码，从简单到深入。
                                        源码级别讲解，风趣幽默,通俗易懂。</p>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://www.bilibili.com/video/BV1RE41127rv"
                                        target="_blank">
                                        视频：SSM框架最新整合教学
                                    </el-link>
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
                </div>
                <div class="group"
                     :style="{width: screenWidth > 1400 ? '20vw' : screenWidth <= 1400 && screenWidth >= 1000 ? '26vw' : screenWidth < 1000 && screenWidth > 700 ? '40vw' : '70vw'}">
                    <el-button
                        type="warning"
                        plain
                        style="margin-bottom: 22px">
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
                                        target="_blank">视频：左神算法初级班（提取码：Alex）
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://pan.baidu.com/s/11-ySZ6_Zd0R8oEgqe9POqA"
                                        target="_blank">视频：左神算法进阶班（提取码：Alex）
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
                                        href="https://leetcode-cn.com/"
                                        target="_blank">平台：LeetCode
                                    </el-link>
                                    <hr>
                                    <el-link
                                        type="primary"
                                        href="https://vjudge.net/"
                                        target="_blank">平台：Virtual Judge
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
                </div>
            </el-container>
        </el-container>
    </div>

</template>

<script>
export default {
    name: 'Learn',
    props: ['screenWidth'],
    data() {
        return {
            width: 1500
        }
    },
}
</script>

<style lang="less" scoped>
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
        /*width: inherit;*/
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