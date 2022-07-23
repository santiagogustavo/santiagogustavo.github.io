<template>
  <div class="rating">
    <v-icon v-for="count in full" :key="`star-full-${count}`">
      mdi-star
    </v-icon>
    <v-icon v-for="count in half" :key="`star-half-${count}`">
      mdi-star-half-full
    </v-icon>
    <v-icon v-for="count in outline" :key="`star-outline-${count}`">
      mdi-star-outline
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    full() {
      return Math.floor(this.value);
    },
    half() {
      return Math.ceil(this.value % 1);
    },
    outline() {
      return 5 - this.full - this.half;
    },
  },
};
</script>

<style lang="scss">
.rating {
  display: flex;
  align-items: center;
  i {
    flex: 0;
  }
}
</style>
