import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 全局数据源
export default new Vuex.Store({
    state: {
        selected: 'profile',
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
                name: 'Thomson',
                city: '广州五山东区',
                title: '划水',
                birthday: '1997-05-05'
            },
            workHistory: [{
                    company: 'xxx公司',
                    content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。我的主要工作如下:
                        1. 完成既定产品需求。
                        2. 修复 bug。`
                },
                {
                    company: 'yyy公司',
                    content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。我的主要工作如下:
                        1. 完成既定产品需求。
                        2. 修复 bug。`
                },
            ],
            education: [
                { school: 'Scut', content: '本科' },
                { school: '附中', content: '高中' },
            ],
            projects: [
                { name: 'project A', content: '文字' },
                { name: 'project B', content: '文字' },
            ],
            awards: [
                { name: '再来一瓶', content: '连续十次获得再来一瓶' },
                { name: '三好学生' },
            ],
            contacts: [
                { contact: 'phone', content: '1343027xxxx' },
                { contact: 'qq', content: '12345678' },
            ]
        }
    },
    mutations: {
        switchTab(state, payload) {
            state.selected = payload
        }
    }
})