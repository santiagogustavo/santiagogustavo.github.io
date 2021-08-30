<template>
  <v-app dark :class="className">
    <section class="desktop__page">
      <Nuxt />
    </section>
    <Taskbar />
  </v-app>
</template>

<script>
import classNames from 'classnames';
import Taskbar from '@/components/Taskbar/Taskbar.vue';

export default {
  components: {
    Taskbar,
  },
  data() {
    return {
      isTurnOff: false,
    };
  },
  computed: {
    className() {
      return classNames('desktop', {
        'desktop--turn-off': this.isTurnOff,
      });
    },
  },
  mounted() {
    this.$nuxt.$on('turnoff', () => {
      this.isTurnOff = true;
      setTimeout(() => window.close(), 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
.desktop {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(static/imgs/bg.png) !important;
  animation: show-up 500ms forwards;

  &--turn-off {
    animation: turn-off 0.55s $ease-out-quint forwards;
  }

  &__page {
    height: 100%;
  }
}
</style>
