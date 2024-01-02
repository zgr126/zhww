<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import upload from './upload.vue'
let route = useRoute()
let router = useRouter()
let wwLst = ref([])
let isAdmin = window.isAdmin
const baseUrl = import.meta.env.APP_BASE_URL
let refrushPage = e => {
  axios.get('goods').then(e => {
    wwLst.value = e.data?.data
  })
}
refrushPage()
console.log(route)
console.log(route.query.searchVal)
let searchVal = ref(route.query.searchVal)
let quikSearchLst = ref([])
// 测试弹框
let detailsItem = ref(null)
let showDetails = e => {
  console.log(e)
  detailsItem.value = e
  detailsTags.value = e.tags || []
  filterAll()
}
let closeDetails = e => {
  detailsItem.value = null
}
let back = e => {
  router.push({ name: 'home' })
}
let getTags = async e => {
  let data = await axios.get('tags')
  quikSearchLst.value = data.data.data
}
getTags()
let uploadOk = e => {
  refrushPage()
}
let detailsTags = ref([])
let removeTag = e => {
  detailsTags.value.splice(e, 1)
  filterAll()
}

let selectTagList = ref([])
let filterAll = e => {

  selectTagList.value = quikSearchLst.value.filter(e => {
    let canfind = detailsTags.value.find(_e => { return _e == e.tag })
    console.log(canfind)
    return !canfind
  })
}
let dialogTableVisible = ref(false)
let setTag = e => {
  detailsTags.value.push(e.tag)
  filterAll()
}
let save = async e => {
  detailsItem.value.tags = detailsTags.value
  let result = await axios.put('goods', detailsItem.value)
  console.log(result)
}
</script>

<template>
  <div id="wwlist">
    <div id="wwBox">
      <upload v-if="isAdmin" @uploadOk="uploadOk"></upload>
      <button v-for="(item, index) of wwLst" @click="showDetails(item)">
        <img :src="`${baseUrl}static/${item.url}`">
      </button>
    </div>
    <div id="details" v-if="detailsItem" @click="closeDetails">
      <img :src="`${baseUrl}static/${detailsItem.url}`" />
      <div class="handle" v-if="isAdmin" @click="$event => {

        $event.stopPropagation()
        $event.preventDefault()
      }">
        <div @click="$event => {
          console.log($event)
          dialogTableVisible = true
        }">+</div>
        <div v-for="(i, index) of detailsTags" :key="index">{{ i }}
          <button @click="removeTag(index)">-</button>
        </div>
        <div @click="save">保存</div>
      </div>
      <div id="handlebar" @click="$event => {
        $event.stopPropagation()
        $event.preventDefault()
      }">
        <img src="/img/share.png" />
        <img src="/img/like.png" />
        <span>{{ detailsItem.name }}</span>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" title="添加标签">
    <el-button v-for="(i, index) of selectTagList" :key="index" @click="setTag(i)">
      {{ i.tag }}
    </el-button>
  </el-dialog>
</template>

<style scoped lang="stylus">
.handle
  display flex
  div
    padding 5px
    margin 5px
    background #fff
    display inline-block
*
  transition all 2s
#wwlist 
  position relative
  overflow auto
  #details
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    z-index 1
    background #00000085
    padding-top 15%
    img
      height 80%
      width 100%
      object-fit contain
    #handlebar
      text-align: left;
      line-height 4em
      img 
        vertical-align: bottom;
        height 4em
        width 4em
        border-radius 15px
        margin 1em
      span
        color #fff
        font-size 3em
  #wwBox
    padding 1.5vw
    overflow auto
    display flex
    flex-wrap wrap
    button
      border-radius 5px
      width 45vw
      height 45vw
      margin 1.5vw
      img
        height 90%
        width 90%
        object-fit cover
        border-radius 5px

</style>
