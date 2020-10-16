<template>
	<div id="app" ref="app">
		<!--		<el-container style="">-->
		<!--在 Markdown 编辑界面不显示导航栏-->
		<el-header v-show="$route.name !== 'Editor'" style="padding: 0" v-if="headerIsShow">
			<Header :screenWidth="screenWidth" ></Header>
		</el-header>
		<!--			<el-container>-->
		<!--				<el-main  style="overflow-x: auto;width: 100vw;">-->
		<router-view :screenWidth="screenWidth" :screenHeight="screenHeight"
					 :class="{'blur-style': dialogIsOpen && screenWidth < 700}"></router-view>
		<!--				</el-main>-->
		<!--			</el-container>-->
		<!--		</el-container>-->
	</div>
</template>

<script>
    import eventBus from './utils/eventBus'
    import Header from './components/Header/Header'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            Header,
        },
        computed: {
            ...mapGetters(['dialogIsOpen'])
        },

        data() {
            return {
                screenWidth: 1500,
				screenHeight: 900,
				headerIsShow: true
            }
        },

        beforeCreate() {
            this.$store.commit('app/SET_DIALOGISOPEN', false)
        },

        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
            }
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        },

        watch: {
            '$route.path': {
                handler(val) {
                    if (val === '/' || val === '/blog') {
                        window.addEventListener('scroll', this.handleScroll, true)
                    } else {
                        window.removeEventListener('scroll', this.handleScroll, true)
                    }

                    this.headerIsShow = !val.includes('/introduction');
                },
                immediate: true
            },

            screenWidth(val) {
                // console.log(val);
            }
        },

        mounted() {
            this.screenWidth = document.body.clientWidth
			this.screenHeight = document.documentElement.clientHeight
            window.onresize = () => {
                this.screenWidth = document.body.clientWidth
				this.screenHeight = document.documentElement.clientHeight
            }

            let top = Math.floor(this.$refs.app.scrollTop)
            eventBus.$emit('scrollChange', top)
        },

        destroyed() {
            window.onresize = null
        },

        beforeMount() {
            this.$store.commit('app/SET_DIALOGISOPEN', false)
        },

        methods: {
            handleScroll(e) {
                let top = Math.floor(this.$refs.app.scrollTop)
                eventBus.$emit('scrollChange', top)
            }
        }
    }

</script>

<style>
	.el-main {
		padding: 0;
	}

	#app {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 15;
		overflow: auto;
		height: 100vh;
		width: 100vw;
	}

	#app::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	#app::-webkit-scrollbar-track {
		background-color: #fff8f8;
		-webkit-border-radius: 2em;
		-moz-border-radius: 2em;
		border-radius: 2em;
	}

	#app::-webkit-scrollbar-thumb {
		background-color: #898989;
		-webkit-border-radius: 2em;
		-moz-border-radius: 2em;
		border-radius: 2em;
	}

	.blur-style {
		-webkit-filter: blur(5px); /* Chrome, Opera */
		-moz-filter: blur(5px);
		-ms-filter: blur(5px);
		filter: blur(5px);
	}
</style>