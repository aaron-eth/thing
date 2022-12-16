<template>
  <div id="sound">
    <div class="typeTitle">choose a sound</div>
    <div class="typeContainer">
      <div class="type" v-on:click="goToDuration('none')">none</div>
      <div class="type" id="fire" v-on:click="goToDuration('fire')">fire</div>
      <div class="type" id="water" v-on:click="goToDuration('water')">water</div>
      <div class="type" id="music" v-on:click="goToDuration('classic')">music</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Vuex from '../store/index.js'
export default {
  computed: {
    ...mapState({
      meditationSound: state => state.meditationSound
    })
  },
  methods: {
    ...mapActions([
      'setMeditationSound'
    ]),
    goToDuration(type) {
      this.setMeditationSound(type)
      this.$emit('goToDuration')
    }
    },
  created() {
    document.body.style.background = "black"; 
  },
}
</script>

<style scoped>
.type {
  margin-bottom: 50%;
}
#fire{
  background-color: #ff6666;
  color: #ffff66;
}

#water{
  background-color: #668cff;
  color: floralwhite;
}

#music{
  background-color: #ff66ff;
  color: floralwhite;
}

</style>