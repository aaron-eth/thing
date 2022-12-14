<template>
  <div id="app">
    <div>choose a duration</div>
    <div>
      <div  v-on:click="setDuration(60)">60 sec</div>
      <div  v-on:click="setDuration(120)">120 sec</div>
      <div  v-on:click="setDuration(180)">180 sec</div>
      <div  v-on:click="setDuration(240)">240 sec</div>
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