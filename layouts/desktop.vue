<template>
  <v-app dark :class="className">
    <div :class="modalClassName" />
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
      modal: false,
    };
  },
  computed: {
    className() {
      return classNames('desktop', {
        'desktop--turn-off': this.isTurnOff,
      });
    },
    modalClassName() {
      return classNames('desktop__modal-overlay', {
        'desktop__modal-overlay--visible': this.modal,
      });
    },
  },
  mounted() {
    this.$nuxt.$on('turnoff', () => {
      this.isTurnOff = true;
      setTimeout(() => window.close(), 1000);
    });
    this.$nuxt.$on('modal', value => {
      this.modal = value;
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

  &--turn-off {
    animation: turn-off 0.55s $ease-out-quint forwards;
  }

  &__modal-overlay {
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 250ms ease;
    z-index: $z-index-window-active;

    &--visible {
      pointer-events: initial;
      opacity: 1;
    }
  }

  &__page {
    height: 100%;
  }
}
</style>
