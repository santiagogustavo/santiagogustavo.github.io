<template>
  <div :class="className">
    <iframe src="https://santiagogustavo.github.io/tetris/" />
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'WindowTetris',
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    className() {
      return classNames('window-tetris', {
        'window-tetris--mobile': !!this.smAndDown,
      });
    },
  },
};
</script>

<style lang="scss">
.window-tetris {
  width: 100%;
  background: #3e3e3e;
  display: flex;
  align-items: center;
  iframe {
    display: block;
    width: 320px;
    height: 696px;
    margin: auto;
    border: none;
  }

  &--mobile {
    height: $window-content-height-mobile;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
