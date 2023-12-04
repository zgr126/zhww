<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
let route = useRoute()
let router = useRouter()
let wwLst = ref([
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
  { id: 0, name: '史迪仔', url: '/img/itembk.png' },
])
console.log(route)
console.log(route.query.searchVal)
let searchVal = ref(route.query.searchVal || wwLst.value[0].name)
let quikSearchLst = ref(['史迪仔', '库洛米', '皮卡丘', '史迪仔', '库洛米', '皮卡丘'])
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
</script>

<template>
  <div id="wwlist">
    <div id="wwBox">
      <button v-for="(item, index) of wwLst" @click="showDetails(item)">
        <img :src="item.url">
      </button>
    </div>
    <div id="details" v-if="detailsItem" @click="closeDetails">
      <img :src="detailsItem.url" />
      <div id="handlebar">
        <img src="/img/share.png" />
        <img src="/img/like.png" />
        <span>{{ detailsItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
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
