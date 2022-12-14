<template>
  <div id="app">
    <div class="typeTitle">choose a duration</div>
    <div class="typeContainer">
      <div class="type"  v-on:click="setDuration(60)">60 sec</div>
      <div class="type"  v-on:click="setDuration(120)">120 sec</div>
      <div class="type"  v-on:click="setDuration(180)">180 sec</div>
      <div class="type"  v-on:click="setDuration(240)">240 sec</div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import Vuex from '../store/index.js'
export default {
    data(){
    return{
      
    }
  },
    methods: {
        setDuration(duration){
        Vuex.state.meditationDuration = duration;
        router.push('/meditation');
        }
    },
}
</script>

<style>

</style>