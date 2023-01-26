<template>
  <div class="nav">
    <ul>
      <li>
        <router-link class="homelink" to="/">Home</router-link>
      </li>
      <li>
        <div>
          <router-link to="/sign" v-if="!$store.state.account.id"
            >회원가입</router-link
          ><router-link to="/" v-if="$store.state.account.id"
            >안녕하세요 {{ $store.state.account.name }}님</router-link
          >
          |
          <router-link to="/login" v-if="!$store.state.account.id"
            >로그인</router-link
          >
          <button @click="logout()" v-if="$store.state.account.id">
            로그아웃
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import router from '@/router'
import axios from 'axios'
import { useStore } from 'vuex'
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {
    const store = useStore()
    const logout = () => {
      axios.post('/api/logout').then(() => {
        store.commit('setAccount', 0)
        store.commit('setName', '')
        router.push({ path: '/' })
      })
    }
    return { logout }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.nav {
  width: 100%;
}
.nav > ul {
  height: 80px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7f00cb;
  padding-left: 20px;
  padding-right: 20px;
}
.homelink {
  font-weight: bold;
  font-size: 2rem;
}
a:hover {
  background-color: #ec65ff;
}
button {
  color: inherit;
}
</style>
