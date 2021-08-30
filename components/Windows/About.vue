<template>
  <div v-if="$vuetify.breakpoint.smAndDown" class="window-about--mobile">
    <img class="window-about--mobile__avatar" :src="Santiago" />
    <div class="window-about--mobile__info">
      <img class="window-about--mobile__logo" :src="LogoVertical" />
      <a class="window-about--mobile__link" href="https://about.me/santiagogustavo">about.me<b>/santiagogustavo</b></a>
      <v-btn class="window-about--mobile__close" @click="handleClickClose">CLOSE WINDOW</v-btn>
    </div>
  </div>
  <div v-else class="window-about">
    <img class="window-about__avatar" :src="Santiago" />
    <div class="window-about__info">
      <img class="window-about__logo" :src="LogoHorizontal" />
      <a class="window-about__link" href="https://about.me/santiagogustavo">about.me<b>/santiagogustavo</b></a>
    </div>
  </div>
</template>

<script>
import WindowMixin from '@/mixins/window';

import Santiago from '@/assets/imgs/icons/santiago.png';
import LogoVertical from '@/assets/imgs/logo-vertical.png';
import LogoHorizontal from '@/assets/imgs/logo-horizontal.png';

export default {
  name: 'WindowAbout',
  mixins: [WindowMixin],
  data() {
    return {
      Santiago,
      LogoVertical,
      LogoHorizontal,
    };
  },
};
</script>

<style lang="scss">
.window-about {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex: 1;
  width: 100%;
  height: 100%;

  &__avatar {
    display: block;
    height: 140px;
    width: 150px;
  }

  &__info {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  &__logo {
    height: 50px;
    width: 400px;
  }

  &__link {
    color: $color-secondary !important;
    font-family: $font-family-ibm;
    text-align: center;
    text-decoration: none;
    font-size: 26px;
  }
}

.window-about--mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  font-family: $font-family-ibm;

  &__avatar {
    width: 175px;
  }

  &__info {
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__logo {
    width: 250px;
  }

  &__link {
    margin-top: 8px;
    color: $color-secondary !important;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
  }

  &__close {
    margin-top: 32px;
  }
}
</style>
