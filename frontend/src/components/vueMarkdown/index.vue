<template>
	<div>
		<Markdown
			v-model="val"
			@on-ready="onReady"
			@on-copy="onCopy"
			@on-upload-image="onUpladImage"
			@on-save="onSave"
			:height="screenWidth < 1300 ? screenHeight - 57 :screenHeight - 50"
			ref="innerMarkdown"
		/>
	</div>
</template>

<script>
    import Markdown from './pro/index'
    import { mapGetters } from 'vuex'

    export default {
        name: 'markdownHome',
        props: ['screenHeight', 'screenWidth'],
        components: {
            Markdown,
        },
        data() {
            return {
                val: '',
                availHeight: 0
            }
        },
        computed: {
            // ...mapGetters(['screenHeight'])
        },
        watch: {
            screenHeight: {
                handler(val) {
                    console.log(val)
				},
				immediate: true
            }
        },

        mounted() {

        },

        methods: {
            onReady(data) {
                console.log(data)
            },
            onCopy(text) {
                console.log(text)
            },
            onUpladImage(file) {
                console.log(file)
            },
            onSave(data) {
                console.log(data)
            },
			getArticleCont() {
                return  this.$refs.innerMarkdown.getCont()
			}
        },
    }
</script>

<style lang="less">
</style>
