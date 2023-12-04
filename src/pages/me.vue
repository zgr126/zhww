<script setup>
import Lst from './lst.vue'
</script>

<template>
  <div id="top">
    <div class="imgBox">
      <img src="/img/logobig.png">
    </div>
    <div class="name">
      <span>预防选</span>
    </div>
  </div>
  <div class="sou">
    <span>我的收藏</span>
    <img src="/img/like.png" />
  </div>
  <div id="wws">
    <Lst></Lst>
  </div>
</template>

<style lang="stylus" scoped>
.wws
  height 0
  flex auto
  overflow auto
.sou
  height 5em
  background #fff
  color $main_color
  line-height 5em
  .name

  span
    font-size 4em
    vertical-align middle
  img
    height 4em
    vertical-align middle
    margin-left 1em
    border-radius 15px
#top
  height 10em
  background #000
  // line-height 10em
  padding 1em
  color #fff
  display flex
  .name
    line-height 8em
    padding-left 2em
    span
      font-size 2.5em
      vertical-align middle
  .imgBox
    height 8em
    width 8em
    // vertical-align middle
    border-radius 10px
    // display inline-block
    padding .5em
    background #E30000
    img
      height 100%
      width 100%
</style>
