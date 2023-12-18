<script setup>
import { useRoute, useRouter } from 'vue-router'
import {onMounted, ref} from 'vue'
let route = useRoute()
let router = useRouter()

let toHome = e => {
  router.push('/')
}
let toMe = e => {
  router.push('/me')
}
onMounted(e=>{
  let routeName = route
  console.log(routeName)
  console.log(route)
})
// let mode = 'admin'
let mode = 'adminm'
</script>

<template>
  <!-- <div v-if="mode == 'admin'">
    ss
  </div>
  <div id="container" v-else> -->
    <div class="router">
      <router-view></router-view>
    </div>
    <div id="navBtn" v-if="route.path != '/admin'">
      <button class="blackBtn" :class="{ gray: route.name !== 'home' }" @click="toHome">
        <span>首页</span>
      </button>
      <button :class="{ gray: route.name !== 'me' }" @click="toMe">
        <span>我的</span>
      </button>
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
