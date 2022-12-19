<template>
  <div class="aplayer">
    <audio :src="music.src" controls></audio>
    <div class="info">
      <div class="title">{{ music.title }}</div>
      <div class="artist">{{ music.artist }}</div>
    </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  props: {
    music: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.aplayer {
  display: flex;
  align-items: center;
}

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