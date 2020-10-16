import request from '../utils/request'

export default {
    /**
     * 获取博客文章列表
     * @returns {AxiosPromise}
     */
    blogList() {
        return request({
            url: '/blog/article/',
            method: 'GET',
        })
    },
    /**
     * 获取博客文章详情
     * @param data
     * @returns {AxiosPromise}
     */
    blogDetail(data) {
        return request({
            url: `/blog/detail/${data.id}`,
            method: 'GET',
        })
    },

    saveBlog(data) {
        return request({
            url: 'Blog/save',
            method: 'post',
            data: {
                blogName: '标题',
                blogMessage: '阿巴阿巴阿巴阿巴',
                userId: "160265843132530"
            }
        })
    }
}