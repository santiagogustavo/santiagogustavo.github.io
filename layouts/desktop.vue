<template>
  <v-app dark class="desktop">
    <section class="desktop__page">
      <Nuxt />
    </section>
    <Taskbar />
  </v-app>
</template>

<script>
import Taskbar from '@/components/Taskbar/Taskbar.vue';

export default {
  components: {
    Taskbar,
  },
};
</script>

<style lang="scss" scoped>
.desktop {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: none !important;

  &__page {
    height: 100%;
  }
}
</style>
