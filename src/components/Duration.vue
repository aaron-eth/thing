<template>
  <div id="duration">
    <div class="typeTitle">choose a duration</div>
    <div class="typeContainer">
      <div class="type"  v-on:click="goToMeditation(10)">10 sec</div>
      <div class="type"  v-on:click="goToMeditation(120)">120 sec</div>
      <div class="type"  v-on:click="goToMeditation(180)">180 sec</div>
      <div class="type"  v-on:click="goToMeditation(240)">240 sec</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Vuex from '../store/index.js'
export default {
  computed: {
    ...mapState({
      meditationDuration: state => state.meditationDuration
    })
  },
  methods: {
    ...mapActions([
      'setMeditationDuration'
    ]),
    goToMeditation(duration) {
      this.setMeditationDuration(duration)
      this.$emit('goToMeditation')
    }
    },
  created() {
    document.body.style.background = "black"; 
  },
}
</script>

<style>
.typeTitle{
  font-size: 46px;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 4%;
}

.typeContainer{
  width: fit-content;
  margin: auto;
  margin-top: 4%;
}
.type{
  margin-bottom: 70%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  border: 2px floralwhite solid;
  padding: 15px;
  border-radius: 11px;
  transition-duration: 450ms;
}
.type:hover{
  color: black;
  background-color: floralwhite;
  transform: scale(0.87);
  cursor: pointer;
}
</style>