<template>
  <div class="login">
    <span>Login</span>
    <input
      type="text"
      placeholder="ID"
      v-model="state.form.id"
      @keyup.enter="submit()"
    /><br />
    <input
      type="password"
      placeholder="PASSWORD"
      v-model="state.form.password"
      @keyup.enter="submit()"
    /><br />
    <button @click="submit()" @keyup.enter="submit()">로그인</button>
    <div>
      <router-link to="/Sign">회원가입</router-link>
    </div>
  </div>
</template>
<script>
import router from '@/router'
import { reactive } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  components: {},
  data() {
    return {
      sample: ''
    }
  },
  setup() {
    const state = reactive({
      form: {
        id: '',
        password: ''
      }
    })
    const store = useStore()
    const submit = () => {
      console.log(state.form)
      axios
        .post('/api/login', state.form)
        .then((res) => {
          console.log('로그인 완료 ')
          store.commit('setAccount', res.data)
          router.push({ path: '/' })
        })
        .catch(() => {
          window.alert('로그인 정보를 확인해주세요')
        })
    }
    return { state, submit }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.login {
  margin: 200px auto;
  width: 400px;
  height: 200px;
  background-color: #c278ff;
  padding-top: 10px;
}
input {
  width: 350px;
  height: 30px;
  margin: 8px;
}
span {
  font-weight: bold;
  font-size: 2rem;
}
button {
  background-color: #7f00cb;
  border: 0;
  width: 150px;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
}
button:active {
  background-color: #ec65ff;
}
</style>
