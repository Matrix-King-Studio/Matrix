<template>
	<iframe src='https://www.wjx.top/jq/86910539,i,t.aspx?source=iframe'
			:width='clientWidth'
			height="1200"
			frameborder='0'></iframe>
</template>

<script>
    export default {
        name: 'Recruit',
		computed: {
            clientWidth() {
                return document.body.clientWidth - 20
			}
		}
    }
</script>

<style scoped>

</style>