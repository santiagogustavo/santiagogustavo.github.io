<template>
  <div :class="className">
    <About />
    <Blob />
    <Instagram />
    <Shutdown />
  </div>
</template>

<script>
import classNames from 'classnames';

import About from '@/components/Applications/About.vue';
import Blob from '@/components/Applications/Blob.vue';
import Shutdown from '@/components/Applications/Shutdown.vue';
import Instagram from '@/components/Applications/Instagram.vue';

export default {
  name: 'DesktopManager',
  components: {
    About,
    Blob,
    Shutdown,
    Instagram,
  },
  computed: {
    className() {
      return classNames('desktop-manager', {
        'desktop-manager-mobile': this.$vuetify.breakpoint.smAndDown,
      });
    },
  },
};
</script>

<style lang="scss">
.desktop-manager {
  min-height: $desktop-manager-height;
  max-height: $desktop-manager-height;
  width: 100%;
  padding: $desktop-manager-padding;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  columns: $desktop-icon-size;

  & > * {
    flex: 0 0 $desktop-icon-size;
    margin: calc(#{$desktop-manager-padding} / 2);
  }
}

.desktop-manager-mobile {
  min-height: $desktop-manager-height-mobile;
  max-height: $desktop-manager-height-mobile;
}
</style>

