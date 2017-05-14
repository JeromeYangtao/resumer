import Vuex from 'vuex'
import Vue from 'vue'
// 方便查找 resume 的属性
import objectPath from 'object-path'

Vue.use(Vuex)

// 全局数据源
export default new Vuex.Store({
    state: {
        selected: 'profile',
        user: {
            id: '',
            username: ''
        },
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'workHistory', icon: 'work' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: 'Thomson',
                city: '广州',
                title: '划水',
                birthday: '97-05-05'
            },
            education: [
                { school: 'Scut', content: '本科' },
                { school: '附中', content: '中学' },
            ],
            projects: [
                { name: '嘻嘻嘻', content: '不停打出嘻嘻嘻' },
                { name: '哈哈哈', content: '不停打出哈哈哈' },
            ],
            workHistory: [{
                company: 'xxx公司',
                content: `工作内容主要是划水`
            }],
            awards: [
                { name: '再来一瓶', content: '连续十次获得再来一瓶' },
                { name: '' },
            ],
            contacts: [
                { contact: '手机', content: '13430270856' },
                { contact: '邮箱', content: 'xxx@xxx' },
            ]
        }
    },
    mutations: {
        initState(state, payload) {
            // 变化检测问题,添加属性
            Object.assign(state, payload)
        },
        switchTab(state, payload) {
            state.selected = payload
            localStorage.setItem('state', JSON.stringify(state))
        },
        // 存疑,{path,value}当一个参数还是解析成两个参数
        updateResume(state, { path, value }) {
            // state.resume[field][subfield] = value
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state))
        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
                // console.log(state.user)
        },
        removeUser(state) {
            state.user.id = ''
        }
    }
})