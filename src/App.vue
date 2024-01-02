<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import adminPage from './admin/main.vue'
let route = useRoute()
let router = useRouter()

let toHome = e => {
  router.push('/')
}
let toMe = e => {
  router.push('/me')
}
onMounted(e => {
  let routeName = route
  console.log(routeName)
  console.log(route)
})
// let mode = 'admin'

</script>

<template>
  <div class="router" v-if="!isAdmin">
    <router-view></router-view>
  </div>
  <div id="navBtn" v-if="!isAdmin">
    <button class="blackBtn" :class="{ gray: route.name !== 'home' }" @click="toHome">
      <span>首页</span>
    </button>
    <button :class="{ gray: route.name !== 'me' }" @click="toMe">
      <span>我的</span>
    </button>
  </div>
  <div v-if="isAdmin">
    <adminPage></adminPage>
  </div>

  <!-- </div> -->
</template>

<style scoped lang="stylus">
#container
  // height 100%
  display flex
  flex-direction column 
.gray
  span
    filter: opacity(50%)

.router
  display flex
  flex auto
  flex-direction column 
  overflow hidden
  height 0
  position relative

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
