<template>
  <div id="aplayer">
    <Aplayer autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: '',
        pic: ''
      }"
    />
  </div>
</template>

<script>
import Vuex from '../store/index.js'
import Aplayer from 'vue-aplayer'
export default {
  name: 'Aplayer',
  components: {
    Aplayer
  },
  data(){
    return{
      sound: Vuex.state.meditationSound + ".mp3",
      }
      
  },

}
</script>

<style>

</style>