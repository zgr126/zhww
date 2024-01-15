<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lst from './lst.vue'
import axios from 'axios';
import { ElMessage } from 'element-plus'
let route = useRoute()
let router = useRouter()
console.log(route)
console.log(route.query.searchVal)
let searchVal = ref(route.query.searchVal)
let quikSearchLst = ref([])
// 测试弹框
let detailsItem = ref(null)
let showDetails = e => {
  console.log(e)
  detailsItem.value = e
}
let closeDetails = e => {
  detailsItem.value = null
}
let back = e => {
  router.push({ name: 'home' })
}
let isAdmin = window.isAdmin
let dialogTableVisible = ref(false)
let newTagValue = ref('')
let newTag = async (e) => {
  let v = newTagValue.value
  let result = await axios.post('tags', { tag: v })
  newTagValue.value = ''
  dialogTableVisible.value = false
  ElMessage('添加成功')
  getTags()
}
let getTags = async e => {
  let data = await axios.get('tags')
  quikSearchLst.value = data.data.data
}
getTags()
let dialogDeleteVisible = ref(false)
let deleteTag = async e => {
  console.log(deleteItem.value)
  let data = await axios.delete('tags', { data: deleteItem.value })
  dialogDeleteVisible.value = false
  ElMessage('删除成功')
  getTags()
}
let deleteItem = ref(null)
</script>

<template>
  <div id="navBtn">
    <button class="blackBtn" @click="back">返回</button>
    <button>{{ searchVal }}</button>
  </div>
  <div id="body">
    <div id="quicksearchbar">
      <div v-if="isAdmin" @click="dialogTableVisible = true"><span>+</span></div>
      <div v-for="(item, index) of quikSearchLst">
        <span>{{ item.tag }}</span>
        <button v-if="isAdmin" class="delete" @click="e => { deleteItem = item; dialogDeleteVisible = true }">删除</button>
      </div>
    </div>
    <Lst></Lst>
  </div>
  <el-dialog v-model="dialogDeleteVisible" title="删除标签">
    确定删除?
    <el-button @click="deleteTag">是</el-button>
  </el-dialog>
  <el-dialog v-model="dialogTableVisible" title="添加标签">
    <el-input v-model="newTagValue" placeholder="输入tag" />
    <el-button @click="newTag">提交</el-button>
  </el-dialog>
</template>

<style scoped lang="stylus">
#body 
  position relative
  height: 0;
  flex: auto;
  display: flex;
  flex-direction: column;
  #quicksearchbar
    min-height 4em
    background #D9D9D9
    overflow-x auto
    overflow-y hidden
    white-space: nowrap;
    text-align left
    div
      list-style none
      height 3em
      margin .5em
      display inline-block
      background #fff
      border-radius 5px
      padding 0 10px
      position relative
      color $main_color
      // line-height 3em
      span
        font-size 2em
      // delete
      // button
      //   color #fff
      //   position absolute
      //   top -20px
      //   right -20px
      //   height 30px
      //   width 30px
      //   background red
      //   border-radius 50px

</style>
