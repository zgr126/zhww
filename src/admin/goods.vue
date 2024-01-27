<script setup>
import axios from 'axios'
import upload from './upload.vue'
import { ref } from 'vue'
import { formatDate } from '../utils/common'
let tableData = ref([])
const testHomeGet = (e) => {
  axios.get('/').then(e => {
    console.log(e)
  })
}
const testListGet = (e) => {
  axios.get('/goods').then(e => {
    let data = e.data.data
    data.map(e => { e.createTime = formatDate(e.createTime) })
    tableData.value = data

    console.log(tableData.value)
  })
}
testListGet()
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
  { label: '列表', router: 'goods' }
]
const columns = [
  { title: 'no', key: 'id' }
]
</script>

<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="createTime" label="操作日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="原始文件名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>
</template>

<style scoped lang="stylus">
#routerBar
  display flex
.admintest
  display flex
button
  // width 25%
  margin 10px
  display inline-block
</style>
