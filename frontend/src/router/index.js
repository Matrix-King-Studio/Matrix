import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Blog from '../components/Blog/Blog'
import BlogDetail from '../components/Blog/components/Detail'
import ProjectDetail from '../components/Project/components/Detail'
import Editor from '../components/Blog/components/Editor'
import Learn from '../components/Learn/Learn'
import Recruit from '../components/Recruit/Recruit'
import Introduction from '../components/Generic/Introduction'
import Shop from '../components/Shop/Shop'
import Project from '../components/Project/Project'

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
