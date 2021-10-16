<template>
  <div :class="className">
    <About />
    <Mail />
    <Instagram />
    <LinkedIn />
    <GitHub />
    <LeetCode />
    <LastFm />
    <Discogs />
    <Shutdown />
  </div>
</template>

<script>
import classNames from 'classnames';

import About from '@/components/Applications/About.vue';
import Shutdown from '@/components/Applications/Shutdown.vue';
import Instagram from '@/components/Applications/Instagram.vue';
import LinkedIn from '@/components/Applications/LinkedIn.vue';
import GitHub from '@/components/Applications/GitHub.vue';
import LeetCode from '@/components/Applications/LeetCode.vue';
import LastFm from '@/components/Applications/LastFm.vue';
import Mail from '@/components/Applications/Mail.vue';
import Discogs from '@/components/Applications/Discogs.vue';

export default {
  name: 'DesktopManager',
  components: {
    About,
    Shutdown,
    Instagram,
    LinkedIn,
    GitHub,
    LeetCode,
    LastFm,
    Mail,
    Discogs,
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

