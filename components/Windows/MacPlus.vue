<template>
  <div :class="className">
    <iframe src="https://santiagogustavo.github.io/macintosh-plus-vue/" />
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'WindowMacPlus',
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    className() {
      return classNames('window-macplus', {
        'window-macplus--mobile': !!this.smAndDown,
      });
    },
  },
};
</script>

<style lang="scss">
.window-macplus {
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  iframe {
    display: block;
    width: 400px;
    height: 400px;
    margin: auto;
    border: none;
  }

  &--mobile {
    height: calc(#{$window-height-mobile} - #{$window-header-name-size-mobile});
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
