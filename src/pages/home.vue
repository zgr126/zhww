<script setup>

</script>

<template>
  <img src="/img/logo.png" class="logo">
  <div class="body">
    <div>
      <img src="/img/bk.png" />
    </div>
    <div class="mainbtns">
      <input v-model="inputV" />
      <button class="blackBtn">搜索</button>
    </div>
    <div  class="mainbtns">
      <button class="imgbtn redBtn">
        <img src="/img/hot.png">
        <p>热门石膏</p>
      </button>
      <button class="imgbtn blackBtn">
        <img src="/img/mac.png">
        <p>经典石膏</p>
      </button>
    </div>
    <div  class="mainbtns">
      <button class="redBtn">
        <p>mini</p>
        <p>石膏</p>
      </button>
      <button class="blackBtn">
        <p>特大</p>
        <p>石膏</p>
      </button>
      <button>
        <p>其他</p>
        <p>石膏</p>
      </button>
    </div>
  </div>
  
</template>

<style scoped lang="stylus">
$defaultPadding = 5px
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
.body
  display flex
  flex-direction: column
  margin-bottom: $defaultPadding
img
  width 100%
  background $main_color
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
