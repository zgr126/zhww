<script setup>
import axios from 'axios'
import upload from './upload.vue'
import { useRouter } from 'vue-router';
const route = useRouter()
const testHomeGet = (e) => {
  axios.get('/').then(e => {
    console.log(e)
  })
}
const testListGet = (e) => {
  axios.get('/goods').then(e => {
    console.log(e)
  })
}
const testListPost = e => {
  axios.post('/goods', {
    a: 'b'
  }).then(e => {
    console.log(e)
  })
}
const testsomePost = (e) => {
  axios.get('/testsomePost').then(e => {
    console.log(e)
  })
}
const List = [
  { label: '商品列表', router: 'goods' },
  { label: '标签列表', router: 'tags' },
]
let nowListselect = List[0].router
const changeRoute = (item) => {
  route.push({ name: item.router })
}
</script>

<template>
  <div class="admintest">
    <div id="routerBar">
      <button v-for="(i, index) of List" :key="index" class="barItem" @click="changeRoute(i)">
        {{ i.label }}
      </button>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <!-- <button @click="testHomeGet">测试/get查询</button>
    <button @click="testListGet">测试列表get查询</button>
    <button @click="testListPost">测试列表post查询</button>
    <button @click="testsomePost">测试随意get查询</button> -->
  </div>
  <!-- <upload></upload> -->
</template>

<style scoped lang="stylus">
#routerBar
  width: 200px
  height: 100%
  display flex
  flex-flow: column;
  background: #ccc
  .barItem
  // width 25%
    margin 10px
    display inline-block
    background #fff

.admintest
  display flex
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: #fff
  

</style>
