import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Blog from '../components/Blog/Blog'
import Editor from '../components/Blog/components/Editor'
import Recruit from '../components/Recruit/Recruit'
import Introduction from '../components/Generic/Introduction'

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
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog/editor/:id',
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
    ]
})
