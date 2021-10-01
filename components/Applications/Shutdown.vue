<template>
  <DesktopIcon
    label="Turn off computer"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Shutdown from '@/assets/imgs/icons/shutdown.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationShutdown',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Turn off computer',
      component: Windows.SHUTDOWN,
      icon: Shutdown,
      type: APPLICATION_TYPES.APPLICATION,
      minimizable: false,
      maximizable: false,
      modal: true,
    };
  },
};
</script>
