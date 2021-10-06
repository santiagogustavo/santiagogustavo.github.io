<template>
  <div class="lastfm-track">
    <img class="lastfm-track__thumb" :src="thumbnail" />
    <section class="lastfm-track__info">
      <b>{{name}}</b>
      <span>{{artist}}</span>
    </section>
    <section v-if="nowPlaying" class="lastfm-track__nowplaying">
      <v-icon x-small>mdi-poll</v-icon>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LastFmTrack',
  props: {
    name: {
      type: String,
      default: undefined,
    },
    artist: {
      type: String,
      default: undefined,
    },
    thumbnail: {
      type: String,
      default: undefined,
    },
    nowPlaying: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang="scss">
.lastfm-track {
  display: flex;
  align-items: center;

  &__thumb {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    overflow: hidden;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin: 0 12px;
    min-width: 200px;
    max-width: 200px;

    b, span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    b {
      font-size: 12px;
    }
    span {
      font-size: 10px;
    }
  }
}
</style>