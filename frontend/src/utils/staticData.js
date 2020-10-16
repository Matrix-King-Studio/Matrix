export default {
    tabPanes: [
        { id: 0, name: '推荐' },
        { id: 1, name: '动态' },
        { id: 2, name: 'AI' },
        { id: 3, name: '前端' },
        { id: 4, name: '后端' },
        { id: 5, name: '算法' },
        { id: 6, name: 'Python' },
        { id: 7, name: 'Java' },
        { id: 8, name: 'Django' },
        { id: 9, name: 'Vue' },
        { id: 10, name: 'React' },
        { id: 11, name: '数据库' },
        { id: 12, name: '计算机基础' },
        { id: 13, name: '程序人生' },
    ],

    memberInformation: {
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
                name: '刘兆峰',
                avatar: require('../assets/images/avatar_zhaofeng.jpg'),
                blog: 'https://alex007.blog.csdn.net/',
            },
            {
                name: '赵永枭',
                avatar: require('../assets/images/avatar_yongxiao.jpg'),
                blog: 'https://me.csdn.net/qq_40893095',
            },
            {
                name: '陈昊琦',
                avatar: require('../assets/images/avatar_haoqi.jpg'),
                blog: 'https://blog.csdn.net/qq_33933205',
            },
            {
                name: '翟先浩',
                avatar: '/static/images/MatrixLogo.jpg',
                blog: 'https://alex007.blog.csdn.net/',
            },
            {
                name: '田宇宸',
                avatar: '/static/images/MatrixLogo.jpg',
                blog: 'https://alex007.blog.csdn.net/',
            },
        ],

    },

    homepageSliderImages: [
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

    homepageStudyProblems: [
        {
            url: '/static/images/1@2x_1567483299.734612.png',
            cont: '自学自制力差坚持不下去'
        },
        {
            url: '/static/images/2@2x_1567483299.815959.png',
            cont: '遇到问题不知道该问谁'
        },
        {
            url: '/static/images/3@2x_1567483299.9631536.png',
            cont: '没有学习方向'
        },
        {
            url: '/static/images/4@2x_1567483299.974014.png',
            cont: '浪费大量时间&amp;机会成本'
        },
        {
            url: '/static/images/5@2x_1567483300.1571927.png',
            cont: '能看懂代码但不会写'
        },
        {
            url: '/static/images/6@2x_1567483300.1598253.png',
            cont: '没有学习氛围 严重拖延症'
        },
        {
            url: '/static/images/7@2x_1567483300.3511646.png',
            cont: '不知道该怎么学、学什么'
        },
        {
            url: '/static/images/8@2x_1567483300.3661962.png',
            cont: '学习进度慢到窒息，慢到放弃'
        },
    ],
    homepageSolveProblemsList: [
        {
            url: '/static/images/study@2x_1567483310.8556564.png',
            className: 'item1',
            title: '在线视频学习',
            cont: `历届学长学姐的学习资源链接，<br>
								包括自己制作的教学课程，<br>
								重复观看，碎片化时间系统学习。`
        },
        {
            url: '/static/images/practice@2x_1567483309.9485178.png',
            className: 'item2',
            title: '章节作业 + 阶段测试',
            cont: `阶段性组长布置作业，<br />
								组长指导实战演练，<br />
								根据组员情况量身定制学习计划。`
        },
        {
            url: '/static/images/fix@2x_1567483306.8539662.png',
            className: 'item3',
            title: '学长学姐帮你纠正方向',
            cont: `7*24h学习群答疑，<br>
								有事问一问，没事聊一聊`
        },
        {
            url: '/static/images/manage@2x_1567483309.7750795.png',
            className: 'item4',
            title: '组长 + 成员管理部督学',
            cont: `组长定期跟进学习进度，<br>
								彻底治愈您的拖延症。`
        },
        {
            url: '/static/images/test@2x_1567483310.9115348.png',
            className: 'item5',
            title: '能力测验 + 就业推荐',
            cont: `智能题库精准测验，查漏补缺；<br>
								就业学长1V1模拟面试。`
        }
    ],

    homepageDepartmentList: [
        {
            className: 'el-icon-user',
            cont: '技术委员会'
        },
        {
            className: 'el-icon-document-checked',
            cont: '项目商谈部'
        },
        {
            className: 'el-icon-monitor',
            cont: '项目开发部'
        },
        {
            className: 'el-icon-mouse',
            cont: 'UI设计部'
        },
        {
            className: 'el-icon-headset',
            cont: '学院联系部'
        },
        {
            className: 'el-icon-bank-card',
            cont: '成员管理部'
        },
    ],

    homepageStructImg: [
        {
            url: '/static/images/AI_Group.jpg',
            cont: '人工智能组'
        },
        {
            url: '/static/images/FrontendGroup.jpg',
            cont: '前端组'
        },
        {
            url: '/static/images/BackendGroup.jpg',
            cont: '后端组'
        },
    ],

    blogRankingList: [
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

    blogActivities: [
        { id: 0, title: '全体大会' },
        { id: 1, title: '欢乐谷团建' },
        { id: 2, title: '前端组会' },
        { id: 3, title: '周末团建' },
        { id: 4, title: 'AI组考核' },
    ],

    blogTopArticles: [
        {
            id: 0,
            title: 'Matrix工作室人事管理规章',
            image: '/static/images/banner1.jpg',
            user: {
                id: 0,
                name: 'Alex',
                avatar: '/static/images/MatrixLogo_50.jpg',
                blog: 'https://alex007.blog.csdn.net/'
            }
        },
        {
            id: 1,
            title: 'Matrix工作室纳新管理规章',
            image: '/static/images/banner2.jpg',
            user: {
                id: 0,
                name: 'Alex',
                avatar: '/static/images/MatrixLogo_50.jpg',
                blog: 'https://alex007.blog.csdn.net/'
            }
        },
        {
            id: 2,
            title: 'Matrix工作室考核管理规章',
            image: '/static/images/banner3.jpg',
            user: {
                id: 0,
                name: 'Alex',
                avatar: '/static/images/MatrixLogo_50.jpg',
                blog: 'https://alex007.blog.csdn.net/'
            }
        },
    ],

    learnAllInfo: {
        group: [
            {
                name: 'AI组',
                type: 'primary',
                route: [
                    {
                        day: 30,
                        title: 'Python 基础',
                        target: '目标：掌握基础Python语法和变量类型。',
                        link: [{
                            name: '视频：Python入门课程',
                            website: 'http://alpha.luffycity.com:3000/free-course/124/detail'
                        }]
                    },
                    {
                        day: 7,
                        title: '爬虫入门',
                        target: '目标：掌握Python模块request的使用。',
                        link: [{
                            name: '视频：爬虫开发入门',
                            website: 'http://alpha.luffycity.com:3000/free-course/128/detail'
                        }]
                    },
                    {
                        day: 30,
                        title: 'API 调用',
                        target: '目标：基于百度AI开放平台完成语音合成、图像识别、文字识别、人脸识别等项目。',
                        link: [{
                            name: '文档：新手指南',
                            website: 'https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjgn3'
                        }]
                    },
                    {
                        day: 30,
                        title: 'Numpy & Pandas 基础',
                        target: '目标：掌握 Numpy & Pandas 的基本应用，能够处理数据和文件。',
                        link: [{
                            name: '视频：Numpy & Pandas 把玩你的数据',
                            website: 'https://mofanpy.com/tutorials/data-manipulation/np-pd/'
                        }]
                    },
                    {
                        day: 30,
                        title: 'Matplotlib 基础',
                        target: '目标：掌握 Matplotlib 的基本应用，完成数据可视化。',
                        link: [{
                            name: '视频：Matplotlib 数据可视化',
                            website: 'https://mofanpy.com/tutorials/data-manipulation/plt/'
                        }]
                    },
                    {
                        day: 90,
                        title: '机器学习基础',
                        target: '目标：熟悉基本的机器学习算法推导和实现。',
                        link: [{
                            name: '视频：唐宇迪机器学习大全-上',
                            website: 'https://www.bilibili.com/video/BV1Nb411i7nz'
                        }, {
                            name: '视频：唐宇迪机器学习大全-下',
                            website: 'https://www.bilibili.com/video/BV1Jb411H7qN'
                        }]
                    },
                    {
                        day: 30,
                        title: '机器学习进阶',
                        target: '目标：掌握基本的机器学习算法推导和实现。',
                        link: [{
                            name: '视频：吴恩达机器学习',
                            website: 'https://www.bilibili.com/video/BV1iK411W7p9'
                        }]
                    },
                    {
                        day: 60,
                        title: '深度学习基础',
                        target: '目标：掌握基本的深度学习算法理念和实现。',
                        link: [{
                            name: '视频：吴恩达深度学习',
                            website: 'https://www.bilibili.com/video/BV1FT4y1E74V'
                        }]
                    },
                ]
            },
            {
                name: '前端组',
                type: 'success',
                route: [
                    {
                        day: 7,
                        title: '前端第一课：HTML',
                        target: '目标：记住常用的head配置，理解HTML书写规范,记住主要常用标签 --- div img a p span i h1 h2 h3 h4 h5 h6 ui li table tr td input button body em',
                        link: [{
                            name: '视频：Web开发之HTML篇（路飞学城）',
                            website: 'http://alpha.luffycity.com:3000/free-course/143/detail'
                        }, {
                            name: '视频：HTML教程',
                            website: 'https://www.bilibili.com/video/BV14J4114768'
                        }]
                    },
                    {
                        day: 10,
                        title: '层叠样式表：CSS',
                        target: '目标：记住常用的属性（背单词），能够结合HTML做出简洁的的网页。',
                        link: [{
                            name: '视频：CSS教程',
                            website: 'https://www.bilibili.com/video/BV14J4114768?p=62'
                        }, {
                            name: '视频：Web开发之CSS篇（路飞学城）',
                            website: 'http://alpha.luffycity.com:3000/free-course/133/detail'
                        }, {
                            name: '辅助：配色网站',
                            website: 'https://www.sojson.com/web/panel.html'
                        }, {
                            name: '辅助：阿里巴巴图标库',
                            website: 'https://www.iconfont.cn/'
                        }]
                    },
                    {
                        day: 10,
                        title: 'CSS3 HTML5',
                        target: '目标：需要掌握新的常用html标签 video audio canvas（canvas画布简单学习），掌握新的CSS样式包括CSS动画，3D技术，滤镜效果，模糊效果等新网页特效',
                        link: [{
                            name: '视频：CSS3 HTML5教程(同上)',
                            website: 'https://www.bilibili.com/video/BV14J4114768?p=274'
                        }]
                    },
                    {
                        day: 30,
                        title: 'JavaScript',
                        target: '目标：掌握JS基础语法,理解DOM树,使用DOM进行页面交互，了解BOM内的基本内容，理解JSON是什么，学会使用AJAX发请求，学有余力的可以看看JS原型链，JS函数式编程',
                        link: [{
                            name: '视频：JavaScript编程',
                            website: 'https://www.bilibili.com/video/BV1ux411d75J'
                        }, {
                            name: '视频：BOM&DOM编程',
                            website: 'https://www.bilibili.com/video/BV1k4411w7sV'
                        }, {
                            name: '文档：MDN官网，全网最全JS知识网站',
                            website: 'https://developer.mozilla.org/zh-CN/'
                        }]
                    },
                    {
                        day: 3,
                        title: 'JS库Jquery',
                        target: '目标：简单了解Jquery的基本语法',
                        link: [{
                            name: '视频：Jquery教程',
                            website: 'https://www.bilibili.com/video/BV1pt411H7D6/'
                        }]
                    },
                    {
                        day: 3,
                        title: '框架入门：BootStrap',
                        target: '目标：简单了解和使用CV框架 BootStrap 的使用。',
                        link: [{
                            name: '文档：BootStrap中文文档',
                            website: 'https://v3.bootcss.com/getting-started/'
                        }]
                    },
                    {
                        day: 15,
                        title: 'ES6',
                        target: '目标：掌握ECMA Script的基本语法，包括理解异步函数与同步函数，掌握新变量名 let const 箭头函数，数组新方法，对象新方法，模板字符串，新数据类型Symbol Map Set ，Class语法......学有余力的可以看看ES7 ES8 ES9 ES10 ES2020',
                        link: [{
                            name: '文档：ES6 入门教程',
                            website: 'https://es6.ruanyifeng.com/'
                        }, {
                            name: '视频：ES6 教程',
                            website: 'https://www.bilibili.com/video/BV1xW411x7sw'
                        }]
                    },
                    {
                        day: 25,
                        title: '框架入门：Vue',
                        target: '目标：掌握渐进式框架 Vue 的使用，包括条件渲染 ,模板字符串，数据绑定，调取DOM，面向消息(添加事件)，过滤器，watch监听数据(简单监听和深度监听)，v-for循环批量渲染，发送请求，:style :class 修改样式，Vue动画，Vue组件，Vue路由，Vue生命周期，Vuex。',
                        link: [{
                            name: '官方文档：Vue 教程',
                            website: 'https://cn.vuejs.org/v2/guide/'
                        }, {
                            name: '视频：Vue全家桶',
                            website: 'https://www.bilibili.com/video/BV1m741137Q5'
                        }]
                    },
                    {
                        day: 3,
                        title: 'Vue-cli',
                        target: '目标：学会使用Vue-cli来快速创建项目，对Vue项目有清晰的认识',
                        link: [{
                            name: '文档：Vue-cli',
                            website: 'https://cli.vuejs.org/zh/'
                        }, {
                            name: '文档：element-ui官网',
                            website: 'https://element.eleme.cn/#/zh-CN'
                        }, {
                            name: '文档：less中文官网',
                            website: 'https://less.bootcss.com/'
                        }, {
                            name: '文档：axios中文官网',
                            website: 'http://www.axios-js.com/'
                        }]
                    },
                    {
                        day: 15,
                        title: '学一点后端：Nodejs',
                        target: '目标：学会使用Nodejs进行i/o操作，书写后端服务器,连系数据库，使用Websocket，熟练使用框架express或Koa.',
                        link: [{
                            name: '文档：Nodejs官网',
                            website: 'http://nodejs.cn/'
                        }, {
                            name: '视频：Nodejs教程',
                            website: 'https://www.bilibili.com/video/BV1Ns411N7HU'
                        }]
                    },
                    {
                        day: 20,
                        title: '项目打包工具webpack',
                        target: '目标：理解前端打包的作用，掌握Entry Output Loader Plugin Mode这5个模块的作用，学会使用devServer热部署，学会深化用户体验，学会提高性能，缓存，预处理，懒加载，PMA,多进程打包。',
                        link: [{
                            name: '文档：webpack中文官网',
                            website: 'https://www.webpackjs.com/'
                        }, {
                            name: '教程：webpack教程',
                            website: 'https://www.bilibili.com/video/BV1e7411j7T5'
                        }]
                    },
                    {
                        day: 25,
                        title: '面向国际的框架：React',
                        target: '目标：理解React核心概念，虚拟DOM，理解树结构（建议学习数据结构）,理解ES6 class,对象继承，组件，组件传值，生命周期，路由，数据请求，学会使用jsx,学会使用React脚手架create-react-app next.js create-next-app',
                        link: [{
                            name: '文档：React官网',
                            website: 'https://react.docschina.org/'
                        }, {
                            name: '教程：React教程(黑马程序员)',
                            website: 'https://www.bilibili.com/video/BV11t411S7iG'
                        }, {
                            name: '教程：React教程(代码基基)',
                            website: 'https://www.bilibili.com/video/BV1Et41137Sb'
                        }]
                    },
                    {
                        day: '??',
                        title: 'JS超集TypeScript',
                        target: '目标：掌握基本概念',
                        link: [{
                            name: '文档：TS官网',
                            website: 'https://www.tslang.cn/'
                        }]
                    },
                    {
                        day: '??',
                        title: '敬请期待',
                        target: '',
                        link: []
                    },
                    {
                        day: '??',
                        title: '项目实战：工作室官网',
                        target: '目标：独立开发完成Matrix工作室官网前端页面。',
                        isProject: true,
                        link: [{
                            name: '代码：Matrix Frontend',
                            website: 'https://github.com/Matrix-King-Studio/Matrix/tree/master/frontend'
                        }]
                    },
                ]
            },
            {
                name: '后端组',
                type: 'info',
                route: [
                    {
                        day: '30',
                        title: '语言基础',
                        target: '适合Java 0基础，Java初学入门。聊聊Java这条路该如何走，如何能够系统的学习这门编程语言!',
                        link: [{
                            name: '视频：Java零基础学习',
                            website: 'https://www.bilibili.com/video/BV12J41137hu'
                        }]
                    },
                    {
                        day: '30',
                        title: 'GUI编程',
                        target: '什么是GUI编程，AWT 和 Swing怎么学？什么是事件监听？什么是定时器？ 如何使用Java编写游戏客户端？从入门到游戏实战，一步步带你走进Java世界',
                        link: [{
                            name: '视频：GUI编程入门到游戏实战',
                            website: 'https://www.bilibili.com/video/BV1DJ411B75F'
                        }]
                    },
                    {
                        day: '3',
                        title: '开发贪吃蛇游戏',
                        target: '很多人说Java入门很难，学了很久都做不出来东西，那么给大家带来一个快速上手的小项目《一小时开发贪吃蛇游戏》',
                        link: [{
                            name: '视频：一小时开发贪吃蛇游戏',
                            website: 'https://www.bilibili.com/video/BV1HE41127CV'
                        }]
                    },
                    {
                        day: '60',
                        title: '网络编程',
                        target: '什么是网络？何为网络协议？IP和端口是干嘛的？TCP和UDP协议、URL能干嘛？ 如何通过Java实现这一切，如何通过Java写聊天程序，如何下载网络资源',
                        link: [{
                            name: '视频：网络编程实战讲解',
                            website: 'https://www.bilibili.com/video/BV1LJ411z7vY'
                        }]
                    },
                    {
                        day: '3',
                        title: '多线程详解',
                        target: '课程主线：线程简介->线程创建->线程实现->并发问题->死锁,生产者消费者等高级问题',
                        link: [{
                            name: '视频：多线程详解',
                            website: 'https://www.bilibili.com/video/BV1V4411p7EF'
                        }]
                    },
                    {
                        day: '10',
                        title: '注解和反射',
                        target: '课程主线：注解->自定义注解->Class类->类加载机制->反射的实际应用',
                        link: [{
                            name: '视频：注解和反射',
                            website: 'https://www.bilibili.com/video/BV1p4411P7V3'
                        }]
                    },
                    {
                        day: '30',
                        title: 'JVM快速入门篇',
                        target: '什么是jvm？类加载器？栈、堆区别、jdk1.8干了什么？新生代，老年代，干嘛的？ From 和 to 区什么东西？ 如何排错OOM。垃圾回收的算法是什么样子的？JMM等等问题都会在这里面解答',
                        link: [{
                            name: '视频：JVM快速入门篇',
                            website: 'https://www.bilibili.com/video/BV1iJ411d7jS'
                        }]
                    },
                    {
                        day: 20,
                        title: 'MySQL最新教程通俗易懂',
                        target: 'SQL基础语法、函数、索引、sql编程、事务、事务原则、备份恢复，权限 数据库设计、三大范式、JDBC、SQL注入、数据库连接池。等所有知识都在这里了',
                        link: [{
                            name: '视频：MySQL最新教程通俗易懂',
                            website: 'https://www.bilibili.com/video/BV1NJ411J79W'
                        }]
                    },
                    {
                        day: 25,
                        title: 'JavaWeb入门到实战',
                        target: '从生活到代码，从简单到深入。 源码级别讲解，风趣幽默,通俗易懂。',
                        link: [{
                            name: '视频：JavaWeb入门到实战',
                            website: 'https://www.bilibili.com/video/BV12J411M7Sj'
                        }]
                    },
                    {
                        day: 15,
                        title: 'Mybatis最新完整教程',
                        target: '从生活到代码，从简单到深入。 源码级别讲解，风趣幽默,通俗易懂。',
                        link: [{
                            name: '视频：Mybatis最新完整教程',
                            website: 'https://www.bilibili.com/video/BV1NE411Q7Nx'
                        }]
                    },
                    {
                        day: 20,
                        title: 'Spring5最新完整教程',
                        target: '从生活到代码，从简单到深入。 源码级别讲解，风趣幽默,通俗易懂。',
                        link: [{
                            name: '视频：Spring5最新完整教程',
                            website: 'https://www.bilibili.com/video/BV1WE411d7Dv'
                        }]
                    },
                    {
                        day: 20,
                        title: 'SpringMVC最新教程',
                        target: '从生活到代码，从简单到深入。 源码级别讲解，风趣幽默,通俗易懂。',
                        link: [{
                            name: '视频：SpringMVC最新教程',
                            website: 'https://www.bilibili.com/video/BV1aE41167Tu'
                        }]
                    },
                    {
                        day: 20,
                        title: 'SSM框架最新整合教学',
                        target: '从生活到代码，从简单到深入。 源码级别讲解，风趣幽默,通俗易懂。',
                        link: [{
                            name: '视频：SSM框架最新整合教学',
                            website: 'https://www.bilibili.com/video/BV1RE41127rv'
                        }]
                    },
                    {
                        day: 5,
                        title: '云服务器使用',
                        target: '目标：熟悉阿里云服务器的基本使用，为Web项目部署做铺垫。',
                        link: [{
                            name: '文档：阿里云文档',
                            website: 'https://help.aliyun.com/product/25365.html'
                        }]
                    },
                    {
                        day: '??',
                        title: '项目实战：工作室官网',
                        target: '目标：独立开发完成Matrix工作室官网后端服务。',
                        isProject: true,
                        link: [{
                            name: '代码：Matrix Backend',
                            website: 'https://github.com/Matrix-King-Studio/Matrix/tree/master/backend'
                        }]
                    },
                ]
            },
            {
                name: '算法组',
                type: 'warning',
                route: [
                    {
                        day: 45,
                        title: 'C 语言入门',
                        target: '目标：掌握 C 语言基本语法和变量类型。',
                        link: [{
                            name: '书籍：《C Primer Plus》',
                            website: 'https://detail.tmall.com/item.htm?spm=a230r.1.14.31.38683ba92N6Gd8&id=575784544813&ns=1&abbucket=16'
                        }]
                    },
                    {
                        day: 60,
                        title: 'C++ & 算法入门',
                        target: '目标：掌握 C++ 基本语法、string 类型、STL以及基础算法思想。',
                        link: [{
                            name: '书籍：《信息学奥赛一本通》',
                            website: 'https://detail.tmall.com/item.htm?spm=a230r.1.14.16.7317507cMvRPbD&id=43529819152&ns=1&abbucket=16'
                        }]
                    },
                    {
                        day: 60,
                        title: '基础算法进阶',
                        target: '目标：熟练掌握基础算法的思想和实现。',
                        link: [{
                            name: '视频：左神算法初级班（提取码：Alex）',
                            website: 'https://pan.baidu.com/share/init?surl=6giRQbcge230UUdatFKehQ'
                        }, {
                            name: '视频：左神算法进阶班（提取码：Alex）',
                            website: 'https://pan.baidu.com/share/init?surl=1-ySZ6_Zd0R8oEgqe9POqA'
                        }]
                    },
                    {
                        day: 120,
                        title: '算法竞赛入门经典',
                        target: '目标：浏览《算法竞赛入门经典》，尽量掌握。',
                        link: [{
                            name: '书籍：《算法竞赛入门经典》',
                            website: 'https://detail.tmall.com/item.htm?spm=a230r.1.14.14.46be2e04S0sA7U&id=535662059508&cm_id=140105335569ed55e27b&abbucket=16'
                        }]
                    },
                    {
                        day: '??',
                        title: '刷题',
                        target: '目标：各大 OJ 平台刷题练习。',
                        link: [{
                            name: '平台：LeetCode',
                            website: 'https://leetcode-cn.com/'
                        }, {
                            name: '平台：Virtual Judge',
                            website: 'https://vjudge.net/'
                        }, {
                            name: '平台：CodeForce',
                            website: 'https://codeforces.com/'
                        }]
                    },
                ]
            }
        ]
    }
}