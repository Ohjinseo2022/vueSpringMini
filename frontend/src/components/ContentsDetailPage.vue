<template>
  <div>
    <br />
    <div class="title">
      <span>제목 : </span
      ><input
        v-if="!state.update"
        type="text"
        v-model="state.content.title"
        name=""
        id=""
      />
      <span v-if="state.update">{{ state.tempData.title }}</span>
    </div>
    <br />
    <hr />
    <div>
      <div class="contents" v-if="!state.update">
        {{ state.tempData.contents }}
      </div>
      <textarea
        class="contents"
        v-model="state.content.contents"
        v-if="state.update"
      /><br />
      <div class="btn">
        <button v-if="!state.update" @click="putcon(state.content.userIdx)">
          수정
        </button>
        <button v-if="state.update" @click="updateContents()">완료</button>
        |
        <button v-if="!state.update" @click="deletContents(state.content.idx)">
          삭제
        </button>
        <button v-if="state.update" @click="cancell()">취소</button>
      </div>
    </div>

    <div>댓글쓰기</div>
  </div>
</template>
<script>
import router from '@/router'
import { reactive } from '@vue/reactivity'
import store from '@/store'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      content_idx: 0
    }
  },
  setup() {
    const state = reactive({
      tempData: {
        idx: '',
        userIdx: 0,
        title: '',
        contents: '',
        uptime: ''
      },
      content: {
        idx: store.state.detailNum.idx,
        userIdx: 0,
        title: '',
        contents: '',
        uptime: ''
      },
      update: false
    })

    const idx = store.state.detailNum.idx

    axios.get(`/api/detail/content/${idx}`).then((res) => {
      state.content = res.data
      state.tempData = state.content
    })
    const putcon = (userIdx) => {
      if (userIdx === store.state.account.id) {
        state.update = !state.update
      } else {
        window.alert('수정할 권한이 없습니다')
      }
    }
    const updateContents = () => {
      if (window.confirm('저장하시겠습니까?')) {
        state.update = !state.update
        axios
          .put('api/content/update', state.content)
          .then(() => {
            window.alert('수정완료!')
          })
          .catch((e) => {
            window.alert('권한이 없습니다')
          })
      } else {
        state.update = !state.update
      }
    }
    const cancell = () => {
      state.update = !state.update
    }
    const deletContents = (idx) => {
      // 기본은 삭제 버튼 비활성화 시켜야함
      // 회원정보 체크로직 만들어야함
      const check = window.confirm('삭제하시겠습니까 ?')
      if (check) {
        axios
          .delete(`/api/content/delete/${idx}`)
          .then(() => {
            router.push({ path: '/' })
          })
          .catch(() => {
            window.alert('삭제할 권한이 없습니다.')
          })
      }
    }

    return { state, updateContents, deletContents, cancell, putcon }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
input {
  border: 0;
}
.contents {
  width: 1200px;
  height: 500px;
  padding: 20px;
  resize: none;
  margin: 0 auto;
  text-align: left;
  font-size: 16px;
}
.title {
  text-align: left;
  padding-left: 100px;
}
.btn {
  text-align: right;
}
button {
  width: 80px;
  height: 25px;
}
</style>
