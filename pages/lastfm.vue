<template>
  <div v-if="isLoading">
    Loading
  </div>
  <div v-else>
    <div v-for="track in recentTracks" :key="track.listenedAt">
      <img :src="track.thumbnail" />
      <h3>{{track.name}}</h3>
      <p>{{track.artist}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LastFM',
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
