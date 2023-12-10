<script setup>
let route = route.name
</script>

<template>
  <div v-if="route.name.indexOf('admin')!=-1">
    <div class="router">
      <router-view ></router-view>
    </div>
    <div id="navBtn">
      <button>首页</button>
      <button>我的</button>
    </div>
  </div>
  
</template>

<style scoped lang="stylus">
.router
  display flex
  flex auto
  height 0
#navBtn
  button
    width 50%
    height 2.5em
    font-size 3em
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
