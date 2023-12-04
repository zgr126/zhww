<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const route = useRouter()
let toList = (str) => {

  console.log(route)
  route.push({ name: 'wwLst', query: { searchVal: str } })
}
let inputV = ref('')
let search = e => {
  let value = inputV.value.trim()
  if (value === '') return
  toList(value)
}
</script>

<template>
  <img src="/img/logo.png" class="logo">
  <div class="body">
    <div>
      <img src="/img/bk.png" />
    </div>
    <div class="mainbtns">
      <input v-model="inputV" />
      <button class="blackBtn" @click="search">搜索</button>
    </div>
    <div class="mainbtns">
      <button class="imgbtn redBtn" @click="toList('热门')">
        <img src="/img/hot.png">
        <p>热门石膏</p>
      </button>
      <button class="imgbtn blackBtn" @click="toList('经典')">
        <img src="/img/mac.png">
        <p>经典石膏</p>
      </button>
    </div>
    <div class="mainbtns">
      <button class="redBtn" @click="toList('mini')">
        <p>mini</p>
        <p>石膏</p>
      </button>
      <button class="blackBtn" @click="toList('特大')">
        <p>特大</p>
        <p>石膏</p>
      </button>
      <button class="blackFont" @click="toList('其他')">
        <p>其他</p>
        <p>石膏</p>
      </button>
    </div>
  </div>
</template>

<style scoped lang="stylus">
$defaultPadding = 5px
.body
  display flex
  flex-direction: column
  margin-bottom: $defaultPadding
  position absolute
  left 0
  bottom 0
  img
    width 100%
  .mainbtns
    margin 0 $defaultPadding
    display flex
    button,input
      border-radius 5px
      border 0
      padding 10px
      background #fff
      margin $defaultPadding
    button
      font-size 2em
      flex 1
      p
        margin 0
    .blackBtn
      background #000
      color #fff
    .redBtn
      color $main_color
    input 
      flex auto
    .imgbtn
      font-size 2.5em
      img
        // height 30vw
        width 40vw


  // background $main_color
.logo 
  position absolute
  left 1em
  top 1em
  height 2em
  width 2em
  display inline-block
  will-change: filter;
  transition: filter 300ms;

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
