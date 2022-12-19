<template>
  <div id="app">
    <component :is="currentComponent" @goToSound="goToSound" @goToDuration="goToDuration" @goToMeditation="goToMeditation"></component>
  </div>
</template>

<script>
import Type from './components/Type.vue'
import Sound from './components/Sound.vue'
import Duration from './components/Duration.vue'
import Meditation from './components/Meditation.vue'
import Home from './components/Home.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Home,
    Type,
    Sound,
    Duration,
    Meditation
  },
  data() {
    return {
      currentComponent: 'type',
    }
  },
  methods: {
    goToType() {
      this.currentComponent = 'type'
    },
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
