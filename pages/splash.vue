<template>
  <section class="splash">
    <div class="splash__screen">
      <img  v-if="$vuetify.breakpoint.smAndDown" class="splash__screen__binbows--mobile" :src="Binbows" />
      <img  v-else class="splash__screen__binbows" :src="Binbows" />
    </div>
    <div class="splash__progress" />
  </section>
</template>

<script>
import Binbows from '@/assets/imgs/binbows.png';

export default {
  name: 'Splash',
  layout: 'default',
  data() {
    return {
      Binbows,
      routeTimeout: undefined,
    };
  },
  beforeDestroy() {
    clearTimeout(this.routeTimeout);
  },
  created() {
    this.routeTimeout = setTimeout(() => this.$router.replace('/desktop'), 5000);
  }
};
</script>

<style lang="scss">
@keyframes progress-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

.splash {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: black;
  padding: 16px;
  animation: show-up 500ms forwards;

  &__screen {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-secondary;

    &__binbows {
      display: block;
      max-height: 150px;

      &--mobile {
        display: block;
        width: 200px;
      }
    }
  }

  &__progress {
    position: relative;
    height: 32px;
    background: $color-tertiary;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 32px;
      width: 70%;
      background: linear-gradient(90deg, rgba(0,0,0,0) 0%, $color-tertiary-dark 50%, rgba(0,0,0,0) 100%);
      animation: progress-bar 3s linear infinite;
    }
  }
}
</style>
