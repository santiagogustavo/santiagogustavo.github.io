<template>
  <v-app class="bios">
    <v-container>
      <header class="bios__header">
        <div class="bios__board-info">
          <img class="bios__board" :src="Award" />
          <div class="bios__info">
            <p>santiagOS</p>
            <p>Copyright (C) 2021, <a href="https://github.com/santiagogustavo" target="_blank">@santiagogustavo</a></p>
          </div>
        </div>
        <img
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'bios__energy--mobile'
              : 'bios__energy'
          "
          :src="EnergyStar"
        />
      </header>
      <div
        :class="
          $vuetify.breakpoint.smAndDown ? 'bios__app--mobile' : 'bios__app'
        "
      >
        {{ app }}
      </div>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
import Award from '@/assets/imgs/award.png';
import EnergyStar from '@/assets/imgs/energystar.png';

export default {
  layout: 'bios',
  data() {
    return {
      Award,
      EnergyStar,
    };
  },
  computed: {
    navigator() {
      return window.navigator;
    },
    app() {
      return `${this.navigator?.appCodeName}/${this.navigator?.appVersion}`;
    },
  },
};
</script>

<style lang="scss">
$screen-background: #121010;

.bios {
  display: block;
  background: black !important;
  animation: turn-on 4s linear forwards;
  color: $color-text-bios !important;
  b, a {
    color: white !important;
    text-decoration: none;
  }

  // flicker
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparentize($screen-background, 0.9);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  &__header {
    font-family: $font-family-ibm;
    display: flex;
    align-items: flex-start;
  }

  &__board-info {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  &__board {
    height: 40px;
  }

  &__info {
    width: 100%;
    margin-left: 12px;
    p {
      line-height: 20px;
      margin-bottom: 0;
    }
  }

  &__energy {
    height: 100px;
    &--mobile {
      height: 80px;
    }
  }

  &__app {
    font-family: $font-family-ibm;
    transform: translateY(-100%);
    padding-right: 108px;
  }
}
</style>
