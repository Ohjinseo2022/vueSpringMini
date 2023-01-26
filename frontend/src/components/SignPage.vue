<template>
  <div class="sgin">
    <span>Sign</span>
    <input type="text" placeholder="NAME" v-model="state.form.name" /><br />
    <input type="text" placeholder="ID" v-model="state.form.id" /><br />
    <input
      type="password"
      placeholder="PASSWORD"
      v-model="state.form.password"
    /><br />
    <input
      type="text"
      placeholder="EMAIL / ex)exmple@naver.com"
      v-model="state.form.email"
    /><br />
    <input
      type="text"
      placeholder="PHONE / NOT '-' "
      v-model="state.form.phone"
    /><br />
    <br />
    <button @click="submit()">회원가입</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router'
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
        name: '',
        id: '',
        password: '',
        email: '',
        phone: ''
      }
    })
    const submit = () => {
      axios
        .post('/api/signup', state.form)
        .then(() => {
          router.push({ path: '/' })
        })
        .catch((error) => {
          console.error('오류발생' + error)
        })
      console.log(state.form)
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
.sgin {
  margin: 150px auto;
  width: 400px;
  height: 350px;
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
