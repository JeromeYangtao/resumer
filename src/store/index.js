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
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: '',
                city: '',
                title: '',
                birthday: ''
            },
            workHistory: [{
                company: '',
                content: ``
            }],
            education: [
                { school: '', content: '' },
                { school: '', content: '' },
            ],
            projects: [
                { name: '', content: '' },
                { name: '', content: '' },
            ],
            awards: [
                { name: '', content: '' },
                { name: '' },
            ],
            contacts: [
                { contact: '', content: '' },
                { contact: '', content: '' },
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