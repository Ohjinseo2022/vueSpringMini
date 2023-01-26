<template>
  <div class="appview">
    <HeaderLayOut />
    <router-view />
    <FooterLayOut />
  </div>
</template>
<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import FooterLayOut from './components/FooterLayOut.vue'
import HeaderLayOut from './components/HeaderLayOut.vue'
import { watch } from '@vue/runtime-core'
export default {
  components: { HeaderLayOut, FooterLayOut },
  setup() {
    const store = useStore()

    const check = () => {
      axios.get('/api/login/check').then((res) => {
        if (res.data || res.data !== '') {
          store.commit('setAccount', res.data)
        } else {
          store.commit('setAccount', 0)
        }
      })
    }
    const findName = () => {
      axios
        .get('/api/login/findName')
        .then((res) => {
          if (res.data) {
            store.commit('setName', res.data)
          }
        })
        .catch(() => {
          console.log('로그인 이전')
        })
    }

    const route = useRoute()
    // 경로변경이 확인될떄마다 확인해주는 함수
    watch(route, () => {
      check()
      findName()
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
.appview {
  width: 1440px;
  margin: 0 auto;
}
button {
  background-color: #7f00cb;
  border: 0;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  color: #c9c6c6;
}
button:active {
  background-color: #ec65ff;
}
</style>
