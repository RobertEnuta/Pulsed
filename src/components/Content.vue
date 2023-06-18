<script lang="ts">
export default {
  name: 'Play',
  props: {
    song: String,
    url: String
  },
  methods: {
    clickSong(song: string) {
      const audio = new Audio(song)
      audio.play()
    }
  }
}
</script>

<template>
  <button>
    <img class="rounded-lg" src="{{url}}" />
  </button>
  <div>{{ song }} {{ url }}</div>
</template>

<style scoped></style>
