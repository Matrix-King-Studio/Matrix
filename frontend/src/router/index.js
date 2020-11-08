import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HomePage/index'
import Blog from '../views/Blog/index'
import BlogDetail from '../components/Blog/components/Detail'
import ProjectDetail from '../components/Project/components/Detail'
import Editor from '../views/BlogEditor/Editor'
import Learn from '../views/Learn/index'
import Recruit from '../views/Recruit/index'
import Introduction from '../views/Introduction/index'
import Shop from '../views/Shop/index'
import Project from '../views/Project/index'
import Space from '../views/Space/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                title: 'Matrix_Official'
            }
        },
        {
            path: '/learn',
            name: 'Learn',
            component: Learn,
            meta: {
                title: '学习路线一览'
            }
        },
        {
            path: '/project',
            name: 'Project',
            component: Project,
            meta: {
                title: '工作室项目一览'
            }
        },
        {
            path: '/project/detail/:id',
            name: 'ProjectDetail',
            component: ProjectDetail,
            meta: {
                title: '项目细则'
            }
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
            meta: {
                title: '博客'
            }
        },
        {
            path: '/blog/detail/:id',
            name: 'BlogDetail',
            component: BlogDetail,
            meta: {
                title: '标题'
            }
        },
        {
            path: '/blog/editor',
            name: 'Editor',
            component: Editor,
            meta: {
                title: '写博客'
            }
        },
        {
            path: '/recruit',
            name: 'Recruit',
            component: Recruit,
            meta: {
                title: '加入我们'
            }
        },
        {
            path: '/introduction/:id',
            name: 'Introduction',
            component: Introduction,
            meta: {
                title: '成员介绍'
            }
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop,
            meta: {
                title: '商城'
            }
        },
        {
            path: '/space',
            name: 'Space',
            component: Space,
            children: [
                {
                    path: '/space/info/:id',
                    name: 'Info',
                    component: () => import('../components/Space/Info/index'),
                    meta: {
                        title: '个人信息'
                    }
                },
                {
                    path: '/space/myblog/:id',
                    name: 'MyBlog',
                    component: () => import('../components/Space/MyBlog/index'),
                    meta: {
                        title: '我的博客'
                    }
                },
                {
                    path: '/space/cancel/:id',
                    name: 'Cancel',
                    component: () => import('../components/Space/Cancel/index'),
                    meta: {
                        title: '账号注销'
                    }
                },
                {
                    path: '/space/edit/:id',
                    name: 'EditPw',
                    component: () => import('../components/Space/EditPw/index'),
                    meta: {
                        title: '修改密码'
                    }
                },
            ]
        },
    ]
})
