<template>
  <div>
    <br />
    <div class="title">
      <span>제목 : </span
      ><input
        type="text"
        placeholder="제목을 적어주세요 "
        name=""
        id=""
        v-model="state.from.title"
      />
    </div>
    <br />
    <hr />
    <div>
      <textarea
        class="contents"
        v-model="state.from.contents"
        placeholder="내용을 적어주세요"
      /><br />
      <div class="btn">
        <button @click="saveContents()">저장</button>
        |
        <button>취소</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router'
import { reactive } from '@vue/reactivity'
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {
    const state = reactive({
      from: {
        title: '',
        contents: '',
        uptime: ''
      }
    })
    const today = new Date()

    const saveContents = () => {
      // 저장 로직
      if (window.confirm('저장하시겠습니까?')) {
        // 현재 년 월 일 을 찾아주는 로직!
        state.from.uptime =
          today.getFullYear() +
          '.' +
          (today.getMonth() + 1 < 10
            ? '0' + (today.getMonth() + 1)
            : today.getMonth() + 1) +
          '.' +
          (today.getDate() < 10 ? '0' + today.getDate() : today.getDate())
        console.log(state.from.uptime)
        axios
          .post('/api/addContents', state.from)
          .then(() => {
            window.alert('저장되었습니다.')
            router.push({ path: '/' })
          })
          .catch(() => {
            window.alert('모든내용을 채워주세요')
          })
      }
    }
    return { state, saveContents }
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
  border: 0;
  margin: 0 auto;
  text-align: left;
  font-size: 16px;
  resize: none;
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
