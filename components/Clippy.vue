<template>
  <img class="clippy" :src="Clippy" />
</template>

<script>
import Clippy from '@/assets/imgs/clippy.gif';

export default {
  name: 'Clippy',
  data() {
    return {
      Clippy,
    };
  },
};
</script>

<style lang="scss">
.clippy {
  pointer-events: none;
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
}
</style>
