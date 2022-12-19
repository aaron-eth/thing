<template>
  <div class="aplayer">
    <aplayer
        :music="{
          title: music.title,
          artist: music.artist,
          src: music.title,
          pic: music.pic
        }"
      />
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  props: {
    music: {
    title: String,
    artist: String,
    src: String,
    pic: String
    }
  }
}
</script>

<style>
.info {
  margin-left: 16px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.artist {
  font-size: 14px;
  color: #666;
}
</style>