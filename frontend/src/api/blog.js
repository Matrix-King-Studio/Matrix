import request from './request'

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
}