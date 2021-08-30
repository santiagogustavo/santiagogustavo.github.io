<template>
  <DesktopIcon
    label="Turn off computer"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Shutdown from '@/assets/imgs/icons/shutdown.png';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Turn off computer',
      component: Windows.SHUTDOWN,
      icon: Shutdown,
      minimizable: false,
      maximizable: false,
      modal: true,
    };
  },
};
</script>
