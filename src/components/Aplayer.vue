<template>
  <aplayer autoplay
  :music="{
    title: '',
    artist: '',
    src: 'sound',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
  />
</template>

<script>
import Vuex from '../store/index.js'
import Aplayer from 'vue-aplayer'
export default {
  name: 'Aplayer',
  data(){
    return{
      sound: Vuex.state.meditationSound + ".mp3",
      }
      
  },

}
</script>

<style>

</style>