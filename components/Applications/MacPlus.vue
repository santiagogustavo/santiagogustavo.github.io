<template>
  <DesktopIcon
    label="macintosh plus"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import MacPlusLogo from '@/assets/imgs/icons/macplus.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'MacPlus',
      component: Windows.MACPLUS,
      icon: MacPlusLogo,
      type: APPLICATION_TYPES.APPLICATION,
      minimizable: true,
      maximizable: false,
    };
  },
};
</script>
