<template>
  <img
    v-if="$vuetify.breakpoint.smAndDown"
    class="image-window--mobile"
    :src="url"
  />
  <img v-else class="image-window" :src="url" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.image-window {
  flex: 1;
  object-fit: contain;
  height: 300px;
  max-height: 100%;
  max-width: 100%;

  &--mobile {
    height: 100%;
    width: 100%;
  }
}
</style>
