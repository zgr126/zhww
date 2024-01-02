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
const List = [
  { label: '列表', router: 'goods' }
]

</script>

<template>
  <div class="tags">
    <div id="routerBar">stag</div>
  </div>
</template>

<style scoped lang="stylus">
#routerBar
  display flex
.tags
  display flex
  flex-flow column
button
  // width 25%
  margin 10px
  display inline-block
</style>
