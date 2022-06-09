<template>
  <section :class="className">
    <v-btn
      icon
      small
      class="file-navbar__back"
      color="black"
      @click.stop="handleClickBack"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="file-navbar__url">
      <img class="file-navbar__icon" :src="FolderClosed" />
      {{ url }}
    </div>
  </section>
</template>

<script>
import classNames from 'classnames';

import FolderClosed from '@/assets/imgs/icons/folder_small_closed.png';

export default {
  name: 'FileNavbar',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      FolderClosed,
    };
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    className() {
      return classNames('file-navbar', {
        'file-navbar--mobile': !!this.smAndDown,
      });
    },
  },
  methods: {
    handleClickBack() {
      this.$emit('back');
    },
  },
};
</script>

<style lang="scss">
.file-navbar {
  $p: &;

  display: flex;
  align-items: center;
  background: $color-taskbar-background;
  border-top: 2px $color-taskbar-border-light solid;
  border-left: 2px $color-taskbar-border-light solid;
  border-right: 2px $color-taskbar-border-dark solid;
  border-bottom: 2px $color-taskbar-border-dark solid;
  width: 100%;
  padding: 2px 4px;

  &--mobile {
    #{$p}__back {
      min-height: 32px;
      min-width: 32px;
      max-height: 32px;
      max-width: 32px;
    }
  }

  &__back {
    flex: 0;
    cursor: pointer;
    border-radius: 0;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    min-width: 24px;
    max-height: 24px;
    max-width: 24px;
    border-top: 2px $color-taskbar-border-light solid;
    border-left: 2px $color-taskbar-border-light solid;
    border-right: 2px $color-taskbar-border-dark solid;
    border-bottom: 2px $color-taskbar-border-dark solid;
    font-family: $font-family-reactor;
    font-size: 24px;

    &:active {
      background: $color-taskbar-inset-background;
      border-top: 2px $color-taskbar-border-regular solid;
      border-left: 2px $color-taskbar-border-regular solid;
      border-right: 2px $color-taskbar-border-light solid;
      border-bottom: 2px $color-taskbar-border-light solid;
    }
  }

  &__icon {
    height: 16px;
    margin-right: 4px;
  }

  &__url {
    flex: 1;
    display: flex;
    align-items: center;
    background: $color-white;
    padding: 2px 4px;
    margin: 0 8px;
    border: 1px solid black;
    color: $color-text;
    font-family: $font-family-arial;
    font-size: 11px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
