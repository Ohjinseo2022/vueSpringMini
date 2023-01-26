<template>
  <div class="contents">
    <br />
    <hr />
    <div class="title">자유게시판</div>
    <table class="table">
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성시간</th>
        <th>댓글수</th>
      </tr>
      <tr v-for="(i, num) in state.contents" :key="i.idx">
        <td>{{ num + 1 }}</td>
        <td>
          <div @click="detailgo(i.idx)">{{ i.title }}</div>
        </td>
        <td>{{ state.userName[num] }}</td>
        <td>{{ i.uptime }}</td>
        <td>0</td>
      </tr>
    </table>
    <button class="createText" @click="createText()">글쓰기</button>
    <br />
    <br />
    <hr />
  </div>
</template>
<script>
import router from '@/router'

import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      contents: []
    }
  },

  setup() {
    const state = reactive({
      contents: {
        idx: [],
        userIdx: [],
        title: [],
        contents: [],
        uptime: []
      },
      userName: [],
      fakeData: {
        id: [],
        idx: [],
        title: [],
        contents: [],
        time: []
      }
    })
    const store = useStore()
    const createText = () => {
      if (store.state.account.id) {
        router.push({ path: '/create' })
      } else {
        if (
          window.confirm(
            '로그인한 회원만 글쓰기가 가능합니다.\n로그인창으로 이동할까요 ?'
          )
        ) {
          router.push({ path: '/login' })
        }
      }
    }
    state.fakeData = store.state.fakeData
    const detailgo = (e) => {
      store.commit('setNumber', e)
      router.push({ path: '/detail' })
    }
    axios.get('/api/contents/all').then((res) => {
      state.contents = res.data
    })
    axios.get('/api/contents/name', state.contents.userIdx).then((res) => {
      state.userName = res.data
    })

    return { createText, state, detailgo }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.contents {
  width: 100%;
}
.title {
  text-align: start;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 3rem;
}
.table {
  width: 1440px;
  align-content: center;
  border-top: 1px solid black;
  border-collapse: collapse;
  padding: 8px;
  margin-bottom: 12px;
}
.table > tr > th,
td {
  padding: 8px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.table > tr > th:first-child {
  width: 32px;
}

.table > tr > th:nth-child(2) {
  width: 900px;
}
.table > tr > th > td {
  font-weight: bold;
}
.table > tr > td:nth-child(2) {
  padding: 16px;
  text-align: left;
}
.table > tr > td:nth-child(3),
td:nth-child(4),
td:nth-child(5) {
  color: #c9c6c6;
}
.createText {
  margin: 0 5px;
  position: relative;
  left: 650px;
  width: 100px;
  height: 30px;
  background: #7f00cb;
  border: 0;
  color: #c9c6c6;
  font-weight: bold;
  border-radius: 5px;
}
.createText:active {
  background: #ec65ff;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
