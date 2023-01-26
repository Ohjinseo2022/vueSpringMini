import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    account: {
      id: 0,
      name: ''
    },
    detailNum: {
      idx: 0
    },
    fakeData: [
      {
        id: '오진서',
        idx: 1,
        title: '가짜데이터로 만든 제목 1 ',
        contents:
          '가짜데이터로 만든 컨텐츠 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut sitfugiat aliquid, quos voluptas, laudantium quaerat iusto error quisquamlibero, vel accusamus. Provident architecto molestiae quasi. Consequuntur,blanditiis quam! ',
        time: '2023.01.19'
      },
      {
        id: '오진서',
        idx: 2,
        title: '가짜데이터로 만든 제목 2 ',
        contents:
          '가짜데이터로 만든 컨텐츠 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut sitfugiat aliquid, quos voluptas, laudantium quaerat iusto error quisquamlibero, vel accusamus. Provident architecto molestiae quasi. Consequuntur,blanditiis quam! ',
        time: '2023.01.19'
      },
      {
        id: '오진서',
        idx: 3,
        title: '가짜데이터로 만든 제목 3 ',
        contents:
          '가짜데이터로 만든 컨텐츠 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut sitfugiat aliquid, quos voluptas, laudantium quaerat iusto error quisquamlibero, vel accusamus. Provident architecto molestiae quasi. Consequuntur,blanditiis quam! ',
        time: '2023.01.19'
      },
      {
        id: '오진서',
        idx: 4,
        title: '가짜데이터로 만든 제목 4 ',
        contents:
          '가짜데이터로 만든 컨텐츠 4Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut sitfugiat aliquid, quos voluptas, laudantium quaerat iusto error quisquamlibero, vel accusamus. Provident architecto molestiae quasi. Consequuntur,blanditiis quam! ',
        time: '2023.01.19'
      },
      {
        id: '오진서',
        idx: 5,
        title: '가짜데이터로 만든 제목 5 ',
        contents:
          '가짜데이터로 만든 컨텐츠 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut sitfugiat aliquid, quos voluptas, laudantium quaerat iusto error quisquamlibero, vel accusamus. Provident architecto molestiae quasi. Consequuntur,blanditiis quam! ',
        time: '2023.01.19'
      }
    ]
  },
  getters: {},
  mutations: {
    setAccount(state, payload) {
      state.account.id = payload
    },
    setNumber(state, payload) {
      state.detailNum.idx = payload
    },
    setName(state, payload) {
      state.account.name = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      paths: ['detailNum.idx']
    })
  ]
})
