<template>
  <div v-if="isLoading">Loading</div>
  <div v-else class="recent-tracks">
    <Track
      v-for="track in recentTracks"
      :key="track.listenedAt"
      class="recent-tracks__track"
      :name="track.name"
      :artist="track.artist"
      :thumbnail="track.thumbnail"
      :now-playing="track.nowPlaying"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Track from '@/components/LastFm/Track.vue';

export default {
  name: 'LastFM',
  components: {
    Track,
  },
  computed: {
    ...mapGetters({
      isLoading: 'lastFm/getIsLoading',
      recentTracks: 'lastFm/getRecentTracks',
    }),
  },
  created() {
    this.fetchRecentTracks();
  },
  methods: {
    ...mapActions({
      fetchRecentTracks: 'lastFm/fetchRecentTracks',
    }),
  },
};
</script>

<style lang="scss">
.recent-tracks {
  &__track {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
