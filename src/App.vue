<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <component v-bind:is="currentComponent" v-on:goToSound="goToSound" v-on:goToDuration="goToDuration" v-on:goToMeditation="goToMeditation"></component> 
  </div>
</template>

<script>
import Type from './components/Type.vue'
import Sound from './components/Sound.vue'
import Duration from './components/Duration.vue'
import Meditation from './components/Meditation.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      currentComponent: 'type'
    }
  },
  components: {
    Type,
    Sound,
    Duration,
    Meditation
  },
  methods: {
    goToSound() {
      this.currentComponent = 'sound'
    },
    goToDuration() {
      this.currentComponent = 'duration'
    },
    goToMeditation(){
      this.currentComponent = 'meditation'
    }
  }
}
</script>

<style>
body{
  background-color: black;
  transition-duration: 900ms;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: floralwhite;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
