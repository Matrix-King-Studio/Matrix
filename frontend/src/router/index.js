import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HomePage/index'
import Blog from '../views/Blog/index'
import BlogDetail from '../components/Blog/components/Detail'
import ProjectDetail from '../components/Project/components/Detail'
import Editor from '../components/Blog/components/Editor'
import Learn from '../views/Learn/index'
import Recruit from '../views/Recruit/index'
import Introduction from '../components/Generic/Introduction'
import Shop from '../views/Shop/index'
import Project from '../views/Project/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/learn',
            name: 'Learn',
            component: Learn
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/project/detail/:id',
            name: 'ProjectDetail',
            component: ProjectDetail
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog/detail/:id',
            name: 'BlogDetail',
            component: BlogDetail
        },
        {
            path: '/blog/editor',
            name: 'Editor',
            component: Editor
        },
        {
            path: '/recruit',
            name: 'Recruit',
            component: Recruit
        },
        {
            path: '/introduction/:id',
            name: 'Introduction',
            component: Introduction
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
    ]
})
