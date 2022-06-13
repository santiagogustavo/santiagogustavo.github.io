<template>
  <div :class="className">
    <DesktopIcon
      v-for="file in DesktopFiles"
      :key="file.name"
      v-bind="file"
      :label="file.label || file.name"
      @open="handleOpenApplication(file)"
    />

    <Clippy />
  </div>
</template>

<script>
import classNames from 'classnames';

import DesktopIcon from '@/components/DesktopIcon.vue';
import DesktopFiles from '@/data/filesystem/Desktop';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'DesktopManager',
  components: {
    DesktopIcon,
  },
  mixins: [ApplicationMixin],
  data() {
    return {
      DesktopFiles,
    };
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
  position: relative;
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
