<script setup>
import axios from 'axios'
import upload from './upload.vue'
const testHomeGet = (e) => {
  axios.get('').then(e => {
    console.log(e)
  })
}
const testListGet = (e) => {
  axios.get('goods').then(e => {
    console.log(e)
  })
}
const testListPost = e => {
  axios.post('goods', {
    a: 'b'
  }).then(e => {
    console.log(e)
  })
}
const testsomePost = (e) => {
  axios.get('testsomePost').then(e => {
    console.log(e)
  })
}


</script>

<template>
  <div class="admintest">
    <button @click="testHomeGet">测试/get查询</button>
    <button @click="testListGet">测试列表get查询</button>
    <button @click="testListPost">测试列表post查询</button>
    <button @click="testsomePost">测试随意get查询</button>
  </div>
  <upload></upload>
</template>

<style scoped lang="stylus">
.admintest
  display flex
button
  // width 25%
  margin 10px
  display inline-block
</style>
