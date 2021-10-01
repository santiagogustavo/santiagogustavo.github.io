<template>
  <div v-if="$vuetify.breakpoint.smAndDown" class="window-about--mobile">
    <img class="window-about--mobile__avatar" :src="Santiago" />
    <div class="window-about--mobile__info">
      <img class="window-about--mobile__logo" :src="LogoVertical" />
      <div class="window-about--mobile__disclaimer">
        Hi there! 😁
        <br /><br />
        This website is under construction and will feature a complete disclaimer here soon.
        <br /><br />
        Close this window and interact with the links at the desktop to keep in touch. See ya soon...
      </div>
      <v-btn class="window-about--mobile__close" @click="handleClickClose">CLOSE WINDOW</v-btn>
    </div>
  </div>
  <div v-else class="window-about">
    <img class="window-about__avatar" :src="Santiago" />
    <div class="window-about__info">
      <img class="window-about__logo" :src="LogoHorizontal" />
      <div class="window-about__disclaimer">
        Hi there! 😁
        <br /><br />
        This website is under construction and will feature a complete disclaimer here soon.
        <br /><br />
        Interact with the links at the desktop to keep in touch. See ya soon...
      </div>
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
    height: 100%;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }

  &__logo {
    height: 50px;
    width: 400px;
    margin-bottom: 8px;
  }

  &__disclaimer {
    position: relative;
    width: 400px;
    font-family: $font-family-arial;
    font-size: 11px;
    background: white;
    border-radius: 12px;
    padding: 24px;

    &::before {
      content: '';
      position: absolute;
      left: -38px;
      bottom: 52px;
      border: 0 solid;
      display: block;
      width: 38px;
      height: 26px;
      background-color: transparent;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      box-shadow: 21px 9px 0 8px white;
      z-index: -1;
    }
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

  &__disclaimer {
    position: relative;
    font-family: $font-family-arial;
    font-size: 11px;
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin: 16px;
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
